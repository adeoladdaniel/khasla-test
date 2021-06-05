import React from "react";
import Seo from "../shared/Seo";
import Sidebar from "../shared/Sidebar";
import Balance from "../components/Balance";
import TableSection from "../components/TableSection";
import UserTable from "../components/UserTable";





function Home() {
  return (
    <React.Fragment>
      <Seo>
        <header>
          <div>
            <Sidebar/>
            <Balance/>
            <TableSection/>
            <UserTable/>
      
          </div>
        </header>
      </Seo>
    </React.Fragment>
  );
}
export default Home;
