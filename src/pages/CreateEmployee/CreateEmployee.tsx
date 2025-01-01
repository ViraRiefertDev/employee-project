import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import { CreateEmployeeContainer } from "./styles";


function CreateEmployee(){
  return(
    <CreateEmployeeContainer>
      <EmployeeForm/>
    </CreateEmployeeContainer>
  )
}

export default CreateEmployee;