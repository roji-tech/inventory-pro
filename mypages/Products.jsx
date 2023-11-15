import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomStatusOptions,
  useDemoData,
} from "@mui/x-data-grid-generator";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <FullFeaturedCrudGrid />
    </div>
  );
};

export default Products;

const roles = ["Market", "Finance", "Development"];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    status: randomStatusOptions(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 36,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    status: randomStatusOptions(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 19,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    status: randomStatusOptions(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 28,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    status: randomStatusOptions(),
  },
  {
    id: randomId(),
    name: randomTraderName(),
    age: 23,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    status: randomStatusOptions(),
  },
];

function FullFeaturedCrudGrid() {
  const columns = [
    { field: "name", headerName: "Name", width: 180, editable: true },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: true,
      // valueFormatter
    },
    {
      field: "joinDate",
      headerName: "Join date",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "role",
      headerName: "Department",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Market", "Finance", "Development"],
    },
    {
      field: "status",
      type: "actions",
      headerName: "Status",
      width: 100,
      cellClassName: "status",
      valueOptions: ["active", "pending", "failed"],
      getActions: ({ row }) => {
        // console.log(JSON.stringify(props?.row));
        return [
          <div
            style={{
              padding: "4px 11px",
              color: "rgba(81, 156, 102, 1)",
              background: "rgba(50, 147, 111, 0.16)",
            }}
            className="_p5 _border _b_radius10"
          >
            {row?.status}{" "}
          </div>,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .status": {
          color: "text.secondary",
          border: "2px solid pink",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid rows={initialRows} columns={columns} />
    </Box>
  );
}
