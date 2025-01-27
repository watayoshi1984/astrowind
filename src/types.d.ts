export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
  type?: string;
  breadcrumb?: Array<{
    text: string;
    href?: string;
  }>;
  publishDate?: string;  // publishedDateの代わりにpublishDateを使用
  updateDate?: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description?: string;
  image?: string;
  publishDate: string;
  updateDate?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;
  metadata?: MetaData;
  draft?: boolean;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface SocialLink {
  icon?: string;
  href?: string;
  label?: string;
}

export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface ActionLink extends Link {
  type?: string;
  targetBlank?: boolean;
  class?: string;
}

export interface MenuLink extends Link {
  links?: Array<Link>;
}

export interface Button {
  title: string;
  type?: string;
  class?: string;
}

export interface Tab {
  title: string;
  link?: string;
  icon?: string;
}

export interface MenuItem {
  text?: string;
  icon?: string;
  href?: string;
  ariaLabel?: string;
  type?: string;
  targetBlank?: boolean;
  class?: string;
  links?: Array<MenuItem>;
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: ActionLink;
  image?: Image;
}

export interface Price {
  title: string;
  subtitle?: string;
  description?: string;
  price: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: ActionLink;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}
