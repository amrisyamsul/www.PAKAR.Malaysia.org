const languageToggle = document.getElementById('language-toggle');
const translations = {
    en: {
        heroTitle: "Welcome to PAKAR Malaysia",
        heroSubtitle: "Promoting Integrity, Trust, and Transparency",
        heroBtn: "Explore Programs",
    },
    bm: {
        heroTitle: "Selamat Datang ke PAKAR Malaysia",
        heroSubtitle: "Memupuk Integriti, Kepercayaan, dan Ketelusan",
        heroBtn: "Terokai Program",
    },
};

let currentLanguage = "en";

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bm' : 'en';
    languageToggle.textContent = currentLanguage === 'en' ? 'BM' : 'EN';

    document.getElementById('hero-title').textContent = translations[currentLanguage].heroTitle;
    document.getElementById('hero-subtitle').textContent = translations[currentLanguage].heroSubtitle;
    document.getElementById('hero-btn').textContent = translations[currentLanguage].heroBtn;
});
