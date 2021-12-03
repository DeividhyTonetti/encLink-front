import React, { useContext, useState } from "react";
import { ButtonChange, Container, Content, Input, InputIcons, WelcomeText, FlexForm } from './style';
import { genereteLink } from '../../services/api/LinkController';

const Home = () => {
  const [url, setUrl] = useState('');
  // const formLink = useRef(null);

  const handleLinkChange = (e) => {
    const { value }  = e.target;
    setUrl(value);
  }

  const handleClick = async () => {
    const response = await genereteLink(url)
    console.log(response);
  }
  

  return (
    <Container>
      <Content>
        <WelcomeText> The best free url shortener  </WelcomeText>
        <FlexForm>
          <Input 
            defaultValue={url} 
            type="text" 
            name="link" 
            placeholder="Enter your link" 
            onChange={handleLinkChange} 
          />
          <ButtonChange type="submit" onClick={handleClick} > Shorten Link </ButtonChange>
        </FlexForm>
      </Content>
    </Container>
  )
}

export default Home;