import React from 'react';

import { Container, Logo, Wrapper } from './styles';

function Header() {
  return (
      <Container>
          <Logo />
          <Wrapper>
              <ul>
                  <li>Roupas</li>
              </ul>
              <ul>
                  <li>Tênis</li>
              </ul>
              <ul>
                  <li>Calças</li>
              </ul>
              {/* <input placeholder="buscar..." /> */}
          </Wrapper>
      </Container>
  )
}

export default Header;