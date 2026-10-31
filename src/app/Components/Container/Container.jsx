import {container} from '@/app/Components/Container/Container.module.scss'

export const Container =({children})=>{
    return <div className={container}>
        {children}
    </div>
}