import ProjectDetails from "../sections/ProjectDetails";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { dictionary } from "../data/dictionary";
import { useLanguageContext } from "../helpers/LanguageContext";


export default function Project() {
    const { language } = useLanguageContext();
    const {projectName} = useParams();
    const {meta} = dictionary;

    return (
        <>
            <Helmet>
                <title>Marya Alharbi - YosorExp</title>
                <meta name='description' content={meta.project[language]} />
            </Helmet>

            <ProjectDetails projectName={projectName}/>
        </>
    )
}

