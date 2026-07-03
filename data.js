/* ============================================================
   CONTENT DATA — sourced from CV, bilingual (en/ar)
   admin.html writes overrides to localStorage "portfolio_data_overrides"
   which fully replaces this object if present.
   ============================================================ */
const SITE_DATA = {
  en: {
    experience: [
      {
        role: "Sales Executive", company: "Elaraby Group", period: "2023 – Present", current: true,
        bullets: [
          "Managing client relationships and driving sales to achieve company targets.",
          "Providing tailored product solutions and ensuring a high level of customer satisfaction.",
          "Collaborating with internal teams to optimize sales operations and performance."
        ]
      },
      {
        role: "Sales Officer", company: "B.Tech", period: "June 2022 – 2023",
        bullets: [
          "Promoted company products and achieved consistent sales growth.",
          "Assisted customers in selecting suitable products based on their needs and preferences."
        ]
      },
      {
        role: "Assistant Warehouse Manager", company: "Al-Ansar Marketing", period: "February 2020 – February 2022",
        bullets: [
          "Supervised daily warehouse operations, ensuring inventory accuracy and timely order fulfillment.",
          "Coordinated with suppliers and logistics teams to streamline supply chain activities."
        ]
      },
      {
        role: "Data Entry Specialist", company: "Orascom Construction", period: "2018 – 2019",
        bullets: [
          "Entered and verified project-related data with high accuracy.",
          "Supported the reporting process for construction projects.",
          "Ensured data integrity and compliance with company standards."
        ]
      },
      {
        role: "Accountant", company: "Omega Advertising", period: "2017 – 2018",
        bullets: [
          "Prepared and maintained financial records in compliance with accounting principles.",
          "Collaborated with management to support financial decision-making."
        ]
      }
    ],
    projects: [
      {
        title: "Know Your Product (PWA)",
        desc: "Co-designed and developed a Progressive Web App built to support sales representatives during the sales process with smart selling tools.",
        tags: ["PWA", "UX Design", "Sales Enablement", "No-Code"],
        status: "Shipped", icon: "fa-mobile-screen-button",
        details: "Contributed to the project concept, user experience planning, and interface design — including product presentation, detailed specifications, product comparison features, and customer needs tracking notes."
      },
      {
        title: "AI-Powered Chatbot",
        desc: "Contributing to the development of an AI chatbot focused on smarter, more automated customer engagement.",
        tags: ["AI", "Chatbot", "Workflow Design", "Customer Engagement"],
        status: "In Progress", icon: "fa-robot",
        details: "Focused on idea development, workflow improvement, and creating smarter user interaction experiences to support automated communication."
      }
    ],
    skillCats: [
      { name: "Sales & Business", icon: "fa-chart-line", skills: [
        { label: "Sales & Account Management", value: 92 },
        { label: "E-Commerce Sales Operations", value: 85 },
        { label: "Sales Reporting & Forecasting", value: 80 },
        { label: "Persuasive Communication & Client Engagement", value: 90 }
      ]},
      { name: "Digital & AI Tools", icon: "fa-robot", skills: [
        { label: "AI Tools Utilization & Digital Solutions", value: 78 },
        { label: "PWA & Digital Product Design", value: 70 },
        { label: "Basic Knowledge of Power BI", value: 55 },
        { label: "Basic Knowledge of ERP & SAP Systems", value: 50 }
      ]},
      { name: "Professional & Soft Skills", icon: "fa-people-group", skills: [
        { label: "Customer Issue Resolution", value: 88 },
        { label: "Adaptability & Team Collaboration", value: 90 },
        { label: "Computer Setup & Troubleshooting", value: 82 }
      ]}
    ],
    radarLabels: ["Sales", "AI Tools", "Communication", "Digital Design", "Operations", "Reporting"],
    radarValues: [92, 78, 90, 70, 85, 80],
    certsElaraby: [
      "Managing Different Generations", "Problem Solving & Decision Making", "Time Management",
      "Advanced Negotiation Skills", "Handling Difficult Characters", "Customer Experience Management",
      "Design Thinking", "Building Better Teams", "Smart Selling", "Sales Skills"
    ],
    certsAlmentor: [
      "Personal Branding for Employees", "Career Success Skills", "Professional Email Writing",
      "Successful Marketer Skills", "Prompt Engineering", "Growth Mindset", "ChatGPT Technology"
    ]
  },

  ar: {
    experience: [
      {
        role: "تنفيذي مبيعات", company: "مجموعة العربي", period: "2023 – حتى الآن", current: true,
        bullets: [
          "إدارة علاقات العملاء وتحقيق أهداف المبيعات الخاصة بالشركة.",
          "تقديم حلول منتج مخصصة وضمان مستوى عالٍ من رضا العملاء.",
          "التعاون مع الفرق الداخلية لتحسين عمليات وأداء المبيعات."
        ]
      },
      {
        role: "مسؤول مبيعات", company: "بي تك", period: "يونيو 2022 – 2023",
        bullets: [
          "الترويج لمنتجات الشركة وتحقيق نمو مستمر في المبيعات.",
          "مساعدة العملاء في اختيار المنتجات المناسبة وفقًا لاحتياجاتهم وتفضيلاتهم."
        ]
      },
      {
        role: "مساعد مدير مستودع", company: "الأنصار للتسويق", period: "فبراير 2020 – فبراير 2022",
        bullets: [
          "الإشراف على العمليات اليومية للمستودع وضمان دقة المخزون وتنفيذ الطلبات في وقتها.",
          "التنسيق مع الموردين وفرق اللوجستيات لتبسيط أنشطة سلسلة التوريد."
        ]
      },
      {
        role: "أخصائي إدخال بيانات", company: "أوراسكوم للإنشاءات", period: "2018 – 2019",
        bullets: [
          "إدخال والتحقق من بيانات المشاريع بدقة عالية.",
          "دعم عملية إعداد التقارير الخاصة بمشاريع الإنشاءات.",
          "ضمان سلامة البيانات والالتزام بمعايير الشركة."
        ]
      },
      {
        role: "محاسب", company: "أوميغا للإعلان", period: "2017 – 2018",
        bullets: [
          "إعداد وحفظ السجلات المالية وفقًا للمبادئ المحاسبية.",
          "التعاون مع الإدارة لدعم اتخاذ القرارات المالية."
        ]
      }
    ],
    projects: [
      {
        title: "تطبيق Know Your Product (PWA)",
        desc: "شارك في تصميم وتطوير تطبيق ويب تقدمي (PWA) لدعم مندوبي المبيعات أثناء عملية البيع بأدوات بيع ذكية.",
        tags: ["PWA", "تصميم تجربة المستخدم", "دعم المبيعات", "No-Code"],
        status: "منجز", icon: "fa-mobile-screen-button",
        details: "ساهم في فكرة المشروع وتخطيط تجربة المستخدم وتصميم الواجهة — بما يشمل عرض المنتج والمواصفات التفصيلية وميزات مقارنة المنتجات وملاحظات تتبع احتياجات العملاء."
      },
      {
        title: "روبوت محادثة بالذكاء الاصطناعي",
        desc: "يساهم في تطوير روبوت محادثة بالذكاء الاصطناعي يركز على تفاعل أذكى وأكثر أتمتة مع العملاء.",
        tags: ["ذكاء اصطناعي", "روبوت محادثة", "تصميم سير العمل", "تفاعل العملاء"],
        status: "قيد التنفيذ", icon: "fa-robot",
        details: "التركيز على تطوير الأفكار وتحسين سير العمل وبناء تجارب تفاعل أذكى لدعم التواصل الآلي."
      }
    ],
    skillCats: [
      { name: "المبيعات وإدارة الأعمال", icon: "fa-chart-line", skills: [
        { label: "إدارة المبيعات والحسابات", value: 92 },
        { label: "عمليات مبيعات التجارة الإلكترونية", value: 85 },
        { label: "إعداد تقارير المبيعات والتنبؤ", value: 80 },
        { label: "التواصل الإقناعي وإشراك العملاء", value: 90 }
      ]},
      { name: "الأدوات الرقمية والذكاء الاصطناعي", icon: "fa-robot", skills: [
        { label: "توظيف أدوات الذكاء الاصطناعي والحلول الرقمية", value: 78 },
        { label: "تصميم منتجات PWA رقمية", value: 70 },
        { label: "معرفة أساسية بـ Power BI", value: 55 },
        { label: "معرفة أساسية بأنظمة ERP وSAP", value: 50 }
      ]},
      { name: "المهارات المهنية والشخصية", icon: "fa-people-group", skills: [
        { label: "حل مشكلات العملاء", value: 88 },
        { label: "المرونة والعمل الجماعي", value: 90 },
        { label: "تركيب الحواسيب واستكشاف الأعطال", value: 82 }
      ]}
    ],
    radarLabels: ["المبيعات", "أدوات الذكاء الاصطناعي", "التواصل", "التصميم الرقمي", "العمليات", "التقارير"],
    radarValues: [92, 78, 90, 70, 85, 80],
    certsElaraby: [
      "إدارة الأجيال المختلفة", "حل المشكلات واتخاذ القرار", "إدارة الوقت",
      "مهارات تفاوض متقدمة", "التعامل مع الشخصيات الصعبة", "إدارة تجربة العملاء",
      "التفكير التصميمي", "بناء فرق أفضل", "البيع الذكي", "مهارات البيع"
    ],
    certsAlmentor: [
      "بناء العلامة الشخصية للموظفين", "مهارات النجاح المهني", "كتابة البريد الإلكتروني الاحترافي",
      "مهارات التسويق الناجح", "هندسة الأوامر (Prompt Engineering)", "عقلية النمو", "تقنية ChatGPT"
    ]
  }
};

// Allow admin.html to fully override the content set.
(function applyDataOverrides(){
  try{
    const raw = localStorage.getItem('portfolio_data_overrides');
    if(!raw) return;
    const overrides = JSON.parse(raw);
    for(const locale of Object.keys(overrides)){
      SITE_DATA[locale] = Object.assign({}, SITE_DATA[locale], overrides[locale]);
    }
  }catch(e){ console.warn('data overrides skipped:', e); }
})();
