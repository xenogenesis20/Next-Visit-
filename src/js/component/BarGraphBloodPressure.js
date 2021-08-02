import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-3";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue(value => value + 1); // update the state to force render
}
export const BarGraphBloodPressure = props => {
	const { store, actions } = useContext(GlobalState);
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: "Blood Pressure over Time",
				backgroundColor: "rgba(92,119,254,0.2)",
				borderColor: "rgba(4,35,188,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(92,119,254,0.4)",
				hoverBorderColor: "rgba(4,35,188,1)",
				data: []
			}
		]
	});
	const forceUpdate = useForceUpdate();
	useEffect(() => {
		if (store.vitalBloodPressure) {
			let newDataLables = data;
			newDataLables.labels = [];
			newDataLables.datasets[0].data = [];
			for (let i = 0; i < store.vitalBloodPressure.length; i++) {
				newDataLables.labels.push(store.vitalBloodPressure[i].date);
				console.log("date : ", store.vitalBloodPressure[i].date);
				newDataLables.datasets[0].data.push(parseInt(store.vitalBloodPressure[i].value));
			}
			setData(newDataLables);
		}
		console.log(data);
	});

	return (
		<div>
			<button className="btn btn-lg btn-secondary" onClick={forceUpdate}>
				Visualize
			</button>
			<Bar
				data={data}
				width={300}
				height={600}
				options={{
					maintainAspectRatio: false,
					legend: {
						labels: { fontColor: "white", fontSize: 16 }
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
									fontColor: "white",
									fontSize: 16
								}
							}
						],
						xAxes: [
							{
								ticks: {
									fontColor: "white",
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
