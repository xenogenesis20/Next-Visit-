import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
export const Header = () => {
	return (
		<>
			<div className="px-4 py-5 my-5 text-center hero-bg">
				{/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
				<h1 className="display-5 fw-bold ">
					<img className="logo-img" src={logo} alt="" />
				</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4">
						Next Visit is a web application designed to help you track your vitals, medications, and
						symptoms over time. We built Next Visit so that you could track and share your medical
						condition.Some people use Next Visit to report their symptoms before a doctor visit. Other
						people use Next Visit to monitor their response to medication, including effectiveness and
						adverse reactions.
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<Link to="/SignUp">
							<button type="button" className="btn btn-success">
								SIGN UP!
							</button>
						</Link>{" "}
					</div>
				</div>
			</div>
		</>
	);
};
