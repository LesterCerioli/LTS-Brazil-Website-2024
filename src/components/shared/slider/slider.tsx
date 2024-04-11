import * as S from "./styles";
import { homePageSlider } from "./helper/imageConstants";

interface ImageService{
  src: string;
}

export function Slider(){
    return (
        // <S.Container>
        //     <S.SliderContainer>
        //         <S.Slider>
        //             <S.SliderList>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_1.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_2.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_3.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_4.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_5.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_6.svg"/>
        //                 </S.Slide>
        //             </S.SliderList>
        //         </S.Slider>
        //         <S.Slider>
        //             <S.SliderList>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_1.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_2.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_3.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_4.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_5.svg"/>
        //                 </S.Slide>
        //                 <S.Slide>
        //                     <S.Img src="assets/imagesHome/services_card_6.svg"/>
        //                 </S.Slide>
        //             </S.SliderList>
        //         </S.Slider>
        //     </S.SliderContainer>
        // </S.Container>
          <S.Scroller data-animated="true" data-direction="left" data-speed="fast">
            <S.ScrollerInner className="scroller__inner">
                <S.Img src="assets/imagesHome/services_card_1.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_2.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_3.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_4.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_5.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_6.svg" alt=""/>
                
                <S.Img src="assets/imagesHome/services_card_1.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_2.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_3.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_4.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_5.svg" alt=""/>
                <S.Img src="assets/imagesHome/services_card_6.svg" alt=""/>
            </S.ScrollerInner>
          </S.Scroller>
    )
}