import { Container } from '@/Components/Container/Container';
// import { Header } from '@/Components/Header/Header';
import {home} from '@/Views/HomeView/HomeView.module.scss';
import { Shops } from './Shops/Shops';
// import { Filtr } from './Filtr/Filtr';
import { Banner } from './Banner/Banner';
import { ProductItems } from '@/Components/ProductItems/ProductItems';
import { Info } from './Info/Info';

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