import React, { Component } from 'react';
import Navbar2 from './navbar2';
import Sidebar from './sidebar';
import "./Bookticket.css";
function BookTickets() {
    return ( 
        <>
        <div className='top'>
            <h1 className='tet'>Search Flights</h1>
            <div className='bookcard'>
                <div className='ter'>
                    <h4 className='word'>Leaving from</h4>
                 <input type="text"  className='ticket'></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Going to</h4>
                 <input type="text"  className='ticket'></input>
                 </div>
                 <div className='ter'>
                 <h4 className='word'>Departure</h4>
                 <input type="date"  className='ticket'></input>
                 </div>
                 
                 <a href="/" className="ticket-button">
						        {/* <button className="ticketsearch">Search</button> */}
                                <button type="submit" className="ticketsearch"><i class="fa fa-search"></i></button>
					    </a>
            </div>
        </div>
        </>
     );
}

export default BookTickets;