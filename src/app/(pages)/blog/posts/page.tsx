"use client";
import * as S from "./styles";
import BlogPostContainer from "@/components/blog/blogPostContainer/blogPostContainer";
import PostsData from "@/components/blog/helper/postsData";
import Posts from "@/components/blog/postsPage/Posts";

export default function BlogPosts() {
  return (
    <S.Container>
      <Posts />
    </S.Container>
  );
}
