import styled from "styled-components";

export const ImageContainer = styled.div`
width: 100%;
height: 800px;
background: url('/assets/imagesHome/LTS_header_banner.svg') no-repeat ;
background-size: cover;
background-position: center;

@media (min-width: 800px) and (max-width:890px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 500px;
}

@media (min-width: 535px) and (max-width: 799px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 450px;
}

@media (min-width: 700px) and (max-width: 735px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 420px;
}

@media (min-width: 539px) and (max-width: 699px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 380px;
}


@media (max-width: 534px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 300px;
}
`

export const Logo = styled.img`
   display: none;

   @media (max-width: 890px) {
      display: flex;
      max-width: 70%;
      max-height: 70%;
      margin-top: 40px;
   }
   @media (max-height: 876px) {
    margin-top: 40px;
   }
`