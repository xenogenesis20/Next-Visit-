import React, { useEffect, useState, useContext } from "react";
import { Bar, Line } from "react-chartjs-3";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue(value => value + 1); // update the state to force render
}
export const BarGraphWeight = props => {
	const { store, actions } = useContext(GlobalState);
	const forceUpdate = useForceUpdate();
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: "Weight over Time",
				backgroundColor: "rgba(92,119,254,0.2)",
				borderColor: "rgba(4,35,188,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(92,119,254,0.4)",
				hoverBorderColor: "rgba(4,35,188,1)",
				data: []
			}
		]
	});

	const legend = {
		display: true,
		position: "top",
		labels: {
			fontColor: "#FFFFFF",
			fontSize: 16
		}
	};

	useEffect(() => {
		if (store.vitalWeight) {
			let newDataLables = data;
			newDataLables.labels = [];
			newDataLables.datasets[0].data = [];
			for (let i = 0; i < store.vitalWeight.length; i++) {
				newDataLables.labels.push(store.vitalWeight[i].date);
				newDataLables.datasets[0].data.push(parseInt(store.vitalWeight[i].value));
			}
			setData(newDataLables);
		}
		// console.log(data);
		// console.log(store.vitalWeight);
	});

	return (
		<div>
			<button className="btn btn-lg btn-secondary" onClick={forceUpdate}>
				Visualize
			</button>
			<Bar
				data={data}
				width={100}
				height={200}
				options={{
					legend: {
						labels: {
							fontColor: "black"
						}
					},
					maintainAspectRatio: false,
					legend: {
						labels: { fontColor: "black", fontSize: 16 }
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
									fontColor: "black",
									fontSize: 16
								}
							}
						],
						xAxes: [
							{
								ticks: {
									fontColor: "black",
									stepSize: 1,
									beginAtZero: true,
									fontSize: 16
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};
// BarGraph.propTypes = {
// 	vital: PropTypes.array
// };
