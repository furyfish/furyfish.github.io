// ============================================
// 🌐 MULTI-LANGUAGE SUPPORT
// ============================================

const translations = {
    en: {
        // Navigation
        navGames: "Games",
        navAbout: "About",
        navContact: "Contact",
        navPrivacy: "Privacy",

        // Header
        tagline: "We create games with <span class=\"tagline-highlight\">unique art style</span>, bringing fun and heartfelt experiences 🎨✨",

        // Games Section
        gamesTitle: "🎮 Our Games",
        downloadBtn: "App Store",

        // About Section
        aboutTitle: "✨ About Us",
        aboutDescription: "At <strong>Furyfish Studio</strong>, we believe games are not just entertainment, but also works of art. We carefully craft every detail to create dreamy and colorful worlds full of emotion.",
        feature1Title: "Unique Art Style",
        feature1Desc: "Every character and scene is crafted with creativity and passion.",
        feature2Title: "Relaxing Music",
        feature2Desc: "Gentle piano melodies that heal the player's soul.",
        feature3Title: "Meaningful Stories",
        feature3Desc: "Small stories carrying positive messages about life.",

        // Contact Section
        contactTitle: "📬 Contact",
        contactDescription: "Want to collaborate or just say \"Hello\"? Get in touch with us!",
        emailBtn: "Email Us",

        // Footer
        footerText: "© 2026 Furyfish Studio. Made with ❤️ and creativity."
    },
    vi: {
        // Navigation
        navGames: "Games",
        navAbout: "Về Studio",
        navContact: "Liên Hệ",
        navPrivacy: "Quyền Riêng Tư",

        // Header
        tagline: "Chúng tôi tạo ra những tựa game với <span class=\"tagline-highlight\">phong cách nghệ thuật độc đáo</span>, mang đến trải nghiệm vui vẻ và đầy cảm xúc 🎨✨",

        // Games Section
        gamesTitle: "🎮 Các Tựa Game",
        downloadBtn: "App Store",

        // About Section
        aboutTitle: "✨ Về Chúng Tôi",
        aboutDescription: "Tại <strong>Furyfish Studio</strong>, chúng tôi tin rằng game không chỉ là giải trí, mà còn là một tác phẩm nghệ thuật. Chúng tôi chau chuốt từng chi tiết để tạo nên những thế giới mộng mơ và đầy màu sắc.",
        feature1Title: "Nghệ Thuật Độc Đáo",
        feature1Desc: "Mỗi nhân vật, cảnh vật đều được sáng tạo đầy tâm huyết.",
        feature2Title: "Âm Nhạc Thư Giãn",
        feature2Desc: "Giai điệu piano nhẹ nhàng, chữa lành tâm hồn người chơi.",
        feature3Title: "Cốt Truyện Sâu Sắc",
        feature3Desc: "Những câu chuyện nhỏ mang thông điệp tích cực về cuộc sống.",

        // Contact Section
        contactTitle: "📬 Liên Hệ",
        contactDescription: "Bạn muốn hợp tác hoặc chỉ đơn giản là muốn nói \"Xin chào\"? Hãy liên hệ với chúng tôi!",
        emailBtn: "Email",

        // Footer
        footerText: "© 2026 Furyfish Studio. Made with ❤️ and creativity."
    },
    zh: {
        // Navigation
        navGames: "游戏",
        navAbout: "关于我们",
        navContact: "联系",
        navPrivacy: "隐私政策",

        // Header
        tagline: "我们用<span class=\"tagline-highlight\">独特的艺术风格</span>创作游戏，带来有趣而真挚的体验 🎨✨",

        // Games Section
        gamesTitle: "🎮 我们的游戏",
        downloadBtn: "App Store",

        // About Section
        aboutTitle: "✨ 关于我们",
        aboutDescription: "<strong>Furyfish Studio</strong> 相信游戏不仅仅是娱乐，更是艺术品。我们精心打磨每一个细节，创造出梦幻而多彩的世界。",
        feature1Title: "独特的艺术风格",
        feature1Desc: "每个角色和场景都充满创意和激情。",
        feature2Title: "放松音乐",
        feature2Desc: "轻柔的钢琴旋律，治愈玩家的心灵。",
        feature3Title: "有意义的故事",
        feature3Desc: "小故事承载着关于生活的积极信息。",

        // Contact Section
        contactTitle: "📬 联系我们",
        contactDescription: "想要合作或只是打个招呼？联系我们吧！",
        emailBtn: "发送邮件",

        // Footer
        footerText: "© 2026 Furyfish Studio. 用 ❤️ 和创意制作。"
    }
};

// Current language
let currentLang = 'en';

// Get saved language from localStorage
function getSavedLanguage() {
    return localStorage.getItem('furyfishLang') || 'en';
}

// Save language to localStorage
function saveLanguage(lang) {
    localStorage.setItem('furyfishLang', lang);
}

