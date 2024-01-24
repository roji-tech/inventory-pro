import { memo, useRef } from "react";
import { getComponentColor } from "./utils";
import styled from "styled-components";
import { useClickOutside2 } from "@hooks/useClickOutside";

const GridProductCell = memo(function GridProductCell(props) {
  const { value } = props;

  return typeof value === "string" ? (
    value
  ) : (
    <div className="_flex _align_center">
      <img
        className="_bg_white _p5"
        src={value?.image ?? "/milo.svg"}
        alt=""
        style={{
          width: 35,
          height: 35,

          borderRadius: 4,
          background: "#fff",
          boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      />
      <span>{value?.name}</span>
    </div>
  );
});

export function renderProductCell(params) {
  return <GridProductCell value={params.value || ""} />;
}

const GridCategoryCell = memo(function GridProductCell(props) {
  const { value } = props;

  return (
    <div className="_flex _align_center">
      <DotElement value={value} />
      <span>{value}</span>
    </div>
  );
});

export function renderCategoryCell(params, list = []) {
  console.log("renderCategoryCell", params?.value, list);

  return (
    <GridCategoryCell
      value={
        !list
          ? params?.value
          : list?.find((item) => item?.value == params?.value)?.name || ""
      }
    />
  );
}

export const RatingElement = ({
  rate = 3,
  total = 6,
  gap = 2,
  marginLeft = "auto",
}) => {
  const styles = {
    background: "transparent",
    marginLeft,
    gap,
  };
  return (
    <div
      style={styles}
      className="_flex _justify_end _align_center _margin_left_auto"
    >
      {Array(rate)
        .fill("")
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M5.9543 0.90491C5.91106 0.830378 5.84901 0.768513 5.77434 0.725508C5.69968 0.682502 5.61503 0.659866 5.52887 0.659866C5.4427 0.659866 5.35805 0.682502 5.28339 0.725508C5.20872 0.768513 5.14667 0.830378 5.10343 0.90491L3.76861 3.20569C3.72237 3.28527 3.65886 3.35345 3.58276 3.4052C3.50666 3.45696 3.41991 3.49097 3.32891 3.50472L0.82697 3.88245C0.406947 3.94639 0.259398 4.47658 0.586957 4.74807L2.4505 6.29143C2.62264 6.43456 2.70379 6.66031 2.66199 6.88015L2.17458 9.44013C2.15727 9.53105 2.16597 9.625 2.19967 9.7112C2.23337 9.7974 2.2907 9.87234 2.36509 9.92741C2.43947 9.98248 2.52789 10.0154 2.62017 10.0225C2.71245 10.0296 2.80485 10.0105 2.88675 9.96737L5.24262 8.72698C5.33089 8.68054 5.42913 8.65627 5.52887 8.65627C5.6286 8.65627 5.72684 8.68054 5.81511 8.72698L8.17098 9.96737C8.25288 10.0105 8.34528 10.0296 8.43756 10.0225C8.52984 10.0154 8.61826 9.98248 8.69264 9.92741C8.76703 9.87234 8.82436 9.7974 8.85806 9.7112C8.89176 9.625 8.90046 9.53105 8.88315 9.44013L8.39574 6.88015C8.37508 6.77208 8.38381 6.66044 8.42101 6.55688C8.45821 6.45333 8.52252 6.36166 8.60723 6.29143L10.4713 4.74758C10.7983 4.47707 10.6508 3.9459 10.2303 3.88245L7.72931 3.50472C7.63823 3.49104 7.55138 3.45706 7.47519 3.4053C7.399 3.35354 7.33541 3.28533 7.28913 3.20569L5.9543 0.90491Z"
              fill="#D3BF0B"
            />
          </svg>
        ))}

      {Array(total - rate)
        .fill("")
        .map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M7.18867 1.90491C7.14544 1.83038 7.08338 1.76851 7.00872 1.72551C6.93406 1.6825 6.8494 1.65987 6.76324 1.65987C6.67708 1.65987 6.59243 1.6825 6.51776 1.72551C6.4431 1.76851 6.38104 1.83038 6.33781 1.90491L5.00298 4.20569C4.95675 4.28527 4.89324 4.35345 4.81713 4.4052C4.74103 4.45696 4.65428 4.49097 4.56328 4.50472L2.06134 4.88245C1.64132 4.94639 1.49377 5.47658 1.82133 5.74807L3.68488 7.29143C3.85702 7.43456 3.93817 7.66031 3.89636 7.88015L3.40896 10.4401C3.39165 10.531 3.40034 10.625 3.43404 10.7112C3.46774 10.7974 3.52508 10.8723 3.59946 10.9274C3.67385 10.9825 3.76226 11.0154 3.85454 11.0225C3.94682 11.0296 4.03922 11.0105 4.12113 10.9674L6.477 9.72698C6.56526 9.68054 6.6635 9.65627 6.76324 9.65627C6.86298 9.65627 6.96122 9.68054 7.04949 9.72698L9.40535 10.9674C9.48726 11.0105 9.57966 11.0296 9.67194 11.0225C9.76422 11.0154 9.85263 10.9825 9.92702 10.9274C10.0014 10.8723 10.0587 10.7974 10.0924 10.7112C10.1261 10.625 10.1348 10.531 10.1175 10.4401L9.63012 7.88015C9.60946 7.77208 9.61819 7.66044 9.65539 7.55688C9.69258 7.45333 9.7569 7.36166 9.84161 7.29143L11.7056 5.74758C12.0327 5.47707 11.8852 4.9459 11.4646 4.88245L8.96369 4.50472C8.8726 4.49104 8.78575 4.45706 8.70956 4.4053C8.63337 4.35354 8.56979 4.28533 8.5235 4.20569L7.18867 1.90491Z"
              fill="#D3BF0B"
              fillOpacity="0.48"
            />
          </svg>
        ))}
    </div>
  );
};

