import React from "react";
import { Lights } from "./lights.js";

//create your first component
export function TrafficLight() {
	return (
		<div>
			<div className="stick"></div>
			<div className="background">
				<Lights />
			</div>
		</div>
	);
}
