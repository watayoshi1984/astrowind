export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const SITE = {
  name: 'AstroWind',
  site: 'https://astrowind.vercel.app',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: '',
};

export const UI = {
  theme: 'system',
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: undefined,
      partytown: true,
    },
    matomo: {
      enabled: true,
      url: '//matomo.a2x2z.com/',
      siteId: '2',
    },
  },
};

export const METADATA = {
  title: {
    default: 'AstroWind Template',
    template: '%s — AstroWind',
  },
  description: 'AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'AstroWind',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    handle: '@onwidget',
    site: '@onwidget',
    cardType: 'summary_large_image',
  },
};

export const APP_BLOG = {
  isEnabled: true,
  isRelatedPostsEnabled: true,
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  post: {
    isEnabled: true,
    pathname: 'blog',
    permalink: 'blog/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: true,
      follow: true,
    },
  },
  postsPerPage: 6,
}; 