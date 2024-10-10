import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

function LanguageSwitcher({ children }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        // documentElement is the html tag.
        if(language === "ar") {
            document.documentElement.classList.add("ar");
            document.documentElement.classList.remove("en");
        }

        else {
            document.documentElement.classList.add("en");
            document.documentElement.classList.remove("ar");
        }
    }, [language]);

    function switchLanguage() {
        setLanguage(current => current === "en" ? "ar" : "en");
    }

    return (
        <LanguageContext.Provider value={{language, switchLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguageSwitcher() {
    const context = useContext(LanguageContext);
    if(context === undefined) throw new Error("useLanguageSwitcher is being used out of its boundries");

    return context;
}

export { LanguageSwitcher, useLanguageSwitcher };
