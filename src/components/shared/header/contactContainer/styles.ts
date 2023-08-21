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
    `

export const ContainerFluid = styled.div`
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 92%;
    border-bottom: 1px solid rgba(15, 14, 27, .1);
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    `

export const SocialsContainer = styled.div`
    display: flex;
    width: 50%;
    max-width: 441.598px;
    min-height: 1px;
    padding: 0px 15px 7px 15px;
    align-items: flex-start;
    flex-shrink: 0;
    margin-top: 5px;
    `

export const ContactContainer = styled.div`
    display: flex;
    width: 50%;
    height: 35px;
    max-width: 1324.792px;
    min-height: 1px;
    flex-shrink: 0;
    justify-content: space-evenly;
    margin-top: 5px;
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
`


