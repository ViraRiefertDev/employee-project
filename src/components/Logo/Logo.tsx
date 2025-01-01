import { useNavigate } from 'react-router-dom';
import { LogoContainer, LogoImgContainer,StyledSnowMan } from './styles';

function Logo() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };

  return <LogoContainer onClick={goToHomePage}>
    <LogoImgContainer>
      <StyledSnowMan/>
    </LogoImgContainer>
  </LogoContainer>;
}

export default Logo;
