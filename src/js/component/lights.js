import React, { useState } from "react";

export const Lights = () => {
	// const [shineRed, setRed] = useState("");
	// const [shineYellow, setYellow] = useState("");
	// const [shineGreen, setGreen] = useState("");

	return (
		<div>
			<button
				className="red-light shineRed"
				// onClick={
				// 	(setRed("selected"), setYellow(""), setGreen(""))
				// }
			></button>
			<button
				className="yellow-light shineYellow"
				// onClick={
				// 	(setYellow("selected"), setRed(""), setGreen(""))
				// }
			></button>
			<button
				className="green-light shineGreen"
				// onClick={
				// 	(setGreen("selected"), setRed(""), setYellow(""))
				// }
			></button>
		</div>
	);
};
