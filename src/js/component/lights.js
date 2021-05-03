import React, { useState } from "react";

export const Lights = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<div
				onClick={() => setColor("red")}
				className={`red-light ${
					color === "red" ? "selected" : ""
				} `}></div>
			<div
				onClick={() => setColor("yellow")}
				className={`yellow-light ${
					color === "yellow" ? "selected" : ""
				} `}></div>
			<div
				onClick={() => setColor("green")}
				className={`green-light ${
					color === "green" ? "selected" : ""
				} `}></div>
		</div>
	);
};
