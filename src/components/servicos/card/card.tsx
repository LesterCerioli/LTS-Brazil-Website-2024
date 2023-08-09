import * as S from "./styles";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/shared/button/button";

interface CardProps {
  title: string;
  image: StaticImageData;
  description: string;
}

export function Card({ title, image, description }: CardProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <div>
        <S.Image>
          <Image src={image} width={380} height={380} alt={title} />
        </S.Image>
        {/* position absolute here */}
        <S.Description>{description}</S.Description>
      </div>
      <Button>saiba mais</Button>
    </S.Container>
  );
}
