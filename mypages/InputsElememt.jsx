import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const InputsElememt = ({ LIST, extras }) => {
  return (
    <div
      style={{
        gridTemplateColumns: "1fr 1fr",
      }}
      className="_grid _gap40"
    >
      {LIST?.map((item) =>
        !!item?.name ? <InputBox item={item} /> : <div></div>
      )}
      {extras}
    </div>
  );
};

export const InputBox = ({ item }) => {
  return (
    <InputBoxStyle key={item?.name} className="input_item _flex_col _gap8">
      <p>{item?.name}</p>
      <div className="input _flex _align_center">
        <input
          type={item?.type || "text"}
          className="_flex1"
          placeholder={item?.ph || ""}
          name={item?.id}
          value={item?.value}
          onChange={item?.handleChange}
          ref={item?.ref}
        />
        {item?.showArrow && <img src="/input_arrow_down.svg" alt="" />}
      </div>
      {item?.showDownText ? (
        <div className="down_text _flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.5 7.5H6.5V8.5H5.5V7.5ZM5.5 3.5H6.5V6.5H5.5V3.5ZM5.995 1C3.235 1 1 3.24 1 6C1 8.76 3.235 11 5.995 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 5.995 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
              fill="#FCBF49"
            />
          </svg>
          <p>{item?.downText}</p>
        </div>
      ) : (
        ""
      )}
    </InputBoxStyle>
  );
};

export const SelectBox = ({ item }) => {
  return (
    <InputBoxStyle key={item?.name} className="input_item _flex_col _gap8">
      <p>{item?.name}</p>
      <div className="input _flex _align_center">
        <MySelect
          placeholder={item?.ph || ""}
          name={item?.id}
          labelId="demo-simple-select-label"
          className="_flex1"
          value={item?.value}
          onChange={item?.handleChange}
          ref={item?.ref}
          label="Age"
          displayEmpty
          defaultValue={"None"}
        >
          <MenuItem value={""}>
            <em>Select--</em>
          </MenuItem>

          {item?.options?.map((opt) => (
            <MenuItem value={opt?.value}>{opt?.name}</MenuItem>
          ))}
        </MySelect>
      </div>
      {item?.showDownText ? (
        <div className="down_text _flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.5 7.5H6.5V8.5H5.5V7.5ZM5.5 3.5H6.5V6.5H5.5V3.5ZM5.995 1C3.235 1 1 3.24 1 6C1 8.76 3.235 11 5.995 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 5.995 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
              fill="#FCBF49"
            />
          </svg>
          <p>{item?.downText}</p>
        </div>
      ) : (
        ""
      )}
    </InputBoxStyle>
  );
};

const MySelect = styled(Select)`
  &&& {
    border: none !important;
    outline: none !important;
  }
`;

const InputBoxStyle = styled.div`
  &&& {
    width: 100%;

    > p {
      color: #010c15;

      /* Mid text semibold */

      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 21px;
    }

    .input {
      width: 100%;
      padding: 10px 15px;
      padding-right: 25px;
      border-radius: 4px;
      border: 1px solid rgba(1, 12, 21, 0.1);
      background: #fafafa;
      height: 40px;

      &.textareaInput {
        height: fit-content;
        padding: 0;

        textarea {
          color: #000000;
          background: transparent;

          min-height: 152px;
          max-height: 152px;
          max-width: 100%;
          min-width: 100%;
          color: #000;
          resize: none;
          padding: 10px 15px;
          border-radius: 4px;

          &::placeholder {
            color: rgba(1, 12, 21, 0.2);

            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px;
          }
        }
      }

      input {
        color: #000000;
        background: transparent;

        &::placeholder {
          color: rgba(1, 12, 21, 0.2);

          /* Mid text regular */

          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 21px;
        }
      }
    }

    .down_text {
      color: #fcbf49;

      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;
