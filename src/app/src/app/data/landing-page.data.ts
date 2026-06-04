import { AboutData, ContactData, feedback, FooterData, HeroData, ProcessStep } from '../models/landing-page.model';

export const HERO_DATA: HeroData = {
  title: 'assets/images/title.png',
  titleLine1Blue: 'Innovative',
  titleLine1Italic: ' Design &',
  titleLine2Italic: 'Digital ',
  titleLine2Blue: 'Solutions for Brands',
  subtext:
    'Every Brand Has a Story.We design, shape, and tell stories that help brands stand out, connect, and grow.',
  buttonText: 'Stories by',
  storiesimg: 'assets/logos/storiesby.png',
  bgimg: 'assets/images/hero-bg.png',
  leftSticker: 'assets/images/sticker-left.png',
  rightSticker: 'assets/images/sticker-right.png'
};

export const POSTER_IMAGES: string[] = [
  'assets/images/Poster1.png',
  'assets/images/Poster3.png',
  'assets/images/Poster4.png',
  'assets/images/Poster5.png',
  'assets/images/Poster6.png',
  'assets/images/Poster7.png',
  'assets/images/Poster8.png',
  'assets/images/Poster9.png',
  'assets/images/Poster10.png',
  'assets/images/Poster11.png',
  'assets/images/Poster12.png',
  'assets/images/Poster14.png',
  'assets/images/Poster15.png',
  'assets/images/Poster16.png',
  'assets/images/Poster17.png',
  'assets/images/Poster18.png',
  'assets/images/Poster19.png',
  'assets/images/Poster23.png',
  'assets/images/Poster24.png',
  'assets/images/Poster26.png',
];

export const BRAND_LOGOS: string[] = [
  'assets/logos/logo1.png',
  'assets/logos/logo8.png',
  'assets/logos/logo7.png',
  'assets/logos/logo6.png',
  'assets/logos/logo5.png',
  'assets/logos/logo4.png',
  'assets/logos/logo3.png',
  'assets/logos/logo2.png',
];

export const STORY_PILLS_LEFT = [
  {
    label: 'Social Media Marketing',
    icon: 'assets/icons/social-media.png'
  },
  {
    label: 'Content Marketing',
    icon: 'assets/icons/content-marketing.png'
  },
  {
    label: 'Influencer Marketing',
    icon: 'assets/icons/influencer.png'
  }
];

export const STORY_PILLS_RIGHT = [
  {
    label: 'SEO Optimization',
    icon: 'assets/icons/seo.png'
  },
  {
    label: 'Website Design',
    icon: 'assets/icons/web-design.png'
  },
  {
    label: 'Website Development',
    icon: 'assets/icons/web-development.png'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNo: 1,
    title: 'Discover',
    description: 'We understand your brand, audience and goals.',
    image: 'assets/images/discover.png',
    tiltClass: 'tilt-left'
  },
  {
    stepNo: 2,
    title: 'Design',
    description: 'We translate ideas into strong visuals and experiences.',
    image: 'assets/images/design.png',
    tiltClass: 'center-card'
  },
  {
    stepNo: 3,
    title: 'Deliver',
    description: 'We launch, refine, and support your growth journey.',
    image: 'assets/images/deliver.png',
    tiltClass: 'tilt-right'
  }
];

export const PORTFOLIO_ITEMS = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1
}));

export interface AboutPerson {
  image: string;
  note: string;
  role: string;
  name: string;
  paragraph1: string;
  paragraph2: string;
  quote: string;
}

