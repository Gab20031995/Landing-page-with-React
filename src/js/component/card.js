import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "15rem", margin: "auto" }}>
			<img
				src="https://placehold.it/500x325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body" margin="auto">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	text: PropTypes.string
};
