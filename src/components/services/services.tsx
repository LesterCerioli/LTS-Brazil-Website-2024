

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";


import { servicesPageData } from "./helper/constant";

interface Service {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

const Services: React.FC = () => {
  return (
    <S.Container>
     <div>
      <S.Title>
        Nossos Serviços
      </S.Title>

      {/* <S.Subtitle>
        Oferecemos uma ampla gama de serviços digitais para atender às necessidades em constante evolução. Com nossa experiência, transformamos ideias em soluções prontas para o mercado. Explore nossos serviços e junte-se à revolução digital.
      </S.Subtitle> */}

      

      <S.Section>
      {/* <S.Imag>
        <S.Img  src="/assets/imagesServices/services_services_hero.svg"
         alt="services" 
         width={1460} 
         height={450}
         ></S.Img>
      </S.Imag> */}
       {servicesPageData.map((service: Service) => (
        <div key={service.id}>
          <h3>{service.subtitle}</h3>
          <a href={service.link}>
            <h2>{service.title}</h2>
            
            <Image src={service.image} alt={service.title} width={1000} height={450} layout="responsive" />
          </a>
        </div>
       ))}
      </S.Section>
     </div>
    </S.Container>
    
  );
};

export default Services;
