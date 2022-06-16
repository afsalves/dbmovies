import React from 'react';
import Logo from '@assets/icons/movie.svg'
import * as Styled from './styles';



const Header: React.FC = () => {

  return (
        <Styled.Container>
          <Styled.Logo>
          <Logo   
          width={30} 
          height={30} />
          </Styled.Logo>
          <Styled.LogoTitle>DbMovies</Styled.LogoTitle>
        </Styled.Container>
  );
};

export default Header;