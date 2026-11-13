'use client'
import { SeparateNumberFormat } from '@/helpers/separate-number';
import {card, card_info,sold, star,price,comment} from '@/Components/ProductItems/Card.module.scss';
import { FaStar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export const Card=({data})=>{
     const router = useRouter();

     const handleNavigation = () => {
    router.push('/products/'+String(data.id));
  }
    return (
        <div className={card} onClick={handleNavigation}>
            <img src={data.imgSrc} alt={data.title} />
            <div className={card_info}>
                <h5>{data.title}</h5>
                <p className={sold}>    
                    <span>
                        <span className={star}>
                            <FaStar color='orange' size={14}/>
                        </span>
                            {data.rating}  
                    (<span className={comment}>
                        <FaComment size={12} color='#666'/>
                    </span> {data.ratingQuantity})
                    </span> 
                    <span>{data.orderQuantity} + sotuv</span> 
                </p>
                <p className={price}>{SeparateNumberFormat(data.price)} so'm</p>
                <a href={data.link} target='_blank' rel="noopener noreferrer">
                   <span> Uzum'da xarid</span>
                    <img src="/uzum-logo.webp" alt="uzum logo" />
                   </a>
            </div>
        </div>
    )
}