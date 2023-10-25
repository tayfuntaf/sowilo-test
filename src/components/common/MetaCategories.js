import classNames from "classnames";
import { useTranslation } from "react-i18next";

// import styles
import styles from "../../../public/assets/scss/components/MetaCategories.module.scss";

export default function MetaCategories(props) {
	const { t } = useTranslation();
	const prefix = "afc";
	const element = "meta-categories";
	const { data, className, color } = props;

	const elementClassNames = classNames(className, styles[color], styles[`${prefix}-${element}`]);

	return (
		<>
			<div className="relative overflow-hidden">
				{data.length && (
					<ul className={elementClassNames}>
						{data.map((item, index) => (
							<li key={`${prefix}-${element}-${index}`}>
								<span>{t(item)}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};
