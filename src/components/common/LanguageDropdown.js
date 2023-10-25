import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// styles
import styles from "../../../public/assets/scss/components/LanguageDropdown.module.scss";

const availableLanguages = [
  {
    id: "en",
    label: "English",
  },
  {
    id: "de",
    label: "Deutsch",
  },
  {
    id: "tr",
    label: "Turkish",
  },
  // {
  // 	id: "it",
  // 	label: "Italian",
  // },
  // {
  // 	id: "fe",
  // 	label: "French",
  // },
];

export default function LanguageDropdown(props) {
  const { t, i18n } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const onClickShowLanguages = () => {
    setDropdown(!dropdown);
  };

  const onClickSelectLanguage = (id) => {
    i18n.changeLanguage(id);

    setDropdown(false);
    setSelectedLanguage(id);
  };

  return (
    <div className={classNames(styles["wrapper"], "relative capitalize")}>
      <button
        type="button"
        className="capitalize relative z-10"
        onClick={onClickShowLanguages}
      >
        {selectedLanguage}
      </button>
      <ul
        className={classNames(
          "absolute top-12 right-0 text-right rounded-md",
          dropdown ? "flex" : "hidden"
        )}
      >
        {availableLanguages.map(
          (lang, index) =>
            lang.id !== selectedLanguage && (
              <li
                key={`lang-dropdown-item-${index}`}
                className={classNames("mb-1 text-sm")}
              >
                <a href="#" onClick={() => onClickSelectLanguage(lang.id)}>
                  {lang.label}
                </a>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
