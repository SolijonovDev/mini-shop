import {container} from '@/Components/Container/Container.module.scss'

export const Container =({children})=>{
    return <div className={container}>
        {children}
    </div>
}