import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	// const getMedList = dynamicValue => {
	// 	useEffect(() => {
	// 		fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=DISPLAY_NAME&terms=${dynamicValue}`)
	// 			.then(function(response) {
	// 				if (!response.ok) {
	// 					throw Error(response.statusText);
	// 				}
	// 				// Read the response as json.
	// 				return response.json();
	// 			})
	// 			.then(function(responseAsJson) {
	// 				// Do stuff with the JSON
	// 				console.log("response log", responseAsJson.results);
	// 				setMedList(responseAsJson.results);
	// 			})
	// 			.catch(function(err) {
	// 				console.log("Fetch Error :-S", err);
	// 			});
	// 	}, []);
	// };

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
