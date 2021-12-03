import React, { useState } from "react";
import { ButtonChange, Container, Content, Input, WelcomeText, FlexForm, LinkGenerate } from './style';
import { genereteLink } from '../../services/api/LinkController';
import SnackBar from '../../components/Snackbar';

const Home = () => {
  const [url, setUrl] = useState('');
  // const [open, setOpen] = useState({ open: false, message: '' });
  const [newLink, setNewLink] = useState(null);
  const [button, setButton] = useState({ type: 'Sorten', message: 'Sorten Link' });

  const handleLinkChange = (e) => {
    const { value }  = e.target;
    setUrl(value);
  }

  const handleClick = async () => {
    const response = await genereteLink(url);
    if(response){
      setNewLink(response);
      setButton({ type: 'Copy', message: 'Copy Link' });
    }
  }

  const handClickCopyLink = () => {
    navigator.clipboard.writeText(newLink);
    setUrl('');
    setNewLink(''); // PODIA SER O MESMO :/
    setButton(({ type: 'Sorten', message: 'Sorten Link' }));
  }

  return (
    <Container>
      <Content>
        <WelcomeText> The best free url shortener  </WelcomeText>
        <FlexForm>
          {
            !newLink? 
              <Input 
                defaultValue={url} 
                type="text" 
                name="link" 
                placeholder="Enter your link" 
                onChange={handleLinkChange} 
              /> :
              <LinkGenerate> { newLink } </LinkGenerate>
          }
          
          <ButtonChange type="submit" onClick={ button.type === 'Copy'? handClickCopyLink : handleClick } > { button.message } </ButtonChange>
        </FlexForm>
      </Content>
      <SnackBar/>
    </Container>
  )
}

export default Home;