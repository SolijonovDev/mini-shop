import { Container } from "@/Components/Container/Container"
import { Aside } from "./Aside/Aside"
import { ProductSlider } from "./ProductSlider/ProductSlider"
import { productView } from '@/Views/ProductView/productView.module.scss'
import { Params } from "./Params/Params"
import { ProductItems } from "@/Components/ProductItems/ProductItems"
import { ProductOrder } from "./ProductOrder/ProductOrder"

const data= {
        id:1000,
        tovarId:2104262,
        title:"Chexol iPhone 11, 12, 13, 14, 15, 16 Pro, Max, Plus uchun",
        price:34990,
        rating:4.8,
        ratingQuantity:901,
        orderQuantity:5500,
        materialType:'silicon',
        shopId:53297,
        link:'https://uzum.uz/ru/product/chekhol-dlya-iphone-2104262?skuId=7528178',
        imgSrc:"https://images.uzum.uz/d4a27huj76ohd6e18470/t_product_540_high.jpg",
        prioritet:9,
    };

export const ProductView=()=>{
    return (
        <Container>
            <div className={productView}>
                <ProductSlider src={data.imgSrc} title='rasm'/>
                <Params {...data}/>
                <Aside price={data.price} go_uzum={data.link}/>
                <ProductItems text="O'xshash mahsulotlar"/>
                <ProductOrder price={data.price} go_uzum={data.link}/>
            </div>
        </Container>
    )
}