class Post {
  title: string;
  message: string;
  creator: string;
  tags: [string];
  selectedFile: string;
  likeCount: number;
  createdAt: Date;

  private static post: Post;

  private constructor() {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }

  public static getInstance() {
    if (!Post.post) {
      Post.post = new Post();
    }

    return Post.post;
  }
}

export { Post };
