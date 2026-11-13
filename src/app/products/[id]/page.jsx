import { ProductView } from '@/Views/ProductView/ProductView';
import { Suspense } from 'react';

const ProductPage= ({params})=>{
    return (
        <div>
            <Suspense fallback={<p>Loading post...</p>}>
                <ProductView params={params}/>
            </Suspense>
        </div>
    )
}

export default ProductPage;