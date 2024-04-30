import React from 'react'
import reactDom from 'react-dom';
type Props = {
    children:React.ReactNode
}
export default function ModalPortal({children}:Props) {
    
    //browser 환경이 아닐때는 처리할 필요 없음
    if(typeof window === undefined){
        return;
    }
    
    const el = document.getElementById('portal') as Element;
    return reactDom.createPortal(children, el);
}
