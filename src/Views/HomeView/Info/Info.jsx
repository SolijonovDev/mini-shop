import {info,items,item,logo,line,item_text,item_subTitle} from '@/Views/HomeView/Info/info.module.scss';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

export const Info=()=>{
    return (
        <div className={info}>
            <div className={items}>
                <div className={item}>
                   <p className={logo}>
                    <TbTruckDelivery size={32}/>
                   </p>
                   <div className={line}>
                    <h4 className={item_text}>Tez yetkazib berish</h4>
                    <p className={item_subTitle}>1-3 kun ichida</p>
                   </div>
                </div>
                <div className={item}>
                    <p className={logo}>
                        <MdOutlineVerifiedUser size={32}/>
                    </p>
                   <div className={line}>
                    <h4 className={item_text}>Sifat kafolati</h4>
                    <p className={item_subTitle}>Sifatli mahsulotlar</p>
                   </div>
                </div>
                <div className={item}>
                     <p className={logo}>
                        <BiSupport size={32}/>
                     </p>
                   <div className={line}>
                    <h4 className={item_text}>Qo'llab quvvatlash</h4>
                    <p className={item_subTitle}>24/7</p>
                   </div>
                </div>
                <div className={item}>
                     <p className={logo}>
                        <MdOutlineSecurity size={32}/>
                     </p>
                   <div className={line}>
                    <h4 className={item_text}>Uzum marketda xavfsiz xarid</h4>
                    <p className={item_subTitle}>Ishonchli to'lov</p>
                   </div>
                </div>
            </div>
        </div>
    )
}