// Update page content based on selected language
function updateContent(lang) {
    currentLang = lang;
    saveLanguage(lang);

    const t = translations[lang];

    // Update navigation
    document.querySelector('[data-i18n="navGames"]').textContent = t.navGames;
    document.querySelector('[data-i18n="navAbout"]').textContent = t.navAbout;
    document.querySelector('[data-i18n="navContact"]').textContent = t.navContact;
    document.querySelector('[data-i18n="navPrivacy"]').textContent = t.navPrivacy;

    // Update header
    document.querySelector('[data-i18n="tagline"]').innerHTML = t.tagline;

    // Update games section
    document.querySelector('[data-i18n="gamesTitle"]').textContent = t.gamesTitle;

    // Update about section
    document.querySelector('[data-i18n="aboutTitle"]').textContent = t.aboutTitle;
    document.querySelector('[data-i18n="aboutDescription"]').innerHTML = t.aboutDescription;
    document.querySelector('[data-i18n="feature1Title"]').textContent = t.feature1Title;
    document.querySelector('[data-i18n="feature1Desc"]').textContent = t.feature1Desc;
    document.querySelector('[data-i18n="feature2Title"]').textContent = t.feature2Title;
    document.querySelector('[data-i18n="feature2Desc"]').textContent = t.feature2Desc;
    document.querySelector('[data-i18n="feature3Title"]').textContent = t.feature3Title;
    document.querySelector('[data-i18n="feature3Desc"]').textContent = t.feature3Desc;

    // Update contact section
    document.querySelector('[data-i18n="contactTitle"]').textContent = t.contactTitle;
    document.querySelector('[data-i18n="contactDescription"]').textContent = t.contactDescription;
    document.querySelector('[data-i18n="emailBtn"]').textContent = t.emailBtn;

    // Update footer
    document.querySelector('[data-i18n="footerText"]').textContent = t.footerText;

    // Update download buttons
    document.querySelectorAll('[data-i18n="downloadBtn"]').forEach(btn => {
        // Keep the SVG, just update the text
        const svg = btn.querySelector('svg').outerHTML;
        btn.innerHTML = svg + ' ' + t.downloadBtn;
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Switch language
function switchLanguage(lang) {
    updateContent(lang);
}

// ============================================
// 🎮 LOAD GAMES FROM JSON
// ============================================

// Fallback games data (used when fetch fails due to CORS on file://)
const fallbackGames = [
    {
        "id": "6758212034",
        "name": "Ant Smash: Bug Smasher",
        "genres": [
            "Games",
            "Action"
        ],
        "price": 0.0,
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9a/d0/02/9ad002b1-145c-089e-9bbc-0dbfe3148b5b/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
        "url": "https://apps.apple.com/vn/app/ant-smash-bug-smasher/id6758212034",
        "subtitle": "Fun tapping game"
    },
    {
        "id": "6758240079",
        "name": "Emo Kat",
        "genres": [
            "Games",
            "Family",
            "Simulation"
        ],
        "price": 0.0,
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/25/84/8a/25848a50-9cd1-f952-65d7-42bc911380c5/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
        "url": "https://apps.apple.com/vn/app/emo-kat/id6758240079",
        "subtitle": "Smile, Talk & Play with Cat"
    }
];

async function loadGames() {
    try {
        const response = await fetch('games.json');
        if (!response.ok) throw new Error('Failed to fetch');
        const games = await response.json();
        renderGames(games);
    } catch (error) {
        console.warn('Using fallback games data:', error.message);
        renderGames(fallbackGames);
    }
}

function renderGames(games) {
    const container = document.getElementById('games-container');
    const t = translations[currentLang];

    if (games.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">Coming soon...</p>';
        return;
    }

    container.innerHTML = games.map((game, index) => {
        const gamePrice = game.price === 0 ? "Free" : `$${game.price}`;
        const genres = game.genres ? game.genres.slice(0, 2).join(' • ') : '';
        
        return `
        <article class="game-card" style="animation-delay: ${index * 0.1}s">
            <div class="game-image-container">
                <img src="${game.image || 'assets/placeholder.png'}" alt="${game.name}" class="game-image">
            </div>
            <div class="game-info">
                <div class="game-header">
                    <h3 class="game-title">${game.name}</h3>
                    <p class="game-genres">${genres}</p>
                </div>
                <p class="game-subtitle">${game.subtitle || ''}</p>
                <div class="game-footer">
                    <span class="game-price">${gamePrice}</span>
                    <a href="${game.url}" target="_blank" rel="noopener noreferrer" class="download-btn" data-i18n="downloadBtn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                        </svg>
                        ${t.downloadBtn}
                    </a>
                </div>
            </div>
        </article>
        `;
    }).join('');
}

// ============================================
// 🚀 INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load saved language
    const savedLang = getSavedLanguage();
    updateContent(savedLang);

    // Load games
    loadGames();

    // Setup language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
});
