import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export const ClientsList = () => {
    return (
        <S.Container>
            <S.Card>
                <Image src='/images/bny.png' alt='BNY Mellon logo' width={100} height={100}/>
            </S.Card>
        </S.Container>
    )
}

    export default ClientsList;