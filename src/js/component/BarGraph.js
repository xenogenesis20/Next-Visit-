import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-3";
import PropTypes from "prop-types";

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

	console.log("Labels", data.labels);
	console.log("data", data.datasets[0].data);

	useEffect(
		() => {
			if (props.symptomNotes) {
				for (let i = 0; i < props.symptomNotes.length; i++) {
					data.labels.push(props.symptomNotes[i].date);
					data.datasets[0].data.push(parseInt(props.symptomNotes[i].severity));
				}
			}
			console.log(props.symptomNotes);
		}
		// [data.labels]
	);

	return (
		<div>
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
