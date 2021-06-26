import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleMedicationCard = props => {
	const { actions, store } = useContext(GlobalState);
	const [state, setState] = useState({
		//initialize state here
	});
	// console.log(props.entity.id);

	return (
		<div className="card border border-primary shadow-0" style={{ width: "35vw" }}>
			<div className="card-header">
				<h3>Medication name</h3>
			</div>
			<div className="card-body p-2">
				{/* Start med info inside card body */}
				<div className="list-group">
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">Current Dose:</h6>
							<h6 className="mb-1">dynamically generated</h6>
						</div>
					</div>
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">How often do you take it:</h6>
							<h6 className="mb-1">dynamically generated</h6>
						</div>
					</div>
					<div className="list-group-item">
						<p className="mb-1">
							<strong>Reason for medication:</strong>
							ex:high BP ? Info taken when medication is added.
						</p>
					</div>
					<div className="list-group-item">
						<p>
							This is where side effects will be shown if the user input any. ex: nausea, numbness,
							insomnia{" "}
						</p>
					</div>
					<div className="list-group-item">
						<p className="mb-1">
							<strong>Past dosages:</strong>
							ex:50mg, 100mg, etc, etc
						</p>
					</div>
				</div>
				{/* End med info inside card body */}
				<div className="d-flex w-100 justify-content-around m-1">
					<Link to={"/edit/"}>
						<button type="button" className="btn btn-primary">
							Edit
							<i className="fas fa-pencil-alt mr-3" />
						</button>
					</Link>
					<button className="btn btn btn-danger">
						Delete
						<i className="fas fa-trash-alt" />
					</button>
				</div>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SingleMedicationCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleMedicationCard.defaultProps = {
	onDelete: null
};
