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
        <S.Article>
          <article>
            {posts.map((post) => (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <span>Tags:{post.category}</span>
              </div>
            ))}
          </article>
        </S.Article>
      </div>
    </S.Posts>
  );
};

export default Posts;
