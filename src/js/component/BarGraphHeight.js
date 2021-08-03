import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-3";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue(value => value + 1); // update the state to force render
}
export const BarGraphHeight = props => {
	const { store, actions } = useContext(GlobalState);
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: "Height over Time",
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
		if (store.vitalHeight) {
			let newDataLables = data;
			newDataLables.labels = [];
			newDataLables.datasets[0].data = [];
			for (let i = 0; i < store.vitalHeight.length; i++) {
				newDataLables.labels.push(store.vitalHeight[i].date);
				newDataLables.datasets[0].data.push(parseInt(store.vitalHeight[i].value));
			}
			setData(newDataLables);
		}
		// console.log(data);
		// console.log(store.vitalHeight);
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
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true
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
