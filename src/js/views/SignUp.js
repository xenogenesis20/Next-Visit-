import React, { useEffect } from "react";
import * as mdb from "mdb-ui-kit"; // lib

export const SignUp = () => {
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	return (
		<div>
			<div className="container form-wrapper">
				<div>
					<h1 className="text-center mt-5">Lets collect some basic information.</h1>
					<form>
						<div className="form-outline bg-light mb-3">
							<input type="text" id="form1" className="form-control" />
							<label className="form-label" htmlFor="form1">
								Full Name
							</label>
						</div>
						<div className="input-group">
							<label>Email</label>
							<input type="email" className="form-control" name="email" placeholder="Enter email" />
						</div>
						<div className="input-group">
							<label>Phone</label>
							<input type="phone" className="form-control" name="address" placeholder="Enter phone" />
						</div>
						<div className="input-group">
							<label>Address</label>
							<input type="text" className="form-control" name="phone" placeholder="Enter address" />
						</div>

						<button type="button" className="btn btn-primary btn-rounded form-control">
							save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
