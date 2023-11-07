import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    const navigate = useNavigate();

    const Home = () => {
        navigate("/");
    }
    const Billing = () => {
        navigate("/billing");
    
    }
    return(
        <div className='main-content'>
        <div>
            <ul className='topbar-nav'>
                <li>
                    <a onClick={Home} >Home</a>
                </li>
                <li>
                    <a onClick={Billing}href='#'>Billing</a>
                </li>
                <li>
                    <a href='#'>Item</a>
                </li>
                <li>
                    <a href='#'>Rent</a>
                </li>
                <li>
                    <a href='#'>LogOut</a>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default NavBar;