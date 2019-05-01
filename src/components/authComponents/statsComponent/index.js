import React, { Component } from 'react'
import track from "../../../assets/img/truck.png"
import men from "../../../assets/img/men.png"
import delivery from "../../../assets/img/ico.png"
import users from "../../../assets/img/tr.jpg"

export default class StatsComponent extends Component {
  render() {
    return (
      <div className="stats">
           <div className="rcd">
               <img src={track} alt="" />
               <h3 className="ctr">Delivery Trucks</h3>
               <p className="ctr">50</p>
           </div>
           <div className="rcd">
               <img src={men} alt="" />
               <h3 className="ctr">Delivery Men</h3>
               <p className="ctr">100</p>
           </div>
           <div className="rcd">
               <img src={delivery} alt="" />
               <h3 className="ctr">Deliveries</h3>
               <p className="ctr">400</p>
           </div>
           <div className="rcd">
               <img src={users} alt="" />
               <h3 className="ctr">System Users</h3>
               <p className="ctr">150</p>
           </div>
       </div>
    )
  }
}
