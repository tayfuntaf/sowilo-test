import { Container } from "reactstrap";

//
import styles from "../../../public/assets/scss/components/Container.module.scss";
import classNames from "classnames";

export default (props) => {
	const prefix = "afc-container";
	const { children, fluid } = props;

	let style = {
		margin: "auto",
	};

	if (fluid) {
		style = {
			...style,
			paddingLeft: 30,
			paddingRight: 30,
		};
	}

	return (
		<>
			<Container {...props} className={classNames(props.className, styles[prefix], fluid && styles.fluid)} style={style}>
				{children}
			</Container>
		</>
	);
};
