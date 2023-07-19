import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API  /* use here resId from link from swiggy menu*/);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.record.data)
    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines } = resInfo?.cards[2]?.data?.data?.cards[0]?.data

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(' | ')}</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>ColdDrinks</li>
            </ul>
        </div>
    )
}

export default RestroMenu;