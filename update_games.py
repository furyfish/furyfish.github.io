#!/usr/bin/env python3
import json
import re
import urllib.request
import sys
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch_app_data(url):
    # Extract ID from url
    m = re.search(r'id(\d+)', url)
    if not m:
        return None
    app_id = m.group(1)
    
    # 1. Fetch iTunes Lookup API
    lookup_url = f"https://itunes.apple.com/lookup?id={app_id}&country=vn"
    try:
        req = urllib.request.Request(lookup_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data['resultCount'] == 0:
                print(f"Warning: No API result for {app_id}")
                return None
            app_data = data['results'][0]
    except Exception as e:
        print(f"Error fetching API for {app_id}: {e}")
        return None
        
    # 2. Extract fields
    result = {
        "id": app_id,
        "name": app_data.get('trackName', ''),
        "genres": app_data.get('genres', []),
        "price": app_data.get('price', 0.0),
        "image": app_data.get('artworkUrl512', ''),
        "url": url,
        "subtitle": ""
    }
    
    # 3. Scrape subtitle from the App Store page HTML
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            
            # Try to find subtitle in the shoebox data or meta tags
            # Apple often has it in <h2 class="app-header__subtitle">...</h2>
            # Or in JSON blob: "subtitle":"My Subtitle"
            
            # Lấy subtitle hiển thị ngay dưới h1 Name
            sub_match = re.search(r"<h1[^>]*>\s*" + re.escape(result['name']) + r"\s*<\/h1>\s*<h2 class=\"subtitle[^>]*>(.*?)<\/h2>", html, re.IGNORECASE)
            if sub_match:
                result['subtitle'] = sub_match.group(1).strip()
            else:
                # Fallback to the first sentence of the description
                desc = app_data.get('description', '')
                first_sentence = desc.split('\n')[0]
                result['subtitle'] = first_sentence.strip()
                    
    except Exception as e:
        print(f"Warning: Could not fetch HTML for {app_id} to get subtitle: {e}")
        # Fallback to description
        desc = app_data.get('description', '')
        result['subtitle'] = desc.split('\n')[0][:100].strip()

    # Clean up HTML entities in subtitle just in case
    result['subtitle'] = result['subtitle'].replace('&amp;', '&').replace('&#39;', "'").replace('&quot;', '"')
    
    return result

def main():
    try:
        with open('games.json', 'r', encoding='utf-8') as f:
            games = json.load(f)
    except FileNotFoundError:
        print("games.json not found!")
        sys.exit(1)
        
    updated_games = []
    
    for game in games:
        print(f"Updating data for: {game.get('name')} ...")
        new_data = fetch_app_data(game['url'])
        if new_data:
            updated_games.append(new_data)
            print(f"  -> Success: {new_data['name']}")
        else:
            print(f"  -> Failed to fetch info. Keeping original data.")
            updated_games.append(game)
            
    with open('games.json', 'w', encoding='utf-8') as f:
        json.dump(updated_games, f, indent=4, ensure_ascii=False)
        
    print("Done! games.json has been updated.")

if __name__ == '__main__':
    main()
