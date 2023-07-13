import React from "react";
function Sidebar() {
    return ( 
        <>
        <nav className="main-menu">
            <ul>
                <li>
                    <a href="./Home">
                        <i className="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Home
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-ticket-airline fa-2x"></i>
                        <span className="nav-text">
                            Book Tickets
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            My Bookings
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Discount Vouchers
                        </span>
                    </a>
                    
                </li>
            </ul>
               
              
                 
            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
      
        </>
     );
}

export default Sidebar;