import React from "react";
import "../../styles/home.scss";
import pic from "../../img/2650401.jpg";
import { Header } from "../component/Header";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { SectionCardFeaturesOne } from "../component/SectionCardFeaturesOne";
import { SectionCardFeaturesTwo } from "../component/SectionCardFeaturesTwo";
import { SectionCardFeaturesThree } from "../component/SectionCardFeaturesThree";
import PropTypes from "prop-types";

export const Home = props => {
	return (
		<>
			<Navbar loggedIn={props.loggedIn} />
			<div className="container-fluid landing-page-container">
				<div className="row m-5">
					<div className="col-12">
						<Header />
					</div>
				</div>
				<div className="row m-5 section-row">
					<div className="col-6 d-flex align-items-center">
						<img src={pic} alt="" />
					</div>
					<div className="col">
						<SectionCardFeaturesOne />
					</div>
				</div>
				<div className="row m-5 section-row2">
					<div className="col">
						<SectionCardFeaturesTwo />
					</div>
				</div>
				<div className="row m-5 section-row">
					<div className="col">
						<SectionCardFeaturesThree />
					</div>
				</div>
				<div className="row m-5">
					<div className="col-12">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};
Home.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
