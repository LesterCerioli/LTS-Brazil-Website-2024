import React from "react";
import * as S from "./styles";
import { servicesPageData } from "./helper/constant";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface Props {
  servicesData: Service[];
}
function Services({ servicesData }: Props) {
  return (
    <div>
      {servicesData.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <a href={service.link}>
            <Image src={service.image} alt={service.title} width={200} height={200} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Services;
