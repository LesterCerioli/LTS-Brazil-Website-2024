"use client";
import { Analytics } from "@vercel/analytics/react";
import * as S from "./styles";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function Consultancy() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <p>Consultoria</p>
    </S.Container>
  );
}
