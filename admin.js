/* ============================================================
   ADMIN PANEL LOGIC
   Note: This is a client-side, local-only login for casual
   protection of the editing UI — it is NOT secure server auth.
   ============================================================ */
(function(){
  const K_USER = 'portfolio_admin_user';
  const K_PASS = 'portfolio_admin_pass';
  const K_SESSION = 'portfolio_admin_session';
  const K_I18N = 'portfolio_i18n_overrides';
  const K_DATA = 'portfolio_data_overrides';
  const K_THEME = 'portfolio_theme_custom';

  let currentLangTab = {}; // per group

  /* ---------- AUTH ---------- */
  function getCreds(){
    return {
      user: localStorage.getItem(K_USER) || 'admin',
      pass: localStorage.getItem(K_PASS) || 'admin123'
    };
  }

  function showApp(){
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').classList.add('show');
    initAppData();
  }

  function tryLogin(){
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value;
    const creds = getCreds();
    const msg = document.getElementById('loginMsg');
    if(u === creds.user && p === creds.pass){
      if(document.getElementById('rememberMe').checked){
        sessionStorage.setItem(K_SESSION, '1');
        localStorage.setItem(K_SESSION, '1');
      } else {
        sessionStorage.setItem(K_SESSION, '1');
      }
      showApp();
    } else {
      msg.className = 'status-msg err';
      msg.textContent = 'Incorrect username or password.';
    }
  }

  function checkSession(){
    if(sessionStorage.getItem(K_SESSION) === '1' || localStorage.getItem(K_SESSION) === '1'){
      showApp();
    }
  }

  function logout(){
    sessionStorage.removeItem(K_SESSION);
    localStorage.removeItem(K_SESSION);
    location.reload();
  }

  /* ---------- NAV ---------- */
  function initNav(){
    document.querySelectorAll('.nav-item[data-panel]').forEach(item=>{
      item.addEventListener('click', ()=>{
        document.querySelectorAll('.nav-item[data-panel]').forEach(n=>n.classList.remove('active'));
        item.classList.add('active');
        document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
        document.getElementById('panel-' + item.getAttribute('data-panel')).classList.add('active');
        document.getElementById('sidebar').classList.remove('open');
      });
    });
    document.querySelectorAll('.lang-tabs').forEach(group=>{
      const g = group.getAttribute('data-group');
      currentLangTab[g] = 'en';
      group.querySelectorAll('.lang-tab').forEach(tab=>{
        tab.addEventListener('click', ()=>{
          group.querySelectorAll('.lang-tab').forEach(t=>t.classList.remove('active'));
          tab.classList.add('active');
          currentLangTab[g] = tab.getAttribute('data-lang');
          loadPanel(g);
        });
      });
    });
  }

  /* ---------- OVERRIDE HELPERS ---------- */
  function getOverrides(key){
    try{ return JSON.parse(localStorage.getItem(key)) || {}; }catch(e){ return {}; }
  }
  function saveOverrides(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
  }
  function setDeep(obj, pathArr, value){
    let cur = obj;
    for(let i=0;i<pathArr.length-1;i++){
      cur[pathArr[i]] = cur[pathArr[i]] || {};
      cur = cur[pathArr[i]];
    }
    cur[pathArr[pathArr.length-1]] = value;
  }
  function flash(id, ok, text){
    const el = document.getElementById(id);
    el.className = 'status-msg ' + (ok ? 'ok' : 'err');
    el.textContent = text;
    setTimeout(()=>{ el.className = 'status-msg'; }, 3500);
  }

  /* ---------- LOAD PANEL DATA INTO FIELDS ---------- */
  function loadPanel(group){
    const lang = currentLangTab[group] || 'en';
    if(group === 'hero'){
      const t = TRANSLATIONS[lang];
      document.getElementById('f_hero_eyebrow').value = t.hero.eyebrow;
      document.getElementById('f_hero_title1').value = t.hero.title1;
      document.getElementById('f_hero_title2').value = t.hero.title2;
      document.getElementById('f_hero_lead').value = t.hero.lead;
      document.getElementById('f_about_title').value = t.about.title;
      document.getElementById('f_about_p1').value = t.about.p1;
      document.getElementById('f_about_p2').value = t.about.p2;
    }
    if(group === 'experience'){
      document.getElementById('json_experience').value = JSON.stringify(SITE_DATA[lang].experience, null, 2);
    }
    if(group === 'projects'){
      document.getElementById('json_projects').value = JSON.stringify(SITE_DATA[lang].projects, null, 2);
    }
    if(group === 'skills'){
      document.getElementById('json_skillCats').value = JSON.stringify(SITE_DATA[lang].skillCats, null, 2);
      document.getElementById('f_radar_labels').value = SITE_DATA[lang].radarLabels.join(', ');
      document.getElementById('f_radar_values').value = SITE_DATA[lang].radarValues.join(', ');
    }
    if(group === 'certs'){
      document.getElementById('list_certsElaraby').value = SITE_DATA[lang].certsElaraby.join('\n');
      document.getElementById('list_certsAlmentor').value = SITE_DATA[lang].certsAlmentor.join('\n');
    }
  }

  /* ---------- SAVE HANDLERS ---------- */
  function saveHero(){
    const lang = currentLangTab.hero || 'en';
    const ov = getOverrides(K_I18N);
    ov[lang] = ov[lang] || {};
    setDeep(ov, [lang,'hero','eyebrow'], document.getElementById('f_hero_eyebrow').value);
    setDeep(ov, [lang,'hero','title1'], document.getElementById('f_hero_title1').value);
    setDeep(ov, [lang,'hero','title2'], document.getElementById('f_hero_title2').value);
    setDeep(ov, [lang,'hero','lead'], document.getElementById('f_hero_lead').value);
    setDeep(ov, [lang,'about','title'], document.getElementById('f_about_title').value);
    setDeep(ov, [lang,'about','p1'], document.getElementById('f_about_p1').value);
    setDeep(ov, [lang,'about','p2'], document.getElementById('f_about_p2').value);
    saveOverrides(K_I18N, ov);
    flash('heroMsg', true, 'Saved. Refresh the live site to see changes.');
  }

  function saveJsonField(fieldId, dataKey, msgId){
    const lang = currentLangTab[dataKey === 'experience' ? 'experience' : dataKey] || 'en';
    try{
      const parsed = JSON.parse(document.getElementById(fieldId).value);
      const ov = getOverrides(K_DATA);
      ov[lang] = ov[lang] || {};
      ov[lang][dataKey] = parsed;
      saveOverrides(K_DATA, ov);
      flash(msgId, true, 'Saved. Refresh the live site to see changes.');
      return true;
    }catch(e){
      flash(msgId, false, 'Invalid JSON — please check formatting. (' + e.message + ')');
      return false;
    }
  }

  function saveSkills(){
    const lang = currentLangTab.skills || 'en';
    let skillCats;
    try{
      skillCats = JSON.parse(document.getElementById('json_skillCats').value);
    }catch(e){
      flash('skillsMsg', false, 'Invalid JSON in skill categories.');
      return;
    }
    const labels = document.getElementById('f_radar_labels').value.split(',').map(s=>s.trim()).filter(Boolean);
    const values = document.getElementById('f_radar_values').value.split(',').map(s=>parseInt(s.trim(),10)).filter(n=>!isNaN(n));
    const ov = getOverrides(K_DATA);
    ov[lang] = ov[lang] || {};
    ov[lang].skillCats = skillCats;
    ov[lang].radarLabels = labels;
    ov[lang].radarValues = values;
    saveOverrides(K_DATA, ov);
    flash('skillsMsg', true, 'Saved. Refresh the live site to see changes.');
  }

  function saveCerts(){
    const lang = currentLangTab.certs || 'en';
    const ov = getOverrides(K_DATA);
    ov[lang] = ov[lang] || {};
    ov[lang].certsElaraby = document.getElementById('list_certsElaraby').value.split('\n').map(s=>s.trim()).filter(Boolean);
    ov[lang].certsAlmentor = document.getElementById('list_certsAlmentor').value.split('\n').map(s=>s.trim()).filter(Boolean);
    saveOverrides(K_DATA, ov);
    flash('certsMsg', true, 'Saved. Refresh the live site to see changes.');
  }

  /* ---------- THEME ---------- */
  function loadTheme(){
    const t = JSON.parse(localStorage.getItem(K_THEME) || '{}');
    document.getElementById('c_gold').value = t.gold || '#C08B3D';
    document.getElementById('c_goldLight').value = t.goldLight || '#E3B36B';
    document.getElementById('c_teal').value = t.teal || '#1F8A70';
    document.getElementById('c_tealLight').value = t.tealLight || '#38C9A6';
    document.getElementById('c_radius').value = t.radius || 14;
    document.getElementById('radiusVal').textContent = t.radius || 14;
  }
  function saveTheme(){
    const theme = {
      gold: document.getElementById('c_gold').value,
      goldLight: document.getElementById('c_goldLight').value,
      teal: document.getElementById('c_teal').value,
      tealLight: document.getElementById('c_tealLight').value,
      radius: document.getElementById('c_radius').value
    };
    localStorage.setItem(K_THEME, JSON.stringify(theme));
    flash('themeMsg', true, 'Theme applied. Refresh the live site to see changes.');
  }
  function resetTheme(){
    localStorage.removeItem(K_THEME);
    loadTheme();
    flash('themeMsg', true, 'Theme reset to defaults.');
  }

  /* ---------- BACKUP / RESTORE ---------- */
  function exportBackup(){
    const payload = {
      i18n: getOverrides(K_I18N),
      data: getOverrides(K_DATA),
      theme: JSON.parse(localStorage.getItem(K_THEME) || 'null'),
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'portfolio-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function importBackup(){
    const file = document.getElementById('importFile').files[0];
    if(!file){ flash('importMsg', false, 'Choose a backup file first.'); return; }
    const reader = new FileReader();
    reader.onload = (e)=>{
      try{
        const payload = JSON.parse(e.target.result);
        if(payload.i18n) saveOverrides(K_I18N, payload.i18n);
        if(payload.data) saveOverrides(K_DATA, payload.data);
        if(payload.theme) localStorage.setItem(K_THEME, JSON.stringify(payload.theme));
        flash('importMsg', true, 'Backup restored. Reloading panel...');
        setTimeout(()=> location.reload(), 1200);
      }catch(err){
        flash('importMsg', false, 'Could not read that file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function resetAll(){
    if(!confirm('This clears all edits and restores the original CV-based content. Continue?')) return;
    localStorage.removeItem(K_I18N);
    localStorage.removeItem(K_DATA);
    localStorage.removeItem(K_THEME);
    location.reload();
  }

  /* ---------- ACCOUNT ---------- */
  function saveAccount(){
    const u = document.getElementById('acc_user').value.trim();
    const p = document.getElementById('acc_pass').value;
    if(!u || !p){ flash('accountMsg', false, 'Enter both a username and password.'); return; }
    localStorage.setItem(K_USER, u);
    localStorage.setItem(K_PASS, p);
    flash('accountMsg', true, 'Credentials updated.');
    document.getElementById('acc_pass').value = '';
  }

  /* ---------- STATS ---------- */
  function updateStats(){
    document.getElementById('statExp').textContent = SITE_DATA.en.experience.length;
    document.getElementById('statProj').textContent = SITE_DATA.en.projects.length;
    document.getElementById('statSkill').textContent = SITE_DATA.en.skillCats.length;
    const certCount = SITE_DATA.en.certsElaraby.length + SITE_DATA.en.certsAlmentor.length;
    document.getElementById('statCert').textContent = certCount;
  }

  /* ---------- INIT APP DATA ---------- */
  function initAppData(){
    updateStats();
    loadPanel('hero');
    loadPanel('experience');
    loadPanel('projects');
    loadPanel('skills');
    loadPanel('certs');
    loadTheme();

    document.getElementById('saveHero').addEventListener('click', saveHero);
    document.getElementById('saveExperience').addEventListener('click', ()=>saveJsonField('json_experience','experience','experienceMsg'));
    document.getElementById('formatExperience').addEventListener('click', ()=>{
      try{ document.getElementById('json_experience').value = JSON.stringify(JSON.parse(document.getElementById('json_experience').value), null, 2); }catch(e){}
    });
    document.getElementById('saveProjects').addEventListener('click', ()=>saveJsonField('json_projects','projects','projectsMsg'));
    document.getElementById('formatProjects').addEventListener('click', ()=>{
      try{ document.getElementById('json_projects').value = JSON.stringify(JSON.parse(document.getElementById('json_projects').value), null, 2); }catch(e){}
    });
    document.getElementById('saveSkills').addEventListener('click', saveSkills);
    document.getElementById('formatSkills').addEventListener('click', ()=>{
      try{ document.getElementById('json_skillCats').value = JSON.stringify(JSON.parse(document.getElementById('json_skillCats').value), null, 2); }catch(e){}
    });
    document.getElementById('saveCerts').addEventListener('click', saveCerts);

    document.getElementById('c_radius').addEventListener('input', (e)=>{
      document.getElementById('radiusVal').textContent = e.target.value;
    });
    document.getElementById('saveTheme').addEventListener('click', saveTheme);
    document.getElementById('resetTheme').addEventListener('click', resetTheme);

    document.getElementById('exportBtn').addEventListener('click', exportBackup);
    document.getElementById('importBtn').addEventListener('click', importBackup);
    document.getElementById('resetAllBtn').addEventListener('click', resetAll);

    document.getElementById('saveAccount').addEventListener('click', saveAccount);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('menuToggle').addEventListener('click', ()=> document.getElementById('sidebar').classList.toggle('open'));
  }

  /* ---------- BOOT ---------- */
  window.addEventListener('DOMContentLoaded', ()=>{
    checkSession();
    document.getElementById('loginBtn').addEventListener('click', tryLogin);
    document.getElementById('loginPass').addEventListener('keydown', (e)=>{ if(e.key === 'Enter') tryLogin(); });
    initNav();
  });
})();
