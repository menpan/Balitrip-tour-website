const translations = {
  id: { hero_title: "Jelajahi Keindahan Bali Bersama Kami", hero_sub: "Paket wisata terbaik dari pantai, budaya hingga kuliner lokal" },
  en: { hero_title: "Explore the Beauty of Bali with Us", hero_sub: "Best tour packages from beaches, culture to local food" }
};
document.getElementById('lang-switch').addEventListener('change', e => {
  const lang = e.target.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
});
