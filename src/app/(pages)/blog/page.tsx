"use client";
import * as S from "./styles";

import Hero from "@/components/blog/hero/Hero";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function FrontEndPosts() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <BlogHeader />
      <Hero />
    </S.Container>
  );
}
