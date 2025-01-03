import { useContext } from 'react';
import { v4 } from 'uuid';
import {
  EmployeeCardContainer,
  InfoCard,
  InfoContainer,
  Label,
  Value,
} from './styles';
import { UserDataContext } from '../Layout/Layout';

function EmployeeCards() {
  const { data } = useContext(UserDataContext);

  const renderEmployeeCards = () =>
    data.length > 0 &&
    data.map((itemData, itemIndex) => {
      const { name, surname, age, position } = itemData;
      return (
        <InfoCard key={v4()}>
          <InfoContainer>
            <Label>Name</Label>
            <Value>{name}</Value>
          </InfoContainer>
          <InfoContainer>
            <Label>Surname</Label>
            <Value>{surname}</Value>
          </InfoContainer>
          <InfoContainer>
            <Label>Age</Label>
            <Value>{age !== '' ? age : 'Unknown'}</Value>
          </InfoContainer>
          <InfoContainer>
            <Label>Job Position</Label>
            <Value>{position}</Value>
          </InfoContainer>
        </InfoCard>
      );
    });

  return <EmployeeCardContainer>{renderEmployeeCards()}</EmployeeCardContainer>;
}

export default EmployeeCards;
