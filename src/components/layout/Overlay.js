import Image from "next/image";

export default (props) => {
  const { children, src } = props;

  return (
    <>
      <div {...props}>
        {children ||
          (src && <Image {...props.srcprops} alt="Overlay" src={src} />)}
      </div>
    </>
  );
};
