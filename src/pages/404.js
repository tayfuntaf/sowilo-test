import { useTranslation } from "react-i18next";

export default function Error404() {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{`${t("Sorry, page not found")}!`}</h1>
		</div>
	);
}
