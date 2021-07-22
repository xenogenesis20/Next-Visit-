//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";

//import icons from react icons
import { FaArrowRight, FaArrowLeft, FaRegHeart, FaPills, FaWindowClose } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sideNav.scss";
import { Link } from "react-router-dom";

export const SideNav = props => {
	//create initial menuCollapse state using useState hook
	const [menuCollapse, setMenuCollapse] = useState(false);

	//create a custom function that will change menucollapse state from false to true and true to false
	const menuIconClick = () => {
		//condition checking to change state from true to false and vice versa
		menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
	};

	return (
		<>
			<div id="sidenav">
				{/* collapsed props to change menu size using menucollapse state */}
				<ProSidebar collapsed={menuCollapse}>
					<SidebarHeader>
						<div className="logotext">
							{/* small and big change using menucollapse state */}
							<p>{menuCollapse ? "N|V" : "NEXT VISIT"}</p>
						</div>
						<div className="closemenu" onClick={menuIconClick}>
							{/* changing menu collapse icon on click */}
							{menuCollapse ? <FaArrowRight /> : <FaArrowLeft />}
						</div>
					</SidebarHeader>
					<SidebarContent>
						<Menu iconShape="square">
							<MenuItem active={true} icon={<FiHome />}>
								<Link to="/">Home</Link>
							</MenuItem>
							<MenuItem icon={<RiDashboardLine />}>
								<Link to="/DashboardHome">Dashboard </Link>
							</MenuItem>
							<MenuItem icon={<FaPills />}>
								<Link to="/DashboardVitals">Vitals </Link>
							</MenuItem>
							<MenuItem icon={<FaPills />}>
								<Link to="/DashboardMeds">Medications </Link>
							</MenuItem>
							<MenuItem icon={<FaPills />}>
								<Link to="/DashboardSymptoms">Symptoms </Link>
							</MenuItem>
							<MenuItem icon={<FaPills />}>
								<Link to="/DashboardNextVisit">Plan NextVisit </Link>
							</MenuItem>

							<MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
							<MenuItem icon={<RiPencilLine />}>Home</MenuItem>
							<MenuItem icon={<BiCog />}>Settings</MenuItem>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<Menu iconShape="square">
							<MenuItem icon={<FiLogOut />} onClick={() => props.setLoggedIn(false)}>
								Logout
							</MenuItem>
						</Menu>
					</SidebarFooter>
				</ProSidebar>
			</div>
		</>
	);
};
