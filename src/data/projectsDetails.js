

const projects = [
    {
        id: "yosor-exp",
        name: "YosorExp",
        year: "2023",
        webLink: "https://www.yosorexp.com/?_t=homepage&_a=index",
        githubRepo: "https://github.com/xmarya/YosorExp",
        overview: "",
        details: [
            {
                descriptionTitle: "Home page",
                description: ["Home page"],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "who we are page",
                description: ["who we are page"],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "descriptionTitle",
                description: ["description"],
                vidSrc: "vidSrc",
            },
        ]
       
    },
];

export default function getProject(id) {

    const project = projects.find(proj => proj.id === id);

    return project;
}