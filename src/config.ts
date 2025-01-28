export const I18N = {
  language: 'ja',
  textDirection: 'ltr',
};

export const SITE = {
  name: 'Company Name',
  site: 'https://astrowind.vercel.app',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: '',
  company: {
    name: 'Company Name Inc.',
    address: '〒000-0000 東京都...',
    phone: '03-0000-0000',
    email: 'contact@example.com',
    registration: '0000000000',
    foundation: '2024年1月',
  },
  social: {
    twitter: 'https://twitter.com/companyname',
    facebook: 'https://facebook.com/companyname',
    linkedin: 'https://linkedin.com/company/companyname',
  }
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
    default: 'Company Name - あなたのビジネスパートナー',
    template: '%s | Company Name',
  },
  description: {
    default: 'Company Nameは、革新的なソリューションでビジネスの成長を支援します。',
    blog: 'ビジネスの最新トレンドと洞察を提供する企業ブログ。',
    company: '私たちについて - ビジョン、ミッション、そして価値観を共有します。',
    services: 'お客様のビジネスを成功に導くサービス一覧。',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'Company Name',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    handle: '@companyname',
    site: '@companyname',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '',
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
  post: {
    isEnabled: true,
    pathname: 'blog',
    permalink: 'blog/%slug%',
  },
  postsPerPage: 6,
  categoryDefault: 'ビジネス',
  categories: [
    'ビジネス',
    'テクノロジー',
    'マーケティング',
    'イノベーション',
    'サステナビリティ'
  ],
  featuredPosts: [
    {
      title: '業界最新トレンド',
      description: '2024年のビジネストレンドと展望',
      image: '/src/assets/images/blog/trends.jpg',
      category: 'ビジネス'
    }
  ]
};

export const CORPORATE = {
  menu: {
    main: [
      {
        text: '企業情報',
        href: '/company',
        items: [
          { text: '会社概要', href: '/company/about' },
          { text: 'ビジョン・ミッション', href: '/company/vision' },
          { text: '経営陣', href: '/company/management' },
        ],
      },
      {
        text: 'サービス',
        href: '/services',
      },
      {
        text: '事例',
        href: '/cases',
      },
      {
        text: 'ニュース',
        href: '/news',
      },
      {
        text: 'ブログ',
        href: '/blog',
      },
      {
        text: 'お問い合わせ',
        href: '/contact',
      },
    ],
    footer: [
      {
        text: '採用情報',
        href: '/careers',
      },
      {
        text: 'プライバシーポリシー',
        href: '/privacy',
      },
      {
        text: '情報セキュリティ',
        href: '/security',
      },
    ],
  },
};