import {
  EmployeeCardContainer,
  InfoCard,
  InfoContainer,
  Label,
  Value,
} from './styles';
import { useContext } from 'react';
import { UserDataContext } from '../Layout/Layout';

function EmployeeCard() {
  const { data } = useContext(UserDataContext);
  return (
    <EmployeeCardContainer>
      {data.name&&<InfoCard>
        <InfoContainer>
          <Label>Name</Label>
          <Value>{data.name}</Value>
        </InfoContainer>
        <InfoContainer>
          <Label>Surname</Label>
          <Value>{data.surname}</Value>
        </InfoContainer>
        <InfoContainer>
          <Label>Age</Label>
          <Value>{data.age !== '' ? data.age : 'Unknown'}</Value>
        </InfoContainer>
        <InfoContainer>
          <Label>Job Position</Label>
          <Value>{data.position}</Value>
        </InfoContainer>
      </InfoCard>}
    </EmployeeCardContainer>
  );
}

export default EmployeeCard;
