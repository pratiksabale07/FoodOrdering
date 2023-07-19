// named export should import like this
import { CDN_URL } from "../utils/constants"
import { imgOrigin } from "../utils/constants"

const styeCard = {
    backgroundColor: '#f0f0f0'
}


const RestroCard = (props) => {
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = props.resData?.data
    return (
        <div className="restro-card" style={styeCard}>
            <img className='restro-logo' src={imgOrigin + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(' | ')}</h4>
            <h4> {avgRating} Stars</h4>
            <h4>{deliveryTime} Minutes</h4>

        </div>
    )
}

export default RestroCard;