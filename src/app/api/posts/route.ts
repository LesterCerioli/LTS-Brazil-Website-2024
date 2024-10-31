import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Defina o caminho para o arquivo JSON
const filePath = path.join(process.cwd(), 'data', 'posts.json');

// Interface para os dados do post
interface Post {
    title: string;
    content: string;
    category: string;
}

// Função para criar um novo post (simulação de lógica de criação)
async function createPost(data: Post): Promise<Post> {
    // Aqui você pode incluir a lógica para armazenar o post em um banco de dados, se necessário.
    return {
        title: data.title,
        content: data.content,
        category: data.category,
    };
}

// Função para adicionar o post ao arquivo JSON
async function addPostToJSON(post: Post): Promise<void> {
    // Verifica se o arquivo existe
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([])); // Inicializa o arquivo se não existir
    }

    // Lê o conteúdo atual do arquivo
    const currentPosts: Post[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    currentPosts.push(post); // Adiciona o novo post

    // Escreve o conteúdo atualizado de volta ao arquivo
    fs.writeFileSync(filePath, JSON.stringify(currentPosts, null, 2)); // Formata o JSON
}

// Função POST da API
export async function POST(request: Request): Promise<NextResponse> {
    try {
        const data: Post = await request.json();
        console.log('Data received for new post:', data);

        // Valida se os campos obrigatórios estão presentes
        if (!data.title || !data.content || !data.category) {
            console.error('Validation error: Title, content, and category are required.');
            return NextResponse.json({ message: 'Title, content, and category are required.' }, { status: 400 });
        }

        // Tenta criar um novo post
        const newPost: Post = await createPost(data);
        console.log('New post created:', newPost);

        // Adiciona o post ao arquivo JSON
        await addPostToJSON(newPost);

        return NextResponse.json({ message: 'Post created successfully.', post: newPost }, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ message: 'Error creating post.', error: (error as Error).message }, { status: 500 });
    }
}
