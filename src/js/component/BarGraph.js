import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-3";
import PropTypes from "prop-types";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue(value => value + 1); // update the state to force render
}
export const BarGraph = props => {
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: "Symptom Severity over time",
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
		if (props.symptomNotes) {
			let newDataLables = data;
			newDataLables.labels = [];
			newDataLables.datasets[0].data = [];
			for (let i = 0; i < props.symptomNotes.length; i++) {
				newDataLables.labels.push(props.symptomNotes[i].date);
				console.log("Bargraph dates", newDataLables.labels.push(props.symptomNotes[i].date));
				newDataLables.datasets[0].data.push(parseInt(props.symptomNotes[i].severity));
			}
			setData(newDataLables);
		}
		// console.log(data);
		// console.log(props.symptomNotes);
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
BarGraph.propTypes = {
	symptomNotes: PropTypes.array
};