export const ABOUT_DATA: AboutPerson[] = [
  {
    image: 'assets/images/founder.png',
    note: 'Founder Spotlight',
    role: 'Founder & Brand Director',
    name: 'Anandh Ravikumar',
    paragraph1: 'The Brandzstory began as a small freelance journey driven by passion for design and storytelling. What started with creating visuals and digital experiences for a few brands soon grew into something bigger. Through trust, consistency, and results, we evolved into a full-service digital marketing agency. ',
    paragraph2:
      ' Today, The Brandzstory partners with businesses to craft meaningful brand identities, engaging digital experiences, and growth-focused marketing strategies all rooted in one belief: every brand deserves a story that connects and converts.',
    quote: 'Great brands are built on great stories.'
  },

  {
    image: 'assets/images/director.png',
    note: 'Director Spotlight',
    role: 'Production Director',
    name: 'Naveen Sanmugam',
    paragraph1:
      'The Brandzstory journey grew stronger with Naveen joining the leadership team, bringing years of professional experience, strategic thinking, and operational excellence. After a successful career in the IT industry, he stepped into the creative and business world with a vision to build impactful brands and meaningful client relationships.',
    paragraph2:
      'With a strong focus on growth, client support, and business development, Naveen plays a key role in strengthening the agency’s direction and expanding its capabilities. His leadership helps ensure every project is handled with professionalism, creativity, and long-term vision.',
    quote: 'Strong leadership builds stronger brands.'
  }
];


export const VALUES_LIST: string[] = [
  'Strategy-led design decisions',
  'Clean, modern, premium aesthetics',
  'Fast turnaround & clear communication',
  'Focus on brand growth, not just visuals'
];

export const CONTACT_DATA: ContactData = {
  title: 'Contact Information',
  description:
    "Whether you have a specific project in mind or just want to explore possibilities, we're here to listen.",
  instagram: 'thebrandzstory',
  email: 'brandzstory@gmail.com',
  phone: '+91 87548 02445'
};

export const FOOTER_DATA: FooterData = {
  title: 'The Brandz Story',
  description:
    'Every brand has a story worth telling. At The Brandzstory, we believe strong brands are built on clarity, emotion, and purpose. Our role is to shape those stories through thoughtful design, engaging visuals, and strategic marketing that helps brands connect, grow, and stand out.',
  email: 'thebrandzstory@gmail.com',
  instagram: 'thebrandzstory',
  phone: '+91 87548 02445',
  copyright: '© 2026 The Brandz Story. All rights reserved.',
  privacyPolicy: 'Privacy Policy',
  termsOfService: 'Terms of Service',
  image: 'assets/images/footer-image.png'
};

export const FEEDBACK_DATA: feedback[] = [

  {
    text: `"The Brandzstory helped Rasikas Restaurant grow our online presence with creative content and smart marketing. We saw better engagement, more inquiries, and increased customer walk-ins. A reliable and result-driven digital marketing team."`,
    company: 'Rasikas Restaurant',
    type: 'Success Story',
    logo: 'assets/logos/logo1.png',
    align: 'left'
  },
  {
    text: `"Thanks to The Brandzstory, Hillside Restaurant’s social media reach and customer engagement improved significantly. Their creative approach and consistent support helped convert online views into real customers."`,
    company: 'Hillside MultiCuisine Restaurant',
    type: 'Success Story',
    logo: 'assets/logos/logo7.png',
    align: 'right'
  }

];


export const DIRECTOR_DATA = [{
  subtitle: 'Director Spotlight',
  name: 'Naveen Sanmugam',
  role: 'Managing Director',
  description: `The Brandzstory journey grew stronger with Naveen joining the leadership team, bringing years of professional experience, strategic thinking, and operational excellence. After a successful career in the IT industry, he stepped into the creative and business world with a vision to build impactful brands and meaningful client relationships.
With a strong focus on growth, client support, and business development, Navven plays a key role in strengthening the agency’s direction and expanding its capabilities. His leadership helps ensure every project is handled with professionalism, creativity, and long-term vision.`,
  image: 'assets/images/director.jpg',
  quote: 'Strong leadership builds stronger brands.'
},
{
  subtitle: 'Founfer Spotlight',
  name: 'Anandh Ravikumar',
  role: 'Founder & Brand Director',
  description: `The Brandzstory began as a small freelance journey driven by passion for design and storytelling. What started with creating visuals and digital experiences for a few brands soon grew into something bigger. Through trust, consistency, and results, we evolved into a full-service digital marketing agency. Today, The Brandzstory partners with businesses to craft meaningful brand identities, engaging digital experiences, and growth-focused marketing strategies all rooted in one belief: every brand deserves a story that connects and converts.`,
  image: '',
  quote: 'Great brands are build on great stories'
}
]