import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

import carouselImage1 from "@/assets/imagesBlog/blogThumbnail.svg";
import carouselImage2 from "@/assets/imagesBlog/blogThumbnail_2.svg";

class BlogPostContainer extends Component {
  render() {
    return (
      <S.BlogPostsContainer>
        <div>
          <h1> Confira nossos artigos! </h1>
          <Link href="/blogPosts">
            <h3>Ver artigos</h3>
          </Link>
          <S.CarouselStyles>
            <Link href="/blogPosts">
              <div>
                <Carousel
                  interval={2500}
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                >
                  <div>
                    <Image src={carouselImage1} alt="image1" width={780} />
                  </div>
                  <div>
                    {" "}
                    <Image src={carouselImage2} alt="image2" width={780} />
                  </div>
                </Carousel>
              </div>
            </Link>
          </S.CarouselStyles>
        </div>
      </S.BlogPostsContainer>
    );
  }
}
export default BlogPostContainer;
