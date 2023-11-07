import Link from "next/link";


export const LI = ({
  text, href, src, color, reverse = 0, space = 0, showImg = 0, handle = null, classes = "",
}) => {
  return (
    <li
      className={`_flex_center ${classes}`}
      onClick={handle && handle}
      style={{
        border: "1px solid transparent",
        borderRadius: "20px",
      }}
    >
      <Link
        className="_full_wh _flex _gap5"
        style={{
          alignItems: "center",
          color: `${color && color}`,
          flexDirection: `${reverse ? "row-reverse" : "row"}`,
          justifyContent: `${space ? "space-between" : "start"}`,
        }}
        href={href || ""}
      >
        {showImg && src ? <img src={src || ""} className="" alt="" /> : ""}
        <small style={{ fontSize: "14px" }} className="_no_wrap">
          {text}
        </small>
      </Link>
    </li>
  );
};
