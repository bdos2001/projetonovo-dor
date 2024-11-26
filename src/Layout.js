import { Link, Outlet } from "react-router-dom";

function Layout(props) {
    return (
        <>
        <div id="topo"><Link to="MyLoadout">MY LOADOUT</Link>{ }</div>
            <nav id="menu">
                <Link to="Home">Home </Link>{ }
                <Link to="Pistols">Pistols </Link>{ }
                <Link to="SMGs">SMGs </Link>{ }
                <Link to="Shotguns">Shotguns </Link>{ }
                <Link to="MachineGuns">MachineGuns </Link>{ }
                <Link to="Rifles">Rifles </Link>{ }
                <Link to="Knives">Knives </Link>{ }
                <Link to="Gloves">Gloves</Link>{ }
            </nav>
            <Outlet/>
            
        </>
        
    )
}
export default Layout;