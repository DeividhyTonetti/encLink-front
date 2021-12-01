import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonChange, Container, Content, Input, SvgLogo, SvgIcon, InputIcons } from './style';
import propsThemeContext  from '../../contexts/themeContext';

const Home = () => {
  const theme = useContext(ThemeContext);
  const themeValue = useContext(propsThemeContext);

  console.log('THEME> : ', themeValue);
  

  return (
    <Container>
      <Content>
        <SvgLogo viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svgLoSvgLogo">
          <path id="my_path" fill="#FF0066" d="M42.6,-46.5C58.2,-37.7,75.8,-27.1,82.5,-11.2C89.3,4.6,85.1,25.7,73.7,39.8C62.3,53.9,43.5,61,26.4,63.2C9.2,65.4,-6.3,62.7,-24.2,59.3C-42.1,55.9,-62.3,51.8,-70.6,39.7C-78.9,27.6,-75.1,7.5,-72.1,-13.2C-69,-33.9,-66.6,-55.2,-54.7,-64.7C-42.8,-74.2,-21.4,-71.8,-3.9,-67.1C13.5,-62.4,27,-55.4,42.6,-46.5Z" transform="translate(100 100)" />
          {/* <text>
            <textPath xlinkHref="#my_path" dominant-baseline="middle" text-anchor="middle">This text follows a curve.</textPath>
          </text> */}
        </SvgLogo>
        <InputIcons />
        <Input defaultValue="" type="text" placeholder="Enter your link"/>
        <ButtonChange onClick={'#'}> Shorten Link </ButtonChange>
      </Content>
    </Container>
  )
}

export default Home;