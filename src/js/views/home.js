import React from "react";
import "../../styles/home.scss";
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
				<div className="row">
					<div className="col-12">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<SectionCardFeaturesOne />
					</div>
					<div className="col">
						<SectionCardFeaturesTwo />
					</div>
					<div className="col">
						<SectionCardFeaturesThree />
					</div>
				</div>
				<div className="row">
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
