import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";

export const VitalStatistics = props => {
	const { store, actions } = useContext(GlobalState);

	const sortArray = array => {
		const sortedArray = array.sort((a, b) => {
			// console.log(new Date(...a.date.split("/").reverse()), new Date(...b.date.split("/").reverse());
			return new Date(b.date) - new Date(a.date);
		});
            return sortedArray
    };
    
    const thirtyDMA = () => {
        if (sortedArray.length > 30) {
			return sortedArray.slice(0, 30);
		} else {
			return sortedArray;
        }
    }

	// actions.sortVitals("Date", Date.now());
	// 			sortVitals: (key, value) => {
	// let newVitalsArray = getStore().allUserVitals;
	// return newVitalsArray.filter(vital => {
	// 	if (key == "Vital Name") return vital.vitalName == value;
	// 	else if (key == "Date") return vital.date == value;
	// });

	return (
		<button
			type="button"
			className="btn btn-secondary"
			data-mdb-dismiss="modal"
			onClick={() => {
				console.log(thirtyDMA(store.vitalWeight));
			}}></button>

		// <div>{thirtyDMA(vitalWeight)}</div>;
	);
};

VitalStatistics.propTypes = {
	// thirtyDMA: PropTypes.array
};
