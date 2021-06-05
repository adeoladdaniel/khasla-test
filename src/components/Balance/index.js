import React from "react";
import {Container, Row, Col} from "react-bootstrap"


function Index() {


   
  return (
    <React.Fragment>
      <section className="user-info">
    
        <div className="header_section">
            <span className="bold-span"> Balances</span><br/>
            <span className="para_text">Today, 19th October 2020</span>

            <div className="notification_section">
            <span> <img src="./asset/img/notification.svg" alt="notification"/>  </span>
            <span> <img src="./asset/img/user.svg" alt="user"/>  </span>

            </div>

            <div className="card-section">
                <Container>
                    <Row>
                        <Col md={8}>
                                <div className="section" >
                                
                                <div className="card_section">
                                    <div className="total_sec">
                                    <span className="total_text" > Total account balance</span>
                                    <div className="dropdown_but">
                                    <div class="dropdown">
                                            <button class="dropbtn">USD <img src="./asset/img/dropdown.svg" alt="dropdown"/></button>
                                            <div class="dropdown-content">
                                            <a href="hello">KES</a>
                                            <a href="hello">NGN</a>
                                            <a href="hello">GHC</a>
                                            </div>
                                </div>
                                    </div>
                                    <div className="total_bold">
                                    <span >$5,332.18</span>
                                    </div>
                                    <span className="usd_text">1 USD = 381.97 NGN</span>

                                    </div>
                               
                                        <div className="funds_sec">
                                            <span>Funds on Hold</span>

                                            <div className="total_bold">
                                                <span >$5,332.18</span>
                                             </div>
                                        </div>
                                        </div>
                                </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    </section>
    </React.Fragment>
  );
}
export default Index;
