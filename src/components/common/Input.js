import classNames from "classnames";

// import scss
import styles from "../../../public/assets/scss/components/Input.module.scss";

export default function Input(props) {
	let CustomTag;
	const prefix = "afc";
	const element = "input";
	const { type } = props;

	if ("textarea" === type) {
		CustomTag = "textarea";
	} else {
		CustomTag = "input";
	}

	return (
		<>
			<CustomTag {...props} className={classNames(styles[`${prefix}-${element}`], props.className)}></CustomTag>
		</>
	);
};
