import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartProvider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

const Cart: React.FC = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    setOrderTotal(
      cartItems.reduce((a, b) => {
        return a + b.price;
      }, 0)
    );
  }, [cartItems]);

  return (
    <React.Fragment>
      <Typography variant="h2">Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h5">
          Your cart is currently empty! Add some items on the menu and come back
        </Typography>
      ) : (
        <React.Fragment>
          <Typography variant="body1">Order Total: ${orderTotal}</Typography>
          <List style={{ width: "400px" }}>
            {cartItems.map((item, index) => (
              <ListItem button divider>
                <ListItemText secondary={`${item.size} $${item.price}`}>
                  {item.item}
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton onClick={() => removeItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Cart;
