import React from "react";
import "../../styles/home.scss";
import { SingleMedicationCard } from "../component/SingleMedicationCard";

export const YourMedications = () => {
	return (
		<div className="container-fluid">
			<h1>Your Medications</h1>
			<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
				Add a new medication.
			</button>
			<div className="row">
				<div className="col-6">
					<SingleMedicationCard />
					<SingleMedicationCard />
					<SingleMedicationCard />
					<SingleMedicationCard />
					<SingleMedicationCard />
				</div>
			</div>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add a medication
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="medication-name-input"
										className="form-control"
										name="medicationName"
									/>
									<label className="form-label" htmlFor="medication-name-input">
										Medication name
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input type="text" id="dose-input" className="form-control" name="dose" />
									<label className="form-label" htmlFor="dose-input">
										Current dose
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="number"
										id="frequency-input"
										className="form-control"
										name="frequency"
									/>
									<label className="form-label" htmlFor="frequency-input">
										How often do you take it
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input type="text" id="reason-input" className="form-control" name="reason" />
									<label className="form-label" htmlFor="reason-input">
										Reason for medication
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="sideEffects-input"
										className="form-control"
										name="sideEffects"
									/>
									<label className="form-label" htmlFor="sideEffects-input">
										Side effects
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
								Cancel
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
