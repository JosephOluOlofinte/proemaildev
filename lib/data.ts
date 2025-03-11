import { ProjectInfoProp } from "./types";

export const projectData: ProjectInfoProp[] = [
    {
        id: 1,
        slug: "e-commerce-seasonal-campaign",
        title: "E-commerce seasonal campaign",
        tags: [
          {id: 1, tag: "Responsive"}, 
          {id: 2, tag: "Dark Mode"}, 
          {id: 3, tag: "MJML"}, 
          {id: 4, tag: "Interactive"},
        ],
        desc: "A responsive promotional email campaign for a major retail client, featuring dynamic content, dark mode support, and interactive elements with robust fallbacks.",
        projectOverv: {
            challenge: "Create a visually rich promotional email that maintains design integrity across all major email clients while implementing interactive elements where supported.",
            challengeList: `<li>Support for 40+ email clients including Outlook 2007-2019</li>
                <li>Mobile-responsive design with text size adjustments</li>
                <li>Dark mode compatibility</li>
                <li>Interactive product carousel with fallbacks</li>`,
            solution: "I developed a hybrid approach using MJML for the base structure while implementing custom code for critical sections requiring specific client support.",
            solutionList: `<li>Table-based layout with responsive breakpoints</li>
                <li>VML for Outlook background images</li>
                <li>CSS targeting for dark mode adjustments</li>
                <li>Progressive enhancement for interactive elements</li>`
        },
        oriDesign: "",
        htmlImp: "",
        desktopView: "",
        tabView: "",
        mobView: "",
        gmail: "",
        outlook: "",
        apple: "",
        alltest: "",
        ctaTitle: "Need similar results for your email campaigns?",
        ctaCopy: "I can help you create responsive, accessible HTML emails that look great across all major email clients."
    },

]