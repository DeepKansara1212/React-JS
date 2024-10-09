import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                {/* 
                    Whenever the value of the amount changes then for that there is a onChange for that.
                    Now we have to use this onChange in such a way that our component should know about that & for that we have passed the event & call the method onAmountChange. So whenever user called this then it should directly called this Because our method is at the same place where our value should be reflected.
                    And we can directly pass the onAmountChange but we have not passed the default value for the onAmountChange because it is a function & we can not give the default value to the function.
                    So for that we have pass the checker to check that onAmountChange is exist or not. So the first one is checker.  
                */}
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                    {/* 
                        Whenever we make the loop in the jsx file then we have to give the key to this, So that it should not set the values again & again
                        So if we get the performance to the app in react then we have to give the key, So that loop is working properly.
                    */} 
                </select>
            </div>
        </div>
    )
}

export default InputBox;