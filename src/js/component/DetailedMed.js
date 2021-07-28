import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/demo.scss";

export const DetailedMed = () => {
	const location = useLocation();
	console.log(location.state.medication);

	const [medicationData, setMedicationData] = useState([]);

	useEffect(() => {
		let str = location.state.medication.name;
		let arr = str.split("(");
		let newStr = arr[0].trim();

		fetch(`https://api.fda.gov/drug/label.json?search=adverse_reactions:${newStr}`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				// console.log("response log", responseAsJson);
				setMedicationData(responseAsJson.results);
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
	}, []);

	return (
		<div className="container ">
			<div className="row">
				<div className="col-12">
					<h1>{location.state.medication.name}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p>Current dose of this medicaion: {location.state.medication.dose}</p>
					<p>
						I am currently taking {location.state.medication.name} so often:{" "}
						{location.state.medication.frequency}
					</p>
					<p>
						I am currently taking {location.state.medication.name} to target:{" "}
						{location.state.medication.reason}
					</p>
					<p>
						Side effect I have from taking {location.state.medication.name}:{" "}
						{location.state.medication.sideEffects}
					</p>
				</div>
			</div>
			<Link to="/DashboardHome">
				<button className="btn btn-primary">Back to Dashboard</button>
			</Link>
			<div className="row">
				<div>
					{/* Nav tabs start */}
					<Tabs>
						<TabList>
							{medicationData.length > 0 && medicationData[0].description ? <Tab>Description</Tab> : ""}
							{medicationData.length > 0 && medicationData[0].adverse_reactions ? (
								<Tab>Adverse Reactions</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].dosage_forms_and_strengths ? (
								<Tab>Dosage Forams and Strengths</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].information_for_patients ? (
								<Tab>Information for Patients</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].warnings_and_cautions ? (
								<Tab>Warnings and Cautions</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].indications_and_usage ? (
								<Tab>Indications and usage</Tab>
							) : (
								""
							)}
							{medicationData.length > 0 && medicationData[0].dependence ? <Tab>Dependence</Tab> : ""}
						</TabList>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].description}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].adverse_reactions}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].dosage_forms_and_strengths}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].information_for_patients}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].warnings_and_cautions}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].indications_and_usage}</p>
						</TabPanel>
						<TabPanel>
							<p>{medicationData.length > 0 && medicationData[0].dependence}</p>
						</TabPanel>
					</Tabs>
					{/* Nav tabs end */}
				</div>
			</div>
		</div>
	);
};
