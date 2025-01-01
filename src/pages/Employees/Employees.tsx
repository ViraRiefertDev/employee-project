import { EmitFlags } from "typescript"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { EmployeesContainer } from "./styles";

function Employees(){
  return(
    <EmployeesContainer>
      <EmployeeCard/>
    </EmployeesContainer>
  )
}

export default Employees;