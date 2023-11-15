import { memo } from "react";

const GridProductCell = memo(function GridProductCell(props) {
  const { value } = props;

  return typeof value === "string" ? (
    value
  ) : (
    <div className="_flex _align_center">
      <img className="_bg_white _p5" src={value?.icon} alt="" />
      <span>{value?.name}</span>
    </div>
  );
});


export function renderProductCell(params) {
  return <GridProductCell value={params.value || ""} />;
}
