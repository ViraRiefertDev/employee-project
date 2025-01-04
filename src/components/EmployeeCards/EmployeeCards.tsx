import { useContext, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  ButtonsContainer,
  ButtonWrapper,
  EmployeeCardContainer,
  InfoCard,
  InfoContainer,
  Label,
  NextButton,
  PrevButton,
  Value,
} from './styles';
import { UserDataContext } from '../Layout/Layout';
import { Position } from './types';
import Button from '../Button/Button';

function EmployeeCards() {
  const { data, onDataChange } = useContext(UserDataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const deleteEmployee = (indexToDelete: number) => {
    onDataChange((prevData) =>
      prevData.filter((_, index) => index !== indexToDelete)
    );
  };

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }

    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, data]);

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      3000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  const renderEmployeeCards = () =>
    data.length > 0 &&
    data.map((itemData, itemIndex) => {
      const { name, surname, age, position } = itemData;
      let itemPosition = Position.ACTIVE;
      if (data.length > 1) {
        itemPosition = Position.NEXT;
        if (itemIndex === currentIndex) {
          itemPosition = Position.ACTIVE;
        }
        if (
          itemIndex === currentIndex - 1 ||
          (currentIndex === 0 && itemIndex === data.length - 1)
        ) {
          itemPosition = Position.LAST;
        }
      }
      return (
        <InfoCard itemPosition={itemPosition} key={itemIndex}>
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
          <ButtonWrapper>
            <Button
              deleteButton
              name={'Delete'}
              onClick={() => {
                deleteEmployee(itemIndex);
              }}
            />
          </ButtonWrapper>
        </InfoCard>
      );
    });

  return (
    <EmployeeCardContainer>
      {renderEmployeeCards()}
      {data.length > 1 && (
        <ButtonsContainer>
          <PrevButton
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          >
            <FiChevronLeft />
          </PrevButton>
          <NextButton
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          >
            <FiChevronRight />
          </NextButton>
        </ButtonsContainer>
      )}
    </EmployeeCardContainer>
  );
}

export default EmployeeCards;
