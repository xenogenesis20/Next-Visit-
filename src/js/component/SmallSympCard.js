import React, { useState, useEffect, useContext } from "react";
import "../../styles/SmallMedCard.scss";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const SmallSympCard = props => {
	const { store, actions } = useContext(GlobalState);
	console.log(props.entity);
	return (
		<div className="card text-center text-white m-1 single-med-card" style={{ width: "40%", height: "15%" }}>
			<div className="card-body d-flex justify-content-around align-items-center p-1">
				<p className="card-title">{props.entity.symptomName}</p>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SmallSympCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};
