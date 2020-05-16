import {useLocalStorage} from './useLocalStorage'
import { useEffect } from 'react'

export const useLightMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage('dark', initialValue)
    var test = document.querySelector('body')
    useEffect(() => {
        if (mode){
            test.classList.add('light-mode')
        }else {
            test.classList.remove('light-mode')
        }
    },[mode])
    return [mode, setMode]
}