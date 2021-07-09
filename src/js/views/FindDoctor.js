import React, { useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { DoctorCard } from "../component/DoctorCard";
import "../../styles/findDoctor.scss";
import { Navbar } from "../component/navbar";

export const FindDoctor = () => {
	const { store, actions } = useContext(GlobalState);

	return (
		<>
			<Navbar />
			<div className="container d-flex justify-content-center align-items-center m-top">
				<div className="div">
					<div className="row">
						<div className="col-12 d-flex">
							{store.allDoctors &&
								store.allDoctors.map((doctor, index) => (
									<DoctorCard key={index} entity={doctor} id={store.allDoctors[index].id} />
								))}
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="container">
								<iframe
									style={{ border: "0", height: "40vh", width: "50vw" }}
									loading="lazy"
									allowFullScreen
									src="https://www.google.com/maps/embed/v1/search?q=neurologist%20urologist&key=AIzaSyCYIlxn_Hh4HnKLqgQXPelPjaA4IdGcK8k"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
