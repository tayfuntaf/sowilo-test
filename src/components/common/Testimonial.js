import Image from "next/image";
import classNames from "classnames";

// import scss
import styles from "../../../public/assets/scss/components/Testimonial.module.scss";

export default function Testimonial(props) {
  const prefix = "afc";
  const element = "testimonial";
  const {
    children,
    className,
    custom,
    type,
    model,
    color,
    text,
    title,
    subtitle,
    avatar,
  } = props;
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
      <div {...props} className={elementClassNames}>
        {avatar && <Image src={avatar} alt={title} {...props.avatarprops} />}
        {text && <p className="text-inherit">"{text}"</p>}
        {(title || subtitle || (model === "model-2" && avatar)) && (
          <div className="d-flex">
            {model === "model-2" && avatar && <div>TODO: add avatar</div>}
            <div>
              {title && <h5 {...props.titleprops}>{title}</h5>}
              {subtitle && <h6 className="text-sm">{subtitle}</h6>}
            </div>
          </div>
        )}
        {/* <LleftQuote width={24} height={24} fill="white" className="fill-white absolute top-4 right-4" /> */}
      </div>
    </>
  );
}
