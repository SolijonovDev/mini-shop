import { header, header_block, left, right } from '@/app/Components/Header/header.module.scss';
import { Container } from '../Container/Container';
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";

export const Header=()=>{
    return (
        <header className={header}>
            <Container>
               <div className={header_block}>
                <div className={left}>
                  <h2>Shop time</h2>
                  {/* <input className={search}/> */}
                </div>
                <div className={right}>
                    <button>
                        <MdFavoriteBorder size={18}/>
                    </button>
                    <button>
                        <CgProfile size={18}/>
                    </button>
                </div>
               </div>
            </Container>
        </header>
    )
}