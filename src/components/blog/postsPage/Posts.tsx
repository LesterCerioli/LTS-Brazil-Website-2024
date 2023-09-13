import React, { ReactComponentElement } from "react";
// import PostsData from "../helper/postsData";
import * as S from "./styles";
import Image from "next/image";

import { postCategoryImages } from "@/components/blog/helper/postCategotyImages";

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function Posts() {
  const shuffledImages = shuffleArray(postCategoryImages);

  return (
    <S.Posts>
      <div>
        <h1> Confira nossos posts</h1>
        <S.ImagesContainer>
          <div>
            {shuffledImages.map((item, index) => (
              <a key={index} href={item.link}>
                <Image src={item.image} alt={`Image ${index}`} width={500} />
              </a>
            ))}
          </div>
        </S.ImagesContainer>
      </div>
    </S.Posts>
  );
}

export default Posts;

// interface Post {
//   id: number;
//   category: string;
//   title: string;
//   text: string;
// }

// interface PostsProps {
//   posts: Post[];
// }

// const Posts: React.FC<PostsProps> = ({ posts = [] }) => {
//   return (
//     <S.Posts>
//       <div>
//         <h1> Posts</h1>
//         <S.Article>
//           <article>
//             {posts.map((post) => (
//               <div key={post.id} className="post">
//                 <h2>{post.title}</h2>
//                 <p>{post.text}</p>
//                 <span>Tags:{post.category}</span>
//               </div>
//             ))}
//           </article>
//         </S.Article>
//       </div>
//     </S.Posts>
//   );
// };

// export default Posts;
