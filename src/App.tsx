import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Employees from './pages/Employees/Employees';

function App() {
  return (
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createemployee' element={<CreateEmployee/>}/>
          <Route path='/employees' element={<Employees/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
