export interface Project {
  id: string;
  user: User;
  name: string;
  description?: string;
  createdAt: string;
  content: ContentBlock[];  // Include mixed content
  likes: number;
  views: number;
  comments: Comment[];
  tags: string[];
}

export interface ContentBlock {
  type: "media" | "html"; // Type of content block (media or HTML)
  data: Media | string; // Data can be Media or HTML string
}

export interface Media {
  type: "image" | "video" | "gif";
  url: string;
}

export interface Comment {
  user: User;
  comment: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  description: string;
  profileImage: string;
}
