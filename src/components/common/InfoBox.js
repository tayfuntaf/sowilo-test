import classNames from "classnames";

// import scss
import styles from "../../../public/assets/scss/components/InfoBox.module.scss";

export default function InfoBox(props) {
	const prefix = "afc";
	const element = "infobox";
	const { children, className, custom, type, model, size, color, icon, title, image, text } = props;
	const elementClassNames = classNames(className, custom && [styles[type], styles[size], styles[color], styles[model], styles[`${prefix}-${element}`]]);

	return (
		<>
			<div {...props} className={elementClassNames}>
				{children}
				{icon && <i {...props.iconprops} className={classNames(icon, styles[icon], props.iconprops.className)} />}
				{title && <h2 {...props.titleprops}>{title}</h2>}
				{text && <p {...props.textprops}>{text}</p>}
			</div>
		</>
	);
};
