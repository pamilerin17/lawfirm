import {useState} from 'react'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'
import {Link} from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
function Header() {
 const [menuOpened, setMenuOpened]=useState(false)
 const getMenuStyles=(menuOpened)=>{
  if(document.documentElement.clientWidth<=800){
   return{right:!menuOpened && '-100%'}
  }
 }
  return (
   
    <div>
           <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
         <h2>Justice.</h2>
          <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
       }}> </OutsideClickHandler>
        </div>
         <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
        <Link to='/'>Home</Link>
        <Link to='/Practice Areas'>Practice Areas</Link>
        <Link to='/Service'>Services</Link>
        <Link to='/Contact'>Contact</Link>
       </div>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenu size={30}/>
       </div>
      </section> 
    </div>
  )
}

export default Header
