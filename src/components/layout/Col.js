import { Col } from "reactstrap";

export default (props) => {
	const { children } = props;

	return <Col {...props}>{children}</Col>;
};
