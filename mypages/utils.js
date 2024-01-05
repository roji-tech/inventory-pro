export const getComponentColor = (cat) => {
  switch (cat.toLowerCase()) {
    case "Drugs".toLowerCase():
      return "#4D90E0";

    case "Spray".toLowerCase():
      return "#CF5109";

    case "Stationeries".toLowerCase():
      return "#B4CF09";

    case "Beverage".toLowerCase():
      return "#002CCA";

    case "Multi-Media".toLowerCase():
      return "#09CF94";

    default:
      return "#000";
  }
};
