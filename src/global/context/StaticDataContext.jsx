import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { languageList } from "global/config";
import { getData, setData } from "global/storage";
import { kaLang, enLang } from "global/langs";

export const StaticDataContext = createContext();

export const StaticDataProvider = ({ children }) => {
    let navigate = useNavigate();
    let location = useLocation();
    const [language, setLanguage] = useState(getData('Lang') || languageList[0])
    const [translate, setTranslate] = useState(
        language === 'en' ? enLang : kaLang
    );

    useEffect(() => {
        if (!getData('Lang')) {
            setData('Lang', languageList[0]);
        }
    }, []);

    const changeLanguage = () => {
        let newLang = language === 'en' ? 'ka' : 'en'
        let newUrl = location.pathname.replace(language, newLang) + location.search;
        setLanguage(newLang);
        setData('Lang', newLang)
        navigate(newUrl);
        setTranslate(newLang === 'en' ? enLang : kaLang)
    }

    

    return (
        <StaticDataContext.Provider value={{
            language,
            translate,
            changeLanguage
        }}>
            {children}
        </StaticDataContext.Provider>
    )
}
