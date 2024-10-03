

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
                descriptionTitle: "Overview",
                description: ["I designed the web app with a clean colour palette, using basic tones for text and background, and the brand's colours strategically to highlight key elements. The animations were kept simple and subtle to enhance rather than distract from the content.",
                    "All pages have the same footer containing links to all web app pages, the company's social media accounts, and the logo.",
                    "After collaborating with the client to finalise the design, I built the web app with a focus on functionality and user experience."
                ],

            },
            {
                descriptionTitle: "Home page",
                description: ["The homepage opens with the company's tagline, accompanied by a bold call-to-action button in one of the brand's primary colours.",
                    "Following this, the main services are presented, each paired with an icon for clarity and visual appeal. ",
                    "Company statistics are dynamically displayed through a high-speed counter, leading into an interactive testimonial slider, which can be navigated manually or automatically. The page concludes with a contact form.",
                ],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "Who we are page",
                description: ["This page elaborates on the company's services, structured to provide clear steps for getting started with YosorExp, making the process intuitive for users. ",
                    "The drop-shipping section features smooth transitions of brand colours in the background, complementing the overall design."
                ],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "Partner details page",
                description: ["The Partner Details page highlights the advantages of joining as a partner, with prominent CTA buttons for registration and dashboard access."],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "Seller details page",
                description: ["The Seller Details page explains the benefits of becoming a seller, with a section designed like a step-by-step guide for them to connect their store to the company's system."],
                vidSrc: "vidSrc",
            },
            {
                descriptionTitle: "Responsive design",
                description: ["Every page is designed to be fully responsive, ensuring optimal viewing and interaction across all device types, from desktops to mobile devices."],
                vidSrc: "vidSrc",
            },

        ]
       
    },
];

export default function getProject(id) {

    const project = projects.find(proj => proj.id === id);

    return project;
}