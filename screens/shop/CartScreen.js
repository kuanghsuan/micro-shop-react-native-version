import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/order";
import Card from "../../components/UI/Card";

const CartScreen = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const cartTotalAmount = useSelector((state) => state.carts.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.carts.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.carts.items[key].productTitle,
        productPrice: state.carts.items[key].productPrice,
        quantity: state.carts.items[key].quantity,
        sum: state.carts.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  const sendOrderHandler = async () => {
    setisLoading(true);
    await dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
    setisLoading(false);
  }

  
  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ?  <ActivityIndicator size="small" color={Colors.primary} /> : 
        <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length == 0}
          onPress={sendOrderHandler}
        />}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            deletable
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

CartScreen.navigationOptions = {
  headerTitle: "Your Cart",
};

export default CartScreen;
