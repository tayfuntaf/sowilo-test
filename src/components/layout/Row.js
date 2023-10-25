import { Row } from "reactstrap";
import classNames from "classnames";

export default (props) => {
	const { children, size } = props;

	return (
		<>
			<Row {...props} className={classNames("afc-row", `afc-row--${size}`, props.className)}>
				{children}
			</Row>
		</>
	);
};
