import { Container } from '@/Components/Container/Container';
import { SeparateNumberFormat } from '@/helpers/separate-number';
import {productOrder,productOrderBlock,go_to_uzum} from '@/Views/ProductView/ProductOrder/productOrder.module.scss';

export const ProductOrder=({price,go_uzum})=>{
    return (
        <div className={productOrder}>
            <Container>
                <div className={productOrderBlock}>
                    <h4>{SeparateNumberFormat(price)} so'm</h4>
                    <a href={go_uzum} target='_blank' className={go_to_uzum}>
                <span> Uzum'da olish</span>
                <img src="/uzum-logo.webp" alt="uzum logo" />
            </a>
                </div>
            </Container>
        </div>
    )
}