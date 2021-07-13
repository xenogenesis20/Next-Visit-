import React from "react";
import { Bar } from "react-chartjs-3";

export const BarGraph = () => {
	const data = {
		labels: ["06/25"],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: [50]
			}
		]
	};
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
