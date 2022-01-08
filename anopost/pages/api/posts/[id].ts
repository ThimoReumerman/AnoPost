// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PostManager from '../../../managers/PostManager'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Parse ID from query
  const id = parseInt(req.query.id as string);

  switch (req.method) {
    case 'GET': {
      const post = PostManager.getPost(id);

      return res.status(200).json(post);
    }

    case 'DELETE': {
      const deleted = PostManager.deletePost(id);

      return res.status(200).json(deleted);
    }
  }
}