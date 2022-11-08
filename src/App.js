import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

function App() {
  const rows = [
    {
      id: 1,
      first_name: "Modestine",
      last_name: "Burder",
      email: "mburder0@cbc.ca",
      only_child: true,
    },
    {
      id: 2,
      first_name: "Venita",
      last_name: "Trodler",
      email: "vtrodler1@netscape.com",
      only_child: true,
    },
    {
      id: 3,
      first_name: "Kirbee",
      last_name: "Philips",
      email: "kphilips2@va.gov",
      only_child: false,
    },
    {
      id: 4,
      first_name: "Rubie",
      last_name: "Warn",
      email: "rwarn3@huffingtonpost.com",
      only_child: true,
    },
    {
      id: 5,
      first_name: "Norri",
      last_name: "Inkle",
      email: "ninkle4@networksolutions.com",
      only_child: true,
    },
    {
      id: 6,
      first_name: "Marielle",
      last_name: "Smallpeace",
      email: "msmallpeace5@globo.com",
      only_child: true,
    },
    {
      id: 7,
      first_name: "Tamara",
      last_name: "Gentile",
      email: "tgentile6@cmu.edu",
      only_child: true,
    },
    {
      id: 8,
      first_name: "Daveta",
      last_name: "Brimfield",
      email: "dbrimfield7@nydailynews.com",
      only_child: true,
    },
    {
      id: 9,
      first_name: "Spence",
      last_name: "Pickersgill",
      email: "spickersgill8@usnews.com",
      only_child: false,
    },
    {
      id: 10,
      first_name: "Jenifer",
      last_name: "Bodiam",
      email: "jbodiam9@webs.com",
      only_child: false,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "only_child",
      headerName: "Is Only Child?",
      flex: 1,
      // * with this, we can customize a cell as we wish, like a component
      // * this 'access' exists in the mock data as a key/value PaidRounded. We're grabbing that
      // renderCell: ({ row: { access } }) => {
      //   return (
      //     <Box
      //       width="60%"
      //       m="0 auto"
      //       p="5px"
      //       display="flex"
      //       justifyContent="center"
      //       // * so this is how you write multiple ternary if else statements
      //       backgroundColor={
      //         access === "admin"
      //           ? colors.greenAccent[600]
      //           : access === "manager"
      //           ? colors.greenAccent[700]
      //           : colors.greenAccent[700]
      //       }
      //       borderRadius="4px"
      //     >
      //       {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      //       {access === "manager" && <SecurityOutlinedIcon />}
      //       {access === "user" && <LockOpenOutlinedIcon />}
      //       <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
      //         {access}
      //       </Typography>
      //     </Box>
      //   );
      // },
    },
  ];

  return (
    <div>
      <Box m="40px 0 0 0" height="75vh">
        {" "}
        <DataGrid
          // data generally goes to the rows prop
          rows={rows}
          columns={columns}
        />
      </Box>
    </div>
  );
}

export default App;
