import Link from "next/link";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

// hooks
import useScrollingUp from "@/hooks/useScrollingUp";

// components
import {
  ThemeSwitch,
  Container,
  OverlayMenu,
  Button,
  LanguageDropdown,
} from "@/components";

// modules
import styles from "../../../public/assets/scss/components/Header.module.scss";
import logoo from "../../../public/assets/images/avatars/sowilo.png";
import Image from "next/image";

export default (props) => {
  const { t } = useTranslation();
  const prefix = "afc-header";
  const [active, setActive] = useState(false);
  const { menus = [], logo, search, languages, model, color } = props;
  const scrolled = useScrollingUp();

  const renderLogo = (logo) => {
    if (!logo) {
      return;
    }
    // Headerdaki Logo
    return (
      <div
        className={classNames(
          `${prefix}__navbar__logo`,
          styles["navbar__logo"]
        )}
      >
        <Button
          custom={true}
          active={active}
          type="menu"
          className={classNames("w-10 h-10 mr-6 lg:hidden")}
          onClick={() => setActive(true)}
        >
          <span style={{ backgroundColor: color }} />
          <span style={{ backgroundColor: color }} />
          <span style={{ backgroundColor: color }} />
        </Button>
        <Link href="/">
          <span className={classNames(props.logoprops.className)}>
            <Image
              src={logoo}
              height={50}
              className="filter invert"
              alt="Sowilo"
            ></Image>
          </span>
        </Link>
      </div>
    );
  };

  const renderMenu = (menus) => {
    if (!menus.length) {
      return;
    }

    const MenuItem = (props) => {
      const router = useRouter();
      const { children, text, icon, href, submenu } = props;
      // Header Home Dropdown
      return (
        <li>
          <Link
            href={href || "#"}
            className={classNames(
              router.pathname === href ? styles["menu-active-link"] : ""
            )}
          >
            {icon && <i className={icon} />}
            {text && <span>{t(text)}</span>}
            {children}
          </Link>
          {/* {submenu.length > 0 && (
            <ul>
              {submenu.map((item, index) => (
                <li key={`submenu-item-${index}`}>
                  <Link
                    href={item.path || "#"}
                    className={
                      router.pathname === item.path
                        ? styles["submenu-active-link"]
                        : ""
                    }
                  >
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
    // Header Link
    return (
      <nav
        className={classNames(
          `${prefix}__navbar__links`,
          styles["navbar__links"],
          "hidden lg:flex -ml-"
        )}
      >
        <ul>
          {menus.map((item, index) => (
            <MenuItem
              text={item.title}
              href={item.path}
              icon={item.icon}
              submenu={item.items}
              key={`menu-item-${index}`}
            />
          ))}
        </ul>
      </nav>
    );
  };

  const renderIcons = (search, languages) => {
    if (!search || !languages) {
      return;
    }
    // Header dil seçimi ve theme //
    return (
      <div
        className={classNames(
          `${prefix}__navbar__icons`,
          styles["navbar__icons"]
        )}
      >
        <ul>
          {true && (
            <li>
              <div>
                <ThemeSwitch style={{ paddingTop: 4 }} />
              </div>
            </li>
          )}
          {!search && (
            <li>
              <div>
                <i
                  className="ti-search font-bold relative"
                  style={{ top: 2, fontSize: "93%" }}
                />
              </div>
            </li>
          )}
          {languages && (
            <li>
              <div>
                <LanguageDropdown className="font-bold" />
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <header
        className={classNames(
          `${prefix}`,
          styles["header"],
          styles[model],
          styles[color],
          scrolled && styles["sticky"],
          props.className
        )}
      >
        <div className={classNames(`${prefix}__navbar`, styles["navbar"])}>
          <Container fluid={true} className="h-full">
            <div
              className={classNames(
                `${prefix}__navbar__inner`,
                styles["navbar__inner"]
              )}
            >
              {renderLogo(logo)}
              {renderMenu(menus)}
              {renderIcons(search, languages)}
            </div>
          </Container>
        </div>
      </header>

      <OverlayMenu
        active={active}
        links={menus}
        logo={logo}
        logoprops={props.logoprops}
        onClickCloseOverlay={() => setActive(!active)}
        className="z-50"
      />
    </>
  );
};
