import classNames from "classnames";

// import scss
import styles from "../../../public/assets/scss/components/Label.module.scss";

export default function Label(props) {
	const prefix = "afc";
	const element = "label";
	const { children } = props;

	return (
		<label {...props} className={classNames(styles[`${prefix}-${element}`], props.className)}>
			{children}
		</label>
	);
};
