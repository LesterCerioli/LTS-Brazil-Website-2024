import { NextResponse } from 'next/server';
import { getPosts, createPost, Post } from '../../../services/api/blog/postService';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const data = await request.json().catch(() => null) as { title: string, content: string, category: string } | null;
    if (!data) {
      return NextResponse.json({ message: 'Invalid post data.' }, { status: 400 });
    }
    
    const newPost = await createPost(data);
    
    if (!newPost) {
      return NextResponse.json({ message: 'Title, content, and category are required.' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Post created successfully.', post: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating post.', error: (error as Error).message }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const posts = await getPosts();
    if (posts.length === 0) {
      return NextResponse.json({ message: 'No posts found.' }, { status: 404 });
    }
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching posts.', error: (error as Error).message }, { status: 500 });
  }
}
