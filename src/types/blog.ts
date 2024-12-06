export interface BlogPost {
  id: string;
  category: string;
  publishDate: Date;
  title: string;
  preview: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}