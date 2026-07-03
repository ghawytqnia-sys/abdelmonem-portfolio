<!-- استدعاء Firebase للزوار (قراءة فقط) -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMLeRa5BeV6YQf7rqLx0JQd3fb_LhbeSU",
  authDomain: "portfolio-2933c.firebaseapp.com",
  projectId: "portfolio-2933c",
  storageBucket: "portfolio-2933c.firebasestorage.app",
  messagingSenderId: "599965326470",
  appId: "1:599965326470:web:ff465c87d42bb0ab188507",
  measurementId: "G-WBTPVJLRF4"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // دالة لجلب البيانات وتطبيقها قبل إخفاء شاشة التحميل
  window.fetchFirebaseData = async function() {
    try {
      const docRef = doc(db, "portfolio", "content");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dbData = docSnap.data();
        
        // 1. تطبيق نصوص الـ Hero إذا تم تعديلها
        if(dbData.heroEn) {
            TRANSLATIONS.en.hero.eyebrow = dbData.heroEn.eyebrow;
            TRANSLATIONS.en.hero.title1 = dbData.heroEn.title1;
            TRANSLATIONS.en.hero.lead = dbData.heroEn.lead;
        }

        // 2. تطبيق بيانات الـ Experience إذا تم تعديلها
        if(dbData.experienceData) {
            SITE_DATA.en.experience = dbData.experienceData;
        }

        // يمكنك إضافة دمج باقي الأقسام هنا...
        console.log("Firebase data loaded successfully!");
      }
    } catch (error) {
      console.warn("Could not load Firebase data, falling back to local data.", error);
    }
  };
</script>
/* ============================================================
   MAIN SITE LOGIC
   ============================================================ */
