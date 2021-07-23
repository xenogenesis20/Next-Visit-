import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";

export const VitalStatistics = props => {
	const { store, actions } = useContext(GlobalState);

	// const sortVital = array => {
	// 	var sortedVitals = array.sort((a, b) => {
	// 		// console.log(new Date(...a.date.split("/").reverse()), new Date(...b.date.split("/").reverse());
	// 		return new Date(b.date) - new Date(a.date);
	// 	});
	// 	return sortedVitals;
	// };

	// const thirtyDMA = array => {
	// 	let sortedVitals = sortVital(array);
	// 	if (sortedVitals.length > 30) {
	// 		let slicedVitals = sortedVitals.slice(0, 30);
	// 		let sumOfValues = 0;
	// 		let average = 0;
	// 		console.log(slicedVitals);
	// 		for (let vital in slicedVitals) {
	// 			sumOfValues += vital["value"];
	// 		}
	// 		average = sumOfValues / slicedVitals.length;
	// 		return average;
	// 	} else {
	// 		let sumOfValues = 0;
	// 		let average = 0;
	// 		console.log(sortedVitals);
	// 		for (let vital in sortedVitals) {
	// 			sumOfValues += vital["value"];
	// 		}
	// 		average = sumOfValues / sortedVitals.length;
	// 		return average;
	// 	}
	// };

	const thirtyDMA = array => {
		// let sortedVitals = sortVital(array);
		if (array.length > 30) {
			let slicedVitals = array.slice(0, 30);
			let sumOfValues = 0;
			let average = 0;
			console.log(slicedVitals);
			for (let vital of slicedVitals) {
				sumOfValues += vital["value"];
			}
			average = sumOfValues / slicedVitals.length;
			return average;
		} else {
			let sumOfValues = 0;
			let average = 0;

			for (let vital of array) {
				sumOfValues += vital["value"];
				console.log("Vital: ", vital);
				console.log("Vital Value: ", vital["value"]);
			}
			average = sumOfValues / array.length;
			console.log("Average: ", average);
			return average;
		}
	};

	// const currentVital = () => {
	//     sortedVitals[]
	// };

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
