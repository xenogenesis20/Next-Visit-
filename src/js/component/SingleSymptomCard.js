import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleSymptomCard = props => {
	const { actions, store } = useContext(GlobalState);

	console.log(props.entity);

	return (
		<div className="card border border-primary shadow-0" style={{ width: "35vw" }}>
			<div className="card-header text-center">
				<h3>{props.entity.symptomName}</h3>
			</div>
			<div className="card-body p-2">
				{/* Start med info inside card body */}
				<div className="list-group">
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">Current Dose:</h6>
							<h6 className="mb-1">{props.entity.dose} </h6>
						</div>
					</div>
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">How often do you take it:</h6>
							<h6 className="mb-1">{props.entity.frequency}</h6>
						</div>
					</div>
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">Symptom target:</h6>
							<h6 className="mb-1">{props.entity.reson}</h6>
						</div>
					</div>
					<div className="list-group-item">
						<div className="d-flex w-100 justify-content-around">
							<h6 className="mb-1">Side effects:</h6>
							<h6 className="mb-1">{props.entity.sideEffects}</h6>
						</div>
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
SingleSymptomCard.propTypes = {
	// history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleSymptomCard.defaultProps = {
	onDelete: null
};
