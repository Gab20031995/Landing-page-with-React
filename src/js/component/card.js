import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "15rem", margin: "1rem" }}>
			<img
				src="https://placehold.it/500x325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body" margin="auto">
				<h5 className="card-title">Card title</h5>
				<div>
					<p className="card-text">{props.text}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	text: PropTypes.string
};
