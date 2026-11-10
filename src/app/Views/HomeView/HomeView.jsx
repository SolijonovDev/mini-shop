import { Container } from '@/app/Components/Container/Container';
import { Header } from '@/app/Components/Header/Header';
import {home} from '@/app/Views/HomeView/HomeView.module.scss';
import { Shops } from './Shops/Shops';
// import { Filtr } from './Filtr/Filtr';
import { Banner } from './Banner/Banner';
import { Info } from './Info/Info';
import { ProductItems } from './ProductItems/ProductItems';

export const HomeView=()=>{
    return (
        <div className={home}>
            <Container>
                  <Banner/>
                  <Shops/>
                  {/* <Filtr/> */}
                  <ProductItems/>
                  {/* <RatingsInUzum/> */}
                  <Info/>
            </Container>
        </div>
    )
}