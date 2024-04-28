import React from "react";

function InputBox({
    //take props here
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    return (
        <div className="bg-white p-3 rounded-lg text-sm flex m-1">
            <div className="w-1/2">
                <label htmlFor="inputId" className="text-gray-500">{label}</label>
                <input type="number"
                    id="inputId"
                    className="font-medium mt-2 outline-none"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="w-full text-gray-500">Currency Type</p>
                <select name="props" id="props"
                    className="font-medium mt-2 bg-gray-200 px-1 py-1 rounded-lg outline-none"
                    onChange={(e) => onCurrencyChange}
                >
                    {currencyOptions.map((currency) => (
                        <option id={currency} key={currency} value={currency}>{currency}</option>
                    ))}

                </select>
            </div>
        </div>
    )
}

export default InputBox;