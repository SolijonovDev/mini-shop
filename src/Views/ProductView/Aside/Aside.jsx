'use client';
import { SeparateNumberFormat } from '@/helpers/separate-number';
import {aside,prices,go_to_uzum,lineThrought,shareBtn, infos} from '@/Views/ProductView/Aside/aside.module.scss';
import { FaShareAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export const Aside=({price,go_uzum})=>{

    const handleShare=async ()=>{
        const shareData = {
         title: "iPhone uchun chexollar",
        text: "11 dan 17 pro maxgacha modellar uchun mavjud",
        // url: 'https://shoptime.uz' + (router.locale === 'uz' ? '' : '/ru') + router.asPath,
        url:'https://shoptime.uz/products/'+1234567,
    };
     await navigator.share(shareData);
    }
    return (
        <div className={aside}>
            <h2 className={lineThrought}>{SeparateNumberFormat(90000)} so'm</h2>
            <h2 className={prices}>{SeparateNumberFormat(price)} so'm</h2>
            <button className={shareBtn} onClick={()=>handleShare()}>
                <span><FaShareAlt /></span>
                <span>Ulashish</span>
                </button>
            <a href={go_uzum} target='_blank' className={go_to_uzum}>
                <span> Uzum'da xarid</span>
                <img src="/uzum-logo.webp" alt="uzum logo" />
            </a>
            <div className={infos}>
                <p>
                    <TbTruckDelivery size={20}/>
                    <span>O‘zbekiston bo‘ylab bepul yetkazib berish.</span></p>
            </div>
        </div>
    )
}