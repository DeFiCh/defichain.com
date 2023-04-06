interface PostTitle {
  text: string;
}

export interface Posts {
  title: PostTitle[];
  url: {
    url: string;
  };
  date: string;
  image: {
    url: string;
  };
}
