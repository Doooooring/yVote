import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '@assets/img/ico_logo.png';
import { setCurClicked } from '@entities/state';

interface HeaderProps {
  setCurClicked: setCurClicked;
}

interface NavBoxProps {
  link: string;
  comment: string;
  setCurClicked: setCurClicked;
}

const activeStyle = (isActive: boolean) => {
  console.log('here');
  return isActive
    ? {
        borderBottom: '3px solid rgb(61, 152, 247)',
        color: 'rgb(61, 152, 247)',
      }
    : {
        borderBottom: 'none',
        color: 'grey',
      };
};

function NavBox({ link, comment, setCurClicked }: NavBoxProps) {
  return (
    <HomeLink
      to={`${link}`}
      onClick={() => {
        setCurClicked(undefined);
      }}
    >
      {comment}
    </HomeLink>
  );
}

export default function Header({ setCurClicked }: HeaderProps) {
  return (
    <Wrapper>
      <HeaderBody>
        <LogoImgBox>
          <HomeLink to="/">
            <Logo src={logo} alt="hmm" height="40px" />
          </HomeLink>
        </LogoImgBox>
        <NavigationBox>
          <NavBox link={'/news'} comment="뉴스 모아보기" setCurClicked={setCurClicked} />
          <Blank />
          <NavBox link={'/keywords'} comment="키워드 검색" setCurClicked={setCurClicked} />
          <Blank />
          <NavBox link={'/analyze'} comment="정치 성향 테스트" setCurClicked={setCurClicked} />
          <Blank />
          <NavBox link={'/contact'} comment="CONTACT" setCurClicked={setCurClicked} />
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

const HeaderBody = styled.div`
  width: 1000px;
  height: 100%;
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

const LogoImgBox = styled.div`
  position: absolute;
  left: 0;
  width: 30%;
  height: 100%;
`;

const HomeLink = styled(NavLink)`
  border-bottom: none;
  color: grey;
  &.active {
    border-bottom: 3px solid rgb(61, 152, 247);
    color: rgb(61, 152, 247);
  }
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-decoration: none;
`;
const Logo = styled.img``;
const NavigationBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Blank = styled.div`
  width: 30px;
`;
