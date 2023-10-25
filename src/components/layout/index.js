export default ({ children, color }) => {
	return (
		<>
			<div className="overflow-x-hidden text-sm md:text-lg text-red-500 md:text-black">{children}</div>
		</>
	);
};
