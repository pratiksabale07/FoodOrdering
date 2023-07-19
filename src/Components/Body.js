import React from "react"
import { useEffect, useState } from "react"
import RestroCard from "./RestaurantCard"
// default exports should import like this
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    console.log("starting");
    const [resDataList, setresDataList] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://api.jsonbin.io/v3/b/64b3e94d9d312622a3805041");
        const json = await data.json();
        console.log(json);
        setresDataList(json?.record?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestro(json?.record?.data?.cards[2]?.data?.data?.cards)
    }

    return resDataList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input onChange={(e) => { setSearchText(e.target.value) }} value={searchText} type="text" className="search-box" />
                    <button onClick={() => {
                        const filteredResDataBySearch = resDataList.filter((res) => { return res.data.name.toLowerCase().includes(searchText.toLowerCase()) })
                        setFilteredRestro(filteredResDataBySearch);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let filteredResData = resDataList.filter((res) => { return res.data.avgRating > 4 })
                    setFilteredRestro(filteredResData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {filteredRestro.map((elm) => <Link key={elm.data.id} to={"restaurants/" + elm.data.id}><RestroCard resData={elm} /></Link>)}
            </div>
        </div>
    )
}

export default Body;