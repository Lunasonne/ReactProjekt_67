
import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";
import "./styles.css";


function Order_items() {
  const [order, setOrder] = useState([]);
   
  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue, menuEl];
    });
  };

   const buttonsElement = ["Burger", "Fries", "Cola", "Salad","Ketchup", "Ice-cream"];

   const finalOrder = order.map((orderEl) => {
    return (
      <li key={v4()} className="order_item">{orderEl}</li>
    );
  });

   const menuButtons = buttonsElement.map((item) => {
    return (
      <div className="button_control" key={v4()}>
        <Button
          name={item} onClick={() => addMenuElement(item)}/>
      </div>
    );
  });
return (
    <div className="order_items_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">{menuButtons}</div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol> </div>
    </div>
  );
}
export default Order_items;