import stilzoneLogo from '../assets/stilzone_logo.png';
import lesAilesLogo from '../assets/les_ailes_logo.png';
import everlaneLogo from '../assets/everlane_logo.png';
import heroUiImg from '../assets/portfolia_hero_ui.jpg';
export const translations = {
  ENG: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      status: "Frontend & Learning Backend // Open for Work",
      hireMe: "Hire Kamol"
    },
    hero: {
      badge: "✦ FRONTEND DEVELOPER & VIBE CODER 🎧⚡",
      name: "Kamol Bahodirov",
      headline: "Building Modern Web Applications & Sleek User Interfaces.",
      description: "Hi, I'm Kamol Bahodirov — a passionate Frontend Developer and Vibe Coder currently expanding into Backend development. I specialize in building responsive React & TailwindCSS web applications, pixel-perfect UI clones, and interactive digital services.",
      pills: [
        "💻 Frontend: React 19 / Tailwind",
        "⚙️ Backend: Node.js (Learning)",
        "JavaScript (ESNext)",
        "HTML5 & CSS3",
        "Git & GitHub",
        "🎧 Vibe Coding"
      ],
      stats: {
        exp: "Years Experience",
        projects: "Completed Projects",
        satisfaction: "Client Satisfaction",
        lines: "Git Commits"
      },
      ctaProjects: "Explore Projects",
      ctaContact: "Get In Touch",
      ctaResume: "Download CV"
    },
    projects: {
      tag: "My FEATURED PROJECTS",
      title: "Web Applications & UI Clones",
      subtitle: "A showcase of real-world projects created by Kamol Bahodirov, including Stilzone.uz barbershop platform, Les Ailes delivery app, and Everlane 1:1 clone.",
      searchPlaceholder: "Search Kamol's projects or tech stack...",
      all: "All",
      fullstack: "Web Apps",
      ai: "AI & Vibe Apps",
      mobile: "Mobile & Web",
      design: "UI & Tailwind",
      viewDetails: "View Details & Stack",
      modalOverview: "Project Overview",
      modalDeliverables: "Key Features & Deliverables",
      modalTech: "Technologies Used",
      liveDemo: "Live Demo",
      sourceCode: "GitHub Repository",
      items: [
        {
          id: 'proj-stilzone',
          title: 'Stilzone.uz — Barber & Barbershop Booking Platform',
          categoryKey: 'fullstack',
          category: 'Web Platform',
          role: 'Creator & Lead Developer',
          metrics: 'Live Barber Platform',
          image: stilzoneLogo,
          isLogo: true,
          description: 'An individual fullstack web platform for Stilzone.uz — connecting barbers and barbershops with online appointment booking & service catalogs.',
          fullDescription: 'Stilzone.uz is a specialized digital platform for barbershops and professional barbers. It enables clients to explore barber portfolios, choose haircut and beard styling services, select available time slots, and book appointments seamlessly.',
          features: [
            'Online appointment booking & barber schedule management',
            'Interactive barbershop service catalog (haircut, beard styling, care)',
            'Barber profile & portfolio photo gallery showcase',
            'Fast responsive mobile-first UI for instant client booking'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'Node.js (Learning)', 'Express', 'TailwindCSS', 'REST APIs'],
          demoUrl: 'https://www.stilzone.uz/',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-lesailes',
          title: 'Les Ailes — Online Food Delivery Service',
          categoryKey: 'fullstack',
          category: 'Food & Delivery',
          role: 'Fullstack Engineer',
          metrics: 'High Volume Daily Orders',
          image: lesAilesLogo,
          isLogo: true,
          description: 'Online food ordering & delivery platform for the popular "Les Ailes" fast food restaurant chain.',
          fullDescription: 'Developed a comprehensive online delivery service for Les Ailes fast food chain. The system allows users to customize food combos, select delivery locations on interactive maps, calculate delivery fees dynamically, and track order progress in real time.',
          features: [
            'Interactive food item customizer & combo meal builder',
            'Real-time address picker with automated delivery zone calculation',
            'High-throughput backend order processing API',
            'Instant SMS & Telegram order confirmation notifications'
          ],
          tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'REST API'],
          demoUrl: 'https://lesailes.uz',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-everlane',
          title: 'Everlane — 1-to-1 Pixel-Perfect Storefront Clone',
          categoryKey: 'design',
          category: 'UI & Frontend',
          role: 'Frontend Architect',
          metrics: '100% Visual Fidelity',
          image: everlaneLogo,
          isLogo: true,
          description: 'A 1-to-1 pixel-perfect recreation of Everlane (everlane.com) storefront, featuring complex mega-menus & micro-interactions.',
          fullDescription: 'A flagship frontend project demonstrating mastery in pixel-perfect web layout and UX polish. Recreates everlane.com down to exact pixel spacing, luxury typography, multi-level dropdown mega-menus, interactive color/size swatches, and smooth drawer carts.',
          features: [
            '1-to-1 exact visual & structural clone of everlane.com',
            'Multi-level mega-menu navigation with subcategory previews',
            'Interactive product options with size selectors & accordion specs',
            'Fluid mobile gesture drawer & sticky product purchase toolbar'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'CSS Modules', 'TailwindCSS', 'Vite'],
          demoUrl: 'https://www.everlane.com/',
          repoUrl: 'https://github.com/Kamol-F2540'
        }
      ]
    },
    skills: {
      tag: "✦ TECH STACK & CAPABILITIES",
      title: "Frontend Engineering & Learning Stack",
      subtitle: "Mastered frontend UI design, HTML5/CSS3/Tailwind, React 19, and currently learning Node.js & TypeScript.",
      categories: {
        frontend: "Frontend Development (React / JS)",
        backend: "Backend (Currently Learning)",
        styling: "TailwindCSS & Modern UI",
        tools: "Git, GitHub & Web Tools"
      }
    },
    experience: {
      tag: "✦ DEVELOPER JOURNEY",
      title: "Career & Project Experience",
      subtitle: "My journey building real-world web applications, barbershop platforms, delivery services, and UI clones.",
      items: [
        {
          period: '2024 — PRESENT',
          role: 'Fullstack & Web Developer',
          company: 'Stilzone.uz & Independent Projects',
          location: 'Tashkent, Uzbekistan',
          description: 'Engineering web applications, barbershop booking platforms, and high-performance digital services.',
          achievements: [
            'Individually created and launched Stilzone.uz — a web platform connecting barbers and barbershops with online appointment booking',
            'Engineered an exact 1-to-1 pixel-perfect clone of Everlane storefront featuring complex mega-menus and interactive product galleries',
            'Optimized React 19 web rendering, achieving sub-second page loading speeds'
          ]
        },
        {
          period: '2023 — 2024',
          role: 'Fullstack Web Engineer',
          company: 'Les Ailes Delivery Project',
          location: 'Tashkent, Uzbekistan',
          description: 'Built online food ordering and delivery web application for Les Ailes fast food restaurant chain.',
          achievements: [
            'Developed interactive food combo builder & custom item modifier selections',
            'Implemented real-time delivery location picker & dynamic fee calculator based on distance zones',
            'Built Node.js REST API backend to process orders during peak hours'
          ]
        },
        {
          period: '2022 — 2023',
          role: 'Frontend & Vibe Coding Specialist',
          company: 'Web Studio & Client Projects',
          location: 'Tashkent, Uzbekistan',
          description: 'Created custom responsive user interfaces, API integrations, and modern client web applications.',
          achievements: [
            'Delivered 15+ client web projects on time with high satisfaction rate',
            'Mastered modern Vibe Coding workflows to accelerate development velocity',
            'Implemented responsive TailwindCSS & glassmorphic UI design systems'
          ]
        }
      ]
    },
    contact: {
      tag: "✦ CONNECT WITH ME",
      title: "Let's Build Your Next Web Project!",
      subtitle: "Need a modern React web app, barbershop platform, delivery service, or pixel-perfect UI clone? Get in touch with Kamol!",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      serviceLabel: "Project Type",
      servicesList: ["Frontend Web App", "Barbershop / Barber Booking Platform", "Food Delivery Service", "1:1 Web UI Clone", "Node.js REST API (Basic)"],
      budgetLabel: "Budget / Offer Range",
      messageLabel: "Your Message for Kamol",
      submitBtn: "Send Message to Kamol",
      successTitle: "Message Received!",
      successDesc: "Thanks for reaching out! Kamol will reply to your message within 24 hours.",
      sendAnother: "Send Another Message"
    },
    footer: {
      badge: "Open for Projects",
      tagline: "Ready to bring your next idea to life?",
      subtitle: "From pixel-perfect UI clones to full React web apps — let's craft something remarkable together.",
      cta: "Start a Project",
      quickLinks: "Quick Links",
      connect: "Connect",
      brandDesc: "Frontend Developer & Vibe Coder building modern, high-performance web experiences.",
      status: "Available for freelance",
      builtWith: "Crafted with",
      backToTop: "Back To Top",
      copyright: "© 2026 Kamol Bahodirov. Frontend Developer & Vibe Coder."
    }
  },

  RUS: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      skills: "Навыки",
      experience: "Опыт",
      contact: "Контакты",
      status: "Frontend & Изучаю Backend // Открыт к заказам",
      hireMe: "Нанять Камола"
    },
    hero: {
      badge: "✦ FRONTEND РАЗРАБОТЧИК И VIBE CODER 🎧⚡",
      name: "Камол Баходиров",
      headline: "Разработка современных веб-приложений и стильных интерфейсов.",
      description: "Привет, я Камол Баходиров — Frontend разработчик и Vibe Coder, активно изучающий Backend. Специализируюсь на создании адаптивных веб-приложений на React и TailwindCSS, точных UI-клонов и цифровых сервисов.",
      pills: [
        "💻 Frontend: React 19 / Tailwind",
        "⚙️ Backend: Node.js (Изучаю)",
        "JavaScript (ESNext)",
        "HTML5 & CSS3",
        "Git & GitHub",
        "🎧 Vibe Кодинг"
      ],
      stats: {
        exp: "Лет опыта",
        projects: "Готовых проектов",
        satisfaction: "Удовлетворенность",
        lines: "Коммитов на GitHub"
      },
      ctaProjects: "Смотреть проекты",
      ctaContact: "Связаться со мной",
      ctaResume: "Скачать резюме"
    },
    projects: {
      tag: "✦ ПРОЕКТЫ КАМОЛА",
      title: "Веб-приложения и UI клоны",
      subtitle: "Реальные проекты Камола Баходирова: платформа для барберов Stilzone.uz, сервис доставки Les Ailes и 1-в-1 клон Everlane.",
      searchPlaceholder: "Поиск проектов или технологий...",
      all: "Все",
      fullstack: "Веб-платформы",
      ai: "ИИ и Vibe приложения",
      mobile: "Мобильные и Веб",
      design: "UI и Tailwind",
      viewDetails: "Детали и стек",
      modalOverview: "Обзор проекта",
      modalDeliverables: "Ключевые возможности",
      modalTech: "Использованные технологии",
      liveDemo: "Демоверсия",
      sourceCode: "Код на GitHub",
      items: [
        {
          id: 'proj-stilzone',
          title: 'Stilzone.uz — Платформа для барберов и барбершопов',
          categoryKey: 'fullstack',
          category: 'Веб-платформа',
          role: 'Создатель и Lead Developer',
          metrics: 'Платформа для барберов',
          image: stilzoneLogo,
          isLogo: true,
          description: 'Индивидуальная fullstack веб-платформа для Stilzone.uz — онлайн-запись к барберам, каталог услуг и барбершопов.',
          fullDescription: 'Stilzone.uz — специализированная веб-платформа для барбершопов и мастеров. Позволяет клиентам просматривать портфолио барберов, выбирать услуги стрижки и ухода за бородой, бронировать время и управлять записью.',
          features: [
            'Онлайн-запись и график работы мастеров-барберов',
            'Каталог услуг барбершопов (стрижка, уход за бородой, моделирование)',
            'Портфолио мастеров и галерея выполненных работ',
            'Быстрый мобильный интерфейс для моментального бронирования'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'Node.js (Изучаю)', 'Express', 'TailwindCSS', 'REST APIs'],
          demoUrl: 'https://www.stilzone.uz/',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-lesailes',
          title: 'Les Ailes — Сервис онлайн-доставки еды',
          categoryKey: 'fullstack',
          category: 'Доставка еды',
          role: 'Fullstack Инженер',
          metrics: 'Высокий поток заказов',
          image: lesAilesLogo,
          isLogo: true,
          description: 'Веб-приложение для заказа и доставки еды для сети ресторанов быстрого питания "Les Ailes".',
          fullDescription: 'Разработан онлайн-сервис доставки для сети Les Ailes. Система позволяет клиентам собирать комбо-наборы, выбирать адрес доставки на карте, автоматически рассчитывать стоимость доставки и отслеживать статус заказа.',
          features: [
            'Интерактивный конструктор комбо-наборов и выбор соусов/добавок',
            'Выбор адреса на карте с автоматическим расчетом зоны доставки',
            'Backend API для обработки заказов',
            'Мгновенные уведомления о статусе заказа через SMS и Telegram'
          ],
          tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'REST API'],
          demoUrl: 'https://lesailes.uz',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-everlane',
          title: 'Everlane — 1-в-1 Клон премиум магазина',
          categoryKey: 'design',
          category: 'UI и Frontend',
          role: 'Frontend Архитектор',
          metrics: '100% Точность дизайна',
          image: everlaneLogo,
          isLogo: true,
          description: 'Пиксельно точный 1-в-1 клон магазина Everlane (everlane.com) с мега-меню и микро-анимациями.',
          fullDescription: 'Флагманский фронтенд проект, демонстрирующий владение пиксельно точной версткой. Воссоздает everlane.com до мельчайших деталей: выпадающие мега-меню, интерактивные переключатели размеров/цветов и выдвижная корзина.',
          features: [
            'Точное 1-в-1 воспроизведение дизайна и структуры everlane.com',
            'Многоуровневая навигация мега-меню с превью категорий',
            'Интерактивные карточки товаров с выбором размеров и характеристиками',
            'Плавная мобильная корзина-выдвижка и зафиксированная панель покупки'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'CSS Modules', 'TailwindCSS', 'Vite'],
          demoUrl: 'https://www.everlane.com/',
          repoUrl: 'https://github.com/Kamol-F2540'
        }
      ]
    },
    skills: {
      tag: "✦ СТЕК И НАВЫКИ",
      title: "Frontend навыки и изучаемый стек",
      subtitle: "Отличное владение Frontend UI, HTML5/CSS3/Tailwind, React 19 и изучение Node.js с TypeScript.",
      categories: {
        frontend: "Frontend Разработка (React / JS)",
        backend: "Backend (В процессе изучения)",
        styling: "TailwindCSS и Стили",
        tools: "Git, GitHub и Инструменты"
      }
    },
    experience: {
      tag: "✦ ПУТЬ РАЗРАБОТЧИКА",
      title: "Опыт работы и проекты",
      subtitle: "Мой путь в веб-разработке: создание платформ для барберов, сервисов доставки и UI клонов.",
      items: [
        {
          period: '2024 — НАСТОЯЩЕЕ ВРЕМЯ',
          role: 'Fullstack и Веб-разработчик',
          company: 'Stilzone.uz и Независимые проекты',
          location: 'Ташкент, Узбекистан',
          description: 'Разработка веб-приложений, платформ онлайн-записи для барбершопов и сервисов.',
          achievements: [
            'Индивидуально создал и запустил Stilzone.uz — веб-платформу для барберов и барбершопов с онлайн-записью',
            'Создал точнейший 1-в-1 клон магазина Everlane с многоуровневым мега-меню и галереей товаров',
            'Оптимизировал производительность React 19, сократив время загрузки страниц'
          ]
        },
        {
          period: '2023 — 2024',
          role: 'Fullstack Инженер',
          company: 'Проект доставки Les Ailes',
          location: 'Ташкент, Узбекистан',
          description: 'Создание веб-сервиса заказа и доставки еды для сети ресторанов быстрого питания Les Ailes.',
          achievements: [
            'Разработал конструктор комбо-наборов и выбор соусов/добавок',
            'Внедрил выбор адреса на карте с динамическим расчетом стоимости доставки по зонам',
            'Построил Node.js REST API backend для обработки заказов'
          ]
        },
        {
          period: '2022 — 2023',
          role: 'Frontend и Vibe Coding Специалист',
          company: 'Веб-Студия и Клиентские проекты',
          location: 'Ташкент, Узбекистан',
          description: 'Создание адаптивных интерфейсов, интеграция API и разработка клиентских веб-сайтов.',
          achievements: [
            'Успешно реализовал 15+ клиентских проектов в срок с высокой оценкой качества',
            'Освоил методы Vibe Coding для ускорения разработки в 3 раза',
            'Внедрил дизайн-системы на TailwindCSS с эффектами glassmorphism'
          ]
        }
      ]
    },
    contact: {
      tag: "✦ СВЯЗАТЬСЯ С МНОЙ", 
      title: "Давайте создадим ваш следующий веб-проект!",
      subtitle: "Нужно современное веб-приложение на React, платформа для барбершопа или клон интерфейса? Свяжитесь с Камолом!",
      nameLabel: "Ваше имя",
      emailLabel: "Электронная почта",
      serviceLabel: "Тип проекта",
      servicesList: ["Frontend Веб-приложение", "Платформа для барберов / Барбершопов", "Сервис доставки еды", "1-в-1 Клон UI интерфейса", "Node.js REST API (Базовый)"],
      budgetLabel: "Ориентировочный бюджет",
      messageLabel: "Ваше сообщение",
      submitBtn: "Отправить сообщение Камолу",
      successTitle: "Сообщение отправлено!",
      successDesc: "Спасибо за обращение! Камол ответит вам в течение 24 часов.",
      sendAnother: "Отправить еще сообщение"
    },
    footer: {
      badge: "Открыт к проектам",
      tagline: "Готов воплотить вашу следующую идею?",
      subtitle: "От пиксель-перфект UI-клонов до полноценных React-приложений — давайте создадим что-то выдающееся.",
      cta: "Начать проект",
      quickLinks: "Навигация",
      connect: "Связаться",
      brandDesc: "Frontend разработчик & Vibe Coder, создающий современные веб-приложения.",
      status: "Доступен для фриланса",
      builtWith: "Сделано с",
      backToTop: "Наверх",
      copyright: "© 2026 Камол Баходиров. Frontend Разработчик & Vibe Coder."
    }
  },

  UZB: {
    nav: {
      about: "Men haqimda",
      projects: "Loyihalar",
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      contact: "Aloqa",
      status: "Frontend & Backend o'rganmoqdaman // Ish uchun ochiq",
      hireMe: "Kamolni yollash"
    },
    hero: {
      badge: "✦ FRONTEND DASTURCHI VA VIBE CODER 🎧⚡",
      name: "Kamol Bahodirov",
      headline: "Zamonaviy veb-ilovalar va qulay interfeyslarni yaratish.",
      description: "Salom, men Kamol Bahodirov — Frontend dasturchi va Vibe Coderman, hozirda Backend yo'nalishini chuqurroq o'rganmoqdaman. React va TailwindCSS da moslashuvchan veb-ilovalar hamda piksel aniqligidagi UI nusxalarini yaratishga ixtisoslashganman.",
      pills: [
        "💻 Frontend: React 19 / Tailwind",
        "⚙️ Backend: Node.js (O'rganmoqdaman)",
        "JavaScript (ESNext)",
        "HTML5 & CSS3",
        "Git & GitHub",
        "🎧 Vibe Dasturlash"
      ],
      stats: {
        exp: "Yillik tajriba",
        projects: "Tugallangan loyihalar",
        satisfaction: "Mijozlar mamnuniyati",
        lines: "GitHub kommitlari"
      },
      ctaProjects: "Loyihalarni ko'rish",
      ctaContact: "Bog'lanish",
      ctaResume: "Rezyume yuklash"
    },
    projects: {
      tag: "✦ MENING LOYIHALARIM",
      title: "Veb-ilovalar va UI Klonlar",
      subtitle: "Kamol Bahodirov tomonidan yaratilgan haqiqiy loyihalar: Stilzone.uz barbershop platformasi, Les Ailes yetkazib berish xizmati va Everlane 1:1 kloni.",
      searchPlaceholder: "Loyiha yoki texnologiyani qidirish...",
      all: "Barchasi",
      fullstack: "Veb Platformalar",
      ai: "AI va Vibe ilovalar",
      mobile: "Mobil va Veb",
      design: "UI va Tailwind",
      viewDetails: "Batafsil ko'rish",
      modalOverview: "Loyiha tavsifi",
      modalDeliverables: "Asosiy imkoniyatlar",
      modalTech: "Ishlatilgan texnologiyalar",
      liveDemo: "Jonli demo",
      sourceCode: "GitHub kodi",
      items: [
        {
          id: 'proj-stilzone',
          title: 'Stilzone.uz — Barbershop va sartroshlar platformasi',
          categoryKey: 'fullstack',
          category: 'Veb Platforma',
          role: 'Muallif va Lead Dasturchi',
          metrics: 'Sartroshlar Platformasi',
          image: stilzoneLogo,
          isLogo: true,
          description: 'Stilzone.uz uchun yaratilgan fullstack veb-platforma — sartroshlar va barbershoplar uchun onlayn navbat olish hamda xizmatlar katalogi.',
          fullDescription: 'Stilzone.uz — barbershoplar va professional sartroshlar uchun maxsus veb-platforma. Mijozlarga sartroshlar ishlarini ko\'rish, soch va soqol tarash xizmatlarini tanlash, qulay vaqtga onlayn yozilish imkonini beradi.',
          features: [
            'Onlayn navbat yozilish va sartroshlar ish grafigi',
            'Barbershop xizmatlari katalogi (soch va soqol parvarishi)',
            'Sartroshlar profili va foto ishlar galereyasi',
            'Mijozlar uchun qulay va tezkor mobil interfeys'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'Node.js (O\'rganmoqdaman)', 'Express', 'TailwindCSS', 'REST APIs'],
          demoUrl: 'https://www.stilzone.uz/',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-lesailes',
          title: 'Les Ailes — Onlayn taom yetkazib berish xizmati',
          categoryKey: 'fullstack',
          category: 'Taom yetkazib berish',
          role: 'Fullstack Muhandis',
          metrics: 'Katta hajmdagi buyurtmalar',
          image: lesAilesLogo,
          isLogo: true,
          description: '"Les Ailes" fast food restoranlar tarmog\'i uchun taom buyurtma qilish va yetkazib berish veb-ilovasi.',
          fullDescription: 'Les Ailes tarmog\'i uchun onlayn yetkazib berish xizmati ishlab chiqilgan. Tizim mijozlarga kombo taomlarni yig\'ish, xaritada manzilni tanlash, yetkazib berish narxini hisoblash va buyurtma holatini kuzatish imkonini beradi.',
          features: [
            'Kombo taomlar va qo\'shimchalarni tanlash konstruktori',
            'Xaritada manzilni belgilash va avtomatik narx hisoblash',
            'Buyurtmalarni qayta ishlovchi backend API',
            'SMS va Telegram orqali xabar berish tizimi'
          ],
          tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'REST API'],
          demoUrl: 'https://lesailes.uz',
          repoUrl: 'https://github.com/Kamol-F2540'
        },
        {
          id: 'proj-everlane',
          title: 'Everlane — 1-ga-1 Mukammal Kloni',
          categoryKey: 'design',
          category: 'UI va Frontend',
          role: 'Frontend Arxitektor',
          metrics: '100% Aniq Dizayn',
          image: everlaneLogo,
          isLogo: true,
          description: 'Everlane (everlane.com) saytining 1-ga-1 piksel aniqlikdagi kloni, mega-menyu va interaktiv interfeys bilan.',
          fullDescription: 'Frontend mahoratini ko\'rsatuvchi loyiha: everlane.com dizaynini barcha detallarigacha, mega-menyular, o\'lcham va rang tanlash menyulari hamda qulay savat bilan 1-ga-1 qayta yaratilgan.',
          features: [
            'Everlane.com saytining 1-ga-1 aniq nusxasi',
            'Ko\'p darajali mega-menyu navigatsiyasi',
            'Mahsulot parametrlarini tanlash va ko\'rish bo\'limlari',
            'Moslashuvchan mobil savat va xarid qilish paneli'
          ],
          tech: ['React 19', 'JavaScript (ESNext)', 'CSS Modules', 'TailwindCSS', 'Vite'],
          demoUrl: 'https://www.everlane.com/',
          repoUrl: 'https://github.com/Kamol-F2540'
        }
      ]
    },
    skills: {
      tag: "✦ MENING KO'NIKMALARIM",
      title: "Frontend ko'nikmalar va o'rganilayotgan texnologiyalar",
      subtitle: "Frontend UI dizayni, HTML5/CSS3/Tailwind, React 19 va hozirda o'rganilayotgan Node.js hamda TypeScript.",
      categories: {
        frontend: "Frontend Dasturlash (React / JS)",
        backend: "Backend (O'rganilmoqda)",
        styling: "TailwindCSS va Stilizatsiya",
        tools: "Git, GitHub va Vositalar"
      }
    },
    experience: {
      tag: "✦ DASTURCHILIK YO'LI",
      title: "Tajriba va Loyihalar Yo'li",
      subtitle: "Veb-muhandislik, barbershop platformalari, yetkazib berish xizmatlari va UI klonlar yaratish tajribam.",
      items: [
        {
          period: '2024 — HOZIRGACHA',
          role: 'Fullstack va Veb Dasturchi',
          company: 'Stilzone.uz va Mustaqil Loyihalar',
          location: 'Toshkent, O\'zbekiston',
          description: 'Veb-ilovalar, barbershoplar uchun onlayn navbat platformalari va raqamli xizmatlarni yaratish.',
          achievements: [
            'Mustaqil ravishda Stilzone.uz — barbershop va sartroshlar uchun onlayn navbat platformasini yaratdim va ishga tushirdim',
            'Everlane onlayn do\'konining 1-ga-1 mukammal klonini ishlab chiqdim',
            'React 19 sahifalar yuklanish tezligini oshirdim'
          ]
        },
        {
          period: '2023 — 2024',
          role: 'Fullstack Veb Muhandis',
          company: 'Les Ailes Yetkazib Berish Loyihasi',
          location: 'Toshkent, O\'zbekiston',
          description: 'Les Ailes fast food restoranlar tarmog\'i uchun taom buyurtma qilish va yetkazib berish xizmatini yaratdim.',
          achievements: [
            'Kombo taomlar va qo\'shimchalarni tanlash konstruktorini yaratdim',
            'Xaritada joylashuvni belgilash va yetkazib berish zonasiga qarab narx hisoblashni joriy etdim',
            'Node.js REST API backend tizimini qurdik'
          ]
        },
        {
          period: '2022 — 2023',
          role: 'Frontend va Vibe Coding Mutaxassisi',
          company: 'Veb-Studiya va Mijoz Loyihalari',
          location: 'Toshkent, O\'zbekiston',
          description: 'Moslashuvchan foydalanuvchi interfeyslari va mijoz veb-saytlarini yaratish.',
          achievements: [
            '15 dan ortiq mijoz loyihalarini o\'z vaqtida va a\'lo sifatda topshirdim',
            'Dasturlash tezligini 3 baravarga oshiruvchi Vibe Coding usullarini egalladim',
            'TailwindCSS va glassmorphism interfeys tizimlarini yaratdim'
          ]
        }
      ]
    },
    contact: {
      tag: "✦ MEN BILAN BOG'LANING",
      title: "Yangi veb-loyihangizni birgalikda yarataylik!",
      subtitle: "React veb-ilova, barbershop platformasi yoki interfeys kloni kerakmi? Kamol bilan bog'laning!",
      nameLabel: "Ismingiz",
      emailLabel: "Elektron pochta",
      serviceLabel: "Loyiha turi",
      servicesList: ["Frontend Veb-ilova", "Barbershop / Sartroshlar Platformasi", "Taom Yetkazib Berish Xizmati", "1-ga-1 UI Kloni", "Node.js REST API (Boshlang'ich)"],
      budgetLabel: "Byudjet / Taklif",
      messageLabel: "Xabaringiz",
      submitBtn: "Kamolga xabar yuborish",
      successTitle: "Xabar qabul qilindi!",
      successDesc: "Murojaatingiz uchun rahmat! Kamol 24 soat ichida javob beradi.",
      sendAnother: "Yana xabar yuborish"
    },
    footer: {
      badge: "Loyihalar uchun ochiq",
      tagline: "Keyingi g'oyangizni hayotga o'tkazishga tayyormisiz?",
      subtitle: "Pikselli UI klonlardan to'liq React ilovalargacha — birgalikda ajoyib narsa yaratamiz.",
      cta: "Loyihani boshlash",
      quickLinks: "Tezkor havolalar",
      connect: "Bog'lanish",
      brandDesc: "Zamonaviy va yuqori samarali veb-tajribalar yaratuvchi Frontend dasturchi & Vibe Coder.",
      status: "Frilans uchun ochiq",
      builtWith: "Yaratilgan",
      backToTop: "Yuqoriga",
      copyright: "© 2026 Kamol Bahodirov. Frontend Dasturchi & Vibe Coder."
    }
  }
};
