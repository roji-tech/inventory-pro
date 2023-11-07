import { useState } from "react";
import styled from "styled-components";

export const DpCreatBox = ({ dpImage }) => {
  const [addImage, setAddImage] = useState(false);
  const [addText, setAddText] = useState(false);

  return (
    <>
      <Container dpImage={dpImage} addImage={false} addText={true}>
        <div className="dp_image_wrapper flex_center">
          <div className="dp_image_box take_full_wh flex_center">
            <img src={dpImage} alt="" />

            {!!(!addImage & !addText) && (
              <div className="extra">
                {!!addText && (
                  <div className="text">
                    <textarea name="" id="" cols="8" rows="2"></textarea>
                  </div>
                )}
                {!!addImage && <div className="avatar"></div>}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.section`
  --my_image: url(${({ dpImage }) => dpImage || ""});

  &&& {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    width: min(100%, 550px);

    > .dp_image_wrapper {
      /* border: 1px solid #485d00; */
      aspect-ratio: 1/1;
      width: min(100%, 100%);
      position: relative;
      background-image: var(--my_image);
      background-position: 50%;
      background-size: cover;

      > .dp_image_box {
        /* --filter_value: blur(10px);
        background: transparent;
        backdrop-filter: var(--filter_value);
        -webkit-backdrop-filter: var(--filter_value); */
        --filter_value: blur(50px);

        > img {
          user-select: none;
          padding: 0;
          margin: 0;
          /* border: 5px dotted #ffee00; */
          width: 100%;
          height: 100%;
          background: #c0c0c0c1;
          /* object-fit: contain; */

          background: transparent;
          backdrop-filter: var(--filter_value);
          -webkit-backdrop-filter: var(--filter_value);
        }

        > .text,
        > .avatar {
          position: absolute;
        }

        > .text {
          display: ${({ addText }) => !addText && "none"};

          /* border: 2px dotted #ffee00; */
          background: #00ffd043;
          min-width: 60px;
          min-height: 30px;
          resize: both;
        }

        > .avatar {
          display: ${({ addImage }) => !addImage && "none"};
        }
      }
    }
  }
`;
