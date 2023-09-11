import React from "react";
import PostsData from "../helper/postsData";
import * as S from "./styles";

interface Post {
  id: number;
  category: string;
  title: string;
  text: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts = [] }) => {
  return (
    <S.Posts>
      <div>
        <h1> Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <span>{post.category}</span>
          </div>
        ))}
      </div>
    </S.Posts>
  );
};

export default Posts;
