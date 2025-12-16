import { AwardItem, GalleryItem, NavLink, TheatreItem, TimelineItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Filmography', href: '#filmography' },
  { name: 'Theatre', href: '#theatre' },
  { name: 'Awards', href: '#awards' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_IMAGE = 'https://i.ibb.co/d4NYjhbV/IMG-7164.jpg';

export const STATS = [
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Best Actress Awards', value: 80, suffix: '+' },
  { label: 'TV Episodes', value: 1000, suffix: '+' },
  { label: 'Theatrical Plays', value: 10, suffix: '+' },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    year: '2024-2025',
    title: 'Paaru',
    role: 'Damini Kirloskar',
    channel: 'Zee Marathi • 562+ Episodes',
    status: 'Currently Airing',
    description: 'Playing the charismatic and comedic character of Damini, winning hearts with her versatile performance.',
  },
  {
    id: '2',
    year: '2022-2024',
    title: 'Jivachi Hotiya Kahili',
    role: 'Sarita',
    channel: 'Sony Marathi • 314 Episodes',
    status: 'Completed',
    description: 'By portraying the character of Sarita with comic timing, earned recognition among audiences.',
  },
  {
    id: '3',
    year: '2021-2022',
    title: 'Tuzya Rupach Chandana',
    role: 'Renuka',
    channel: 'Colors Marathi • 141 Episodes',
    status: 'Completed',
    description: 'Portrayed the character of Renuka, earning a nomination for Best Supporting Actress.',
  },
  {
    id: '4',
    year: '2020-2021',
    title: 'Karbhari Laybhari',
    role: 'Nisha Pruthvi Suryavanshi',
    channel: 'Zee Marathi • 235 Episodes',
    status: 'Completed',
    description: 'Became a household name with this popular political drama series.',
  },
];

export const THEATRE_DATA: TheatreItem[] = [
  { id: '1', title: 'लोक-कथा ७८', role: 'सावित्री', writer: 'रत्नाकर मतकरी', highlight: 'महाराष्ट्रातील सर्वात लोकप्रिय पात्रांपैकी एक' },
  { id: '2', title: 'कस्तुरा', role: 'कस्तुरा' },
  { id: '3', title: 'गगन दमामा बाजो', role: 'विद्यावती', writer: 'पीयूष मिश्रा', highlight: 'भगत सिंग यांच्या जीवनावर आधारित' },
  { id: '4', title: 'यदा-कदाचित रिटर्न्स', role: 'देवसेना', writer: 'संतोष पवार' },
  { id: '5', title: 'नरशार्दूल राजा संभाजी', role: 'येसूबाई', highlight: 'छत्रपती संभाजी महाराजांवरील ऐतिहासिक नाटक' },
  { id: '6', title: 'नवरा माझ्या मुठीत', role: 'संध्या' },
  { id: '7', title: 'सुनबाई जोरात', role: 'अनघा' },
  { id: '8', title: 'लग्नाची बेडी', role: 'रश्मी' },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: '1',
    title: 'Zee Marathi Award 2024',
    category: 'Best Comedy Actress',
    work: 'Paaru',
    description: 'Won for outstanding comedic performance and exceptional portrayal of the character Damini.',
    type: 'winner',
    year: '2024',
    isFeatured: true,
  },
  {
    id: '4',
    title: '80+ Best Actress Awards',
    forText: 'Won in various state-level drama competitions',
    type: 'winner',
  },
  {
    id: '2',
    title: 'Zee Marathi Award 2025',
    category: 'Best Comedy Actress',
    work: 'Paaru',
    description: 'Nominated for exceptional comedic portrayal of Damini Kirloskar.',
    type: 'nomination',
    year: '2025',
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Color Marathi Awards',
    category: 'Best Supporting Actress',
    work: 'Tuzya Rupach Chandana',
    year: '2021-2022',
    type: 'nomination',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { title: 'Portfolio 1', category: 'Portfolio', src: 'https://i.ibb.co/DDZm0y40/123c94d1-2c31-42ac-ba0b-b8159d4b83c5.jpg', alt: 'Shrutkirti Sawant elegant traditional portrait' },
  { title: 'Portfolio 2', category: 'Portfolio', src: 'https://i.ibb.co/DgfqX9N9/IMG-9382.png', alt: 'Close up fashion shot of Shrutkirti Sawant' },
  { title: 'Portfolio 3', category: 'Portfolio', src: 'https://i.ibb.co/d0WpXNKc/IMG-0644.jpg', alt: 'Shrutkirti Sawant in casual attire' },
  { title: 'Portfolio 4', category: 'Portfolio', src: 'https://i.ibb.co/FqmxpNDd/IMG-3123.jpg', alt: 'Shrutkirti Sawant acting portfolio headshot' },
  { title: 'Portfolio 5', category: 'Portfolio', src: 'https://i.ibb.co/mVxHDyC0/6931c473-98a4-41e0-b781-5f29df7c9e23.jpg', alt: 'Shrutkirti Sawant smiling in yellow traditional dress' },
  { title: 'Portfolio 6', category: 'Portfolio', src: 'https://i.ibb.co/FqKG5pWs/IMG-5206.jpg', alt: 'Shrutkirti Sawant artistic black and white portrait' },
  { title: 'Portfolio 7', category: 'Portfolio', src: 'https://i.ibb.co/PvTnsBTZ/IMG-5207.jpg', alt: 'Shrutkirti Sawant expressive acting pose' },
  { title: 'Portfolio 8', category: 'Portfolio', src: 'https://i.ibb.co/WpGK15Wr/IMG-6804.jpg', alt: 'Shrutkirti Sawant outdoor photoshoot' },
  { title: 'Portfolio 9', category: 'Portfolio', src: 'https://i.ibb.co/V8fK1yX/IMG-9410.png', alt: 'Shrutkirti Sawant modern western look' },
  { title: 'Portfolio 10', category: 'Portfolio', src: 'https://i.ibb.co/LdPCbtpj/IMG-9680.jpg', alt: 'Shrutkirti Sawant candid smile photography' },
  { title: 'Portfolio 11', category: 'Portfolio', src: 'https://i.ibb.co/hqCRq4d/kohinoor-marathi-media-R-Download.jpg', alt: 'Shrutkirti Sawant at Kohinoor Marathi Media event' },
  { title: 'Portfolio 12', category: 'Portfolio', src: 'https://i.ibb.co/v4rMLY4G/kohinoor-marathi-media-R-Download.jpg', alt: 'Shrutkirti Sawant receiving recognition' },
  { title: 'Portfolio 13', category: 'Portfolio', src: 'https://i.ibb.co/bgN44T8J/kohinoor-marathi-media-R-Download.jpg', alt: 'Shrutkirti Sawant posing for media' },
  { title: 'Portfolio 14', category: 'Portfolio', src: 'https://i.ibb.co/RTL5gCZG/IMG-2039.jpg', alt: 'Shrutkirti Sawant dramatic lighting portrait' },
  { title: 'Portfolio 15', category: 'Portfolio', src: 'https://i.ibb.co/C5Hx5CvN/IMG-2233.jpg', alt: 'Shrutkirti Sawant fashion editorial shot' },
  { title: 'Portfolio 16', category: 'Portfolio', src: 'https://i.ibb.co/WNHCDgv6/IMG-2234.jpg', alt: 'Shrutkirti Sawant full length fashion pose' },
  { title: 'Portfolio 17', category: 'Portfolio', src: 'https://i.ibb.co/mVgbgYXk/IMG-3994.jpg', alt: 'Shrutkirti Sawant theatrical costume' },
  { title: 'Portfolio 18', category: 'Portfolio', src: 'https://i.ibb.co/YBYBWmvZ/IMG-7161.jpg', alt: 'Shrutkirti Sawant glamour shot' },
  { title: 'Portfolio 19', category: 'Portfolio', src: 'https://i.ibb.co/tMsJXfFx/IMG-4438.jpg', alt: 'Shrutkirti Sawant simple elegant look' },
  { title: 'Portfolio 20', category: 'Portfolio', src: 'https://i.ibb.co/JFvpspfn/IMG-4440.jpg', alt: 'Shrutkirti Sawant intense acting expression' },
  { title: 'Portfolio 21', category: 'Portfolio', src: 'https://i.ibb.co/4nsrvtcW/IMG-7163.jpg', alt: 'Shrutkirti Sawant portfolio highlight' },
];

export const SKILLS = [
  'Theatre Acting',
  'Television Acting',
  'Film Acting',
  'Comedy',
  'Drama',
  'Character Acting',
  'Method Acting'
];