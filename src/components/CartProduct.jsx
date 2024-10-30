import { useEffect, useState } from "react";
import Popup from "./Popup";

export default function CartProduct({ setData, cartProduct, setCartProduct }) {
  const amountBoxs = [1, 2, 5, 10];
  const [popUp, setPopUp] = useState(false);
  const [toasterDetail, setToasterDetail] = useState([
    "success",
    "Cart Updated",
  ]);
  // remove product
  const remove = (el) => {
    setCartProduct((prv) => {
      return prv.filter((e) => {
        return e.name != el.name;
      });
    });
    setToasterDetail(["error", "Item removed from cart"]);
    setPopUp(true);
  };

  useEffect(() => {
    // calculating subTotal
    setData((prv) => ({
      ...prv,
      subTotal: cartProduct.reduce((acc, e) => {
        return acc + e.price * e.amount;
      }, 0),
    }));
    // calculating tax
    setData((prv) => ({
      ...prv,
      tax: cartProduct.reduce((acc, e) => {
        return acc + e.tax * e.amount;
      }, 0),
    }));
    // calculating total
    setData((prv) => ({
      ...prv,
      total: cartProduct.reduce((acc, e) => {
        return (
          acc +
          e.price * e.amount +
          e.tax * e.amount +
          ((e.price * e.amount <= 1500) & (e.price != 0) ? 100 : 0)
        );
      }, 0),
    }));

    localStorage.setItem("cartProduct", JSON.stringify(cartProduct)); // set cartProducts
    setPopUp(false);
  }, [cartProduct, setData]);

  //  change amount
  const changeAmount = (el, e) => {
    setCartProduct((prv) =>
      prv.map((element) =>
        element.id === e.id
          ? { ...element, amount: parseInt(el.target.value) }
          : element,
      ),
    );
    setPopUp(true);
    setToasterDetail(["success", "Cart Updated"]);
  };

  return (
    <div className="flex max-w-[800px] flex-col gap-10 lg:w-[800px]">
      <Popup popUp={popUp} toastDetail={toasterDetail} />

      {cartProduct.map((e) => (
        // product detail
        <div
          className="flex flex-col gap-x-10 gap-y-2 md:flex-row"
          key={crypto.randomUUID()}
        >
          <div className="max-w-80 md:w-60">
            <img className="w-full rounded-xl" src={e.img} alt="" />
          </div>

          {/* subsection */}
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row ">
            <h1 className="w-40 text-xl font-semibold">{e.name}</h1>

            <div className="flex flex-col gap-1">
              <p className="">Amount</p>
              <select
                name=""
                id=""
                onChange={(el) => changeAmount(el, e)}
                className="max-w-60 rounded-lg bg-[#272935] p-1 md:w-40"
              >
                <option value={e.amount}>{e.amount}kg</option>
                {amountBoxs.map((el) => {
                  if (e.amount != el) {
                    return (
                      <option key={crypto.randomUUID()} value={el}>
                        {el}kg
                      </option>
                    );
                  }
                })}
              </select>
              {/* remove btn */}
              <button
                className="w-20 text-start text-red-600"
                onClick={() => remove(e)}
              >
                remove
              </button>
            </div>

            <p>&#8377;{e.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
