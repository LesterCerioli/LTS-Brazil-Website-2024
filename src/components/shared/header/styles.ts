import styled from "styled-components";
import { FaInstagram } from 'react-icons/fa';

export const Container = styled.header`
`;

export const TopHeader = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid rgba(15, 14, 27, 0.10);
    justify-content: space-between;
`

export const SocialsContainer = styled.div`
    display: flex;
    width: fit-content;
    max-width: 442px;
    min-height: 1px;
    padding: 0px 15px 7px 15px;
    align-items: flex-start;
    flex-shrink: 0;
    width: 50%;
    height: 50px;
`

export const InstagramIcon = styled(FaInstagram)`
    width: 50px;
`

export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 35px;
    max-width: 1325;
    min-height: 1px;
    flex-shrink: 0;
    width: 50%;
`

export const ContactLink = styled.a`
    color: rgba(6, 41, 83, 0.80);
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; 
`


//uma maneira de fazer isso é utilizar o CSS para fixar a primeira div no topo da página e utilizar javascript para fazer a segunda div seguir a rolagem da página. É possível utilizar a propriedade position: fixed para fixar a primeira div no topo e a propriedade position: sticky para fazer a segunda div seguir a rolagem.