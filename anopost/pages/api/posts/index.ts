// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PostManager from '../../../managers/PostManager'


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case 'GET': {
      const posts = await PostManager.getAllPosts();
      return res.status(200).json(posts);
    }

    case 'POST': {
      const created = await PostManager.createPost(req.body);

      return res.status(200).json(created);
    }
  }
}

export default handler;