export const DotElement = ({ value, color }) => {
  const styles = {
    width: "8px",
    minWidth: "8px",
    height: "8px",
    minHeight: "8px",
    borderRadius: "50%",
    aspectRatio: "1/1 !important",
    background: value ? getComponentColor(value) : color,
  };

  return <span style={styles} />;
};

export const RenderOptionsCell = memo(function GridProductCell(props) {
  const { id, handleEditClick, handleDeleteClick, router } = props;
  const optionsRef = useRef();
  const optionsMenuRef = useRef();

  const handleToggle = () => {
    optionsMenuRef.current.classList.toggle("currentCellMenu");
  };

  const handleClose = () => {
    optionsMenuRef.current.classList.remove("currentCellMenu");
  };

  useClickOutside2(optionsMenuRef, optionsRef, handleClose, id);

  const OPTIONS = [
    {
      name: "view",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_155_3746)">
            <path
              d="M8.00033 4.00001C10.527 4.00001 12.7803 5.42001 13.8803 7.66667C12.7803 9.91334 10.527 11.3333 8.00033 11.3333C5.47366 11.3333 3.22033 9.91334 2.12033 7.66667C3.22033 5.42001 5.47366 4.00001 8.00033 4.00001ZM8.00033 2.66667C4.66699 2.66667 1.82033 4.74001 0.666992 7.66667C1.82033 10.5933 4.66699 12.6667 8.00033 12.6667C11.3337 12.6667 14.1803 10.5933 15.3337 7.66667C14.1803 4.74001 11.3337 2.66667 8.00033 2.66667ZM8.00033 6.00001C8.92033 6.00001 9.66699 6.74667 9.66699 7.66667C9.66699 8.58667 8.92033 9.33334 8.00033 9.33334C7.08033 9.33334 6.33366 8.58667 6.33366 7.66667C6.33366 6.74667 7.08033 6.00001 8.00033 6.00001ZM8.00033 4.66667C6.34699 4.66667 5.00033 6.01334 5.00033 7.66667C5.00033 9.32001 6.34699 10.6667 8.00033 10.6667C9.65366 10.6667 11.0003 9.32001 11.0003 7.66667C11.0003 6.01334 9.65366 4.66667 8.00033 4.66667Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_155_3746">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      action: () => router.push(`/products/single/${id}`),
    },
    {
      name: "edit",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_155_3751)">
            <path
              d="M9.37333 6.01333L9.98667 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6.01333ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_155_3751">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      action: handleEditClick,
    },
    {
      name: "New Size",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_155_3756)">
            <path
              d="M8.66634 2.66666V4.44666L7.99967 5.11333L7.33301 4.44666V2.66666H8.66634ZM13.333 7.33333V8.66666H11.553L10.8863 8L11.553 7.33333H13.333ZM4.44634 7.33333L5.11301 8L4.44634 8.66666H2.66634V7.33333H4.44634ZM7.99967 10.8867L8.66634 11.5533V13.3333H7.33301V11.5533L7.99967 10.8867ZM9.99967 1.33333H5.99967V4.99999L7.99967 7L9.99967 4.99999V1.33333ZM14.6663 6H10.9997L8.99967 8L10.9997 10H14.6663V6ZM4.99967 6H1.33301V10H4.99967L6.99967 8L4.99967 6ZM7.99967 9L5.99967 11V14.6667H9.99967V11L7.99967 9Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_155_3756">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      action: () => router.push(`/products/size/${id}`),
    },
    // {
    //   name: "New Size",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="16"
    //       height="16"
    //       viewBox="0 0 16 16"
    //       fill="none"
    //     >
    //       <g clipPath="url(#clip0_155_3766)">
    //         <path
    //           d="M7.33366 6H8.66699V4H10.667V2.66666H8.66699V0.666664H7.33366V2.66666H5.33366V4H7.33366V6ZM4.66699 12C3.93366 12 3.34033 12.6 3.34033 13.3333C3.34033 14.0667 3.93366 14.6667 4.66699 14.6667C5.40033 14.6667 6.00033 14.0667 6.00033 13.3333C6.00033 12.6 5.40033 12 4.66699 12ZM11.3337 12C10.6003 12 10.007 12.6 10.007 13.3333C10.007 14.0667 10.6003 14.6667 11.3337 14.6667C12.067 14.6667 12.667 14.0667 12.667 13.3333C12.667 12.6 12.067 12 11.3337 12ZM5.40033 8.66666H10.367C10.867 8.66666 11.307 8.39333 11.5337 7.98L14.107 3.30666L12.947 2.66666L10.367 7.33333H5.68699L2.84699 1.33333H0.666992V2.66666H2.00033L4.40033 7.72666L3.50033 9.35333C3.01366 10.2467 3.65366 11.3333 4.66699 11.3333H12.667V10H4.66699L5.40033 8.66666Z"
    //           fill="#010C15"
    //           fillOpacity="0.7"
    //         />
    //       </g>
    //       <defs>
    //         <clipPath id="clip0_155_3766">
    //           <rect width="16" height="16" fill="white" />
    //         </clipPath>
    //       </defs>
    //     </svg>
    //   ),
    //   action: () => router.push(`/products/size/${id}`),
    // },
    {
      name: "discard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_155_3761)">
            <path
              d="M9.41301 6.98L7.99967 8.39333L6.57967 6.98L5.63967 7.92L7.05967 9.33333L5.64634 10.7467L6.58634 11.6867L7.99967 10.2733L9.41301 11.6867L10.353 10.7467L8.93967 9.33333L10.353 7.92L9.41301 6.98ZM10.333 2.66667L9.66634 2H6.33301L5.66634 2.66667H3.33301V4H12.6663V2.66667H10.333ZM3.99967 12.6667C3.99967 13.4 4.59967 14 5.33301 14H10.6663C11.3997 14 11.9997 13.4 11.9997 12.6667V4.66667H3.99967V12.6667ZM5.33301 6H10.6663V12.6667H5.33301V6Z"
              fill="#010C15"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_155_3761">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      action: handleDeleteClick,
    },
  ];

  const handleFunc = (func) => {
    func(id);
    handleClose();
  };

  return (
    <OptionsCellStyles className="actionIcon _pointer _p5 _grid_center">
      <svg
        ref={optionsRef}
        className="_hover_blue"
        onClick={handleToggle}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g opacity="0.7" clipPath="url(#clip0_142_2565)">
          <path
            d="M8.00033 5.33334C8.73366 5.33334 9.33366 4.73334 9.33366 4.00001C9.33366 3.26667 8.73366 2.66667 8.00033 2.66667C7.26699 2.66667 6.66699 3.26667 6.66699 4.00001C6.66699 4.73334 7.26699 5.33334 8.00033 5.33334ZM8.00033 6.66667C7.26699 6.66667 6.66699 7.26667 6.66699 8C6.66699 8.73334 7.26699 9.33334 8.00033 9.33334C8.73366 9.33334 9.33366 8.73334 9.33366 8C9.33366 7.26667 8.73366 6.66667 8.00033 6.66667ZM8.00033 10.6667C7.26699 10.6667 6.66699 11.2667 6.66699 12C6.66699 12.7333 7.26699 13.3333 8.00033 13.3333C8.73366 13.3333 9.33366 12.7333 9.33366 12C9.33366 11.2667 8.73366 10.6667 8.00033 10.6667Z"
            fill="#010C15"
          />
        </g>
        <defs>
          <clipPath id="clip0_142_2565">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div ref={optionsMenuRef} className="actionOptions">
        {OPTIONS.map((item, i) => (
          <div
            key={i}
            onClick={() => handleFunc(item?.action)}
            className="option _flex _align_center"
          >
            <span className="_grid_center">{item?.icon}</span>
            <span className="_grid_center _capitalize">{item?.name}</span>
          </div>
        ))}
      </div>
    </OptionsCellStyles>
  );
});

const OptionsCellStyles = styled.div`
  &&& {
    position: relative;

    svg {
      aspect-ratio: 1/1;
      width: 15px;
    }

    .actionOptions {
      position: absolute;
      background: #ffffff;
      border-radius: 4px;

      box-shadow: -4px 4px 13px 4px rgba(118, 128, 135, 0.15);
      padding: 8px 0;

      width: 157px;
      min-width: 157px;
      min-height: 130px;
      height: max-content;
      transform-origin: 100% 0;
      transition: all 0.2s ease-in-out;

      scale: 0;
      right: 102%;
      top: 10%;
      z-index: 100;

      &.currentCellMenu {
        scale: 1;
      }

      .option {
        width: 100%;
        height: 30px;
        padding: 14px;

        color: rgba(1, 12, 21, 0.7);

        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;

        &:hover {
          background: #e4eff9;
        }
      }
    }
  }
`;
