import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

// styles
import styles from "../../../public/assets/scss/components/Pagination.module.scss";

export default function Pagination(props) {
	const { model } = props;

	const { t } = useTranslation();
	const prefix = "afc-pagination";

	return (
		<>
			<div className={classNames(styles[prefix], styles[model], props.className)}>
				<ul className="page-numbers">
					<li className={classNames(styles["current"])}>
						<span>1</span>
					</li>
					<li>
						<Link href="#">2</Link>
					</li>
					<li>
						<Link href="#">3</Link>
					</li>
					<li>
						<Link className={classNames(styles["next"])} href="#">
							{t("NEXT")}
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
