import React, { useState, useEffect, useContext } from "react";
import "../../styles/SmallMedCard.scss";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const SmallMedCard = props => {
	const { store, actions } = useContext(GlobalState);

	return (
		<div className="card text-center text-dark bg-light my-3 p-4 rounded shadow" style={{ width: "100%" }}>
			<div className="card-body d-block justify-content-between align-items-center p-1">
				<p className="card-title d-flex justify-content-between">
					<span>{props.entity.name}</span>
					<span>Dose: {props.entity.dose}</span>
				</p>
				<div className="mt-2 pt-2 border-top d-flex justify-content-around">
					<button type="button" className="btn btn-primary btn-sm">
						Details
					</button>
					<button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">
						Delete
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
SmallMedCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
SmallMedCard.defaultProps = {
	onDelete: null
};
