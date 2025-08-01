import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { blogId } = req.query;

    if (!blogId) {
      return res.status(400).json({ error: 'Missing blogId' });
    }

    try {
      const comments = await prisma.comment.findMany({
        where: { blogId },
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      return res.status(500).json({ error: 'Failed to fetch comments' });
    }
  }

  if (req.method === 'POST') {
    const { name, email, message, blogId } = req.body;

    if (!name || !email || !message || !blogId) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const comment = await prisma.comment.create({
        data: { name, email, message, blogId },
      });

      return res.status(201).json({ success: true, comment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
