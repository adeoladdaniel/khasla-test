import React from "react";


function Index() {

 
  return (
    <React.Fragment>
  
   
     
      <section className="side-bar">
     
        
    <div className="logo-sec">
      <img src="./asset/img/klashka.png" alt="Logo"/>
    </div>



    <div className="main_pages">
         <span className="header_text">Main Pages</span>

              <div className="menu_options">
                 <span className="dash"><img src="./asset/img/icon.svg" alt="dashboard"/ > &nbsp;  Dashboard</span>

                <span className="balance"><img src="./asset/img/balance.svg" alt="dashboard"/ >  &nbsp; <b>Balance</b></span>

               <span ><img src="./asset/img/customers.svg" alt="dashboard"/ >  &nbsp;  Customers</span>

                <span ><img src="./asset/img/analytics.svg" alt="dashboard"/ >  &nbsp;  Analytics</span>

              </div>

         <span className="header_text_1">General</span>

         <div className="menu_options">
                 <span ><img src="./asset/img/settings.svg" alt="dashboard"/ > &nbsp;  Settings</span>

                <span ><img src="./asset/img/team.svg" alt="dashboard"/ >  &nbsp; Team</span>

               <span ><img src="./asset/img/contact.svg" alt="dashboard"/ >  &nbsp;  Contact</span>

                <span ><img src="./asset/img/logout.svg" alt="dashboard"/ >  &nbsp;  Logout</span>

              </div>

    </div>

      </section>
    </React.Fragment>
  );
}
export default Index;
