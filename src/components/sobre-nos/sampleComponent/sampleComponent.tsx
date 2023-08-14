import Image from 'next/image';
import * as S from './styles';

interface AboutProps {
  image: string;
  text: string;
}

export function SampleComponent({ image, text }: AboutProps) {
  return (
    <S.Container>
      <S.Body>
        <S.Image>
          <Image src={image} width={500} height={300} alt={'Descrição da imagem'} />
        </S.Image>
        <p>{text}</p>
      </S.Body>
    </S.Container>
  );
}
