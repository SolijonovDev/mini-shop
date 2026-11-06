import {footer,footer_block } from '@/app/Components/Footer/footer.module.scss';
import { Container } from '../Container/Container';

export const Footer=()=>{
    return (
        <footer className={footer}>
            <Container>
                <div className={footer_block}>
                    <h2>Footer</h2>
                    <p>Barcha xuquqlar himoyalangan.</p>
                </div>
            </Container>
        </footer>
    )
}