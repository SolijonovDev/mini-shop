import { SeparateNumberFormat } from '@/helpers/separate-number';
import { shops,item, logo,item_left,item_info, rating,go_icon,shops_block } from '@/Views/HomeView/Shops/shops.module.scss';
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

export const Shops=()=>{
    return (
        <div className={shops}>
            <h2>Uzum marketda Bizning do'konlar</h2>
          <div className={shops_block}>
             <div className={item}>
                <div className={item_left}>
                  <div className={logo}>
                     <span>F</span>
                  </div>
                <div className={item_info}>
                    <h4>Family-shop</h4>
                        <span className={rating}><FaStar color='orange' size={14}/> 4.8</span> <span>{SeparateNumberFormat(43000)}+ zakaz</span>
                </div>
           </div>
              <a className={go_icon} href='https://uzum.uz/uz/shop/fyshop' target='_blank'><MdNavigateNext size={22}/></a>
           </div>
              <div className={item}>
           <div className={item_left}>
             <div className={logo}>
                <span>SH</span>
            </div>
            <div className={item_info}>
                <h4>Shop time</h4>
                    <span className={rating}><FaStar color='orange' size={14}/> 4.9</span> <span>{SeparateNumberFormat(20000)}+ zakaz</span>
            </div>
           </div>
            <a href='https://uzum.uz/uz/shop/shop-time' target='_blank' className={go_icon}><MdNavigateNext size={22}/></a>
           </div>
          </div>
        </div>
    )
}