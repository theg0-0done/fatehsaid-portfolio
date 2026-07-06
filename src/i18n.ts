export type Language = 'en' | 'de' | 'fr';

export const LANGUAGES: { code: Language; label: string; fullLabel: string }[] = [
  { code: 'en', label: 'En', fullLabel: 'English' },
  { code: 'de', label: 'De', fullLabel: 'Deutsch' },
  { code: 'fr', label: 'Fr', fullLabel: 'Français' },
];

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experiences': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Hi, It's",
    'hero.name': 'SAID',
    'hero.role': 'A Full-Stack Developer',

    // About
    'about.tag': '// About Me',
    'about.headline': "I'm a versatile developer who partners with founders to turn ideas into",
    'about.headline2': 'real products.',
    'about.headline3': 'I focus on clear interfaces, sharp decisions, and fast execution.',
    'about.description': "Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.",
    'about.cta': 'See my Work',

    // Experience
    'experience.title': 'Experience.',
    'experience.description': 'A full-stack skill set built across years of shipping real products — from pixel-perfect UIs to scalable backends and cross-platform apps.',
    'experience.frontend': 'Front-End',
    'experience.backend': 'Back-End',
    'experience.mobile': 'Mobile Apps',

    // Projects
    'projects.title': 'Selected Projects.',
    'projects.description': 'A curated selection of my latest work. These previews are fully interactive — go ahead and scroll or click inside them.',
    'projects.featured': 'Featured',
    'projects.openSite': 'Open Full Site',
    'projects.previewUnavailable': 'Preview Unavailable',
    'projects.interactivePreview': 'Interactive Preview',
    'projects.carrental.description': 'A full-featured car rental platform with a sleek booking interface. Browse vehicles by category, compare pricing, and book instantly with a smooth, responsive user experience across all devices.',
    'projects.brothersshop.description': 'A fully customized Shopify e-commerce store with a sleek design, built using Liquid and Vanilla JS for a seamless shopping experience.',
    'projects.datamgt.description': 'A full-featured e-commerce storefront for a Moroccan electronics retailer. Built with a bilingual (FR/EN) interface, real-time product management via Supabase, smooth cart & checkout flows, and order submissions piped directly to Google Sheets.',
    'projects.seqqaya.description': 'An elegant restaurant presentation website. Features a responsive menu layout, online reservation system integration, and a beautiful gallery showcasing the culinary experience.',
    'projects.cinematm.description': 'A premium movie and TV show streaming web platform. Features a modern cinematic UI, auto-playing hero carousels, responsive episode selectors, dynamic TMDB API integration, and an immersive watch experience with advanced content filtering.',

    // Contact
    'contact.heading': 'Reach',
    'contact.heading2': 'Out',
    'contact.subheading': 'Tell me about your idea.',
    'contact.subheading2': "I'll take it from there.",
    'contact.name': 'Your name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },

  de: {
    // Nav
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.experiences': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.greeting': "Hi, ich bin",
    'hero.name': 'SAID',
    'hero.role': 'Ein Full-Stack Entwickler',

    // About
    'about.tag': '// Über mich',
    'about.headline': 'Ich bin ein vielseitiger Entwickler, der mit Gründern zusammenarbeitet, um Ideen in',
    'about.headline2': 'echte Produkte',
    'about.headline3': 'zu verwandeln. Ich setze auf klare Oberflächen, gute Entscheidungen und schnelle Umsetzung.',
    'about.description': 'Ich bringe Ihre Vision schnell und effizient zum Leben — ob Branding, Apps oder Websites — ich liefere reibungslose und effektive Lösungen von Anfang bis Ende.',
    'about.cta': 'Meine Arbeit ansehen',

    // Experience
    'experience.title': 'Erfahrung.',
    'experience.description': 'Ein Full-Stack-Skillset, aufgebaut über Jahre hinweg beim Ausliefern echter Produkte — von pixelgenauen UIs bis hin zu skalierbaren Backends und plattformübergreifenden Apps.',
    'experience.frontend': 'Front-End',
    'experience.backend': 'Back-End',
    'experience.mobile': 'Mobile Apps',

    // Projects
    'projects.title': 'Ausgewählte Projekte.',
    'projects.description': 'Eine kuratierte Auswahl meiner neuesten Arbeiten. Die Vorschauen sind voll interaktiv — scrollen und klicken Sie ruhig hinein.',
    'projects.featured': 'Vorgestellt',
    'projects.openSite': 'Vollständige Seite öffnen',
    'projects.previewUnavailable': 'Vorschau nicht verfügbar',
    'projects.interactivePreview': 'Interaktive Vorschau',
    'projects.carrental.description': 'Eine vollständige Autovermietungsplattform mit einer schlanken Buchungsoberfläche. Fahrzeuge nach Kategorie durchsuchen, Preise vergleichen und sofort buchen — mit einem reibungslosen, responsiven Erlebnis auf allen Geräten.',
    'projects.brothersshop.description': 'Ein vollständig angepasster Shopify E-Commerce-Shop mit elegantem Design, entwickelt mit Liquid und Vanilla JS für ein nahtloses Einkaufserlebnis.',
    'projects.datamgt.description': 'Ein vollständig ausgestatteter E-Commerce-Shop für einen marokkanischen Elektronikhändler. Mit zweisprachiger (FR/EN) Oberfläche, Echtzeit-Produktverwaltung über Supabase, reibungslosem Warenkorb- und Checkout-Flow sowie Bestellübertragung direkt an Google Sheets.',
    'projects.seqqaya.description': 'Eine elegante Restaurant-Präsentationswebsite. Beinhaltet ein responsives Menü-Layout, die Integration eines Online-Reservierungssystems und eine wunderschöne Galerie, die das kulinarische Erlebnis präsentiert.',
    'projects.cinematm.description': 'Eine erstklassige Web-Streaming-Plattform für Filme und Serien. Bietet eine moderne Benutzeroberfläche im Kino-Stil, automatisch abspielende Karussells, eine responsive Episodenauswahl, eine dynamische TMDB-API-Integration und ein fesselndes Seherlebnis.',

    // Contact
    'contact.heading': 'Schreib',
    'contact.heading2': 'mir',
    'contact.subheading': 'Erzähl mir von deiner Idee.',
    'contact.subheading2': 'Den Rest übernehme ich.',
    'contact.name': 'Dein Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experiences': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': "Salut, c'est",
    'hero.name': 'SAID',
    'hero.role': 'Un Développeur Full-Stack',

    // About
    'about.tag': '// À propos de moi',
    'about.headline': "Je suis un développeur polyvalent qui collabore avec des fondateurs pour transformer des idées en",
    'about.headline2': 'produits concrets.',
    'about.headline3': "Je mise sur des interfaces claires, des décisions précises et une exécution rapide.",
    'about.description': "Je donne vie à votre vision rapidement et efficacement — que ce soit le branding, les applications ou les sites web — je livre des solutions fluides et efficaces du début à la fin.",
    'about.cta': 'Voir mon travail',

    // Experience
    'experience.title': 'Expérience.',
    'experience.description': "Un ensemble de compétences full-stack construit au fil des années de livraison de vrais produits — des interfaces pixel-perfect aux backends évolutifs et aux applications multiplateformes.",
    'experience.frontend': 'Front-End',
    'experience.backend': 'Back-End',
    'experience.mobile': 'Apps Mobiles',

    // Projects
    'projects.title': 'Projets Sélectionnés.',
    'projects.description': "Une sélection de mes derniers travaux. Ces aperçus sont entièrement interactifs — n'hésitez pas à scroller ou cliquer dedans.",
    'projects.featured': 'En vedette',
    'projects.openSite': 'Ouvrir le site complet',
    'projects.previewUnavailable': 'Aperçu indisponible',
    'projects.interactivePreview': 'Aperçu interactif',
    'projects.carrental.description': "Une plateforme complète de location de voitures avec une interface de réservation élégante. Parcourez les véhicules par catégorie, comparez les prix et réservez instantanément avec une expérience fluide et responsive sur tous les appareils.",
    'projects.brothersshop.description': "Une boutique e-commerce Shopify entièrement personnalisée avec un design élégant, conçue avec Liquid et Vanilla JS pour une expérience d'achat fluide.",
    'projects.datamgt.description': "Une boutique e-commerce complète pour un revendeur d'électronique marocain. Interface bilingue (FR/EN), gestion des produits en temps réel via Supabase, parcours panier et paiement fluides, et soumission des commandes directement vers Google Sheets.",
    'projects.seqqaya.description': "Un élégant site de présentation de restaurant. Propose une mise en page de menu responsive, l'intégration d'un système de réservation en ligne et une magnifique galerie mettant en valeur l'expérience culinaire.",
    'projects.cinematm.description': "Une plateforme web premium de streaming de films et séries. Propose une interface cinéma moderne, des carrousels d'accueil à lecture automatique, des sélecteurs d'épisodes responsives, une intégration dynamique de l'API TMDB et une expérience de visionnage immersive.",

    // Contact
    'contact.heading': 'Contactez',
    'contact.heading2': 'moi',
    'contact.subheading': 'Parlez-moi de votre idée.',
    'contact.subheading2': "Je m'occupe du reste.",
    'contact.name': 'Votre nom',
    'contact.email': 'E-mail',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
  },
};

export function t(lang: Language, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export function getLanguageFromPath(): Language {
  const path = window.location.pathname.replace(/^\//, '').split('/')[0];
  if (path === 'de' || path === 'fr' || path === 'en') return path;
  return 'en';
}

export function setLanguageInURL(lang: Language): void {
  const hash = window.location.hash;
  window.history.pushState(null, '', `/${lang}${hash}`);
}
