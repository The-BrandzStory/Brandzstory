export interface HeroData {
  title: string;
  titleLine1Blue: string;
  titleLine1Italic: string;
  titleLine2Italic: string;
  titleLine2Blue: string;
  subtext: string;
  buttonText: string;
  storiesimg: string;
  bgimg: string;
  leftSticker: string;
  rightSticker: string;
}

export interface ProcessStep {
  stepNo: number;
  title: string;
  description: string;
  image: string;
  tiltClass?: string;
}

export interface AboutData {
  image: string;
  note: string;
  role: string;
  name: string;
  paragraph1: string;
  paragraph2: string;
  quote:string;
}

export interface ContactData {
  title: string;
  description: string;
  instagram: string;
  email: string;
  phone: string;
}

export interface FooterData {
  title: string;
  description: string;
  email: string;
  instagram: string;
  phone: string;
  copyright: string;
  privacyPolicy: string;
  termsOfService: string;
  image: string;
}

export interface feedback {
  text: string,
  company: string,
  type: string,
  logo: string,
  align: string
}