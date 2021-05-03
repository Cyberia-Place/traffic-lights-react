import React, { useState } from "react";

export const Lights = () => {
	const [color, setColor] = useState("");
	// const [shineRed, setRed] = useState("");
	// const [shineYellow, setYellow] = useState("");
	// const [shineGreen, setGreen] = useState("");

	return (
		<div>
			<button
				onClick={() => setColor("red")}
				className={`red-light ${color === "red" ? "selected" : ""} `}

				//className="red-light shineRed" onClick = { (setRed("selected"), setYellow(""), setGreen("")) }
			></button>
			<button
				onClick={() => setColor("yellow")}
				className={`yellow-light ${
					color === "yellow" ? "selected" : ""
				} `}

				//className="yellow-light shineYellow" onClick={(setYellow("selected"), setRed(""), setGreen("")) }
			></button>
			<button
				onClick={() => setColor("green")}
				className={`green-light ${
					color === "green" ? "selected" : ""
				} `}

				//className="green-light shineGreen" onClick={ (setGreen("selected"), setRed(""), setYellow("")) }
			></button>
		</div>
	);
};
