import React from "react";
// import {Container, Row, Col} from "react-bootstrap";


function Index() {

  return (
    <React.Fragment>
      <section className="table_section">

        <div className="table_header">
          <span>
            Payout table
          </span>
          <div className="right_sec">
            <div>
              <form>
            <input className="search_input"/>
  <img  className="search_image"src="./asset/img/search.svg" alt="search"/>


              </form>
            </div>
            <div>
  <form>
  <input className="date_input" placeholder="March 2020"/>
  <img src="./asset/img/calender.svg" className="calender_img" alt="calender" />
 </form>
            </div>
      

        <button className="payout">Payout</button>
        </div>
        </div>

  
    </section>
    </React.Fragment>
  );
}
export default Index;
