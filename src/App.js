import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage';
import {VerifyEmail} from './pages/VerifyEmail';
import What from './pages/What';



function App() {
  return (
    <Routes>
      <Route path='/' element={ <LoginPage /> }/>
      <Route path='/login' element={ <LoginPage login={true}/> }/>
      <Route path='/welcome' element={ <WelcomePage /> }/>
      <Route path='/what' element={ <What /> }/>
      <Route path='/Verify' element={ <VerifyEmail /> }/>

    </Routes>
  );
}


export default App;
