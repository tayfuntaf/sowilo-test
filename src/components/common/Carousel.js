import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import classNames from "classnames";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../../../public/assets/scss/components/Swiper.module.scss";

export const CarouselDots = (props) => {
	return (
		<div>
			<div {...props} className={classNames("afc-swiper-dots", props.className, styles["dots"])} />
		</div>
	);
};

export default function Carousel(props) {
	const { children } = props;

	return (
		<>
			<Swiper {...props} modules={[Pagination]}>
				<div className="bg-red-500">{children}</div>
			</Swiper>
		</>
	);
};
