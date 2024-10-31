"use client";
import React from "react";
import * as S from "./styles";
import PostForm from "../../../../components/blog/postForm"; // Importando o componente PostForm
import { BlogHeader } from "@/components/blog/blogHeader/blogHeader";

const Blog: React.FC = () => {
    // Função que será chamada após a criação de um post
    const handlePostCreated = () => {
        console.log("Post criado com sucesso!");
    };

    return (
        <S.Container>
            <h2>Blog</h2>
            <BlogHeader />
            <S.Section>
                <S.Card>
                    <PostForm onPostCreated={handlePostCreated} />
                </S.Card>
            </S.Section>
        </S.Container>
    );
}

export default Blog;