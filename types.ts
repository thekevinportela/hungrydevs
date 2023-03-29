export type Post = {
  author: { photo: { url: string }; name: string };
  categories: [];
  createdAt: string;
  exerpt: string;
  featuredImage: { url: string };
  slug: string;
  title: string;
  content: { raw: { children: [] } };
};

export type Comment = { createdAt: string; name: string; comment: string };
