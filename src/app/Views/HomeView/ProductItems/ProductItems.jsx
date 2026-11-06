import {productItems,items} from '@/app/Views/HomeView/ProductItems/productItems.module.scss';
import { data } from './product';
import { Card } from './Card';

export const ProductItems=()=>{
    console.log(data)
    return (
        <div className={productItems}>
            <h2>Top chexollar</h2>

           <div className={items}>
             {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
            {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
            {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
            {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
            {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
            {data.map((d,index)=>{
                return <Card key={index} data={d}/>
            })}
           </div>
        </div>
    )
}