import { React, useEffect, useState, } from "react";
import { Sunburst } from 'react-vis';
import { Link,useSearchParams } from 'react-router-dom';
import FetchApi from "../services/FetchApi";

const Search = () => {

    const [storeData, setStoreData] = useState([]);

    const [searchParams] = useSearchParams();


    useEffect(() => {
        FetchApi(searchParams,setStoreData)
    }, [storeData])

    return (

        <div>
            {storeData.map((e, index) => {

                return (
                    <div key={index}>
                        <h2>{e.name}</h2>
                        <h5>Status: {e.status == 0 ? '仲健在' : '已執7'}</h5>
                        <h5>Location: {e.location}</h5>
                        <Link to={{
                            pathname: "/details",
                            search: '?id=' + e.id,
                            state: { fromDashboard: true }
                        }}>
                            More Info
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    )
}

export default Search