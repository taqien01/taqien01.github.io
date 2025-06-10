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
      title: "Updating ...",
      description:
        "Decsription Being Updating...",
      image: "/update.gif",
      technologies: ["Adding soon..."],
    },
  ]