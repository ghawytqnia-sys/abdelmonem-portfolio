/* ============================================================
   CONTENT DATA — Default fallback data for bilingual portfolio
   Sourced if Firebase is unavailable.
   Mirrors the new 3-document schema (global, en, ar)
   ============================================================ */
const SITE_DATA = {
  global: {
    mediaLibrary: [],
    themeData: { mode: "dark", font: "'Inter', sans-serif" },
    aboutData: { profileImg: "assets/portrait.jpg" },
    contactData: { cvLink: "assets/AbdElMoneim_Sultan_CV.pdf", email: "abdosultan306@gmail.com", phone: "+20 111 455 0112" }
  },
  en: {
    hero: { brandName: "AbdElMoneim Sultan", eyebrow: "Sales Executive → Digital Product Builder", title1: "Turning client trust into measurable growth.", lead: "A professional sales executive with experience across retail, logistics, and finance..." },
    typed: ["Sales Executive", "Client Relationship Manager", "AI Tools Explorer"],
    chips: [{icon: "fa-chart-line", label: "Sales Growth Focus"}, {icon: "fa-robot", label: "AI-Powered Builder"}],
    stats: [{value: 4, label: "Years Experience"}, {value: 5, label: "Professional Roles"}, {value: 17, label: "Courses & Certificates"}],
    about: { title: "A sales career built on trust...", p1: "I'm a professional with over four years of experience in the retail sector..." },
    facts: [{label: "Based in", value: "Cairo, Egypt"}, {label: "Current Role", value: "Sales Executive"}],
    arc: [{title: "Where it started", desc: "Finance fundamentals..."}],
    education: { degreeTitle: "Bachelor of Commerce — Business Administration", degreeMeta: "Graduated May 2016 · Grade: Good", icdlTitle: "ICDL Certified", icdlMeta: "Windows, Word, Excel, Internet" },
    contact: { location: "Cairo, Egypt" },
    experience: [
      { role: "Sales Executive", company: "Elaraby Group", period: "2023 – Present", current: true, bullets: ["Managing client relationships and driving sales to achieve company targets.", "Providing tailored product solutions and ensuring a high level of customer satisfaction.", "Collaborating with internal teams to optimize sales operations and performance."] },
      { role: "Sales Officer", company: "B.Tech", period: "June 2022 – 2023", current: false, bullets: ["Promoted company products and achieved consistent sales growth.", "Assisted customers in selecting suitable products based on their needs and preferences."] },
      { role: "Assistant Warehouse Manager", company: "Al-Ansar Marketing", period: "February 2020 – February 2022", current: false, bullets: ["Supervised daily warehouse operations, ensuring inventory accuracy and timely order fulfillment.", "Coordinated with suppliers and logistics teams to streamline supply chain activities."] },
      { role: "Data Entry Specialist", company: "Orascom Construction", period: "2018 – 2019", current: false, bullets: ["Entered and verified project-related data with high accuracy.", "Supported the reporting process for construction projects."] },
      { role: "Accountant", company: "Omega Advertising", period: "2017 – 2018", current: false, bullets: ["Prepared and maintained financial records in compliance with accounting principles.", "Collaborated with management to support financial decision-making."] }
    ],
    projects: [
      { id: "proj_1", title: "Know Your Product (PWA)", desc: "Co-designed and developed a Progressive Web App built to support sales representatives during the sales process with smart selling tools.", tags: ["PWA", "UX Design", "Sales Enablement", "No-Code"], status: "Shipped", icon: "fa-mobile-screen-button", img: "" },
      { id: "proj_2", title: "AI-Powered Chatbot", desc: "Contributing to the development of an AI chatbot focused on smarter, more automated customer engagement.", tags: ["AI", "Chatbot", "Workflow Design", "Customer Engagement"], status: "In Progress", icon: "fa-robot", img: "" }
    ],
    skillCats: [
      { name: "Sales & Business", icon: "fa-chart-line", skills: [{ label: "Sales & Account Management", value: 92 }, { label: "E-Commerce Sales Operations", value: 85 }, { label: "Sales Reporting & Forecasting", value: 80 }, { label: "Persuasive Communication & Client Engagement", value: 90 }] },
      { name: "Digital & AI Tools", icon: "fa-robot", skills: [{ label: "AI Tools Utilization & Digital Solutions", value: 78 }, { label: "PWA & Digital Product Design", value: 70 }, { label: "Basic Knowledge of Power BI", value: 55 }, { label: "Basic Knowledge of ERP & SAP Systems", value: 50 }] },
      { name: "Professional & Soft Skills", icon: "fa-people-group", skills: [{ label: "Customer Issue Resolution", value: 88 }, { label: "Adaptability & Team Collaboration", value: 90 }, { label: "Computer Setup & Troubleshooting", value: 82 }] }
    ],
    certsElaraby: ["Managing Different Generations", "Problem Solving & Decision Making", "Time Management", "Advanced Negotiation Skills", "Handling Difficult Characters", "Customer Experience Management", "Design Thinking", "Building Better Teams", "Smart Selling", "Sales Skills"],
    certsAlmentor: ["Personal Branding for Employees", "Career Success Skills", "Professional Email Writing", "Successful Marketer Skills", "Prompt Engineering", "Growth Mindset", "ChatGPT Technology"]
  },
  ar: {
    hero: { brandName: "عبدالمنعم سلطان", eyebrow: "تنفيذي مبيعات ← بناء منتجات رقمية", title1: "أحوّل ثقة العملاء إلى نمو ملموس.", lead: "محترف مبيعات بخبرة تتجاوز 4 سنوات..." },
    typed: ["تنفيذي مبيعات", "مدير علاقات عملاء", "مستكشف ذكاء اصطناعي"],
    chips: [{icon: "fa-chart-line", label: "نمو المبيعات"}, {icon: "fa-robot", label: "بناء بالذكاء الاصطناعي"}],
    stats: [{value: 4, label: "سنوات خبرة"}, {value: 5, label: "وظائف مهنية"}, {value: 17, label: "دورة وشهادة"}],
    about: { title: "مسيرة مبيعات قائمة على الثقة...", p1: "أنا محترف مبيعات ولدي خبرة تتجاوز 4 سنوات..." },
    facts: [{label: "المقر", value: "القاهرة، مصر"}, {label: "الوظيفة الحالية", value: "تنفيذي مبيعات"}],
    arc: [{title: "نقطة البداية", desc: "أساسيات مالية..."}],
    education: { degreeTitle: "بكالوريوس تجارة — إدارة أعمال", degreeMeta: "التخرج 2016 · التقدير: جيد", icdlTitle: "شهادة ICDL", icdlMeta: "ويندوز، وورد، إكسل، إنترنت" },
    contact: { location: "القاهرة، مصر" },
    experience: [
      { role: "تنفيذي مبيعات", company: "مجموعة العربي", period: "2023 – حتى الآن", current: true, bullets: ["إدارة علاقات العملاء وتحقيق أهداف المبيعات الخاصة بالشركة.", "تقديم حلول منتج مخصصة وضمان مستوى عالٍ من رضا العملاء.", "التعاون مع الفرق الداخلية لتحسين عمليات وأداء المبيعات."] },
      { role: "مسؤول مبيعات", company: "بي تك", period: "يونيو 2022 – 2023", current: false, bullets: ["الترويج لمنتجات الشركة وتحقيق نمو مستمر في المبيعات.", "مساعدة العملاء في اختيار المنتجات المناسبة وفقًا لااحتياجاتهم وتفضيلاتهم."] },
      { role: "مساعد مدير مستودع", company: "الأنصار للتسويق", period: "فبراير 2020 – فبراير 2022", current: false, bullets: ["الإشراف على العمليات اليومية للمستودع وضمان دقة المخزون وتنفيذ الطلبات في وقتها.", "التنسيق مع الموردين وفرق اللوجستيات لتبسيط أنشطة سلسلة التوريد."] },
      { role: "أخصائي إدخال بيانات", company: "أوراسكوم للإنشاءات", period: "2018 – 2019", current: false, bullets: ["إدخال والتحقق من بيانات المشاريع بدقة عالية.", "دعم عملية إعداد التقارير الخاصة بمشاريع الإنشاءات.", "ضمان سلامة البيانات والالتزام بمعايير الشركة."] },
      { role: "محاسب", company: "أوميغا للإعلان", period: "2017 – 2018", current: false, bullets: ["إعداد وحفظ السجلات المالية وفقًا للمبادئ المحاسبية.", "التعاون مع الإدارة لدعم اتخاذ القرارات المالية."] }
    ],
    projects: [
      { id: "proj_1", title: "تطبيق Know Your Product (PWA)", desc: "شارك في تصميم وتطوير تطبيق ويب تقدمي (PWA) لدعم مندوبي المبيعات أثناء عملية البيع بأدوات بيع ذكية.", tags: ["PWA", "تصميم تجربة المستخدم", "دعم المبيعات", "No-Code"], status: "منجز", icon: "fa-mobile-screen-button", img: "" },
      { id: "proj_2", title: "روبوت محادثة بالذكاء الاصطناعي", desc: "يساهم في تطوير روبوت محادثة بالذكاء الاصطناعي يركز على تفاعل أذكى وأكثر أتمتة مع العملاء.", tags: ["ذكاء اصطناعي", "روبوت محادثة", "تفاعل العملاء"], status: "قيد التنفيذ", icon: "fa-robot", img: "" }
    ],
    skillCats: [
      { name: "المبيعات وإدارة الأعمال", icon: "fa-chart-line", skills: [{ label: "إدارة المبيعات والحسابات", value: 92 }, { label: "عمليات مبيعات التجارة الإلكترونية", value: 85 }, { label: "إعداد تقارير المبيعات والتنبؤ", value: 80 }, { label: "التواصل الإقناعي وإشراك العملاء", value: 90 }] },
      { name: "الأدوات الرقمية والذكاء الاصطناعي", icon: "fa-robot", skills: [{ label: "توظيف أدوات الذكاء الاصطناعي", value: 78 }, { label: "تصميم منتجات PWA رقمية", value: 70 }, { label: "معرفة أساسية بـ Power BI", value: 55 }, { label: "معرفة أساسية بأنظمة ERP وSAP", value: 50 }] },
      { name: "المهارات المهنية والشخصية", icon: "fa-people-group", skills: [{ label: "حل مشكلات العملاء", value: 88 }, { label: "المرونة والعمل الجماعي", value: 90 }, { label: "استكشاف الأعطال", value: 82 }] }
    ],
    certsElaraby: ["إدارة الأجيال المختلفة", "حل المشكلات واتخاذ القرار", "إدارة الوقت", "مهارات تفاوض متقدمة", "التعامل مع الشخصيات الصعبة", "إدارة تجربة العملاء", "التفكير التصميمي", "بناء فرق أفضل", "البيع الذكي", "مهارات البيع"],
    certsAlmentor: ["بناء العلامة الشخصية للموظفين", "مهارات النجاح المهني", "كتابة البريد الإلكتروني الاحترافي", "مهارات التسويق الناجح", "هندسة الأوامر (Prompt Engineering)", "عقلية النمو", "تقنية ChatGPT"]
  }
};
