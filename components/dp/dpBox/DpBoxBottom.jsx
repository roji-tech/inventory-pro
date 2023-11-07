import styled from "styled-components";

export const DpBoxBottom = () => {
  return (
    <DpBoxBottomContainer>
      <section className="bottom">
        <div className="left">
          <div className="date">
            <p className="month">AUG</p>
            <p className="day">20</p>
          </div>
        </div>
        <div className="right">
          <h2>TEDxMaitama</h2>
          <p>
            A mindset-disrupting conference hosted by TEDxMaitama - Africa's
            largest idea festival
          </p>
          <div className="btns">
            <p className="btn blue">25K+ Views</p>
            <p className="btn magenta">11k+ Usage</p>
            <p className="btn gray">2.5k+ Comment</p>
            <p className="btn black">1k Share</p>
          </div>
        </div>
      </section>
    </DpBoxBottomContainer>
  );
};

const DpBoxBottomContainer = styled.section`
  &&& {
    background: #ffffff;

    .bottom {
      height: 157px;
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 4fr;
      padding-top: 15px;

      .left {
        display: flex;
        justify-content: center;

        .date {
          width: 58px;
          height: 54.36px;
          display: flex;
          flex-direction: column;

          p {
            padding: 0;
            margin: 0;
          }

          .month {
            font-size: 17.826px;
            line-height: 23px;
            font-weight: 700;
            font-size: 17.826px;
            line-height: 23px;
            color: #3d37f1;
          }

          .day {
            font-size: 44.5649px;
            line-height: 40px;
            font-weight: 700;
            color: #000000;
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
          font-family: "DM Sans";
          font-style: normal;
          font-weight: 700;
          font-size: 38.7188px;
          line-height: 90%;
          color: #000000;
        }

        > p {
          font-family: "DM Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 16.9395px;
          line-height: 150%;
          color: #6a6a6a;
          margin-top: -3px;
          margin-bottom: -3px;
        }

        .btns {
          display: flex;
          gap: 15px;

          .btn {
            white-space: nowrap;
            height: 23.17px;
            border-radius: 5.49388px;

            font-family: "DM Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 9.61429px;
            line-height: 150%;
            min-width: 63.47px;
            display: grid;
            place-items: center;
            color: #ffffff;
          }

          .blue {
            background: #243cf4;
          }

          .magenta {
            background: #f5167e;
          }

          .gray {
            background: rgba(61, 55, 241, 0.25);
            color: #000000;
          }

          .black {
            background: #000000;
          }
        }
      }
    }

    @media screen and (max-width: 800px) {
      .bottom {
        padding-top: 15px;

        .left {
          .date {
            width: 50px;
            height: 50.36px;

            p {
              padding: 0;
              margin: 0;
            }

            .month {
              font-size: 16px;
              font-size: 17.826px;
            }

            .day {
              font-size: 40px;
              line-height: 40px;
            }
          }
        }

        .right {
          gap: 10px;

          h2 {
            font-size: 30px;
          }

          > p {
            font-size: 15px;
            margin-top: -3px;
            margin-bottom: -3px;
          }

          .btns {
            display: flex;
            gap: 10px;

            .btn {
              white-space: nowrap;
              height: 20px;
              border-radius: 5.49388px;

              font-family: "DM Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 8px;
              line-height: 150%;
              min-width: 63.47px;
              display: grid;
              place-items: center;
              color: #ffffff;
            }

            .blue {
              background: #243cf4;
            }

            .magenta {
              background: #f5167e;
            }

            .gray {
              background: rgba(61, 55, 241, 0.25);
              color: #000000;
            }

            .black {
              background: #000000;
            }
          }
        }
      }
    }

    @media screen and (max-width: 500px) {
      .bottom {
        /* height: 157px; */
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 4fr;
        padding-top: 15px;

        .left {
          display: flex;
          justify-content: center;

          .date {
            width: 58px;
            height: 54.36px;
            display: flex;
            flex-direction: column;

            p {
              padding: 0;
              margin: 0;
            }

            .month {
              font-size: 17.826px;
              line-height: 23px;
              font-weight: 700;
              font-size: 17.826px;
              line-height: 23px;
              color: #3d37f1;
            }

            .day {
              font-size: 44.5649px;
              line-height: 40px;
              font-weight: 700;
              color: #000000;
            }
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 10px;

          h2 {
            font-family: "DM Sans";
            font-style: normal;
            font-weight: 700;
            font-size: 38.7188px;
            line-height: 90%;
            color: #000000;
          }

          > p {
            font-family: "DM Sans";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 150%;
            color: #6a6a6a;
            margin-top: -3px;
            margin-bottom: -3px;
          }

          .btns {
            display: flex;
            gap: 7px;

            .btn {
              white-space: nowrap;
              height: 20px;
              border-radius: 5.49388px;

              font-family: "DM Sans";
              font-style: normal;
              font-weight: 400;
              font-size: 8px;
              line-height: 150%;
              min-width: 63.47px;
              display: grid;
              place-items: center;
              color: #ffffff;
            }

            .blue {
              background: #243cf4;
            }

            .magenta {
              background: #f5167e;
            }

            .gray {
              background: rgba(61, 55, 241, 0.25);
              color: #000000;
            }

            .black {
              background: #000000;
            }
          }
        }
      }
    }
  }
`;
