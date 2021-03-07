//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Jumbotron } from "./component/jumbotron.js";
import { Navbar } from "./component/navbar.js";
import { Card } from "./component/card.js";
import { Footer } from "./component/footer.js";
//render your react application

export function Padre() {
	return (
		<div>
			<div>
				<Navbar />
				<div className="container">
					<Jumbotron />
					<div className="row">
						<Card text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
						<Card text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
						<Card text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
						<Card text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
//reactdomrender es una funcion que recibe 2 parametros (que quiero mostrar, donde quiero que se muestre)
ReactDOM.render(<Padre />, document.querySelector("#app"));
