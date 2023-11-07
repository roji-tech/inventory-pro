import Draggable from "react-draggable";
import InnerComponent from "./InnerComponent";
import html2canvas from "html2canvas";

const MovableComponent = () => {
  const captureAsImage = async () => {
    const element = document.querySelector(".movable-component");
    if (element) {
      const canvas = await html2canvas(element);
      const imageURL = canvas.toDataURL("image/png");
      // Now, imageURL contains the image data that you can use or display as needed.
      console.log(imageURL);
    }
  };

  return (
    <div>
      <Draggable>
        <div className="movable-component">
          <InnerComponent />
        </div>
      </Draggable>
      <button onClick={captureAsImage}>Capture as Image</button>
    </div>
  );
};

export default MovableComponent;
