import { Container } from "@/Components/Container/Container"
import { Aside } from "./Aside/Aside"
import { ProductSlider } from "./ProductSlider/ProductSlider"
import { productView,productViewBlock } from '@/Views/ProductView/productView.module.scss'
import { Params } from "./Params/Params"
import { ProductItems } from "@/Components/ProductItems/ProductItems"
import { ProductOrder } from "./ProductOrder/ProductOrder"
import { data } from "@/Components/ProductItems/product"

export const ProductView=async ({params})=>{
    const {id}=await params;
    const currentData=data.find(obj=>obj.id==id);
    return (
        <div className={productView}>
            <Container>
            <div className={productViewBlock}>
                <ProductSlider src={currentData.imgSrc} title='rasm'/>
                <Params {...currentData}/>
                <Aside price={currentData.price} go_uzum={currentData.link}/>
            </div>
                <ProductItems text="O'xshash mahsulotlar"/>
                <ProductOrder price={currentData.price} go_uzum={currentData.link}/>
        </Container>
        </div>
    )
}