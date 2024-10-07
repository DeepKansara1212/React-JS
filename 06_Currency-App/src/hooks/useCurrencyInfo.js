import { useEffect, useState } from "react"


// Custom Hook
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    // we use useEffect() hook to fetch the api, so that we don't have to make the another function for that
    // We can also use fetch() directly but we want that whenever this custom hook will be called then the API will be call. That's why we use useEffect() hook
    useEffect(() => {
        setError(null) 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            // .then((res) => res.json())
            // .then((res) => setData(res[currency]))
            // .catch(error => console.error('Error fetching currency data:', error));

            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()
            })
            .then((res) => {
                console.log("API response:", res)
                if (res[currency]) {
                    setData(res[currency])
                } else {
                    throw new Error("Unexpected API response structure")
                }
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err)
                setError(err.message)
            }) 

        // We have to hold this response, But if we hold that response in the basic variable then it should not update the UI. 
        // So for that we used useState() hook 

        // The callback function(inside the useEffect) is called whenever there is a change in the currency. So this is our dependency
    }, [currency]) 
    return {data, error} 
}


// This functionality is return the whole method
export default useCurrencyInfo;