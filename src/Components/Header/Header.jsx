'use client'
import { header, header_block, left, right } from '@/Components/Header/header.module.scss';
import { Container } from '../Container/Container';
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { useRouter } from 'next/navigation'

export const Header=()=>{
    const router = useRouter();
    
         const handleNavigation = () => {
        router.push('/');
      }
    return (
        <header className={header}>
            <Container>
               <div className={header_block}>
                <div className={left}>
                  <h2 onClick={handleNavigation}>Shop time</h2>
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