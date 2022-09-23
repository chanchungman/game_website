import { React, useEffect, useState, } from "react";
import { Sunburst } from 'react-vis';
import { Link,useSearchParams } from 'react-router-dom';
import FetchApi from "../services/FetchApi";

const Home = () => {

    const [storeData, setStoreData] = useState([]);
    const [data, setData] = useState({});
    const [searchParams] = useSearchParams();

    function setBar() {
        ////set bar data
        let opening = storeData.filter(e => {
            return e.status == 0
        });
        let closing = storeData.filter(e => {
            return e.status == 1
        });
        const LabelStyle = {
            transform: "rotate(0,0,0)",
        }
        setData({

            "label": "機鋪總數量: " + storeData.length,
            "color": "#fff",
            "labelStyle": LabelStyle,
            "children": [
                { "label": "健在: " + opening.length, "color": "rgb(169 224 225)", "size": opening.length, "labelStyle": LabelStyle },
                { "label": "已執: " + closing.length, "color": "rgb(246 224 198)", "size": closing.length, "labelStyle": LabelStyle },
            ],
        })
    }

    useEffect(() => {
        (storeData.length === 0) ?
            FetchApi(searchParams,setStoreData)
            :
            setBar()
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
            <Sunburst
                colorType="literal"
                data={data}
                height={300}
                width={350}
            >
            </Sunburst>
        </div>
    )
}

export default Home