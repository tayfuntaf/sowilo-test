export default (props) => {
	const { children } = props;

	return (
		<>
			<section {...props}>
				{children}
			</section>
		</>
	);
};
