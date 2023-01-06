import { useContext, createContext, FC, ReactNode, useEffect, useState } from 'react'
import { en } from '../languages/en'
import { ru } from '../languages/ru'
import { LanguageTemplate } from '../languages/template'
import { ua } from '../languages/ua'

interface MainContextProps {
    language: LanguageTemplate
    setLanguage: (language: LanguageTemplate) => void
}

const initialState: MainContextProps = {
    language: ua,
    setLanguage: () => { }
}

export const MainContext = createContext<MainContextProps>(initialState)

interface MainProviderProps {
    children: ReactNode
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageTemplate>(ua)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const langStorage = localStorage.getItem('lang')
            if (langStorage === 'ru') {
                setLanguage(ru)
            } else if (langStorage === 'en') {
                setLanguage(en)
            }
        }
    }, [])

    return (
        <MainContext.Provider
            value={{
                language,
                setLanguage
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export const GlobalContext = () => {
    return useContext(MainContext)
}

export default MainProvider
