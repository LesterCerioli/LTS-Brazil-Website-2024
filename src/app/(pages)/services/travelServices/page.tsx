"use client";
import Travel from '@/components/travelServices/travelServices';
import * as S from "./styles";
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



export default function DevelopmentWeb() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <Travel />
    </S.Container>
    
  );
}