import React, {useState} from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from "react-router-dom";

function Subtotal() {

  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();
  const [promoCode, setPromoCode] = useState('');


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
      <div className="subtotal__promoCode">
        <div className="subtotal__promoCodeInput">
          <p className="subtotal__promoCodeLabel">Promotional code</p>
          <input className="subtotal__promoCodeField" type='text' value={promoCode} onChange={e => setPromoCode(e.target.value)}/>
        </div>
        <div className="subtotal__promoCodeAdd">
          <AddCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
