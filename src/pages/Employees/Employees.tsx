import { useContext } from 'react';
import Button from '../../components/Button/Button';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';
import { UserDataContext } from '../../components/Layout/Layout';
import { ButtonWrapper, EmployeesContainer } from './styles';

function Employees() {
  const { data, onDataChange } = useContext(UserDataContext);
  const deleteAllEmployee = ()=>{
    onDataChange([]);
  }
  return (
    <EmployeesContainer>
      <EmployeeCards />
      {data.length > 0 && <ButtonWrapper><Button name='Delete' deleteButton onClick={()=>{deleteAllEmployee()}} /></ButtonWrapper>}
    </EmployeesContainer>
  );
}

export default Employees;
