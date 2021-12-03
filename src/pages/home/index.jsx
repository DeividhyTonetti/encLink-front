import React, { useState } from "react";
import { ButtonChange, Container, Content, Input, WelcomeText, FlexForm, LinkGenerate } from './style';
import { genereteLink } from '../../services/api/LinkController';
import SnackBar from '../../components/Snackbar';

const Home = () => {
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState({ status: false, message: '', color: true });
  const [newLink, setNewLink] = useState(null);
  const [button, setButton] = useState({ type: 'Sorten', message: 'Sorten Link' });

  const handleLinkChange = (e) => {
    const { value }  = e.target;
    setUrl(value);
  }

  const urlValitatation = (string) => {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
  const handleClick = async () => {
    if(urlValitatation(url)) {
      const response = await genereteLink(url);
      
      console.log("ENTREI AQUI");
      if(!response.message) {
        setNewLink(response);
        setButton({ type: 'Copy', message: 'Copy Link' });
        setOpen({ ...open, status: true, message: 'Link generated successfully' });
      }
    } else {
      console.log("ENTREI AQUI2");
      setOpen({ status: true, message: 'Invalid link', color: false });
    }
  }

  const handClickCopyLink = () => {
    navigator.clipboard.writeText(newLink);
    setUrl('');
    setNewLink(''); // POderIA SER O MESMO :/
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
      <SnackBar open={open} setOpen={setOpen} />
    </Container>
  )
}

export default Home;