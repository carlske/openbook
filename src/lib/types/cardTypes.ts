// CardTypes

export type BookCardData = {
  id: string;
  title: string;
  author_name: string; // Changed from string[] to string since you're joining in the component
  cover_i?: number;
  first_publish_year?: number;
};
