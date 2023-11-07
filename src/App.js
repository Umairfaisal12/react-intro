import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/Homepage';
import BillingPage from './BillingPage/Billingpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() { //jsx
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route element={<HomePage/>} path ='/'/>
  <Route element={<BillingPage/>} path ='/billing'/>
</Routes>
</BrowserRouter>



    </div>
  );
}


export default App;
