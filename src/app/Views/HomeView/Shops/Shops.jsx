import { shops,item, logo,item_left,item_info, go_icon } from '@/app/Views/HomeView/Shops/shops.module.scss';

export const Shops=()=>{
    return (
        <div className={shops}>
           <div className={item}>
           <div className={item_left}>
             <div className={logo}>
                <span>F</span>
            </div>
            <div className={item_info}>
                <h4>Family-shop</h4>
                <div>
                    <span>rating: 4.8</span> <span>43000+ zakaz</span>
                </div>
            </div>
           </div>
            <p className={go_icon}>{">"}</p>
           </div>
              <div className={item}>
           <div className={item_left}>
             <div className={logo}>
                <span>SH</span>
            </div>
            <div className={item_info}>
                <h4>Shop time</h4>
                <div>
                    <span>rating: 4.9</span> <span>19500+ zakaz</span>
                </div>
            </div>
           </div>
             <p className={go_icon}>{">"}</p>
           </div>
        </div>
    )
}