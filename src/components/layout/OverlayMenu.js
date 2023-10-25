import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/router";

// components
import { Container, Button } from "@/components";

// styles
import styles from "../../../public/assets/scss/components/OverlayMenu.module.scss";

export default (props) => {
	const prefix = "afc-overlay-menu";
	const { links = [], logo, active } = props;

	const [dropdown, setDropdown] = useState({ id: null, active: false });

	const renderLogo = (logo) => {
		if (!logo) {
			return;
		}

		return (
			<div className={classNames(`${prefix}__logo`, styles[`${prefix}__logo`], "h-full flex items-center justify-between")}>
				<Link href="/">
					<span className={classNames(props.logoprops.className)}>{logo}</span>
				</Link>
			</div>
		);
	};

	const renderMenu = (links) => {
		if (!links.length) {
			return;
		}

		const MenuItem = (props) => {
			const router = useRouter();
			const { children, id, text, icon, href, submenu } = props;

			function handleClick(e, id, hasChildren) {
				if (!hasChildren) {
					return;
				}

				e.preventDefault();

				setDropdown({ id, active: true });
			}

			return (
				<li>
					<Link href={href || "#"} className={classNames(router.pathname === href ? styles["menu-active-link"] : "")} onClick={(e) => handleClick(e, id, submenu.length)}>
						<div className="flex items-center justify-between relative">
							<div>
								{icon && <i className={icon} />}
								{text && <span>{text}</span>}
								{children}
							</div>
							{submenu.length ? <i className={classNames("ti-angle-down", "text-xs scale-75 opacity-60", dropdown.id === id && dropdown.active && "rotate-180")} /> : null}
						</div>
					</Link>
					{submenu.length > 0 && (
						<ul className={classNames(dropdown.id === id && dropdown.active && styles["active"])}>
							{submenu.map((item, index) => (
								<li key={`${prefix}-submenu-item-${index}`}>
									<Link href={item.path || "#"} className={router.pathname === item.path ? styles["menu-active-link"] : ""}>
										{item.icon && <i className={item.icon} />}
										{item.title && <span>{item.title}</span>}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			);
		};

		return (
			<nav className={classNames(`${prefix}__links`)}>
				<ul>
					{links.map((item, index) => (
						<MenuItem id={index} text={item.title} href={item.path} icon={item.icon} submenu={item.items} key={`menu-item-${index}`} />
					))}
				</ul>
			</nav>
		);
	};

	return (
		<>
			<div className={classNames(styles[prefix], props.className, active ? styles.active : "")}>
				<div className={classNames(styles[`${prefix}__head`], "h-28 mb-12")}>
					<Container fluid={true} className="h-full flex items-center justify-between">
						{renderLogo(logo)}
						<Button custom={true} type="menu" className={classNames("top-0 -right-6 w-10 h-10 mr-6")} onClick={props.onClickCloseOverlay}>
							<i className="ti-close"></i>
						</Button>
					</Container>
				</div>
				<div className={classNames(styles[`${prefix}__body`], "")}>{renderMenu(links)}</div>
			</div>
		</>
	);
};
