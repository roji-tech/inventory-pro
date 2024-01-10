import styled from "styled-components";
import PagesMainLayout from "@layouts/PagesMainLayout";

import { FilterElement } from "./FilterElement";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";

const Orders = () => {
  const defaultData = [
    {
      id: "ac29fb53-d7a7-4303-b882-8f0b5f934525",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [
        {
          id: "dfbf3866-40ef-47f5-96b8-4023aa5bc3ce",
          order: "ac29fb53-d7a7-4303-b882-8f0b5f934525",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1683009426952-13567b4fa28b?q=80&w=1619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 10,
          cost_price: 100,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
    {
      id: "03466c21-9483-462e-9121-a579e05665f7",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [
        {
          id: "a81e7bb9-ab81-4d0b-b2cc-785fcd49edcf",
          order: "03466c21-9483-462e-9121-a579e05665f7",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 10,
          cost_price: 100,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
    {
      id: "39db2e82-a942-4284-8adc-7d056f1909ad",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [
        {
          id: "c74878a2-fdff-4ac8-8ff4-6e9c79a5908c",
          order: "39db2e82-a942-4284-8adc-7d056f1909ad",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 10,
          cost_price: 100,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
    {
      id: "53c1d273-e533-4127-97bc-b3a185b544a4",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [
        {
          id: "137a51b5-aa74-48eb-878c-cdc7506cb457",
          order: "53c1d273-e533-4127-97bc-b3a185b544a4",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 2.6,
          cost_price: 26,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
    {
      id: "15429963-bb30-420c-b5e4-18f48d94adb6",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "b98947d5-623f-4b77-bcf1-1e3fe180b281",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "2e1085aa-1089-43c7-b76a-2b78ee0b2479",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "5bba5af0-91bb-4829-8fb8-5a290be56d04",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "9b28f910-1c73-4a98-bd67-655c242b72f8",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "e73fafe3-8c1a-49c5-b31e-ee5dba3bae8d",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 0,
      discount: 0,
      order_items: [],
    },
    {
      id: "b71a6cab-af4d-42d7-988b-b8f35a31d9bb",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 15,
      discount: 0,
      order_items: [
        {
          id: "bf590e72-16a6-4bdb-ab5a-8eb8b5dced6f",
          order: "b71a6cab-af4d-42d7-988b-b8f35a31d9bb",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 1.5,
          cost_price: 15,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
    {
      id: "1faf2fe2-281e-4662-ac98-31e1be17bf4a",
      vendor: {
        id: "4136d247-5a75-4f30-9fcd-436549bcf72f",
        name: "Vendor 1",
        email: "vendor1@vendors.com",
        phone_no: "08109999999999",
        qdp_rating: 0,
      },
      placement_date: "2023-11-26",
      expected_receipt_date: "2023-11-30",
      actual_receipt_date: null,
      total_cost_price: 45,
      discount: 0,
      order_items: [
        {
          id: "6caa06de-4180-433a-809b-0a6b88c3f5fc",
          order: "1faf2fe2-281e-4662-ac98-31e1be17bf4a",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 1.5,
          cost_price: 15,
          qty_ordered: 10,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
        {
          id: "fc90ff82-28f3-49f6-8659-22c476e96025",
          order: "1faf2fe2-281e-4662-ac98-31e1be17bf4a",
          product_item: {
            id: "4927bd0c-1800-49c2-8958-c0b5e9365328",
            serial_no: "#000000",
            quantity: 5,
            safety_stock: 0,
            reordering_point: 0,
            cost_price: 1.5,
            selling_price: 2.6,
            holding_cost: 1,
            ordering_cost: 1,
            expiring_date: "2040-12-31",
            barcode: "111111111",
            image:
              "https://images.unsplash.com/photo-1682686578707-140b042e8f19?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            product: {
              id: "e1e9c2ac-6090-4652-b224-cf433fdb1f2c",
              name: "Product 1",
              image: null,
              quantity: null,
            },
            size_category: {
              id: "75378314-9bf5-4f00-9501-1bc259ff51ce",
              name: "Size Category 1",
            },
            category: null,
            vendor: null,
          },
          unit_cost_price: 1.5,
          cost_price: 30,
          qty_ordered: 20,
          qty_delayed: 0,
          qty_defected: 0,
          qty_accepted: 0,
        },
      ],
    },
  ];

  const [ordersList, setOrderList] = useFetchData(
    defaultData,
    "/orders/",
    "get",
    {},
    "Orders",
    transformJsonData
  );

  const processing = {
    color: "#3C3E91",
    background: "#3c3e9119",
  };

  const completed = {
    color: "#00FF19",
    background: "#00ff1933",
  };

  const cancelled = {
    color: "#CE1313",
    background: "#d12a2a60",
  };

  const handleEditClick = (id) => {
    console.log(id);
  };

  const handleOptionClick = (id) => {
    console.log(id);
  };

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <PagesMainLayout
        headerBtnText={"Restock Product"}
        showHeaderBtn={true}
        headerBtnURL={"/stocks/add1"}
        otherHeaderElement={<FilterElement />}
        title={
          <p className="_flex _gap15 _align_center">
            <img src="/analysis.svg" alt="" />
            <span>ORDERS</span>
          </p>
        }
        mainContent={
          <section className="contentSection _flex_jcse _wrap">
            {ordersList?.results?.map((item, index) => (
              <div
                key={index}
                className="orderBox _p15 _gap20 _flex_col _border2"
              >
                <div className="_flex">
                  <p
                    className="orderStatus _grid_center"
                    style={
                      item?.status?.includes("Processing")
                        ? processing
                        : item?.status?.includes("Completed")
                        ? completed
                        : cancelled
                    }
                  >
                    {item?.status}
                  </p>
                </div>

                <div className="_flex_col _gap10">
                  <div className="_flex_jcsb _align_center">
                    <div className="name _flex _align_center">
                      <img
                        src={item?.product?.icon || "milo.svg"}
                        alt=""
                        width={25}
                      />
                      <span>{item?.product?.name}</span>
                    </div>

                    <div
                      className="_bg_white _pointer _grid_center"
                      style={{
                        maxWidth: "24px",
                        maxHeight: "24px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.63181 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.63181 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z"
                          stroke="#6F6F6F"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00065 8.66666C8.36884 8.66666 8.66732 8.36818 8.66732 7.99999C8.66732 7.63181 8.36884 7.33333 8.00065 7.33333C7.63246 7.33333 7.33398 7.63181 7.33398 7.99999C7.33398 8.36818 7.63246 8.66666 8.00065 8.66666Z"
                          stroke="#6F6F6F"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33268 8.66666C3.70087 8.66666 3.99935 8.36818 3.99935 7.99999C3.99935 7.63181 3.70087 7.33333 3.33268 7.33333C2.96449 7.33333 2.66602 7.63181 2.66602 7.99999C2.66602 8.36818 2.96449 8.66666 3.33268 8.66666Z"
                          stroke="#6F6F6F"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="_flex_col gap8">
                    <div className="_flex _align_center info _gap12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_157_6480)">
                          <path
                            d="M12.4441 5.14111V11.6667H1.55522V3.11111H2.72189V2.33333H1.458C1.36709 2.33485 1.27737 2.35426 1.19397 2.39046C1.11057 2.42666 1.03511 2.47893 0.971912 2.5443C0.908714 2.60966 0.859012 2.68684 0.825645 2.77141C0.792278 2.85599 0.775899 2.94631 0.777444 3.03722V11.7406C0.775899 11.8315 0.792278 11.9218 0.825645 12.0064C0.859012 12.0909 0.908714 12.1681 0.971912 12.2335C1.03511 12.2988 1.11057 12.3511 1.19397 12.3873C1.27737 12.4235 1.36709 12.4429 1.458 12.4444H12.5413C12.6322 12.4429 12.722 12.4235 12.8054 12.3873C12.8888 12.3511 12.9642 12.2988 13.0274 12.2335C13.0906 12.1681 13.1403 12.0909 13.1737 12.0064C13.2071 11.9218 13.2234 11.8315 13.2219 11.7406V4.79888C12.9809 4.95056 12.7188 5.06588 12.4441 5.14111Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M3.11133 5.44444H3.88911V6.22222H3.11133V5.44444Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M5.44531 5.44444H6.22309V6.22222H5.44531V5.44444Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M7.77734 5.44444H8.55512V6.22222H7.77734V5.44444Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M10.1113 5.44444H10.8891V6.22222H10.1113V5.44444Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M3.11133 7.38889H3.88911V8.16666H3.11133V7.38889Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M5.44531 7.38889H6.22309V8.16666H5.44531V7.38889Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M7.77734 7.38889H8.55512V8.16666H7.77734V7.38889Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M10.1113 7.38889H10.8891V8.16666H10.1113V7.38889Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M3.11133 9.33333H3.88911V10.1111H3.11133V9.33333Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M5.44531 9.33333H6.22309V10.1111H5.44531V9.33333Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M7.77734 9.33333H8.55512V10.1111H7.77734V9.33333Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M10.1113 9.33333H10.8891V10.1111H10.1113V9.33333Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M3.88889 3.88888C3.99203 3.88888 4.09094 3.84791 4.16387 3.77498C4.23681 3.70205 4.27778 3.60313 4.27778 3.49999V1.16666C4.27778 1.06352 4.23681 0.964605 4.16387 0.891674C4.09094 0.818743 3.99203 0.777771 3.88889 0.777771C3.78575 0.777771 3.68683 0.818743 3.6139 0.891674C3.54097 0.964605 3.5 1.06352 3.5 1.16666V3.49999C3.5 3.60313 3.54097 3.70205 3.6139 3.77498C3.68683 3.84791 3.78575 3.88888 3.88889 3.88888Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M8.74913 2.33333H5.05469V3.11111H8.85802C8.78678 2.85795 8.75015 2.59631 8.74913 2.33333Z"
                            fill="#3C3E91"
                          />
                          <path
                            d="M11.6671 4.27777C12.741 4.27777 13.6115 3.40722 13.6115 2.33333C13.6115 1.25944 12.741 0.388885 11.6671 0.388885C10.5932 0.388885 9.72266 1.25944 9.72266 2.33333C9.72266 3.40722 10.5932 4.27777 11.6671 4.27777Z"
                            fill="#3C3E91"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_157_6480">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="_flex_col">
                        <p className="name">Order Date</p>
                        <p className="value">{item?.date}</p>
                      </div>
                    </div>
                    <div className="_flex _align_center info _gap12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M6.99352 1.16667C3.77352 1.16667 1.16602 3.78 1.16602 7C1.16602 10.22 3.77352 12.8333 6.99352 12.8333C10.2193 12.8333 12.8327 10.22 12.8327 7C12.8327 3.78 10.2193 1.16667 6.99352 1.16667ZM6.99935 11.6667C4.42102 11.6667 2.33268 9.57834 2.33268 7C2.33268 4.42167 4.42102 2.33334 6.99935 2.33334C9.57768 2.33334 11.666 4.42167 11.666 7C11.666 9.57834 9.57768 11.6667 6.99935 11.6667ZM7.29102 4.08334H6.41602V7.58334L9.47852 9.42084L9.91602 8.70334L7.29102 7.14584V4.08334Z"
                          fill="#3C3E91"
                        />
                      </svg>
                      <div className="_flex_col">
                        <p className="name">Quantity</p>
                        <p className="value">{item?.quantity}</p>
                      </div>
                    </div>
                    <div className="_flex _align_center info _gap12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_157_6526)">
                          <path
                            d="M7.98438 6.4668C8.15755 6.53516 8.32617 6.61035 8.49023 6.69238C8.6543 6.77441 8.8138 6.86784 8.96875 6.97266C8.86849 7.08203 8.77734 7.19596 8.69531 7.31445C8.61328 7.43294 8.53809 7.56055 8.46973 7.69727C8.11881 7.4694 7.74512 7.29622 7.34863 7.17773C6.95215 7.05924 6.54427 7 6.125 7C5.72396 7 5.33659 7.05241 4.96289 7.15723C4.58919 7.26204 4.24056 7.40788 3.91699 7.59473C3.59342 7.78158 3.29948 8.00944 3.03516 8.27832C2.77083 8.5472 2.54297 8.84342 2.35156 9.16699C2.16016 9.49056 2.01204 9.83919 1.90723 10.2129C1.80241 10.5866 1.75 10.974 1.75 11.375H0.875C0.875 10.8281 0.954753 10.3018 1.11426 9.7959C1.27376 9.29004 1.50391 8.82292 1.80469 8.39453C2.10547 7.96615 2.46094 7.58561 2.87109 7.25293C3.28125 6.92025 3.74609 6.6582 4.26562 6.4668C3.75065 6.12956 3.34961 5.70573 3.0625 5.19531C2.77539 4.6849 2.62956 4.11979 2.625 3.5C2.625 3.01693 2.71615 2.56348 2.89844 2.13965C3.08073 1.71582 3.3291 1.3444 3.64355 1.02539C3.95801 0.70638 4.32943 0.455729 4.75781 0.273438C5.1862 0.0911458 5.64193 0 6.125 0C6.60807 0 7.06152 0.0911458 7.48535 0.273438C7.90918 0.455729 8.2806 0.704102 8.59961 1.01855C8.91862 1.33301 9.16927 1.70443 9.35156 2.13281C9.53385 2.5612 9.625 3.01693 9.625 3.5C9.625 3.80078 9.58854 4.09473 9.51562 4.38184C9.44271 4.66895 9.33333 4.9401 9.1875 5.19531C9.04167 5.45052 8.87077 5.68522 8.6748 5.89941C8.47884 6.11361 8.2487 6.30273 7.98438 6.4668ZM3.5 3.5C3.5 3.86458 3.56836 4.2041 3.70508 4.51855C3.8418 4.83301 4.02865 5.111 4.26562 5.35254C4.5026 5.59408 4.7806 5.7832 5.09961 5.91992C5.41862 6.05664 5.76042 6.125 6.125 6.125C6.48503 6.125 6.82454 6.05664 7.14355 5.91992C7.46256 5.7832 7.74056 5.59635 7.97754 5.35938C8.21452 5.1224 8.40365 4.8444 8.54492 4.52539C8.6862 4.20638 8.75456 3.86458 8.75 3.5C8.75 3.13997 8.68164 2.80046 8.54492 2.48145C8.4082 2.16243 8.22135 1.88444 7.98438 1.64746C7.7474 1.41048 7.46712 1.22135 7.14355 1.08008C6.81999 0.938802 6.48047 0.870443 6.125 0.875C5.76042 0.875 5.4209 0.943359 5.10645 1.08008C4.79199 1.2168 4.514 1.40365 4.27246 1.64062C4.03092 1.8776 3.8418 2.15788 3.70508 2.48145C3.56836 2.80501 3.5 3.14453 3.5 3.5ZM13.5625 9.1875C13.5625 9.42448 13.526 9.65462 13.4531 9.87793C13.3802 10.1012 13.2708 10.3086 13.125 10.5V14L11.375 13.125L9.625 14V10.5C9.48372 10.3086 9.37663 10.1012 9.30371 9.87793C9.23079 9.65462 9.19206 9.42448 9.1875 9.1875C9.1875 8.88672 9.24447 8.60417 9.3584 8.33984C9.47233 8.07552 9.62728 7.84538 9.82324 7.64941C10.0192 7.45345 10.2516 7.29622 10.5205 7.17773C10.7894 7.05924 11.0742 7 11.375 7C11.6758 7 11.9583 7.05697 12.2227 7.1709C12.487 7.28483 12.7171 7.44206 12.9131 7.64258C13.109 7.8431 13.2663 8.07552 13.3848 8.33984C13.5033 8.60417 13.5625 8.88672 13.5625 9.1875ZM11.375 7.875C11.1927 7.875 11.0218 7.90918 10.8623 7.97754C10.7028 8.0459 10.5638 8.13932 10.4453 8.25781C10.3268 8.3763 10.2334 8.5153 10.165 8.6748C10.0967 8.83431 10.0625 9.00521 10.0625 9.1875C10.0625 9.36979 10.0967 9.54069 10.165 9.7002C10.2334 9.8597 10.3268 9.9987 10.4453 10.1172C10.5638 10.2357 10.7028 10.3291 10.8623 10.3975C11.0218 10.4658 11.1927 10.5 11.375 10.5C11.5573 10.5 11.7282 10.4658 11.8877 10.3975C12.0472 10.3291 12.1862 10.2357 12.3047 10.1172C12.4232 9.9987 12.5166 9.8597 12.585 9.7002C12.6533 9.54069 12.6875 9.36979 12.6875 9.1875C12.6875 9.00521 12.6533 8.83431 12.585 8.6748C12.5166 8.5153 12.4232 8.3763 12.3047 8.25781C12.1862 8.13932 12.0472 8.0459 11.8877 7.97754C11.7282 7.90918 11.5573 7.875 11.375 7.875ZM12.25 12.585V11.1904C11.9766 11.3135 11.6849 11.375 11.375 11.375C11.0651 11.375 10.7734 11.3135 10.5 11.1904V12.585C10.6458 12.512 10.7917 12.4414 10.9375 12.373C11.0833 12.3047 11.2292 12.2295 11.375 12.1475C11.5208 12.2249 11.6667 12.2979 11.8125 12.3662C11.9583 12.4346 12.1042 12.5075 12.25 12.585Z"
                            fill="#3C3E91"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_157_6526">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="_flex_col">
                        <p className="name">Supplier</p>
                        <p className="value">{item?.supplier_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        }
      />
    </Wrapper>
  );
};

export default Orders;

const Wrapper = styled.div`
  &&& {
    .contentSection {
      flex: 1;
      gap: 15px;

      .orderBox {
        width: 334.382px;
        min-width: 334.382px;
        max-width: 334.382px;
        height: 254px;
        min-height: 260px;
        max-height: 260px;

        border-radius: 6px;
        background: #fff;

        /* Shadow/Shadow__XSmall */
        box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.2);

        .orderStatus {
          display: flex;
          height: 24px;
          padding: 4px 8px;

          color: #3c3e91;
          font-family: "Inter";
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 200% */

          border-radius: 4px;
        }

        .info {
          .name {
            color: #6e7c87;

            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }

          .value {
            color: #6e7c87;

            font-size: 11px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
          }
        }
      }
    }
  }
`;

function transformJsonData(jsonData) {
  return jsonData.map((order) => {
    const {
      id,
      placement_date,
      expected_receipt_date,
      total_cost_price,
      order_items,
      vendor,
    } = order;

    const productItem = order_items[0]?.product_item;
    const productName = productItem?.product
      ? productItem.product?.name
      : "Unknown Product";

    return {
      id,
      date:
        new Date(placement_date)?.toLocaleDateString() +
        " to " +
        new Date(expected_receipt_date)?.toLocaleDateString(),
      product: {
        name: productName,
        icon: productItem?.image ? productItem?.image : null,
      },
      price: total_cost_price,
      quantity: productItem?.quantity ?? 0,
      status: getRandomValues(),
      supplier_name: vendor?.name,
      category: productItem?.size_category
        ? productItem.size_category?.name
        : "Unknown Category",
    };
  });
}
