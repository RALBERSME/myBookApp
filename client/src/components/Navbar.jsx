import Wrapper from "../assets/wrappers/Navbar";
import { CgArrowAlignH } from "react-icons/cg";
import Logo from "./Logo";

import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <CgArrowAlignH />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Survey board</h4>
          <br></br>
          <h6>
            {" "}
            Reinhild<span className="lower">`s </span>myBook App / copyright
            2023
          </h6>
        </div>
        <div>
          {" "}
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
