
import React from "react";
// import {Container, Row, Col} from "react-bootstrap";
import  {StoreItems} from './TableItems'


function Index() {



  return (
    <React.Fragment>
      <section className="table_section">

<div className="functional_t">
  <table className="table_sec">
 <thead> <tr className="t_header"> 

<th>Payout ID</th>
<th>Source</th> 
<th>Date</th>
<th>Amount</th>

</tr></thead>

<tbody>
    {
        StoreItems.map((e,i) => (
            <tr key={i}>
    <td>{e.payout}</td>
        <td>{e.date}</td>
        <td>{e.source}</td>
        <td className="end">{e.amount}</td>
    
  </tr>
        ))
    }
</tbody>
  
  
  {/* <tr>
    <td>John</td>
    <td>Doe</td>
    <td >80</td>
    <td className="end">80</td>
    
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td >80</td>
    <td className="end">80</td>
    
  </tr> */}
</table>

<button className="see_m"> See more</button>

</div>

  
    </section>
    </React.Fragment>
  );
}
export default Index;


















