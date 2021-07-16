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
				label: "My First dataset",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
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
				newDataLables.datasets[0].data.push(parseInt(props.symptomNotes[i].severity));
			}
			setData(newDataLables);
		}
		console.log(data);
		console.log(props.symptomNotes);
	});

	return (
		<div>
			<button onClick={forceUpdate}>Refresh</button>
			<Bar
				data={data}
				width={100}
				height={500}
				options={{
					maintainAspectRatio: false
				}}
			/>
		</div>
	);
};
BarGraph.propTypes = {
	symptomNotes: PropTypes.object
};
