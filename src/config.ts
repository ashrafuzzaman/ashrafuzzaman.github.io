import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ashrafuzzaman.github.io/",
  author: "A.K.M. Ashrafuzzaman",
  desc: "Technical blog for developers",
  title: "Personal site of A.K.M. Ashrafuzzaman",
  ogImage: "/assets/profile-pic.webp",
  lightAndDarkMode: true,
  postPerPage: 3,
  gaMeasurementId: "G-R4ST1TES1V",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ashrafuzzaman/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ashrafuzzaman-jitu/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:zmn.ashraf@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/ashrafuzzaman/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
];
