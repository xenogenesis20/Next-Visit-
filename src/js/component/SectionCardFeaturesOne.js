import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
export const SectionCardFeaturesOne = () => {
	return (
		<div className="text-center">
			<div className="row">
				<div className="col">
					<div className="feature-box">
						<h3 className="m-2 p-2">Symptoms</h3>
						<p className="m-2 p-2">
							Keep track of all of your symptomes in one place. Add notes about how your symptom is
							progressing over time
						</p>
					</div>
				</div>
				<div className="col">
					<div className="feature-box">
						<h3 className="m-2 p-2">Vitals</h3>
						<p className="m-2 p-2">
							You have the ability to track your weight, heart rate, blood pressure and height. More
							vitals coming in the future.
						</p>
					</div>
				</div>
				<div className="col">
					<div className="feature-box">
						<h3 className="m-2 p-2">Medications</h3>
						<p className="m-2 p-2">
							Keep a log of the current medication you take and see important information about your
							medication.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col mt-4">
					<div className="feature-box p-5">
						<h3 className="m-2 p-2">Plan your Next Visit</h3>
						<p className="m-2 p-2">
							With Next Visit, you can plan your upcoming doctor appointments with information you have
							been tracking about your symptoms, vitals and medications.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
