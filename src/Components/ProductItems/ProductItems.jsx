import {productItems,items} from '@/Components/ProductItems/productItems.module.scss';
import { data } from './product';
import { Card } from './Card';

export const ProductItems=({text="Top mahsulotlar"})=>{
    return (
        <div className={productItems}>
            <h2>{text}</h2>

           <div className={items}>
             {data.sort((a,b)=>b.prioritet-a.prioritet).map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
           </div>
        </div>
    )
}