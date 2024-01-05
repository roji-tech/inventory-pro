import styled from "styled-components";

export const SearchBox = ({ ph = "Search by product name" }) => {
  return (
    <SearchBoxWrapper className="_flex _flex1 _align_center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_140_1103)">
          <path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="#010C15"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_140_1103">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input type="text" placeholder={ph} className="_flex1" />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  &&& {
    height: 40px;
    flex-shrink: 0;
    flex: 1;
    gap: 8px;
    padding: 7px 10px;

    border-radius: 4px;
    border: 1px solid var(--Default-input-stroke, rgba(1, 12, 21, 0.1));
    background: var(--Default-input-fill, #fafafa);

    input {
      font-size: 16px;
      flex: 1;
      background: none;
      color: #2a3742;

      font-family: Source Sans Pro;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px; /* 150% */

      &::placeholder {
        color: var(--Default-txt, rgba(1, 12, 21, 0.2));

        /* Mid text semibold */
        
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 150% */
      }
    }
  }
`;
