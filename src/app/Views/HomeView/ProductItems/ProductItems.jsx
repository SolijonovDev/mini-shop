import {productItems,items} from '@/app/Views/HomeView/ProductItems/productItems.module.scss';
import { data } from './product';
import { Card } from './Card';

export const ProductItems=()=>{
    return (
        <div className={productItems}>
            <h2>Top chexollar</h2>

           <div className={items}>
             {data.sort((a,b)=>b.prioritet-a.prioritet).map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
           </div>
        </div>
    )
}