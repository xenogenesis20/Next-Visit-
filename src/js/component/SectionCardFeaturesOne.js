import React from "react";
import { Link } from "react-router-dom";

export const SectionCardFeaturesOne = () => {
	return (
		<div className="about-card">
			<div className="card text-center" style={{ width: "23rem" }}>
				<img src="src/img/desk.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">
						Trying to keep track of your symptoms and medications can be challenging.
					</h4>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
				</div>
				<Link to="/SignUp">
					<button type="button" className="btn btn-primary">
						SIGN UP!
					</button>
				</Link>{" "}
			</div>
		</div>
	);
};