(function(){
  const STORE_LANG = 'portfolio_lang';
  const STORE_THEME = 'portfolio_theme';
  const STORE_COOKIE = 'portfolio_cookie_ack';

  const html = document.documentElement;

  /* ---------- LANGUAGE ---------- */
  function getLang(){ return localStorage.getItem(STORE_LANG) || 'en'; }

  function applyI18n(lang){
    const dict = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const path = el.getAttribute('data-i18n').split('.');
      let val = dict;
      for(const p of path){ val = val && val[p]; }
      if(typeof val === 'string') el.textContent = val;
    });
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').textContent = lang === 'ar' ? 'AR' : 'EN';
    localStorage.setItem(STORE_LANG, lang);
  }

  function toggleLang(){
    const next = getLang() === 'en' ? 'ar' : 'en';
    applyI18n(next);
    renderDynamicContent(next);
    restartTyped(next);
  }

  /* ---------- THEME ---------- */
  function getTheme(){
    const stored = localStorage.getItem(STORE_THEME);
    if(stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function applyTheme(theme){
    html.setAttribute('data-theme', theme);
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem(STORE_THEME, theme);
  }
  function toggleTheme(){
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  /* ---------- DYNAMIC CONTENT RENDER ---------- */
  function renderDynamicContent(lang){
    const d = SITE_DATA[lang];

    // Timeline
    const tl = document.getElementById('timelineList');
    tl.innerHTML = d.experience.map((item, i) => `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card" data-idx="${i}">
          <div class="tl-top">
            <div>
              <div class="tl-role">${item.role}</div>
              <div class="tl-company">${item.company}</div>
            </div>
            <div class="tl-period">${item.period}</div>
          </div>
          <div class="tl-toggle"><i class="fa-solid fa-chevron-down"></i> ${lang==='ar' ? 'عرض التفاصيل' : 'View details'}</div>
          <div class="tl-body"><ul>${item.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>
        </div>
      </div>
    `).join('');
    tl.querySelectorAll('.tl-card').forEach(card=>{
      card.addEventListener('click', ()=> card.classList.toggle('open'));
    });

    // Projects
    const pg = document.getElementById('projGrid');
    pg.innerHTML = d.projects.map(p => `
      <div class="proj-card" data-aos="fade-up">
        <div class="proj-media"><i class="fa-solid ${p.icon}"></i><span class="proj-status">${p.status}</span></div>
        <div class="proj-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="proj-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');

    // Skills
    const sc = document.getElementById('skillCats');
    sc.innerHTML = d.skillCats.map(cat => `
      <div class="skill-cat">
        <h4><i class="fa-solid ${cat.icon}"></i> ${cat.name}</h4>
        ${cat.skills.map(s => `
          <div class="skill-row">
            <div class="lbl"><span>${s.label}</span><span>${s.value}%</span></div>
            <div class="bar-track"><div class="bar-fill" data-width="${s.value}"></div></div>
          </div>
        `).join('')}
      </div>
    `).join('');

    // Certs
    document.getElementById('certsElaraby').innerHTML = d.certsElaraby.map(c=>`<div class="cert-pill"><i class="fa-solid fa-circle-check"></i>${c}</div>`).join('');
    document.getElementById('certsAlmentor').innerHTML = d.certsAlmentor.map(c=>`<div class="cert-pill"><i class="fa-solid fa-circle-check"></i>${c}</div>`).join('');

    // Radar chart
    renderRadar(d.radarLabels, d.radarValues, lang);

    // Re-observe bars for animation
    observeBars();
  }

  /* ---------- RADAR CHART ---------- */
  let radarChart;
  function renderRadar(labels, values, lang){
    const ctx = document.getElementById('radarChart');
    if(radarChart) radarChart.destroy();
    const isDark = html.getAttribute('data-theme') === 'dark';
    radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: lang === 'ar' ? 'مستوى المهارة' : 'Skill Level',
          data: values,
          backgroundColor: 'rgba(192,139,61,0.18)',
          borderColor: '#C08B3D',
          pointBackgroundColor: '#1F8A70',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            angleLines: { color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
            grid: { color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
            pointLabels: { color: isDark ? '#A6ADBB' : '#5B6472', font: { size: 11 } },
            ticks: { display: false, maxTicksLimit: 4 },
            suggestedMin: 0, suggestedMax: 100
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  /* ---------- BAR ANIMATION ON SCROLL ---------- */
  function observeBars(){
    const bars = document.querySelectorAll('.bar-fill');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.style.width = e.target.getAttribute('data-width') + '%';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => io.observe(b));
  }

  /* ---------- COUNTERS ---------- */
  function animateCounters(){
    document.querySelectorAll('[data-count]').forEach(el=>{
      const target = parseInt(el.getAttribute('data-count'), 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        cur += step;
        if(cur >= target){ el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(tick);
      };
      tick();
    });
  }

  /* ---------- TYPED.JS ---------- */
  let typedInstance;
  function restartTyped(lang){
    if(typedInstance) typedInstance.destroy();
    typedInstance = new Typed('#typed', {
      strings: TRANSLATIONS[lang].hero.typed,
      typeSpeed: 45, backSpeed: 25, backDelay: 1400, loop: true, smartBackspace: true
    });
  }

  /* ---------- MOBILE MENU ---------- */
  function initMobileMenu(){
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    burger.addEventListener('click', ()=>{
      menu.classList.toggle('open');
      burger.innerHTML = menu.classList.contains('open') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }));
  }

  /* ---------- SCROLL PROGRESS ---------- */
  function initScrollProgress(){
    const bar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', ()=>{
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = pct + '%';
    });
  }

  /* ---------- CLIPBOARD ---------- */
  function initCopy(){
    const map = {
      copyEmail: 'abdosultan306@gmail.com',
      copyPhone: '+20 111 455 0112'
    };
    Object.keys(map).forEach(id=>{
      const el = document.getElementById(id);
      el.addEventListener('click', ()=>{
        navigator.clipboard.writeText(map[id]).then(()=>{
          el.classList.add('copied');
          setTimeout(()=> el.classList.remove('copied'), 1600);
        });
      });
    });
  }

  /* ---------- CONTACT FORM (demo) ---------- */
  function initForm(){
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      msg.classList.add('show');
      form.reset();
      setTimeout(()=> msg.classList.remove('show'), 5000);
    });
  }

  /* ---------- COOKIE BAR ---------- */
  function initCookie(){
    const bar = document.getElementById('cookieBar');
    if(!localStorage.getItem(STORE_COOKIE)){
      setTimeout(()=> bar.classList.add('show'), 1200);
    }
    document.getElementById('cookieAccept').addEventListener('click', ()=>{
      localStorage.setItem(STORE_COOKIE, '1');
      bar.classList.remove('show');
    });
  }

  /* ---------- SMOOTH NAV BACKGROUND ---------- */
  function initNavShrink(){
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', ()=>{
      nav.style.boxShadow = window.scrollY > 40 ? '0 8px 30px -12px rgba(0,0,0,.3)' : 'none';
    });
  }

  /* ---------- CUSTOM THEME COLORS (set via admin.html) ---------- */
  function applyCustomColors(){
    try{
      const raw = localStorage.getItem('portfolio_theme_custom');
      if(!raw) return;
      const c = JSON.parse(raw);
      if(c.gold) html.style.setProperty('--gold', c.gold);
      if(c.goldLight) html.style.setProperty('--gold-l', c.goldLight);
      if(c.teal) html.style.setProperty('--teal', c.teal);
      if(c.tealLight) html.style.setProperty('--teal-l', c.tealLight);
      if(c.radius) html.style.setProperty('--radius', c.radius + 'px');
    }catch(e){ console.warn('theme override skipped:', e); }
  }

  /* ---------- INIT ---------- */
  window.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('year').textContent = new Date().getFullYear();
    applyCustomColors();

    const lang = getLang();
    applyI18n(lang);
    applyTheme(getTheme());
    renderDynamicContent(lang);
    restartTyped(lang);
    animateCounters();

    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });

    document.getElementById('langToggle').addEventListener('click', toggleLang);
    document.getElementById('themeToggle').addEventListener('click', ()=>{
      toggleTheme();
      renderRadar(SITE_DATA[getLang()].radarLabels, SITE_DATA[getLang()].radarValues, getLang());
    });

    initMobileMenu();
    initScrollProgress();
    initCopy();
    initForm();
    initCookie();
    initNavShrink();

    setTimeout(()=> document.getElementById('loader').classList.add('hide'), 500);
  });
})();
