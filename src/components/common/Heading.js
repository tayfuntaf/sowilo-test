export default function Heading(props) {
	const { children, text, colorwordposition, colorowrdclass } = props;

	let title = props.title || "";
	let CustomTag = props.as || "h2";

	// colored words :)
	if (colorwordposition) {
		let titleArray = title.split(" ");

		title = titleArray.map((el, i) => (
			<span key={i} className={i === colorwordposition ? `${colorowrdclass || "text-primary"}` : ""}>
				{el}{" "}
			</span>
		));
	}

	return (
		<>
			<div {...props}>
				{children || (
					<>
						<CustomTag {...props.titleprops}>{title}</CustomTag>
						{text && <p {...props.textprops}>{text}</p>}
					</>
				)}
			</div>
		</>
	);
};
