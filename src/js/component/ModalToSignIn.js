import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ModalToSignIn = props => {
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Account creation successful</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>You are ready to login and and start using Next Visit!</p>
					</div>
					<div className="modal-footer">
						{/* <button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							something
						</button> */}
						<Link to="/SignIn">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Go to login!
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
ModalToSignIn.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

ModalToSignIn.defaultProps = {
	show: false,
	onClose: null
};
