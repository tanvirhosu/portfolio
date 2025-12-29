interface BodyContent {
  title: string;
  subtitle: string;
  info: string;
  extraInfo?: string;
  imgs?: string[] /* RT: if it exists, at least 4 imgs */;
  video?: string;
  summary: string[];
  details: string[];
  features: string[];
}

interface Content {
  id: number;
  active: boolean;
  name: string;
  img: string;
  link: string;
  content: BodyContent;
}

export type Experience = Content;

export type Education = Content;

export type RecentProject = Content;

export interface OldProject {
  id: number;
  active: boolean;
  logo: string;
  demo?: string;
  link: string;
  title: string;
  description: string;
  info?: string;
  features: string[];
}

export type StyleType = 'isPrimary' | 'isSecondary';
