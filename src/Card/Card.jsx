import './Card.css'
import { Link } from 'react-router-dom';

export const Card = ({ title, price, adress, date, img, id }) => {
    return (
        <Link to={`/product/${id}`} className="card-link"> 
            <div className="content-main_list-item-img">
                <img src={`${img}`} alt="cart-img" />
            </div>
            <h5 className="content-main_list-item-title">
                {title}
            </h5>
            <strong className="content-main_list-item-price">
                {price}
            </strong>
            <div className="content-main_list-item-desc-box">
                <span className="content-main_list-item-desc">
                    {adress}
                </span>
                <span className="content-main_list-item-desc">
                    {date}
                </span>
            </div>
        </Link>
    )
}