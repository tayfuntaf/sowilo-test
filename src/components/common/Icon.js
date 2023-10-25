import styles from "../../../public/assets/scss/components/Icon.module.scss";

export default function Icon(props) {
	return (
		<>
			<i {...props} className={styles.icon} />
		</>
	);
};
