import { Link, Outlet } from "react-router-dom";
import './Nawigacja.css';

function Nawigacja()

{
    return(
        <>
            <nav>
                <Link to="/"> <button className="button">HOME</button></Link>
                <Link to="/strona1"><button className="button">strona 1</button></Link>
                <Link to="/strona2"><button className="button">Strona 2 </button></Link>
                <Link to="http://localhost" target="_blank"><button className="button">localhost </button></Link>
                
            </nav>
            <Outlet />
        </>
    );
}
export default Nawigacja;