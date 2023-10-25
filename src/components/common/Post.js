import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

// import components
import { MetaData, MetaCategories } from "@/components";

// import scss
import styles from "../../../public/assets/scss/components/Post.module.scss";

export default function Post(props) {
  const { t } = useTranslation();
  const prefix = "afc";
  const element = "post";
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
  const linkTo = `/blog/${encodeURIComponent(slug)}`;
  const elementClassNames = classNames(
    className,
    custom && [
      styles[type],
      styles[model],
      styles[color],
      styles[`${prefix}-${element}`],
    ]
  );

  return (
    <>
      <div className={elementClassNames}>
        {image && (
          <div
            className={classNames(
              styles.cover,
              props.coverprops && props.coverprops.className
            )}
          >
            <Link href={linkTo}>
              <Image src={image} alt={title} {...props.imageprops} />
            </Link>
          </div>
        )}
        <div className={styles.content}>
          <MetaCategories
            data={categories}
            className={props.categoryprops.className}
          />
          {title && (
            <Link href={linkTo}>
              <h4 {...props.titleprops}>{title}</h4>
            </Link>
          )}
          {text && <p {...props.textprops}>{text}</p>}
          <MetaData
            data={[author, date]}
            className="flex items-center list-none text-sm"
          />
        </div>
      </div>
    </>
  );
}
