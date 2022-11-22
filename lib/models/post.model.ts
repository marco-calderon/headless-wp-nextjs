export interface PostModel {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  attachment_image: {
    img_src: string;
    img_srcset: string;
  };
  categories: any[];
  meta: any;
}
