import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <LoginPage /> }/>
      <Route path='/login' element={ <LoginPage login={true}/> }/>
      <Route path='/welcome' element={ <WelcomePage /> }/>
    </Routes>
  );
}


export default App;
