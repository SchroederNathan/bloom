export interface Project {
  id: string;
  user: User;
  name: string;
  description: string;
  createdAt: string;
  media: Media[];
  likes: number;
  views: number;
  comments: Comment[];
  tags: string[];
}

export interface Media {
    type: 'image' | 'video' | 'gif';
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
