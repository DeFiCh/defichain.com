interface PostTitle {
  text: string;
}

export interface Posts {
  title: PostTitle[];
  // featuredimage: {
  //   url: string;
  // };
  url?: {
    url: string;
  };
  date: string;
}
