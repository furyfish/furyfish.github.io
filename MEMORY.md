# Dự án: furyfish-studio
 
## 📅 Cập nhật mới nhất: 31/03/2026
 
### 🎮 Games
- Thêm game mới: **Emo Kat** (App ID: 6758240079).
- Tích hợp hình ảnh minh họa cho game:
  - `assets/ant_smash.png` (Ant Smash: Bug Smasher)
  - `assets/emo_kat.png` (Emo Kat)
 
### 🎨 UI/UX Enhancements
- Nâng cấp **Game Cards** trên trang chủ:
  - Hiển thị hình ảnh minh họa thay vì chỉ text.
  - Hiệu ứng **Hover Zoom** cho hình ảnh.
  - Thiết kế **Glassmorphism** (mềm mại, bo góc 28px).
  - Animation `fadeInUp` được tinh chỉnh.
 
### 🛠️ Cấu trúc hệ thống
- Tạo thư mục `assets/` để lưu trữ tài nguyên hình ảnh.
- Viết script `update_games.py` để tự động kéo dữ liệu (icon, thể loại, subtitle, giá, tên) từ **App Store API** & **HTML**.
- Cập nhật `games.json` schema: thêm các trường `id`, `genres`, `price`, `subtitle`, và đường dẫn ảnh trực tiếp từ Apple.
- Cập nhật `main.js`: render HTML mới hiển thị đầy đủ thông tin metadata của game.
- Cập nhật `styles.css`: Thêm các class styling xịn xò cho thông tin game (`.game-header`, `.game-genres`, `.game-subtitle`, v.v.).
- Cập nhật `privacy.html`: Bao gồm thông tin về Camera/Face Tracking cho Emo Kat.
 
---
*Cập nhật bởi Antigravity AI.*
