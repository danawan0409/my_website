import "./intro.css";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
	const texts = ["Dana Wan", "Software Engineer", "DevOps Engineer", "Full Stack Developer", "CS & Stats Student"];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
		setIndex((prev) => (prev + 1) % texts.length);
		}, 3000); 
		return () => clearInterval(interval);
	}, [texts.length]);
	return (
		<div className="container">
			<h1 key={index} className="fade-text">
				{texts[index]}
			</h1>
			
			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

			<div className="rain">
				<div className="drop"></div>
				<div className="waves">
					<div></div>
					<div></div>
				</div>
				<div className="splash"></div>
				<div className="particles">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

		</div>
	);
}