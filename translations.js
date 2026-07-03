/* ============================================================
   TRANSLATIONS — English / Arabic
   Edit these strings directly, or use admin.html which writes
   overrides into localStorage under the key "portfolio_i18n_overrides"
   ============================================================ */
const TRANSLATIONS = {
  en: {
    nav: {
      brand: "AbdElMoneim Sultan",
      about: "About", experience: "Experience", projects: "Projects",
      skills: "Skills", education: "Education", contact: "Contact",
      hire: "Hire Me"
    },
    hero: {
      eyebrow: "Sales Executive → Digital Product Builder",
      title1: "Turning client trust into", title2: "measurable growth", title3: ".",
      lead: "A 31-year-old sales professional with 4+ years across retail, logistics, and finance — now applying AI tools and no-code/low-code platforms to design practical digital products.",
      ctaHire: "Hire Me", ctaCv: "Download CV", ctaWork: "View Work",
      statYears: "Years Experience", statRoles: "Professional Roles", statCerts: "Courses & Certificates",
      chip1: "Sales Growth Focus", chip2: "AI-Powered Builder", scroll: "Scroll",
      typed: ["Sales Executive", "Client Relationship Manager", "AI Tools Explorer", "Digital Product Contributor"]
    },
    about: {
      eyebrow: "About Me",
      title: "A sales career built on trust — now expanding into digital product design",
      p1: "I'm a 31-year-old professional with over four years of experience in the retail sector, spanning advertising and graphic design, video editing, computer setup, and online marketing of electronic products — backed by strong Microsoft Office fluency.",
      p2: "In parallel, I've been building hands-on experience with AI tools and modern no-code/low-code platforms to design and develop websites and applications, focused on creating practical, user-centered digital experiences.",
      f1l: "Based in", f2l: "Current Role", f2v: "Sales Executive, Elaraby Group",
      f3l: "Languages", f3v: "Arabic (Native), English (B1)",
      f4l: "Focus", f4v: "Sales · AI Tools · Product Design",
      arc1t: "Where it started", arc1p: "Finance fundamentals as an Accountant, then data accuracy as a Data Entry Specialist on construction projects.",
      arc2t: "Operations discipline", arc2p: "Ran warehouse operations and supply coordination, learning how logistics and customer promises connect.",
      arc3t: "Sales leadership", arc3p: "Grew into Sales Officer, then Sales Executive — owning client relationships and hitting targets consistently.",
      arc4t: "Where it's heading", arc4p: "Applying that customer instinct to AI-assisted product design — PWAs, chatbots, and no-code tools."
    },
    exp: {
      eyebrow: "Career Journey", title: "Five roles, one throughline: reliability",
      sub: "Tap any role to see responsibilities and achievements."
    },
    proj: { eyebrow: "Projects", title: "Practical contributions beyond the sales floor" },
    skills: { eyebrow: "Skills", title: "Sales expertise, backed by digital fluency" },
    edu: {
      eyebrow: "Education & Certification", title: "Formal foundation, continuous learning",
      degree: "Bachelor of Commerce — Business Administration",
      gradmeta: "Graduated May 2016 · Grade: Good",
      icdl: "ICDL Certified", icdlmeta: "Windows, Word, Excel, Internet, Outlook",
      plat1: "Elaraby E-Learning Platform", plat2: "Almentor Online Learning Platform"
    },
    lang: { eyebrow: "Languages", ar: "Arabic", arlevel: "Native", en: "English", enlevel: "Upper-Intermediate (B1)" },
    hob: { eyebrow: "Hobbies & Interests", h1: "Reading", h2: "Building Relationships", h3: "Acquiring New Skills" },
    contact: {
      eyebrow: "Get In Touch", title: "Let's talk about your next hire",
      sub: "Open to sales leadership roles and digital product collaborations.",
      email: "Email", phone: "Phone", whatsapp: "WhatsApp", whatsappSub: "Chat directly",
      location: "Location", locationSub: "Madinat El-Salam, Cairo, Egypt", copied: "Copied!",
      formName: "Full Name", formEmail: "Email Address", formMsg: "Message", formSend: "Send Message",
      formSuccess: "Thanks — your message has been noted. (Demo form — connect an email service to receive messages live.)"
    },
    footer: { rights: "All rights reserved." },
    cookie: { text: "This site uses local storage to remember your language and theme preferences. No data leaves your device.", accept: "Got it" }
  },

  ar: {
    nav: {
      brand: "عبدالمنعم سلطان",
      about: "نبذة عني", experience: "الخبرات", projects: "المشاريع",
      skills: "المهارات", education: "التعليم", contact: "تواصل معي",
      hire: "وظفني"
    },
    hero: {
      eyebrow: "تنفيذي مبيعات ← بناء منتجات رقمية",
      title1: "أحوّل ثقة العملاء إلى", title2: "نمو ملموس", title3: ".",
      lead: "محترف مبيعات عمره 31 عامًا، بخبرة تتجاوز 4 سنوات في التجزئة واللوجستيات والمحاسبة — وأوظّف اليوم أدوات الذكاء الاصطناعي ومنصات no-code/low-code لتصميم منتجات رقمية عملية.",
      ctaHire: "وظفني", ctaCv: "تحميل السيرة الذاتية", ctaWork: "عرض الأعمال",
      statYears: "سنوات خبرة", statRoles: "وظائف مهنية", statCerts: "دورة وشهادة",
      chip1: "التركيز على نمو المبيعات", chip2: "بناء بأدوات الذكاء الاصطناعي", scroll: "مرر لأسفل",
      typed: ["تنفيذي مبيعات", "مدير علاقات عملاء", "مستكشف أدوات الذكاء الاصطناعي", "مساهم في منتجات رقمية"]
    },
    about: {
      eyebrow: "نبذة عني",
      title: "مسيرة مبيعات قائمة على الثقة — تتوسع الآن نحو تصميم المنتجات الرقمية",
      p1: "أنا محترف عمره 31 عامًا ولدي خبرة تتجاوز أربع سنوات في قطاع التجزئة، شملت الإعلان والتصميم الجرافيكي ومونتاج الفيديو وتركيب الحواسيب والتسويق الإلكتروني للمنتجات، مع إجادة قوية لتطبيقات مايكروسوفت أوفيس.",
      p2: "بالتوازي مع ذلك، اكتسبت خبرة عملية في أدوات الذكاء الاصطناعي ومنصات no-code/low-code الحديثة لتصميم وتطوير المواقع والتطبيقات، بهدف بناء تجارب رقمية عملية تركز على المستخدم.",
      f1l: "المقر", f2l: "الوظيفة الحالية", f2v: "تنفيذي مبيعات، مجموعة العربي",
      f3l: "اللغات", f3v: "العربية (اللغة الأم)، الإنجليزية (B1)",
      f4l: "التركيز", f4v: "المبيعات · أدوات الذكاء الاصطناعي · تصميم المنتجات",
      arc1t: "نقطة البداية", arc1p: "أساسيات مالية كمحاسب، ثم دقة بيانات كأخصائي إدخال بيانات في مشاريع إنشائية.",
      arc2t: "انضباط تشغيلي", arc2p: "أدار عمليات المستودعات وتنسيق التوريد، وتعلّم كيف ترتبط اللوجستيات بوعود العملاء.",
      arc3t: "قيادة مبيعات", arc3p: "تدرّج إلى مسؤول مبيعات ثم تنفيذي مبيعات — يدير علاقات العملاء ويحقق الأهداف باستمرار.",
      arc4t: "إلى أين يتجه", arc4p: "يوظّف حسّه بالعملاء في تصميم منتجات مدعومة بالذكاء الاصطناعي — تطبيقات ويب تقدمية وروبوتات محادثة وأدوات no-code."
    },
    exp: {
      eyebrow: "المسيرة المهنية", title: "خمس وظائف، وخيط واحد يربطها: الموثوقية",
      sub: "اضغط على أي وظيفة لعرض المسؤوليات والإنجازات."
    },
    proj: { eyebrow: "المشاريع", title: "مساهمات عملية تتجاوز أرضية المبيعات" },
    skills: { eyebrow: "المهارات", title: "خبرة مبيعات مدعومة بإجادة رقمية" },
    edu: {
      eyebrow: "التعليم والشهادات", title: "أساس أكاديمي وتعلّم مستمر",
      degree: "بكالوريوس تجارة — إدارة أعمال",
      gradmeta: "التخرج مايو 2016 · التقدير: جيد",
      icdl: "شهادة ICDL", icdlmeta: "ويندوز، وورد، إكسل، الإنترنت، أوتلوك",
      plat1: "منصة العربي للتعلّم الإلكتروني", plat2: "منصة Almentor للتعلّم عبر الإنترنت"
    },
    lang: { eyebrow: "اللغات", ar: "العربية", arlevel: "اللغة الأم", en: "الإنجليزية", enlevel: "متوسط فوق المتوسط (B1)" },
    hob: { eyebrow: "الهوايات والاهتمامات", h1: "القراءة", h2: "بناء العلاقات", h3: "اكتساب مهارات جديدة" },
    contact: {
      eyebrow: "تواصل معي", title: "لنتحدث عن فرصتك القادمة",
      sub: "متاح لأدوار قيادة مبيعات وتعاونات في المنتجات الرقمية.",
      email: "البريد الإلكتروني", phone: "الهاتف", whatsapp: "واتساب", whatsappSub: "تواصل مباشر",
      location: "الموقع", locationSub: "مدينة السلام، القاهرة، مصر", copied: "تم النسخ!",
      formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formMsg: "الرسالة", formSend: "إرسال الرسالة",
      formSuccess: "شكرًا — تم استلام رسالتك. (نموذج تجريبي — قم بربط خدمة بريد لاستقبال الرسائل فعليًا)"
    },
    footer: { rights: "جميع الحقوق محفوظة." },
    cookie: { text: "يستخدم هذا الموقع التخزين المحلي لحفظ تفضيلات اللغة والمظهر. لا تغادر بياناتك جهازك.", accept: "حسنًا" }
  }
};

// Allow admin.html to override any string without touching this file.
(function applyOverrides(){
  try{
    const raw = localStorage.getItem('portfolio_i18n_overrides');
    if(!raw) return;
    const overrides = JSON.parse(raw);
    for(const locale of Object.keys(overrides)){
      TRANSLATIONS[locale] = TRANSLATIONS[locale] || {};
      deepMerge(TRANSLATIONS[locale], overrides[locale]);
    }
  }catch(e){ console.warn('i18n overrides skipped:', e); }
  function deepMerge(target, src){
    for(const k of Object.keys(src)){
      if(src[k] && typeof src[k] === 'object' && !Array.isArray(src[k])){
        target[k] = target[k] || {};
        deepMerge(target[k], src[k]);
      } else {
        target[k] = src[k];
      }
    }
  }
})();
