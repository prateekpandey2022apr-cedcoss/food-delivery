import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { BottomNavigation, Button, Drawer, Stack } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Hidden from "@mui/material/Hidden";

import FoodContext from "./FoodContext";
import { CartTotal } from "./Utils";

export default function BottomAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { cart, handleEmptyCartClick, handleDeleteItemClick, handleContinue } =
    React.useContext(FoodContext);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cart.length ? (
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dish</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((cartItem) => (
                  <TableRow
                    key={cartItem.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cartItem.name}
                    </TableCell>
                    <TableCell align="right">{cartItem.price}</TableCell>
                    <TableCell align="right">{cartItem.quantity}</TableCell>
                    <TableCell align="right">
                      {cartItem.price * cartItem.quantity}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        sx={{ color: "red" }}
                        onClick={(event) =>
                          handleDeleteItemClick(event, cartItem.id)
                        }
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ) : (
        <Grid>
          <Box sx={{ height: "20vh" }}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5" contained>
                Cart Empty &#128542;
              </Typography>
            </Grid>
          </Box>
        </Grid>
      )}
    </Box>
  );

  return (
    <React.Fragment>
      <div>
        <React.Fragment>
          <Drawer
            anchor="bottom"
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          >
            {list("bottom")}
          </Drawer>
        </React.Fragment>
      </div>

      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid
            container
            // spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // alignItems="center"
          >
            <Grid item xs={3}>
              <Box>
                <Tooltip title="Cart Items">
                  <Button
                    sx={{ color: "#fff" }}
                    onClick={toggleDrawer("bottom", true)}
                  >
                    <KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>
                  </Button>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography>Your Orders ({cart.length})</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Subtotal: {CartTotal(cart)}</Typography>
            </Grid>
            <Grid item xs={3} spacing={1}>
              <Box>
                <Button
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "red",
                    "&:hover": {
                      backgroundColor: "#bf0f0f",
                    },
                    "&:disabled": {
                      color: "#fff",
                      backgroundColor: "#c94040bf",
                    },
                  }}
                  disabled={cart.length === 0}
                >
                  <Typography onClick={handleContinue}>Continue</Typography>
                </Button>

                <Tooltip title="Empty cart" disabled={cart.length === 0}>
                  <IconButton
                    aria-label="add to shopping cart"
                    sx={{ color: "white" }}
                    onClick={handleEmptyCartClick}
                  >
                    <RemoveShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
