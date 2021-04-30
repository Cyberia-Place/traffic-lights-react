import React from "react";

export const Lights = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<button className="red-light" onClick=""></button>
			<button className="yellow-light" onClick=""></button>
			<button className="green-light" onClick=""></button>
		</div>
	);
};
