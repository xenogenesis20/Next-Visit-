import React, { useState, useEffect, useContext } from "react";
import "../../styles/SmallMedCard.scss";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const SmallMedCard = props => {
	const { store, actions } = useContext(GlobalState);

	return (
		<div className="card text-center text-white m-1 single-med-card" style={{ width: "50%", height: "50%" }}>
			<div className="card-body d-flex  align-items-center p-1">
				<p className="card-title">{props.entity.name}</p>
				<p className="card-title">{props.entity.dose}</p>
				<p className="card-title">{props.entity.frequency}</p>
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
