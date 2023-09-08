"use client";
import * as S from "./styles";

import Hero from "@/components/blog/hero/Hero";
import Posts from "@/components/blog/posts/Posts";

export default function RecruitmentServices() {
  return (
    <S.Container>
      <Hero />
      <Posts />
    </S.Container>
  );
}
