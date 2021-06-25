import React from "react";

import headerbg from "../../img/desk.png";

export const Header = () => {
	return (
		<>
			<div>
				<h1>Welcome to Next Visit</h1>
				<div className="w-75 m-3">
					<h3>
						<a href="#about-us" aria-hidden="true" className="anchor" />
						<p className="text-center h3">
							Next Visit is a web application designed to help you track your vitals, medications, and
							symptoms over time. We built Next Visit so that you could track and share your medical
							condition.
						</p>{" "}
						<br />
						<p className="text-center h3">
							Some people use Next Visit to report their symptoms before a doctor visit. Other people use
							Next Visit to monitor their response to medication, including effectiveness and adverse
							reactions.
						</p>{" "}
						<br />
						<p className="text-center h3">Whatever your medical needs, is Next Visit right for you?</p>
					</h3>
				</div>
				<div className="w-75 mt-5 d-flex justify-content-center">
					<h4>Scroll down to learn more!</h4>
				</div>
			</div>
		</>
	);
};
