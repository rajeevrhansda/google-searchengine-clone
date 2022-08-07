import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) => {
        setLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            },
        });

        const data = await res.json();

        if(url.includes('/news'))
        {
            setResults( data.entries);
        }
        else if(url.includes('/image'))
        {
            setResults( data.image_results);
        }
        else
        {
            setResults( data.results)
        }



        // setResults(data);
        setLoading(false);
        // console.log('Rajeev', data);
        // console.log('Hansda', res);
        // console.log('ENV', process.env.REACT_APP_API_KEY);
        // console.log(url);

    };

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);