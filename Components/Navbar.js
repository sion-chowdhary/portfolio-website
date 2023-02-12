import React, {useEffect, useState} from 'react'
import { Link,useLocation } from "react-router-dom"
import "../Styles/Navbar.css"
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

function Navbar() {
    const[expandNavbar , setExpandNavbar] = useState(false)

    const loc = useLocation();

    useEffect(() => {
       setExpandNavbar(false);
    }, [loc]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={ () =>{
                setExpandNavbar((prev) => !prev)
            }}
            > 
            <ReorderOutlinedIcon></ReorderOutlinedIcon> 
            </button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar