import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export const ClientsList = () => {
    return (
        <S.Container>
            <S.Card>
                <S.Header>
                <S.StyledImage src='/images/bny.png' alt="Minha Imagem Estilizada" />
                </S.Header>
                <S.Footer />
            </S.Card>
            <S.Card>
                <S.Header>
                <S.StyledImage src='/images/firjan.png' alt="Minha Imagem Estilizada" />
                </S.Header>
                <S.Footer />
            </S.Card>
            <S.Card>
                <S.Header>
                <S.StyledImage src='/images/muvz.png' alt="Minha Imagem Estilizada" />
                </S.Header>
                <S.Footer />
            </S.Card>
            <S.Card>
                <S.Header>
                <S.StyledImage src='/images/stefanini.png' alt="Minha Imagem Estilizada" />
                </S.Header>
                <S.Footer />
            </S.Card>
            <S.Card>
                <S.Header>
                <S.StyledImage src='/images/pjerj.png' alt="Minha Imagem Estilizada" />
                </S.Header>
                <S.Footer />
            </S.Card>
        </S.Container>
    )
}

    export default ClientsList;