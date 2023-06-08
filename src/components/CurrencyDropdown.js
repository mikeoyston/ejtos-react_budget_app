import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {

    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });

    }

    return (
        <div className='alert alert-success'>
            <span>Currency: </span>
                <select 
                    name="currency" 
                    id="currency"
                    style={{ marginLeft: '1rem' , size: 10, background: '#d1e7dd', borderRadius: '4px'}}
                    onChange={(event) => setCurrency(event.target.value)}
                    value={currency}
                    >

                    <option value="$" className="currencyOptionDrop">$ Dollar</option>
                    <option value="£" className="currencyOptionDrop">£ Pound</option>
                    <option value="€" className="currencyOptionDrop">€ Euro</option>
                    <option value="₹" className="currencyOptionDrop">₹ Ruppee</option>
                </select>
        </div>
    );
};

export default CurrencyDropDown;