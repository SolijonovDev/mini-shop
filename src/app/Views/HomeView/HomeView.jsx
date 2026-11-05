import { Container } from '@/app/Components/Container/Container';
import { Header } from '@/app/Components/Header/Header';
import {home} from '@/app/Views/HomeView/HomeView.module.scss';
import {data} from '@/app/Views/HomeView/data';

export const HomeView=()=>{
    return (
        <div className={home}>
            <Container>
                <div>
                    <h2>Shop time</h2> 
                         {/* {data.map(d=>{
                          return <p key={d.id}>{d.name}</p>
                 })} */}
                </div>
            </Container>
        </div>
    )
}