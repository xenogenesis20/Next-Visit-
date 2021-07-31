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
		if (array[0].vitalName == "Blood Pressure") {
			let sumOfSystValues = 0;
			let sumOfDiasValues = 0;
			let systAverage = 0;
			let diasAverage = 0;

			for (let vital of array) {
				// console.log("Vital Value: ", vital["value"].slice(0, 3));
				sumOfSystValues += parseInt(vital["value"].slice(0, 3));
				sumOfDiasValues += parseInt(vital["value"].slice(-2));
			}
			systAverage = sumOfSystValues / array.length;
			diasAverage = sumOfDiasValues / array.length;
			return systAverage + "/" + diasAverage;
		}
		if (array.length > 30) {
			let slicedVitals = array.slice(0, 30);
			let sumOfValues = 0;
			let average = 0;
			// console.log(slicedVitals);
			for (let vital of slicedVitals) {
				sumOfValues += parseInt(vital["value"]);
			}
			average = sumOfValues / slicedVitals.length;
			return average;
		} else {
			let sumOfValues = 0;
			let average = 0;

			for (let vital of array) {
				sumOfValues += parseInt(vital["value"]);
				// console.log("Vital: ", vital);
				// console.log("Vital Value: ", vital["value"]);
			}
			average = sumOfValues / array.length;
			// console.log("Average: ", average);
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
		<>
			{/* <button
				type="button"
				className="btn btn-secondary"
				data-mdb-dismiss="modal"
				onClick={() => {
					console.log(store.vitalWeight);
					console.log(thirtyDMA(store.vitalWeight));
				}}></button>
			<div>
				<div>{thirtyDMA(store.vitalWeight)}</div>
			</div> */}
			<div className="col">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Vital Name</th>
							<th scope="col">Date</th>
							<th scope="col">Value</th>
							<th scope="col">30 Day Average</th>
						</tr>
					</thead>
					<tbody>
						{store.vitalWeight.map((val, i) => {
							return (
								<tr key={i}>
									<td>{val.vitalName}</td>
									<td>{val.date}</td>
									<td>{val.value}</td>
									<td>{thirtyDMA(store.vitalWeight)}</td>
								</tr>
							);
						})}
						{store.vitalHeight.map((val, i) => {
							return (
								<tr key={i}>
									<td>{val.vitalName}</td>
									<td>{val.date}</td>
									<td>{val.value}</td>
									<td>{thirtyDMA(store.vitalHeight)}</td>
								</tr>
							);
						})}
						{store.vitalHeartRate.map((val, i) => {
							return (
								<tr key={i}>
									<td>{val.vitalName}</td>
									<td>{val.date}</td>
									<td>{val.value}</td>
									<td>{thirtyDMA(store.vitalHeartRate)} bpm</td>
								</tr>
							);
						})}
						{store.vitalBloodPressure.map((val, i) => {
							return (
								<tr key={i}>
									<td>{val.vitalName}</td>
									<td>{val.date}</td>
									<td>{val.value}</td>
									<td>{thirtyDMA(store.vitalBloodPressure)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

VitalStatistics.propTypes = {
	// thirtyDMA: PropTypes.array
};
