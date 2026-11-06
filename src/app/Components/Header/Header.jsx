import { header, header_block, left } from '@/app/Components/Header/header.module.scss';
import { Container } from '../Container/Container';

export const Header=()=>{
    return (
        <header className={header}>
            <Container>
               <div className={header_block}>
                <div className={left}>
                  <h2>Shop time</h2>
                  <h3>Bosh sahifa</h3>
                  <h4>Chexollar</h4>
                  <h5>Qidiruv</h5>
                </div>
                <div>Profile</div>
               </div>
            </Container>
        </header>
    )
}