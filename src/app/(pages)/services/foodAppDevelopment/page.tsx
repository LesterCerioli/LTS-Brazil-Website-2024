"use client";
import Food from '@/components/foodAppDevelopment/foodAppDev';
import * as S from "./styles";
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



export default function FoodAppDev() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <Food/>
    </S.Container>
    
  );
}