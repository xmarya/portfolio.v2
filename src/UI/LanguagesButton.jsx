import { useLanguageContext } from "../helpers/LanguageContext";
import { Button } from "./Button";

export default function LanguagesButton() {
  const { switchLanguage } = useLanguageContext();
  return <Button onClick={switchLanguage}>change direction</Button>;
}
