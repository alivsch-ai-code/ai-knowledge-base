// Zentrale Einstellungen. Änderungen hier wirken auf der ganzen Website.

export const site = {
  name: 'Klarwerk',
  tagline: 'KI. Klar gemacht.',
  url: 'https://klarwerk.ai',
  description:
    'Lerne, KI-Automationen einzurichten, die für dich lesen, schreiben und sortieren. Getestete Guides, klare Lernpfade, ohne eine Zeile Code.',
  email: 'hallo@klarwerk.ai',

  // Newsletter: Formular-URL des Anbieters (z. B. Brevo) eintragen.
  // Leer = Demo-Modus, das Formular zeigt nur eine Bestätigung an.
  newsletterAction: '',

  // Pro: Link zur Checkout-Seite der Kursplattform (z. B. ablefy, Memberstack, Steady).
  proCheckoutUrl: '/pro/',
  proPrice: '19 €',

  // Rechtliche Angaben für Impressum und Datenschutz. PLATZHALTER ersetzen.
  legal: {
    owner: '[Vorname Nachname]',
    company: '[Firmenname, Rechtsform]',
    street: '[Straße Hausnummer]',
    city: '[PLZ Ort]',
    country: 'Deutschland',
    phone: '[Telefonnummer]',
    vatId: '[USt-IdNr. gemäß § 27a UStG, falls vorhanden]',
    register: '[Registergericht und Registernummer, falls vorhanden]',
    responsible: '[Vorname Nachname, Anschrift wie oben]',
  },

  social: [
    { label: 'YouTube', href: 'https://youtube.com/@klarwerk' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/klarwerk' },
    { label: 'Instagram', href: 'https://instagram.com/klarwerk' },
  ],
};

export const nav = [
  { label: 'Lernpfade', href: '/lernpfade/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Kurse', href: '/kurse/' },
  { label: 'Prompts', href: '/prompts/' },
  { label: 'Pro', href: '/pro/' },
  { label: 'Über uns', href: '/ueber-uns/' },
];

export const footer = [
  {
    title: 'Lernen',
    links: [
      { label: 'Lernpfade', href: '/lernpfade/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'Video-Kurse', href: '/kurse/' },
      { label: 'Prompt-Bibliothek', href: '/prompts/' },
    ],
  },
  {
    title: 'Themen',
    links: [
      { label: 'Grundlagen', href: '/guides/?kategorie=grundlagen-einrichtung' },
      { label: 'Produktivität & Büro', href: '/guides/?kategorie=produktivitaet-buero' },
      { label: 'Marketing & Vertrieb', href: '/guides/?kategorie=marketing-vertrieb' },
      { label: 'Design & Multimedia', href: '/guides/?kategorie=design-multimedia' },
    ],
  },
  {
    title: 'Klarwerk',
    links: [
      { label: 'Über uns', href: '/ueber-uns/' },
      { label: 'Pro-Mitgliedschaft', href: '/pro/' },
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
];

export const legalLinks = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
  { label: 'AGB', href: '/agb/' },
  { label: 'Widerruf', href: '/widerruf/' },
];

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
