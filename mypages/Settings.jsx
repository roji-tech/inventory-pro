import PagesMainLayout from "@layouts/PagesMainLayout";
import Link from "next/link";
import styled from "styled-components";

const Settings = () => {
  return (
    <Wrapper className="_full_wh">
      <PagesMainLayout
        title={
          <span className="bolder _flex _align_center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8054 6.62358L18.183 5.54349C17.6564 4.62957 16.4895 4.31429 15.5743 4.83869V4.83869C15.1387 5.09531 14.6189 5.16812 14.1295 5.04106C13.6401 4.91399 13.2214 4.59749 12.9656 4.16134C12.8011 3.88412 12.7127 3.56836 12.7093 3.24601V3.24601C12.7242 2.72919 12.5292 2.22837 12.1688 1.85764C11.8084 1.48691 11.3133 1.27783 10.7963 1.27805H9.54228C9.03575 1.27804 8.55009 1.47988 8.19278 1.83891C7.83547 2.19795 7.63595 2.68456 7.63839 3.19109V3.19109C7.62338 4.23689 6.77126 5.07678 5.72535 5.07667C5.40299 5.07332 5.08724 4.98491 4.81001 4.82038V4.82038C3.89484 4.29598 2.72789 4.61126 2.20132 5.52519L1.53313 6.62358C1.00719 7.53636 1.31818 8.70258 2.22878 9.23228V9.23228C2.82068 9.57401 3.18531 10.2056 3.18531 10.889C3.18531 11.5725 2.82068 12.204 2.22878 12.5458V12.5458C1.31934 13.0719 1.00801 14.2353 1.53313 15.1453V15.1453L2.1647 16.2346C2.41143 16.6798 2.82538 17.0083 3.31497 17.1474C3.80456 17.2866 4.32942 17.2249 4.7734 16.976V16.976C5.20986 16.7213 5.72997 16.6515 6.21812 16.7822C6.70627 16.9128 7.12201 17.233 7.37294 17.6716C7.53748 17.9489 7.62589 18.2646 7.62924 18.587V18.587C7.62924 19.6435 8.48573 20.5 9.54228 20.5H10.7963C11.8493 20.5 12.7043 19.6491 12.7093 18.5961V18.5961C12.7069 18.088 12.9076 17.6 13.2669 17.2407C13.6262 16.8814 14.1143 16.6806 14.6224 16.6831C14.944 16.6917 15.2584 16.7797 15.5377 16.9394V16.9394C16.4505 17.4653 17.6167 17.1543 18.1464 16.2437V16.2437L18.8054 15.1453C19.0605 14.7075 19.1305 14.186 19 13.6963C18.8694 13.2067 18.549 12.7893 18.1098 12.5366V12.5366C17.6705 12.2839 17.3502 11.8665 17.2196 11.3769C17.089 10.8873 17.159 10.3658 17.4141 9.92793C17.58 9.63831 17.8202 9.39817 18.1098 9.23228V9.23228C19.0149 8.70286 19.3252 7.54346 18.8054 6.63274V6.63274V6.62358Z"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="10.1752"
                cy="10.889"
                r="2.63616"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Settings</span>
          </span>
        }
        showHeaderBtn={true}
        headerBtnText="Invite New Member"
        headerBtnURL="/settings/invite"
        mainContent={<section className="_flex"></section>}
      />
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  &&& {
    .analysisItems {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      justify-items: center;

      padding: 30px 10px 50px;
      gap: 65px;
      max-width: calc(309px * 2 + 30px);

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
      }

      .item {
        width: 280px;
        min-width: 250px;
        height: 172px;
        border-radius: 0px 20px;
        gap: 13px;

        &:nth-child(even) {
        }
        &:nth-child(odd) {
          justify-self: flex-end;
        }

        .icon {
          width: 50.054px;
          min-width: 50.054px;
          max-width: 50.054px;
          height: 50.054px;
          min-height: 50.054px;
          max-height: 50.054px;
          border-radius: 50%;
          background: #fff;
        }
      }
    }
  }
`;
