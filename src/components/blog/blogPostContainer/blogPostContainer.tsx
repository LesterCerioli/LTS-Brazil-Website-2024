import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

import carouselImage1 from "@/assets/imagesBlog/blogThumbnail.svg";
import carouselImage2 from "@/assets/imagesBlog/blogThumbnail_2.svg";

class BlogPostContainer extends Component {
  render() {
    return (
      <div>
        <h1> Confira nossos artigos! </h1>
        <Link href="/blogPosts">
          <Carousel interval={3500} showThumbs={false} autoPlay infiniteLoop>
            <div>
              <Image
                src={carouselImage1}
                alt="image1"
                width={1080}
                height={720}
              />
            </div>
            <div>
              {" "}
              <Image
                src={carouselImage2}
                alt="image2"
                width={1080}
                height={720}
              />
            </div>
          </Carousel>
        </Link>
      </div>
    );
  }
}
export default BlogPostContainer;
