import { NextResponse } from 'next/server';

interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
    url: string;
}

let posts: Post[] = [];
const validCategories = ['backend', 'frontend', 'devOps'];

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const data = await request.json().catch(() => null) as { title: string, content: string, category: string } | null;

        if (!data || !data.title || !data.content || !data.category) {
            return NextResponse.json(
                { message: 'Title, content, and category are required.' },
                { status: 400 } // Bad Request
            );
        }

        if (!validCategories.includes(data.category)) {
            return NextResponse.json(
                { message: `Invalid category. Please choose from: ${validCategories.join(', ')}.` },
                { status: 400 } // Bad Request
            );
        }

        // Define a URL com base na categoria
        let postUrl = '';
        switch (data.category) {
            case 'backend':
                postUrl = `http://localhost:3000/blog/posts/backend`;
                break;
            case 'frontend':
                postUrl = `http://localhost:3000/blog/posts/frontend`;
                break;
            case 'devOps':
                postUrl = `http://localhost:3000/blog/posts/devOps`;
                break;
        }

        const newPost: Post = {
            id: Date.now(),
            title: data.title,
            content: data.content,
            category: data.category,
            url: postUrl
        };

        posts.push(newPost);

        return NextResponse.json(
            { message: 'Post created successfully.', post: newPost },
            { status: 201 } // Created
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Error creating post.', error: (error as Error).message },
            { status: 500 } // Internal Server Error
        );
    }
}

export async function GET(): Promise<NextResponse> {
    try {
        if (posts.length === 0) {
            return NextResponse.json(
                { message: 'No posts found.' },
                { status: 404 } // Not Found
            );
        }

        return NextResponse.json(posts, { status: 200 }); // OK
    } catch (error) {
        return NextResponse.json(
            { message: 'Error fetching posts.', error: (error as Error).message },
            { status: 500 } // Internal Server Error
        );
    }
}
