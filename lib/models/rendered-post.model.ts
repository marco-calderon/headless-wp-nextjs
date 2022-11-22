export interface RenderedPostModel {
  id: number;
  date: string;
  modified: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}
