import useStore from "@contexts/StoreContext";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchPopUp = () => {
  const { showSearch: show, setShowSearch } = useStore();
  const [param, setParam] = useState("");
  const [results, setResults] = useState([]);
  const [countries, setCountries] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const config = {
      url: "/api/store/cards/search",
      method: "get",
      params: {
        param: param,
      },
    };

    await axios(config)
      .then((resp) => {
        // console.log(resp?.data);
        setResults(resp?.data);
      })
      .catch((error) => {
        console.error(error);
        setResults([]);
      });
  };

  const fetchCountries = async (code = "") => {
    const url = `/api/store/countries/all`;
    await axios
      .get(url)
      .then((resp) => {
        setCountries(() => resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleParam = async (e) => {
    setParam(e.target.value);
    await fetchData();

    if (
      (e.target.value == "") |
      ((e.target.value.length < 1) | (param == ""))
    ) {
      return setResults([]);
    }
  };

  const onSelectChange = (e) => {
    router.push(`/country/${e.target.value}`);
    setShowSearch(false);
  };

  useEffect(() => {
    fetchCountries();
    setParam("");
    setResults([]);
  }, []);

  useEffect(() => {
    if (param.length < 1) setResults([]);
    if (param.length >= 1) fetchData();
    if (countries?.length < 1) fetchCountries();
  }, [param]);

  useEffect(() => {
    if (!show) {
      setParam("");
      setResults([]);
    }
  }, [show]);

  return (
    <SearchStyle show={show} className="_flex_col_center">
      <section className="_flex_col_center _gap20 _full_w">
        <div className="_full_w _align_right">
          <button
            type="button"
            className="_p10 _b_radius10"
            onClick={() => setShowSearch(false)}
          >
            close
          </button>
        </div>
        <h2 style={{ color: "#fff" }} className="_flex_center">
          Search Countries
        </h2>
        <div className="_full_w">
          <div className={"searchDiv _flex_center _border_radius_10"}>
            <div className="_flex _flex1 _full_w">
              <img src="/search.svg" alt="" />
              <input
                type="text"
                name="search_param"
                className="_flex1"
                onChange={handleParam}
                value={param}
                placeholder="Search For Countries"
              />
            </div>
            <select
              required={true}
              onChange={onSelectChange}
              name="selectedCountry"
              // value={info.account_type}
            >
              <option value="">Select</option>
              {countries?.map((c) => (
                <option value={c?.code?.toUpperCase()}>{c?.name}</option>
              ))}
            </select>
          </div>
        </div>

        <h5
          style={{ color: "#fff", marginTop: "15px" }}
          className="_align_left _full_w"
        >
          Result:
        </h5>
        <div
          className="results _auto_scroll_y"
          style={{ background: results.length < 1 ? "transparent" : "#fff" }}
        >
          {results?.map((item, i) => (
            <a
              className="item _flex_jcsb _pointer _align_center"
              href={`/country/${item?.code?.toUpperCase()}`}
            >
              <span>{item?.name || item?.title}</span>
              <img
                src={item?.image || item?.url || item?.image_url || "/logo.png"}
                alt=""
              />
            </a>
          ))}

          {(param.length > 1) & (results.length < 1) ? (
            <h4 style={{ background: "#fff", padding: "20px 50px" }}>
              No Result
            </h4>
          ) : (
            ""
          )}
        </div>
      </section>
    </SearchStyle>
  );
};

export default SearchPopUp;

const SearchStyle = styled.div`
  &&& {
    background: #000000c7;
    position: absolute;
    padding: 30px;
    inset: 0;
    z-index: 300;
    /* transform: translate(50%, -50%); */
    transition: 0.3s;
    transform: ${({ show }) =>
      show ? "translate(0%, -0%)" : "translate(-100%, -100%)"};

    /* &:hover {
      transform: translate(0%, -0%);
    } */

    > section {
      width: min(800px, 96%);
    }

    .searchDiv {
      gap: 10px;
      padding: 15px;
      border-radius: 20px;
      width: var(--div_width);
      background: #fff;
      background: linear-gradient(0deg, #dddddd, #dddddd),
        linear-gradient(0deg, #fafafa, #fafafa);
      box-shadow: 0 0 15px 0px #00000020;

      input {
        color: var(--dark);
        font-size: 1rem;
        background: transparent;
      }

      select {
        background: transparent;
        background-color: #ffffff;
        border-left: 2px solid gray;
        color: var(--color);
        max-width: 100px;
        font-size: 13px;

        padding: 4px 15px;
        border-radius: 10px;
        outline: none;

        option {
          max-width: 100px;
          overflow-x: hidden;
          outline: none;
          border: 0;
          background: var(--esim-blue);
        }
      }

      @media screen and (max-width: 450px) {
        gap: 20px;
        flex-direction: column-reverse;

        select {
          max-width: 100%;
          width: 100%;
        }
      }
    }

    .results {
      padding: 10px;
      border-radius: 10px;
      max-height: 60vh;
      width: 100%;
      top: 100px;
      gap: 20px;
      background: var(--white);
      box-shadow: 0 0 0 0;

      display: flex;
      flex-direction: column;

      .item {
        padding: 10px;
        min-width: 200px;
        border-radius: 10px;

        border: 1px solid #00000020;
        background: #000;
        color: #fff;
        font-weight: 900;
        transition: background 0.2s, color 0.1s;

        &:hover {
          color: #000;
          background: #fff;
        }

        img {
          max-width: 25px;
        }
      }
    }
  }
`;
