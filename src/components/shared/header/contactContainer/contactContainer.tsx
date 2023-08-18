"use client";
import * as S from "./styles";


export function TopHeaderContainer() {
  return (
    <S.TopHeader>
        <S.ContainerFluid>
            <S.SocialsContainer>
                <a href="https://www.instagram.com/lucastecnologiaservice/"><S.InstagramIcon /></a>
                <a href="https://www.linkedin.com/company/lucas-technology-services/mycompany/"><S.LinkedinIcon /></a>
                <a href="https://github.com/Lucas-Technology-Services"><S.GithubIcon /></a>
            </S.SocialsContainer>
            <S.ContactContainer>
                <S.ContactLink><S.BrazilIcon />+55 21 3042-5441</S.ContactLink>
                <S.ContactLink><S.UnitedStatesFlag />+1(212)7966950</S.ContactLink>
                <S.ContactLink><S.EmailIcon/>commercial2018@lucastechnologyservice.com</S.ContactLink>
            </S.ContactContainer>
        </S.ContainerFluid>   
    </S.TopHeader> 
    )
};

export default TopHeaderContainer;