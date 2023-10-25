import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

// components
import { Container, Row, Col } from "@/components";

// modules
import styles from "../../../public/assets/scss/components/Footer.module.scss";
import { t } from "i18next";

const copyrightText = "St Medya © 2023 Copyright. All rights reserved.";

export default (props) => {
	const { t } = useTranslation();
	const prefix = "afc-footer";
	const { menus = [], model } = props;

	const renderCopyright = () => {
		return <p className="text-center text-inherit lg:text-left md:mb-6 lg:mb-0">{t(copyrightText)}</p>;
	};

	const renderMenu = (menus) => {
		if (!menus.length) {
			return;
		}

		const MenuItem = (props) => {
			const router = useRouter();
			const { children, text, icon, href, submenu } = props;

			return (
				<li>
					<Link href={href || "#"} className={classNames(props.className, router.pathname === href ? styles["menu-active-link"] : "")}>
						{icon && <i className={icon} />}
						{text && <span>{text}</span>}
						{children}
					</Link>
					{/* {submenu && submenu.length > 0 && (
						<ul>
							{submenu.map((item, index) => (
								<li key={`submenu-item-${index}`}>
									<Link href={item.path || "#"} className={router.pathname === item.path ? styles["submenu-active-link"] : ""}>
										{item.icon && <i className={item.icon} />}
										{item.title && <span>{item.title}</span>}
									</Link>
								</li>
							))}
						</ul>
					)} */}
				</li>
			);
		};

		return (
			<nav className={classNames(`${prefix}__navbar__links`, styles["navbar__links"])}>
				<ul className={classNames("flex items-center justify-center lg:justify-end")}>
					{menus.map((item, index) => (
						<MenuItem className={classNames("mr-10 lg:mr-0", index !== 0 && "lg:ml-6")} text={item.title} href={item.path} icon={item.icon} key={`menu-item-${index}`} />
					))}
				</ul>
			</nav>
		);
	};

	return (
		<>
			<footer className={classNames(prefix, styles[prefix], styles[model], props.className)}>
				<div className={classNames(`${prefix}__navbar`, styles["navbar"], "w-full")}>
					<Container>
						<Row>
							<Col lg={4}>{renderCopyright(menus)}</Col>
							<Col lg={8} className="hidden md:block">{renderMenu(menus)}</Col>
						</Row>
					</Container>
				</div>
			</footer>
		</>
	);
};
