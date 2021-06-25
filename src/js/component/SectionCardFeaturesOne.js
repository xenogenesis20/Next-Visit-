import React from "react";
import { Link } from "react-router-dom";

export const SectionCardFeaturesOne = () => {
	return (
		<div className="card">
			<div className="card text-center" style={{ width: "23rem" }}>
				<img
					src="https://image.freepik.com/free-vector/holistic-medicine-abstract-concept-vector-illustration-alternative-natural-medicine-holistic-mental-therapy-whole-body-treatment-health-practice-disease-integrative-doctor-abstract-metaphor_335657-1696.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h4 className="card-title">Track all of your symptoms. </h4>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia deserunt quod
						eligendi exercitationem dignissimos! Numquam nulla asperiores modi, unde, voluptatum nam
						inventore at facilis deleniti provident incidunt nostrum et debitis veniam quas? Nobis
						architecto quos minus ad, deserunt ab odio cum, iusto id at recusandae pariatur animi aut
						commodi!{" "}
					</p>
					<Link to="/SignUp">
						<button type="button" className="btn btn-primary">
							SIGN UP!
						</button>
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};
