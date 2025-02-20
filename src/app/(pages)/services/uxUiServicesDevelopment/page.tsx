"use client";
import UxUi from '@/components/uxUiServicesDevelopment/uxUiServicesDev';
import * as S from "./styles";
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



export default function UxUiServices() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <UxUi />
    </S.Container>
    
  );
}