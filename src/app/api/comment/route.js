// app/api/comments/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, blogId } = body;

    if (!name || !email || !message || !blogId) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: { name, email, message, blogId },
    });

    return NextResponse.json({ success: true, comment }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get('blogId');

  if (!blogId) {
    return NextResponse.json({ error: 'Missing blogId' }, { status: 400 });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { blogId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}