import M from "materialize-css";
import React, { useEffect } from 'react';


const NavBar = (props) => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');

    const instances = M.Sidenav.init(sidenav)

    //console.log(instances);
  });

  return (

    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">

        {
          props.details.map(item => { return (<li><a href="#!" value={item} key={item.key} onClick={props.onClick()}> {item}</a></li>) })
        }

      </ul>
    </div >
  )
}
export default NavBar

