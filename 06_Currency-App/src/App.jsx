/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const { data: currencyInfo} = useCurrencyInfo(from) 

  const options = Object.keys(currencyInfo)

  useEffect(() => {
    if (Object.keys(currencyInfo).length > 0) {
      setIsLoading(false)
    }
  }, [currencyInfo]) 


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    const result = amount * currencyInfo[to]
    // console.log(`Converting ${amount} ${from} to ${to}. Result: ${result}`)
    setConvertedAmount(result.toFixed(2))
  }

  if (isLoading) {
    return <div className="w-full h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/img/bg_currency.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
          {/* 
            In the form we have fire an event and we know that whenever the form is submitted then it should go to some URL. But here we want to prevent it from submission. We want that the convert() method should be called. 
            So that we give the preventDefault().
          */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
