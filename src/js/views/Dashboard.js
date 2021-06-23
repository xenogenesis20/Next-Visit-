import React from "react";
import "../../styles/home.scss";

export const Dashboard = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand fw-bold" href="#">
						NEXT VISIT
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<form className="d-flex ms-auto">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<button className="btn btn-outline-primary" type="button" id="button-addon2">
									<i className="fas fa-search" />
								</button>
							</div>
						</form>
						<div className="dropdown dropstart ">
							<button
								className="btn btn-primary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-mdb-toggle="dropdown"
								aria-expanded="false">
								<i className="fas fa-user-edit" />
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			{/* OFF CANVAS MENU */}
			<a
				className="btn btn-primary"
				data-bs-toggle="offcanvas"
				href="#offcanvasExample"
				role="button"
				aria-controls="offcanvasExample">
				Link with href
			</a>
			<button
				className="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasExample"
				aria-controls="offcanvasExample">
				Button with data-bs-target
			</button>

			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">
						Offcanvas
					</h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					/>
				</div>
				<div className="offcanvas-body">
					<div>
						Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
						images, lists, etc.
					</div>
					<div className="dropdown mt-3">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown">
							Dropdown button
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* OFF CANVAS MENU END*/}
		</>
	);
};
