import classNames from "classnames";
import { Button as ButtonStrap } from "reactstrap";

// import scss
import styles from "../../../public/assets/scss/components/Button.module.scss";

export default function Button(props) {
	const prefix = "afc";
	const element = "btn";
	const { children, className, custom, type, size, color, outline, active } = props;
	const elementClassNames = classNames(className, active ? styles["active"] : "", custom && [styles[type], styles[size], styles[color], outline && styles[(`outline-${color}`)], styles[`${prefix}-${element}`]]);

	return (
		<>
			<ButtonStrap {...props} className={classNames(elementClassNames)} cssModule={custom && { [element]: `${prefix}-${element}` }}>
				<span>{children}</span>
			</ButtonStrap>
		</>
	);
};

/*
 * to change the component's default CSS className
 * cssModule={{ btn: 'custom-btn' }}
 */
