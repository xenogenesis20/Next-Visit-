import React from "react";
import { Link } from "react-router-dom";
export const SectionCardFeaturesTwo = () => {
	return (
		<div className="card text-center " style={{ backgroundColor: "#f5f5ff" }}>
			<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
				<img
					src="https://image.freepik.com/free-vector/holistic-medicine-abstract-concept-vector-illustration-alternative-natural-medicine-holistic-mental-therapy-whole-body-treatment-health-practice-disease-integrative-doctor-abstract-metaphor_335657-1696.jpg"
					className="img-fluid"
				/>
				<a href="#!">
					<div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
				</a>
			</div>

			<div className="card-body">
				<h5 className="card-title">View all of your information on the dashboard</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia deserunt quod eligendi
					exercitationem dignissimos! Numquam nulla asperiores modi, unde, voluptatum nam
				</p>
				<Link to="/SignUp">
					<button type="button" className="btn btn-primary">
						SIGN UP!
					</button>
				</Link>{" "}
			</div>
		</div>
	);
};
