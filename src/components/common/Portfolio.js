import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

// import components
import { MetaCategories } from "@/components";

// import scss
import styles from "../../../public/assets/scss/components/Portfolio.module.scss";

export default function Portfolio(props) {
  const { t } = useTranslation();
  const prefix = "afc";
  const element = "portfolio";
  const {
    className,
    custom,
    type,
    model,
    color,
    id,
    slug,
    image,
    text,
    title,
    categories,
    author,
    date,
  } = props;
  const linkTo = `/portfolio/${encodeURIComponent(slug)}`;
  const elementClassNames = classNames(
    className,
    custom && [
      styles[type],
      styles[model],
      styles[color],
      styles[`${prefix}-${element}`],
      styles[`${prefix}-${element}__${model}`],
    ]
  );

  return (
    <>
      <div className={elementClassNames}>
        {image && (
          <div
            className={classNames(
              styles.cover,
              `${prefix}-${element}__cover`,
              props.coverprops && props.coverprops.className
            )}
          >
            <Link href={linkTo}>
              <Image src={image} alt={title} {...props.imageprops} />
            </Link>
          </div>
        )}
        <div
          className={classNames(
            styles.content,
            props.contentprops && props.contentprops.className,
            `${prefix}-${element}__content`
          )}
        >
          <div>
            {title && (
              <Link href={linkTo}>
                <h4 {...props.titleprops}>{title}</h4>
              </Link>
            )}
            <MetaCategories
              {...props.categoryprops}
              data={categories}
              className={props.categoryprops.className}
            />
          </div>
        </div>
      </div>
    </>
  );
}
