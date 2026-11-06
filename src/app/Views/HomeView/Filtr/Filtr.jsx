"use client"
import {filtr,cliced,noactive} from '@/app/Views/HomeView/Filtr/filtr.module.scss';
import { useState } from 'react';

export const Filtr=()=>{
    const [active,setActive]=useState('all');

    const handleClick=(b)=>{
        setActive(b);
        console.log('active',active)
    }

    return (
        <div className={filtr}>
            <button className={active=='all'? cliced : noactive} onClick={()=>handleClick('all')}>Barchasi</button>
            <button className={active=='silicon'? cliced : noactive} onClick={()=>handleClick('silicon')}>Silicon</button>
            <button className={active=='shaffof'? cliced : noactive} onClick={()=>handleClick('shaffof')}>Shaffof</button>
            <button className={active=='premium'? cliced : noactive} onClick={()=>handleClick('premium')}>Premium</button>
        </div>
    )  
}