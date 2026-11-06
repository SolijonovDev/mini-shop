import {card, card_info,sold} from '@/app/Views/HomeView/ProductItems/Card.module.scss';

export const Card=({data})=>{
    console.log('card component: ',data);
    return (
        <div className={card}>
            <img src={data.imgSrc} alt={data.title} />
            <div className={card_info}>
                <h5>{data.title}</h5>
                <p className={sold}><span>Rating:{data.rating} ({data.ratingQuantity})</span> <span>{data.orderQuantity} + sotuv</span> </p>
                <p>{data.price} so'm</p>
                <a href={data.link} target='_blank'>Uzum marketda xarid qilish</a>
            </div>
        </div>
    )
}