"use client";
import React from 'react';
import CreatePostComponent from '@/components/blog/CreatePost/CreatePostComponent';
import * as S from './styles'; 

const EditBlog: React.FC = () => {
  return (
    <S.Container>
    <S.Header>Edit Blog Post</S.Header> 
    <CreatePostComponent />
  </S.Container>
  );
};

export default EditBlog;