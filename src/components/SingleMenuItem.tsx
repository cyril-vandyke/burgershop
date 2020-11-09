import React, { useContext } from "react";
import { MenuItem } from "../types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../CartProvider";
import CardMedia from "@material-ui/core/CardMedia";

const SingleMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Grid item xs={12}>
      <Card>
        <CardMedia
          style={{ height: "160px" }}
          image="https://image.freepik.com/free-vector/cute-burger-french-fries-cartoon-icon-illustration-fast-food-character-icon-concept-isolated-premium-flat-cartoon-style_138676-1608.jpg"
        />
        <CardContent>
          <Typography variant="h5">{item.item}</Typography>
          <Typography variant="body1">Size Options</Typography>
          {item.options.map((option) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "5px",
              }}
              key={`option-entry-${item.item}-${option.size}`}
            >
              <Typography variant="body2">
                {option.size}, ${option.price}
              </Typography>
              <Button
                variant="outlined"
                onClick={() =>
                  addItem({
                    item: item.item,
                    size: option.size,
                    price: option.price,
                  })
                }
                key={`add-button-${item.item}-${option.size}`}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleMenuItem;
