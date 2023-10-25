import classNames from "classnames";
import { Badge as BadeStrap } from "reactstrap";

// import scss
import styles from "../../../public/assets/scss/components/Badge.module.scss";

export default function Badge(props) {
	const prefix = "afc";
	const element = "badge";
	const { children, className, custom, type, model, size, color, title } = props;
	const elementClassNames = classNames(className, custom && [styles[type], styles[model], styles[size], styles[color], styles[`${prefix}-${element}`]]);

	return (
		<>
			<BadeStrap {...props} className={elementClassNames} cssModule={custom && { [element]: `${prefix}-${element}` }}>
				{custom && <span className={classNames(styles.overlay)} />}
				<span className={classNames(styles.title)}>{children || title}</span>
			</BadeStrap>
		</>
	);
}
