import styled from "styled-components";
import Link from "next/link";

const PagesMainLayout = ({
  title = "Products",
  headerBtnText = "Add Product",
  mainContent,
  showHeaderBtn = false,
  otherHeaderElement,
  headerBtnURL = "",
}) => {
  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <header className="_flex_jcsb _align_center">
        <h1>{title}</h1>

        <div className="_flex _align_center">
          {otherHeaderElement}
          {showHeaderBtn && (
            <button className="headerBtn _flex_center">
              <Link href={headerBtnURL} className="_full_wh _flex_center">
                <img src="/add.svg" alt="" />
                <span>{headerBtnText}</span>
              </Link>
            </button>
          )}
        </div>
      </header>

      <div className="main _flex_col _bg_white">{mainContent ?? ""}</div>
    </Wrapper>
  );
};

export default PagesMainLayout;

const Wrapper = styled.div`
  &&& {
    > header {
      height: 55px;

      > h1 {
        color: #666;
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
      }

      > h1 .bolder {
        color: #000 !important;
        font-weight: 500;
      }

      > h1 .bold {
        color: #282828;
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
      }

      .headerBtn {
        width: max-content;
        height: 40px;
        gap: 8px;
        padding: 0 15px;

        border-radius: 4px;
        background: #002cca;

        color: #fff;

        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
      }
    }

    .main {
      border-radius: 14px;
      background: #fff;
      box-shadow: 0.3px 0.3px 4px 0px rgba(186, 186, 186, 0.12);
      padding: 15px;

      > header {
        .headings {
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(1, 12, 21, 0.1);
          flex: 1;

          p {
            font-size: 14px;

            font-weight: 600;
            line-height: 21px;
          }

          span {
            background: #e4eff9;
            border-radius: 50%;

            width: 32px;
            height: 32px;

            font-size: 13px;

            font-weight: 600;
            line-height: 21px;
          }
        }
        .filter {
          & {
            width: 88px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #e4eff9;
            background: #f6fbff;
            align-self: flex-end;

            position: relative;
          }

          .filterBox {
            transform-origin: 100% 0;
            transform: translate(200%);
            scale: 0;

            & {
              transition: 0.2s all ease-in-out;
              position: absolute;
              z-index: 99;
              top: 90%;
              right: 50%;
              width: 274px;
              height: 323px;
              padding: 12px;

              border-radius: 4px;
              background: var(--White, #fff);

              box-shadow: -4px 4px 13px 4px rgba(118, 128, 135, 0.08);
            }

            .search {
              height: 40px;
              padding: 10px;
              background: #fafafa;

              input {
                flex: 1;
                background: #fafafa;
                color: rgba(1, 12, 21, 0.7);
              }
            }

            .filter_items {
              white-space: nowrap;

              span {
                width: 24px;
                background: #f6f6f6;
                border-radius: 50%;
                height: 24px;

                color: var(--Paragraph-color, rgba(1, 12, 21, 0.7));

                font-size: 14px;

                font-weight: 600;
                line-height: 21px; /* 150% */
              }
            }

            .reset {
              width: 100%;
              height: 60px;
              justify-self: flex-end;
              margin-bottom: -12px;

              p {
                color: var(--Paragraph-color, rgba(1, 12, 21, 0.7));

                font-size: 14px;

                font-weight: 600;
                line-height: 21px; /* 150% */
              }

              button {
                border-radius: 4px;
                background: var(--main, #002cca);

                width: 101px;
                height: 40px;
              }
            }
          }

          .toggler {
            position: absolute;
            background: transparent;
            inset: 0;
          }

          #filterToggle {
            background: yellow;

            &:checked ~ .filterBox {
              transform: translate(0%);
              scale: 1;
            }
          }

          p {
            color: rgba(1, 12, 21, 0.7);

            font-size: 14px;

            font-weight: 600;
            line-height: 21px;
          }
        }
      }

      > section {
        flex: 1;
      }
    }
  }
`;
