import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaGithub,  } from 'react-icons/fa';
import { GiBrazil } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";

export const TopHeader = styled.div`
    width: 100%;
    flex-shrink: 1;
    flex-wrap: wrap;
    margin-bottom: 10px;
    height: fit-content;
    max-height: 100%;

    @media (max-width: 1340px) {
        display: flex;
        flex-direction: column;
        max-height: 100%;
    }
    `

export const ContainerFluid = styled.div`
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(15, 14, 27, .1);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-height: 100%;
    
    @media (max-width: 1340px) {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        align-items: center;
    }
    `

export const SocialsContainer = styled.div`
    display: flex;
    width: 50%;
    max-width: 100%;
    min-height: 1px;
    padding: 0px 45px;
    align-items: flex-start;
    margin-top: 5px;
    flex-wrap: wrap;
    
    @media (max-width: 1340px) {
        display: flex;
        max-height: 100%;
        align-items: center;
        width: 100%;
        justify-content: center;
    }

    `

export const ContactContainer = styled.div`
    display: flex;
    width: 50%;
    max-width: 100%;
    justify-content: space-evenly;
    margin-top: 5px;
    flex-wrap: wrap;
    padding: 0 45px;

    @media (max-width: 1340px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 100%;
        align-items: center;
        width: 100%;
    }
`

export const InstagramIcon = styled(FaInstagram)`
    font-size: 20px;
    color: var(--blue);
    margin: 0 5px;
`

export const LinkedinIcon = styled(FaLinkedin)`
    font-size: 20px;
    color: var(--blue);
    margin: 0 5px;
`

export const BrazilIcon = styled(GiBrazil)`
    font-size: 15px;
`

export const UnitedStatesFlag = styled(LiaFlagUsaSolid)`
    font-size: 15px;
`

export const EmailIcon = styled(AiOutlineMail)`
    font-size: 15px;
`

export const ContactLink = styled.a`
    color: rgba(6, 41, 83, 0.80);
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; 
    display: flex;
    text-decoration: none;
`


