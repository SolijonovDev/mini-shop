import { SeparateNumberFormat } from '@/helpers/separate-number';
import {params,star,sold,plus,models,infos,simpleText} from '@/Views/ProductView/Params/params.module.scss';
import { FaStar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const prm=["Chexol qo'lda sirpanmaydi",
    "Smartfon korpusini mexanik shikastlanish, chizish va ifloslanishdan ishonchli himoya qiladi",
    "Qoplama vaqt o'tishi bilan rangini yo'qotmaydi va to'liq saqlanib qoladi.",
    "U telefoningizni chizishlar va yiqilishlardan samarali himoya qiladi.",
    " iPhone korpusini chizishlardan saqlaydi"
]
export const Params=({title,rating,ratingQuantity,orderQuantity,materialType,})=>{
    return (
        <div className={params}>
            <h1>{title}</h1>
            <div className={star}>
                <FaStar color='orange' size={14}/>
                {rating} (<FaComment size={12} color='#666'/> {ratingQuantity})
            </div>
            <h4 className={sold}><span>{SeparateNumberFormat(orderQuantity)}</span><span className={plus}>+</span>  buyurtma</h4>
            <h4 className={models}>11 dan 17 pro max gacha modullar uchun mavjud</h4>
            {prm.map(t=>{
                return (
                    <div key={t} className={infos}>
                        <GoDotFill size={12}/>
                        <p className={simpleText}>{t}</p>
                    </div>
                )
            })}
        </div>
    )
}