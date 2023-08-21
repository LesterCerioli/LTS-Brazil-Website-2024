"use client";
import * as S from "./styles";


export function TopHeaderContainer() {
  return (
    <S.TopHeader>
        <S.ContainerFluid>
            <S.SocialsContainer>
                <a href="https://www.instagram.com/lucastecnologiaservice/"><S.InstagramIcon /></a>
                <a href="https://www.linkedin.com/company/lucas-technology-services/mycompany/"><S.LinkedinIcon /></a>
            </S.SocialsContainer>
            <S.ContactContainer>
                <S.ContactLink href='tel:+552130425441'><S.BrazilIcon />+55 21 3042-5441</S.ContactLink>
                <S.ContactLink href='tel:+12127962141'><S.UnitedStatesFlag />+1(212)7966950</S.ContactLink>
                <S.ContactLink href='mailto:commercial2018@lucastechnologyservice.com'><S.EmailIcon/>commercial2018@lucastechnologyservice.com</S.ContactLink>
            </S.ContactContainer>
        </S.ContainerFluid>   
    </S.TopHeader> 
    )
};

export default TopHeaderContainer;