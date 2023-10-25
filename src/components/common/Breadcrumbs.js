import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

// styles
import styles from "../../../public/assets/scss/components/Breadcrumbs.module.scss";

export default function Breadcrumbs(props) {
	const { items } = props;

	if (!items.length) {
		return;
	}

	const { t } = useTranslation();
	const prefix = "afc-breadcrumbs";
	const itemsLength = items.length;

	return (
		<>
			<Breadcrumb listClassName="m-0" className={classNames(styles[prefix], props.className)}>
				{items.map((item, key) => (
					<BreadcrumbItem key={key} active={key + 1 === itemsLength ? true : false}>
						{item.title}
					</BreadcrumbItem>
				))}
			</Breadcrumb>
		</>
	);
}
