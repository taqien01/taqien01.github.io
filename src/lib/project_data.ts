export type Project = {
  title: string,
  description: string,
  image: string,
  technologies: string[],
  links?: {
    playstore?: string,
    website?: string,
    github?: string,
  },
}

export const projects : Project[] = [
    {
      title: "Otori",
      description:
        "Otori App is an application designed for monitoring temperature, humidity, and other environmental parameters based on data transmitted by installed IoT devices.",
      image: "/logo_otori.png",
      technologies: ["Android", "Firebase"],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=id.nonelab.introapp",
        website: "https://otori.id",
      },
    },
    {
      title: "RUPICASH",
      description:
        "RUPICASH is an application provide payment and online transaction. RUPICASH is on it's progress to become one of digital wallet.",
      image: "/logo_rupi.png",
      technologies: ["Android", "Firebase", "RestApi"],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=id.rupicash.rupicash",
        website: "https://rupi.id",
      },
    },
    {
      title: "Cocoride",
      description:
        "RUPICASH is an application provide payment and online transaction. RUPICASH is on it's progress to become one of digital wallet.",
      image: "/logo_cocoride.png",
      technologies: ["Flutter", "Firebase", "RestApi"],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=id.cocoride.app",
        website: "https://www.cocoride.id",
      },
    },
  ]
