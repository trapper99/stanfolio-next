import emoji from "react-easy-emoji";

export const greetings = {
    name: "Stanley Kariuki",
    title: "Full Stack Engineer",
    description: "I'm a Full Stack Engineer and also a DevOps enthusiast. I specialize in building (and occasionally designing) exceptional websites, mobile applications, and CI/CD pipelines for application deployments and cloud infrastructures.",
    resumeLink: "",
};

export const openSource = {
    githubUserName: "trapper99",
};

export const contact = {};

export const socialLinks = {
    github: "https://github.com/trapper99",
    twitter: "https://twitter.com/Stanley63712089",
    linkedin: "https://www.linkedin.com/in/stanley-kirigo/",
    whatsapp: "https://wa.me/254717501280",
};

export const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/public/lottie/skills/Fullstack-development.json", // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
                emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"),
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html",
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css",
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "logos:python",
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "logos:nodejs-icon",
                },
                {
                    skillName: "VueJS",
                    fontAwesomeClassname: "vscode-icons:file-type-vue",
                },
                {
                    skillName: "Golang",
                    fontAwesomeClassname: "vscode-icons:file-type-go",
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "vscode-icons:file-type-mongo",
                },
                {
                    skillName: "Flutter",
                    fontAwesomeClassname: "logos:flutter",
                },
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: "/public/lottie/skills/Cloud-infra.json", // Path of Lottie Animation JSON File
            skills: [
                emoji("⚡ Experience of working on multiple cloud platforms"),
                emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
                emoji("⚡ Building CI/CD pipelines for automated testing and deployment using Github Actions"),
            ],
            softwareSkills: [
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "logos:docker-icon",
                },
                {
                    skillName: "Kubernetes",
                    fontAwesomeClassname: "logos:kubernetes",
                },
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "logos:aws-amplify",
                },
                {
                    skillName: "Azure",
                    fontAwesomeClassname: "logos:microsoft-azure",
                },
                {
                    skillName: "Heroku",
                    fontAwesomeClassname: "logos:heroku-icon",
                },
                {
                    skillName: "GitHub Actions",
                    fontAwesomeClassname: "logos:github-actions",
                },
                {
                    skillName: "Nginx",
                    fontAwesomeClassname: "logos:nginx",
                },
                {
                    skillName: "Sentry",
                    fontAwesomeClassname: "logos:sentry-icon",
                },
            ],
        },
    ],
};

export const experience = {
    role: "Software Engineer",
    company: "SkillReactor",
    companyLogo: "/public/img/icons/common/skillreactor.jpg",
    date: "Jan 2023 - Present",
    description: "Working on web development projects using ReactJS, NextJS, VueJS, NodeJS, Golang, and Flutter. I am also working on Cloud Infra-Architecture.",
    descBullets: [
        "M"
    ]
}