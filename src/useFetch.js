import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [Data, SetData] = useState(null);
    const [isPending, SetPending] = useState(true);
    const [err, SetErr] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Cannot fetch data');
                    }
                    return res.json()
                })
                .then(data => {
                    SetData(data);
                    SetPending(false)
                    SetErr(null)
                })
                .catch(err => {
                    if(err.name === "AbortError"){
                        // console.log('Fetch Abort')
                    }else{
                        SetPending(false)
                        SetErr(err.message)
                    }
                })
        }, 1000);

        return () => abortCont.abort()

    }, [url]);
    return {Data ,isPending ,err}
}

export default useFetch;