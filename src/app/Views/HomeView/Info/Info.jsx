import {info,items,item,logo,line,item_text,item_subTitle} from '@/app/Views/HomeView/Info/info.module.scss';

export const Info=()=>{
    return (
        <div className={info}>
            <div className={items}>
                <div className={item}>
                   <p className={logo}>Logo</p>
                   <div className={line}>
                    <h4 className={item_text}>Tez yetkazib berish</h4>
                    <p className={item_subTitle}>1-3 kun ichida</p>
                   </div>
                </div>
                <div className={item}>
                      <p className={logo}>Logo</p>
                   <div className={line}>
                    <h4 className={item_text}>Sifat kafolati</h4>
                    <p className={item_subTitle}>Sifatli mahsulotlar</p>
                   </div>
                </div>
                <div className={item}>
                     <p className={logo}>Logo</p>
                   <div className={line}>
                    <h4 className={item_text}>Qo'llab quvvatlash</h4>
                    <p className={item_subTitle}>24/7</p>
                   </div>
                </div>
                <div className={item}>
                     <p className={logo}>Logo</p>
                   <div className={line}>
                    <h4 className={item_text}>Uzum marketda xavfsiz xarid</h4>
                    <p className={item_subTitle}>Ishonchli to'lov</p>
                   </div>
                </div>
            </div>
        </div>
    )
}