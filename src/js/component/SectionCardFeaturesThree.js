import React from "react";
import { Link } from "react-router-dom";
import "../../styles/findDoctor.scss";
export const SectionCardFeaturesThree = () => {
	return (
		<>
			<div className="row d-flex justify-content-center">
				<div className="col text-center">
					<h1>Testimonials</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="card testimonial-card m-2 " style={{ width: "250px", height: "380px" }}>
						<div className="card-up aqua-gradient" />
						<div className="avatar mx-auto white">
							<img
								src="https://avatars.githubusercontent.com/u/53583283?v=4"
								className="rounded-circle img-fluid"
								alt="woman avatar"
							/>
						</div>
						<div className="card-body text-center gray-bg">
							<h4 className="card-title font-weight-bold">George M.</h4>
							<hr />
							<p>I use Next Visit to easily keep track of all of my health issues.</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card testimonial-card m-2 " style={{ width: "250px", height: "380px" }}>
						<div className="card-up aqua-gradient" />
						<div className="avatar mx-auto white">
							<img
								src="https://avatars.githubusercontent.com/u/72631274?v=4"
								className="rounded-circle img-fluid"
								alt="woman avatar"
							/>
						</div>
						<div className="card-body text-center gray-bg">
							<h4 className="card-title font-weight-bold">Antoniya N.</h4>
							<hr />
							<p className="height: 50px, overflowX: scroll">
								My Doctors appreciate the info I bring to my visits.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card testimonial-card m-2 " style={{ width: "250px", height: "380px" }}>
						<div className="card-up aqua-gradient" />
						<div className="avatar mx-auto white">
							<img
								src="https://avatars.githubusercontent.com/u/81258767?v=4"
								className="rounded-circle img-fluid"
								alt="woman avatar"
							/>
						</div>
						<div className="card-body text-center gray-bg">
							<h4 className="card-title font-weight-bold">Nate A.</h4>
							<hr />
							<p>Next visit provides useful information about my medications.</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card testimonial-card m-2 " style={{ width: "250px", height: "380px" }}>
						<div className="card-up aqua-gradient" />
						<div className="avatar mx-auto white">
							<img
								src="https://www.linkedin.com/in/maikel-martinez-445115205/detail/photo/"
								className="rounded-circle img-fluid"
								alt="woman avatar"
							/>
						</div>
						<div className="card-body text-center gray-bg">
							<h4 className="card-title font-weight-bold">Maikel M.</h4>
							<hr />
							<p>Next Visit makes it easy to communicate with my Doctor.</p>
						</div>
					</div>
				</div>
				{/* broken items */}
			</div>
		</>
	);
};
