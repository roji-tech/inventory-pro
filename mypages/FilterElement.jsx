import styled from "styled-components";

export const FilterElement = ({ filterList }) => {
  const defaultFILTERS = [
    { name: "Category", number: 20, icon: "category.svg" },
    { name: "Status", number: 20, icon: "filter_icon.svg" },
    { name: "Expiring", number: 20, icon: "filter_icon.svg" },
    { name: "Item Movement", number: 20, icon: "filter_icon.svg" },
  ];

  const FILTERS = defaultFILTERS ?? filterList;

  return (
    <FilterWrapper className="_flex_center">
      <>
        <input className="_d_none" type="checkbox" id="filterToggle" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          className="_pointer"
        >
          <g clipPath="url(#clip0_140_1107)">
            <path
              d="M6.66667 10.4H9.33333V9.26667H6.66667V10.4ZM2 3.60001V4.73334H14V3.60001H2ZM4 7.56667H12V6.43334H4V7.56667Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_140_1107">
              <rect
                width="16"
                height="13.6"
                fill="white"
                transform="translate(0 0.200012)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="_pointer">Filter</p>
        <label className="toggler _pointer" htmlFor="filterToggle"></label>
      </>

      <div className="filterBox _flex_col _gap10">
        <header className="_flex_jcsb _align_center">
          <p>Filter by</p>
          <label className="_pointer" htmlFor="filterToggle">
            Cancel
          </label>
        </header>
        <div className="search _flex _align_center">
          <img src="/search.svg" alt="" />
          <input className="_bg_trans" type="text" placeholder="Search" />
        </div>

        <div className="filter_items _flex_col_jcsb _flex1">
          {FILTERS.map((item) => (
            <div key={item?.name} className="_flex_jcsb _p5_0 _gap10">
              <div className="_flex _gap10">
                <img src={item?.icon} alt="" />
                <p>{item?.name}</p>
                <img src="/arrow_left.svg" className="_pointer" alt="" />
              </div>
              <span className="_grid_center" style={{}}>
                {item?.number}
              </span>
            </div>
          ))}
        </div>

        <div className="reset _align_center _flex_jcsb">
          <p>Reset all filters</p>
          <button className="_grid_center">Apply Filter</button>
        </div>
      </div>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  &&& {
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
          font-style: normal;
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
          font-style: normal;
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
      font-style: normal;
      font-weight: 600;
      line-height: 21px;
    }
  }
`;

export const FilterElement1 = ({ filterList }) => {
  const defaultFILTERS = [
    { name: "Ranking", number: 20, icon: "category.svg" },
    { name: "Status", number: 20, icon: "filter_icon.svg" },
    { name: "Expiring", number: 20, icon: "filter_icon.svg" },
    { name: "Category", number: 20, icon: "filter_icon.svg" },
  ];

  const FILTERS = defaultFILTERS ?? filterList;

  return (
    <FilterWrapper className="_flex_center">
      <>
        <input className="_d_none" type="checkbox" id="filterToggle" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          className="_pointer"
        >
          <g clipPath="url(#clip0_140_1107)">
            <path
              d="M6.66667 10.4H9.33333V9.26667H6.66667V10.4ZM2 3.60001V4.73334H14V3.60001H2ZM4 7.56667H12V6.43334H4V7.56667Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_140_1107">
              <rect
                width="16"
                height="13.6"
                fill="white"
                transform="translate(0 0.200012)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="_pointer">Filter</p>
        <label className="toggler _pointer" htmlFor="filterToggle"></label>
      </>

      <div className="filterBox _flex_col _gap10">
        <header className="_flex_jcsb _align_center">
          <p>Filter by</p>
          <label className="_pointer" htmlFor="filterToggle">
            Cancel
          </label>
        </header>
        <div className="search _flex _align_center">
          <img src="/search.svg" alt="" />
          <input className="_bg_trans" type="text" placeholder="Search" />
        </div>

        <div className="filter_items _flex_col_jcsb _flex1">
          {FILTERS.map((item) => (
            <div key={item?.name} className="_flex_jcsb _p5_0 _gap10">
              <div className="_flex _gap10">
                <img src={item?.icon} alt="" />
                <p>{item?.name}</p>
                <img src="/arrow_left.svg" className="_pointer" alt="" />
              </div>
              <span className="_grid_center" style={{}}>
                {item?.number}
              </span>
            </div>
          ))}
        </div>

        <div className="reset _align_center _flex_jcsb">
          <p>Reset all filters</p>
          <button className="_grid_center">Apply Filter</button>
        </div>
      </div>
    </FilterWrapper>
  );
};

const FilterWrapper1 = styled.div`
  &&& {
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
          font-style: normal;
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
          font-style: normal;
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
      font-style: normal;
      font-weight: 600;
      line-height: 21px;
    }
  }
`;
