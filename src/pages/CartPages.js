import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { shopContext } from "../context/GlobalState";
import { Summary, SummaryItem } from "./styles/CartPages.styles";
import currencyFormatter from "currency-formatter";
//@Components
import { Navbar } from "../components/navbar/Navbar";
import { Menu } from "../components/navbar/Menu";
import { CartItem } from "../components/CartItem";
import { Footer } from "../components/footer/Footer";

export const CartPages = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const { cartState, deleteAllCart } = useContext(shopContext);
  const { cart } = cartState;

  const priceTotal = cart?.reduce((ack, item) => {
    return ack + item.quantity * item.price;
  }, 0);

  return (
    <>
      <div style={{ position: "sticky", top: 0, botton: 0, zIndex: 2 }}>
        <Navbar changeIcon={changeIcon} setChangeIcon={setChangeIcon} />
        <Menu changeIcon={changeIcon} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-9 mt-5 mb-5 d-flex flex-column min-vh-100">
            {cart?.length === 0 && (
              <span>
                <b>There are no products in the cart.</b>
              </span>
            )}

            {cart?.map((item, i) => (
              <div className="mb-3" key={i}>
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className="col-md-6 col-lg-3 mt-5 mb-5">
            <Summary>
              <h3>SUMMARY</h3>
              <SummaryItem>
                <span>Total</span>
                <span>
                  {currencyFormatter.format(priceTotal, { code: "USD" })}
                </span>
              </SummaryItem>
              <button>CONTINUE & PAY</button>
              <button
                onClick={() => deleteAllCart()}
                style={{ background: "red" }}
              >
                DELETE CART
              </button>
            </Summary>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
