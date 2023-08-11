import React from 'react'
import * as S from './styles'
import ClientsList from '../clientsList/clientsList';

export const OurClients = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Nossos Clientes</S.Title>
        </div>
        <ClientsList />
      </S.Container>
    );
  };
  
  export default OurClients;