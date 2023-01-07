import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import { NewsOrder } from '@entities/interfaces/news';

interface HeaderProps {
  setVacant: (vacant: boolean | NewsOrder) => void;
}

export default function Header({ setVacant }: HeaderProps) {
  return (
    <Wrapper>
      <HeaderBody>
        <LogoImgBox>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
        </LogoImgBox>
        <NavigationBox>
          <NavLink to="/news">뉴스 모아보기</NavLink>
          <NavLink to="/keywords">키워드 검색</NavLink>
          <NavLink to="/analyze">정치 성향 테스트</NavLink>
        </NavigationBox>
      </HeaderBody>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1440px;
  height: 80px;
  font-size: 15px;
  text-align: left;
  color: black;
  background-color: white;
  box-shadow: 0px 0px 30px -25px;
  position: fixed;
  top: 0;
  z-index: 9999;
  border-width: 0px;
  border-bottom-width: 4px;
`;

const HeaderBody = styled.div``;

const LogoImgBox = styled.div``;
const HomeLink = styled(NavLink)``;
const Logo = styled.img``;
const NavigationBox = styled.div``;
