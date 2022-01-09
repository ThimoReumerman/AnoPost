// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PostManager from '../../../managers/PostManager'


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(`Recieved a ${req.method} Request: `);
  switch (req.method) {
    case 'GET': {
      const posts = await PostManager.getAllPosts();
      return res.status(200).json(posts);
    }

    case 'POST': {
      console.log("POST REQUEST: ");
      console.log(req);
      const created = await PostManager.createPost(req.body);

      return res.status(200).json(created);
    }
  }
}

export default handler;