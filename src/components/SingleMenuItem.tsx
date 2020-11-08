import React, { useContext } from "react";
import { MenuItem } from "../types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CartContext } from "../CartProvider";

const SingleMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Grid item xs={12}>
      <Card>
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
            >
              <Typography variant="body2">
                {option.size} ${option.price}
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
