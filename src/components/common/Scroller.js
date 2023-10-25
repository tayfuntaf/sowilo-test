import classNames from "classnames";

// styles
import styles from "../../../public/assets/scss/components/Scroller.module.scss";

export default function Scroller(props) {
	const prefix = "afc-scroller";
	const { model, color } = props;

	return (
		<>
			<div className={classNames(styles[prefix], styles[model], styles[color], props.className)}>
                <div className={classNames(styles[`${prefix}__el`])}>
                    <span></span>
                </div>
            </div>
		</>
	);
};
