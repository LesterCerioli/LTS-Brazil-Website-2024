'use client';
import MobileAppDev from '@/components/mobileAppDevelopment/mobileAppDev';
import * as S from './styles';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function MobileAppWeb(){
    return(
        <S.Container>
            <SpeedInsights />
            <Analytics />
            <MobileAppDev/>
        </S.Container>
    )
}