import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FoodContext from "./FoodContext";
import { useContext } from "react";

function FoodItem({ food }) {
  const { handleAddCartClick } = useContext(FoodContext);

  return (
    <Grid
      container
      spacing={1}
      p={2}
      //   mt={2}
      //   sx={{ border: "1px solid #e3e3e3" }}
    >
      <Grid item xs={6}>
        <Box>
          <Typography variant="h4">{food.name}</Typography>
          <Typography paragraph={true}>&#8377; {food.price}</Typography>
          <Box>
            <Brightness1Icon
              sx={{ color: "green", border: "1px solid green" }}
            />
          </Box>
          <Button
            // startIcon={<DeleteIcon />}
            sx={{
              my: 2,
              // color: "yellow",
              display: "block",
              // backgroundColor: "yellow",
              // border: "1x solid #",
            }}
            color="primary"
            variant="outlined"
            onClick={(event) => handleAddCartClick(event, food.id)}
          >
            Add To Cart
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Box id="box1" component="img" alt={food.name} src={food.image} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default FoodItem;
