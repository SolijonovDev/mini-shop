import {productSlider} from '@/Views/ProductView/ProductSlider/productSlider.module.scss';

export const ProductSlider=({src})=>{
    return (
        <div className={productSlider}>
            <img src={src}/>
        </div>
    )
}