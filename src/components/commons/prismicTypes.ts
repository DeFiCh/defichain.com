export interface Project {
  description: ProjectTitle[];
  title: ProjectTitle[];
  sort: number;
  featuredimage: {
    url: string;
  };
  github?: {
    url: string;
  };
}
