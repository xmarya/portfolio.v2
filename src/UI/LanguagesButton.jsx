import { useLanguageSwitcher } from "../helpers/LanguageSwitcher";
import { Button } from "./Button";

export default function LanguagesButton() {
    const {switchLanguage} = useLanguageSwitcher();
    return (
        <Button onClick={switchLanguage}>change direction</Button>
    )
}

