import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = (props) => {
	const { theme, setTheme } = useTheme();
	const [ mounted, setMounted ] = useState(false);

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<div {...props}>
				<button type="button" className="font-bold" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					<i className="ti-shine font-bolder"></i>
				</button>
			</div>
		</>
	);
};

export default ThemeSwitch;
