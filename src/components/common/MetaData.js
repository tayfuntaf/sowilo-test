import classNames from "classnames";

// import styles
import styles from "../../../public/assets/scss/components/MetaData.module.scss";

export default function MetaData(props) {
	const prefix = "afc";
	const element = "metadata";
	const { data, className } = props;

	const elementClassNames = classNames(className, styles[`${prefix}-${element}`]);

	return (
		<div>
			{data.length && (
				<ul className={elementClassNames}>
					{data.map((item, index) => (
						<li key={`${prefix}-${element}-${index}`}>
							<span>{item}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
