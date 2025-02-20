"use client";
import { servicesPageData } from "@/components/services/helper/constant";
import * as S from "./styles";

import Service from "@/components/services/services";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Services() {
  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <Service  />
    </S.Container>
  );
}
