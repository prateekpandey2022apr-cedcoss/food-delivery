import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FoodItem from "./FoodItem";
import { foods } from "./Data";
import FoodContext from "./FoodContext";
import { CartTotal } from "./Utils";
import { useContext, useEffect } from "react";

function FoodList() {
  const { cart } = useContext(FoodContext);
  // useEffect(() => {
  //   CartTotal(cart);
  // });
  return (
    <Container>
      <Grid container spacing mt={2} mb={10}>
        {foods.map((food) => {
          return (
            <Grid item xs={12} sm={6} sx={{ border: "1px solid #e3e3e3" }}>
              <FoodItem food={food} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default FoodList;
