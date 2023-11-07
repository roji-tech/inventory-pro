import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="_full_w _flex_center">
      <MySliderStyle {...settings}>
        <div className="item">
          <div className="item-box">
            <img alt="" src="/cat2.png" />
            <p className="legend">Legend 1</p>
          </div>
        </div>
        <div className="item">
          <div className="item-box">
            <img alt="" src="/cat2.png" />
            <p className="legend">Legend 2</p>
          </div>
        </div>
        <div className="item">
          <div className="item-box">
            <img alt="" src="/cat2.png" />
            <p className="legend">Legend 3</p>
          </div>
        </div>
        <div className="item">
          <div className="item-box">
            <img alt="" src="/cat2.png" />
            <p className="legend">Legend 4</p>
          </div>
        </div>
        <div className="item">
          <div className="item-box">
            <img alt="" src="/cat2.png" />
            <p className="legend">Legend 5</p>
          </div>
        </div>
      </MySliderStyle>
    </div>
  );
}

const MySliderStyle = styled(Slider)`
  &&& {
    /* border: 5px solid magenta !important; */
    /* translate: 0; */
    /* scale: 0.1 1; */
    width: 100%;
    max-width: 98vw;
    margin-bottom: 20px;

    .slick-track {
      /* display: flex; */

      /* slick-cloned */
      .slick-slide {
        width: 300px;
        /* translate: 0; */
      }
    }

    .item {
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .item-box {
        display: grid;
        place-items: center;
        gap: 20px;
        padding: 20px;

        p {
          font-size: 30px;
          font-weight: 600;
        }

        img {
          width: min(90%, 300px);
          /* scale: 2; */
          /* translate: 0; */
          /* z-index: 999; */
        }
      }
    }
  }
`;
