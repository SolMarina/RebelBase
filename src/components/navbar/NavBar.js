import M from "materialize-css";
import React, { useEffect } from 'react';


const NavBar = () => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');

    const instances = M.Sidenav.init(sidenav)

    console.log(instances);
  });

  return (


    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li><a href="#!">All</a></li>
        <li><a href="#!">Ideation</a></li>
        <li><a href="#!">Validation</a></li>
        <li><a href="#!">Social Innovation</a></li>
      </ul>
    </div >
  )
}
export default NavBar



