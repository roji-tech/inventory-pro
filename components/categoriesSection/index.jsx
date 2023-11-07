import SlickCarousel from "@components/carousels/SlickCarousel";
import styled from "styled-components";

const CategoriesSection = ({ images = [{ image: "", title: "" }] }) => {
  return (
    <CatStyles className="_p_y _p_x _flex_col_center _media_query_layout _gap20 _full_w">
      <h2 className="text">Browse Categories</h2>

      <div className="_lg_screen">
        <div className="parent">
          {images.map((image, i) => (
            <div className="_flex_col _gap10">
              <div className="imgDiv">
                <img src={image?.image} alt="" />
              </div>
              <p>{image?.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="_sm_screen">
        <SlickCarousel />
      </div>
    </CatStyles>
  );
};

export default CategoriesSection;

const CatStyles = styled.section`
  &&& {
    > * {
      max-width: 100%;
    }

    .text {
      color: #242565;
      font-family: AvantGarde Bk BT;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }

    .parent {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 20px;

      .imgDiv {
        width: 190.556px * 0.9;
        height: 116.667px * 0.9;

        border-radius: 12px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
