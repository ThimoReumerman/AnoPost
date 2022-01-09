// Import Prisma variables
import { PrismaClient } from "@prisma/client";
import { post } from "@prisma/client";

// Create new Prisma client
const prisma = new PrismaClient({
  log: ['info', 'warn', 'error']
});

class PostManager {
  // Create new post
  static createPost = async (post: post): Promise<post> => {
    const created = await prisma.post.create({
      data: { 
        title: post.title,
        content: post.content,
        author: post.author
      },
    });

    return created;
  };

  // Get all posts
  static getAllPosts = async (): Promise<post[]> => {
    const posts = await prisma.post.findMany({
      orderBy: {
        id: 'desc'
      }
    });

    return posts;
  };

  // Get single post
  static getPost = async (id: number): Promise<post | null> => {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    return post;
  };

  // Delete post
  static deletePost = async (id: number): Promise<post> => {
    const deleted = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return deleted;
  };
}

export default PostManager;