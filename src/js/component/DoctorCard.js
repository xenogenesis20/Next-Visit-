import React from "react";
import PropTypes from "prop-types";
import "../../styles/findDoctor.scss";
export const DoctorCard = props => {
	return (
		<div className="card testimonial-card m-2 " style={{ width: "250px", height: "380px" }}>
			<div className="card-up aqua-gradient" />
			<div className="avatar mx-auto white">
				<img
					src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
					className="rounded-circle img-fluid"
					alt="woman avatar"
				/>
			</div>
			<div className="card-body text-center">
				<h4 className="card-title font-weight-bold">{props.entity.name}</h4>
				<hr />
				<p>{props.entity.specialty}</p>
			</div>
		</div>
	);
};
DoctorCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};
