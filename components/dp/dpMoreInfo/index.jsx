import styled from "styled-components";

const index = () => {
  return (
    <Container className="_flex">
      <section className="_flex_col">
        <div className="first _flex_col">
          <div className="check_box _flex">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check">Publicly display my name and image</label>
          </div>
          <div className="name _flex_col">
            <input type="text" placeholder="Enter Name to Display" />
            <button type="submit" className="border_animated flex_center">
              Generate My Branded DP
            </button>
          </div>
        </div>
        <div className="comment_box _flex_col">
          <header className="flex_center">Comments</header>
          <div className="_flex_col_end">
            <textarea name="comment" id="" cols="30" rows="10"></textarea>
            <button type="submit" className="border_animated flex_center">
              Post Comment
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default index;

const Container = styled.section`
  &&& {
    width: min(100%, 600px);
    height: 100%;
    align-items: center;
    background: #ffffff;

    /* MEDIA_800  MEDIA_800  MEDIA_800  MEDIA_800  MEDIA_800 */
    @media screen and (max-width: 800px) {
      width: min(100%, 100%);
    }

    > section {
      width: min(100%, 100%);
      gap: 20px;

      /* FIRST_  FIRST_  FIRST_  FIRST_  FIRST_ FIRST_  FIRST_ */
      /* FIRST_  FIRST_  FIRST_  FIRST_  FIRST_ FIRST_  FIRST_ */
      > .first {
        gap: 20px;

        > .check_box {
          gap: 10px;

          > input {
            cursor: pointer;
          }

          > label {
            cursor: pointer;
            user-select: none;
          }
        }

        /* .NAME  .NAME  .NAME  .NAME  .NAME  */
        > .name {
          gap: 10px;
          align-items: flex-end;

          > input {
            width: 100%;
            background: #e2e0ff;
            border-radius: 3.39264px;
            padding: 10px;
          }

          > button[type="submit"] {
            color: #fff;
            max-width: 256.43px;
            width: 50%;
            height: 35px;
            min-width: fit-content;
            padding: 10px;

            background: #243cf4;
            box-shadow: 0px 8.49095px 42.4547px rgba(61, 55, 241, 0.25);
            border-radius: 42.4547px;
          }
        }

        /*  FIRST__  MEDIA_800  MEDIA_800  MEDIA_800  MEDIA_800 */
        @media screen and (max-width: 800px) {
          width: 90%;
          align-self: center;

          > .check_box {
            display: flex;
            gap: 10px;

            > input {
            }

            > label {
            }
          }

          > .name {
            flex-direction: row;

            @media screen and (max-width: 400px) {
              flex-direction: column;
            }
          }
        }
      }

      /* COMMENT_BOX  COMMENT_BOX  COMMENT_BOX  COMMENT_BOX  COMMENT_BOX */
      /* COMMENT_BOX  COMMENT_BOX  COMMENT_BOX  COMMENT_BOX  COMMENT_BOX */
      > .comment_box {
        gap: 10px;

        > header {
          width: 121px;
          height: 27.79px;
          background: rgba(61, 55, 241, 0.25);
          border-radius: 6.58935px;
        }

        > div {
          width: 100%;
          align-self: flex-end;
          gap: 10px;

          textarea {
            padding: 10px;
            width: 100%;
            height: 100px;
            max-width: 100%;
            resize: none;
            background: #e2e0ff;
            border-radius: 3.39264px;
          }

          > button {
            color: #fff;
            max-width: 256.43px;
            width: 50%;
            min-width: fit-content;
            max-width: 141.06436157226562px;
            height: 29.277509689331055px;
            border-radius: 33.269901275634766px;
            background: #243cf4;
          }
        }

        /* MEDIA_800  MEDIA_800  MEDIA_800  MEDIA_800  MEDIA_800 */
        @media screen and (max-width: 800px) {
          gap: 20px;

          > header {
          }

          > div {
            width: 95%;

            textarea {
            }
          }
        }
      }
    }
  }
`;
