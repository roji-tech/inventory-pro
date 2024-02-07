import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { renderProductCell } from "@mypages/renderCell";
import MyDataGrid from "@components/datagrid";
import PagesMainLayout from "@layouts/PagesMainLayout";
// import { memo, useRef } from "react";
// import { useClickOutside2 } from "@hooks/useClickOutside";
import Link from "next/link";
import { useFetchData } from "@hooks/useFetchData";
import { getRandomValues } from "@utils/getRandomStatus";
import useAxios from "@hooks/useAxios";
import { useRouter } from "next/router";
import { DateBox, InputBox, SelectBox } from "@mypages/InputsElememt";
import dayjs from "dayjs";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";

const ProductSize = () => {
  const myaxios = useAxios();
  // const [dataList, setDataList] = useState({});
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { pid } = router.query;
  const [open, setOpen] = useState(false);
  const [eoq, setEoq] = useState("");
  const [values, setValues] = useState({
    product: "",
    cost_price: 1,
    selling_price: 1,
    quantity: 1,
    expiring_date: "",
    barcode: "",
    image:
      "https://images.unsplash.com/photo-1683009426952-13567b4fa28b?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size_category: "",
  });

  const [productItemList, setProductItemsList] = useFetchData(
    [],
    "/product-items/",
    "get",
    {},
    "Product Sizes",
    transformProductItemData
  );

  const [productsList, setProductsList] = useFetchData(
    [],
    "/products/",
    "get",
    {},
    "Products",
    transformProductData
  );

  const [sizeCategoryList, setsizeCategoryList] = useFetchData(
    [],
    "/size-categories/",
    "get",
    {},
    "Size Category",
    transformProductData
  );

  const handleDateChange = (date) => {
    const dateValue = dayjs(date).toISOString().split("T")[0];
    console.log(dateValue);

    setValues((prev) => ({
      ...prev,
      expiring_date: dateValue,
    }));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.id);
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setEoq(typeof productItemList);

    const selectedItem = productItemList?.results?.filter(
      (item) =>
        (item.size_category.id == values.size_category) &
        (item.product.id == values.product)
    )[0];
    console.log(selectedItem?.eoq);
    if (selectedItem) {
      setValues((prev) => ({ ...prev, barcode: selectedItem?.barcode }));

      if (selectedItem?.eoq) {
        setEoq(selectedItem?.eoq);
      } else {
        setEoq("");
      }
    }
  };

  const handleProductFilter = (event) => {
    console.log(event.target.value);
    setRows((rows) =>
      rows.filter((row) => row.product.id == event.target.value)
    );
  };

  const handleCreateProductSize = async (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(values);

    ShowSuccess("Creating Product Size");

    if (!values?.product) {
      ShowErrors("Fill All Fields");
      return;
    }

    await fetchDataWithUseAxios(
      myaxios,
      "/product-items/",
      "post",
      values,
      "Product Size Creation"
    )
      .then(async () => {
        router.push("/products/size");
        const [data, setData] = await useFetchData(
          [],
          "/product-items/",
          "get",
          {},
          "Product Sizes",
          transformProductItemData
        );
        setProductItemsList(data);
      })
      .catch((error) => {
        console.log("Creating Product Size error", error);

        try {
          if (String(error.response?.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (error.response?.data?.errors?.length < 15) {
            return ShowErrors([...error.response?.data?.errors]);
          }
          //   return ShowErrors(
          //     error?.response?.data?.detail ?? "An Error Occurred"
          //   );
        } catch (err) {
          console.log(err);
          return;
          //   ShowErrors("An Error Occurred");
        }
      });
  };

  const [rows, setRows] = useState(productItemList?.results);

  useEffect(() => {
    setRows(productItemList?.results);
  }, [productItemList]);

  const columns = [
    { field: "expiring_date", headerName: "Expiring date", width: 130 },
    {
      field: "product",
      headerName: "PRODUCT NAME",
      width: 180,
      renderCell: renderProductCell,
    },
    {
      field: "size_category",
      headerName: "Size",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        return `${params.value?.name?.toLocaleString()}`;
      },
    },
    {
      field: "id",
      headerName: "PRODUCT ID",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "selling_price",
      headerName: "Selling Price",
      headerAlign: "center",
      align: "center",
      width: 100,
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        return `₦${params.value.toLocaleString()}`;
      },
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      width: 150,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => {
        if (!params.value) {
          return "0 in Stock";
        }
        return `${params.value.toLocaleString()} in Stock`;
      },
    },
    {
      field: "eoq",
      headerName: "Suggested Restock Quantity",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
  ];

  const productSelect = {
    name: "Product",
    id: "product",
    ph: "Stationaries",
    handleChange: handleProductFilter,
    options: productsList?.results,
  };

  const sizeSelect = {
    name: "Size Category",
    id: "size_category",
    ph: "Stationaries",
    handleChange,
    options: sizeCategoryList?.results,
    value: values?.size_category,
  };

  const dateSelect = {
    name: "Expiring Date",
    ph: "2023-07-02",
    id: "expiring_date",
    // value: values?.expiring_date,
    handleChange: handleDateChange,
  };

  const INPUT_LIST = [
    {
      name: "Cost Price",
      ph: "30",
      id: "cost_price",
      handleChange,
      type: "number",
      value: values?.cost_price,
      downText: "Total Cost per unit is ₦50/ Product",
    },

    {
      name: "Quantity",
      ph: "18ml",
      id: "quantity",
      showArrow: false,
      handleChange,
      value: values?.quantity,
      type: "number",
    },

    {
      name: "Barcode",
      ph: "11111111",
      id: "barcode",
      value: values?.barcode,
      handleChange,
    },
    {
      handleChange,
      name: "Image",
      ph: "image link",
      id: "image",
      value: values?.image,
    },
  ];

  useEffect(() => {
    if (pid) {
      setValues((prev) => ({ ...prev, product: pid }));
    }
  }, [pid]);

  return (
    <Wrapper className="_flex_col _gap20 _full_h">
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog
          className="_auto_scroll_y"
          sx={{ width: "100%", maxWidth: 500 }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <DialogTitle>Create new product size</DialogTitle>
          <DialogContent>
            Fill in the information of the product size.
          </DialogContent>
          <form onSubmit={handleCreateProductSize}>
            <Stack className="_auto_scroll_y" spacing={3}>
              <FormControl>
                <SelectBox
                  className="_flex1"
                  item={{
                    ...productSelect,
                    handleChange,
                    value: values?.product,
                  }}
                />
              </FormControl>
              <FormControl>
                <SelectBox item={sizeSelect} />
              </FormControl>
              <FormControl>
                <DateBox item={dateSelect} />
              </FormControl>
              {INPUT_LIST.map((item) => (
                <FormControl>
                  <InputBox item={item} />
                  {item?.id == "quantity" && (
                    <b style={{ font: "16px", color: "goldenrod" }}>
                      {eoq & !(eoq == "object") ? eoq : ""}
                    </b>
                  )}
                </FormControl>
              ))}
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <PagesMainLayout
        title={<span className="bolder">Products</span>}
        otherHeaderElement={
          <>
            <button className="headerBtn _flex_center">
              <Link href={"/products/sizes"} className="_full_wh _flex_center">
                <img src="/add.svg" alt="" />
                <span>View Size Categories</span>
              </Link>
            </button>
          </>
        }
        mainContent={
          <>
            <header className="contentHeader _flex_jcsb _align_center">
              <SelectBox item={productSelect} />
              <div className="_flex _gap20">
                <button
                  onClick={() => setOpen(true)}
                  href="/products/add"
                  className="_btn_blue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_140_1098)">
                      <path
                        d="M8.66634 4.66668H7.33301V7.33334H4.66634V8.66668H7.33301V11.3333H8.66634V8.66668H11.333V7.33334H8.66634V4.66668ZM7.99967 1.33334C4.31967 1.33334 1.33301 4.32001 1.33301 8.00001C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8.00001C14.6663 4.32001 11.6797 1.33334 7.99967 1.33334ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.94 2.66634 8.00001C2.66634 5.06001 5.05967 2.66668 7.99967 2.66668C10.9397 2.66668 13.333 5.06001 13.333 8.00001C13.333 10.94 10.9397 13.3333 7.99967 13.3333Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_140_1098">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Add New Product Size</span>
                </button>
              </div>
            </header>

            <section className="contentSection">
              <MyDataGrid
                height={"100%"}
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10, 15, 20, 25]}
                disableRowSelectionOnClick
              />
            </section>
          </>
        }
      />
    </Wrapper>
  );
};

export default ProductSize;

const Wrapper = styled.div`
  &&& {
    .contentHeader {
      gap: 65px;

      .searchBox {
        height: 40px;
        flex-shrink: 0;
        flex: 1;
        gap: 8px;

        border-radius: 4px;
        border: 1px solid var(--Default-input-stroke, rgba(1, 12, 21, 0.1));
        background: var(--Default-input-fill, #fafafa);

        input {
          font-size: 16px;
          flex: 1;

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
    }

    .contentSection {
      flex: 1;
    }
  }
`;

function transformProductData(jsonData) {
  console.log("Product items", jsonData);
  return jsonData?.reverse().map((product) => {
    return {
      name: (
        <div className="_flex _align_center">
          <img src={product?.image} width={30} alt="" />
          {product?.name}__₦{"( "}
          {product?.quantity ?? 0}
          {" )"}
        </div>
      ),
      value: product?.id,
    };
  });
}

function transformProductItemData(jsonData) {
  console.log("transformProductItemData", jsonData);
  return jsonData?.reverse().map((product) => {
    return {
      ...product,
      status:
        product?.status ??
        getRandomValues(["average", "Active", "Re-order point"]),
    };
  });
}
