import { Link, Outlet } from "react-router-dom";

function Layout(props) {
    return (
        <>
        <div id="topo"><Link to="MyLoadout">MY LOADOUT</Link>{ }</div>
            <nav id="menu">
                <Link to="Home">Home </Link>{ }
                <Link to="Pistols">Pistols </Link>{ }
                <Link to="SMGs">SMGs </Link>{ }
                <Link to="Heavy">Heavy </Link>{ }
                <Link to="Rifles">Rifles </Link>{ }
                <Link to="Knives">Knives </Link>{ }
                <Link to="Gloves">Gloves </Link>{ }
                <Link to="Contact">Contact </Link>{ }
            </nav>
            <Outlet/>
            
        </>
        
    )
}
export default Layout;