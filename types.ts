export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  role: string;
  channel: string;
  status: 'Currently Airing' | 'Completed';
  description: string;
}

export interface TheatreItem {
  id: string;
  title: string;
  role: string;
  writer?: string;
  highlight?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  category?: string;
  work?: string;
  forText?: string;
  description?: string;
  year?: string;
  type: 'winner' | 'nomination' | 'general';
  isFeatured?: boolean;
}

export interface GalleryItem {
  src: string;
  category: string;
  title: string;
  alt?: string;
}

export interface NavLink {
  name: string;
  href: string;
}