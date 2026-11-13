'use client';
import { SeparateNumberFormat } from '@/helpers/separate-number';
import {aside,prices,go_to_uzum,lineThrought,shareBtn, infos} from '@/Views/ProductView/Aside/aside.module.scss';
import { FaShareAlt } from "react-icons/fa";

export const Aside=({price,go_uzum})=>{

    const handleShare=async ()=>{
        const shareData = {
         title: "test",
        text: "hi",
        // url: 'https://shoptime.uz' + (router.locale === 'uz' ? '' : '/ru') + router.asPath,
        url:'https://shoptime.uz/',
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
                <p>O‘zbekiston bo‘ylab bepul yetkazib berish.</p>
            </div>
        </div>
    )
}