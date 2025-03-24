import { ProjectInfoProp } from "./types";
import rssSeaSaltsDesk from "../public/images/red-stick-spice/sea-salts-desktop.png"
import rssSeaSaltsMob from "../public/images/red-stick-spice/sea-salts-mob.png"
import rss10Off from "../public/images/red-stick-spice/rss-10-off.png"
import rssFleurDeSel from "../public/images/red-stick-spice/rss-fluer-de-sel.png"
import rssGourmetFeast from "../public/images/red-stick-spice/rss-gourmet-feast.png"
import captureDesktop from "@/public/images/capture/capture-desktop.png"
import captureMob from "@/public/images/capture/capture-mob.png"
import captureDesign from "@/public/images/capture/capture-design.png"
import linguaProUpdateDesk from '@/public/images/lingua/lingua-pro-update-desk.png'
import linguaPUpdateDesk from '@/public/images/lingua/lingua-p-update-desk.png'
import linguaPUpdateMob from '@/public/images/lingua/lingua-p-update-mob.png'


//Empty dataset to show the structure of the content
//optional modules are, well, optional.
//Only use them if the project has that field
//this may be expanded/change as projects grow
//to accomodate landing page and email automation flows
// 13-03-25 optional modules are campaignSeries and modularComp

/* 
    {
      id: 2,
      slug: "",
      title: "",
      tags: [
        {id: 1, tag: ""}, 
        {id: 2, tag: ""}, 
        {id: 3, tag: ""}, 
        {id: 4, tag: ""},
        {id: 5, tag: ""},
      ],
      desc: "",
      projectOverv: {
          challenge: "",
          challengeList: 
              `<li></li>`,
          solution: "",
          solutionList: 
              `<li>Bold, attention-grabbing hero sections with product imagery</li>`
      },
      oriDesign: "",
      htmlImp: "",
      desktopView: "",
      tabView: "",
      mobView: "",
      campaignSeries: [
        {id: 1, img: "", title: "", desc: "",}, 
        {id: 2, img: "", title: "", desc: "",}, 
        {id: 3, img: "", title: "", desc: "",}, 
        {id: 4, img: "", title: "", desc: "",},
      ],
      modularComp: {
        headerComps: [
          { id: 1, comp: ""},
          { id: 2, comp: ""},
          { id: 3, comp: ""},
        ],
        contentComps: [
          { id: 1, comp: ""},
          { id: 2, comp: ""},
          { id: 3, comp: ""},
        ],
        footerComps: [
          { id: 1, comp: ""},
          { id: 2, comp: ""},
          { id: 3, comp: ""},
        ],
        code: ``,
      },
      gmail: "",
      outlook: "",
      apple: "",
      alltest: "",
      ctaTitle: "",
      ctaCopy: ""
  },

*/

export const emailProjectData: ProjectInfoProp[] = [
    // {
    //     id: 1,
    //     slug: "e-commerce-seasonal-campaign",
    //     title: "E-commerce seasonal campaign",
    //     tags: [
    //       {id: 1, tag: "Responsive"}, 
    //       {id: 2, tag: "Dark Mode"}, 
    //       {id: 3, tag: "MJML"}, 
    //       {id: 4, tag: "Interactive"},
    //     ],
    //     desc: "A responsive promotional email campaign for a major retail client, featuring dynamic content, dark mode support, and interactive elements with robust fallbacks.",
    //     projectOverv: {
    //         challenge: "Create a visually rich promotional email that maintains design integrity across all major email clients while implementing interactive elements where supported.",
    //         challengeList: `<li>Support for 40+ email clients including Outlook 2007-2019</li>
    //             <li>Mobile-responsive design with text size adjustments</li>
    //             <li>Dark mode compatibility</li>
    //             <li>Interactive product carousel with fallbacks</li>`,
    //         solution: "I developed a hybrid approach using MJML for the base structure while implementing custom code for critical sections requiring specific client support.",
    //         solutionList: `<li>Table-based layout with responsive breakpoints</li>
    //             <li>VML for Outlook background images</li>
    //             <li>CSS targeting for dark mode adjustments</li>
    //             <li>Progressive enhancement for interactive elements</li>`
    //     },
    //     oriDesign: rssSeaSaltsDesk,
    //     htmlImp: rssSeaSaltsDesk,
    //     desktopView: rssSeaSaltsDesk,
    //     tabView: rssSeaSaltsDesk,
    //     mobView: rssSeaSaltsDesk,
    //     gmail: rssSeaSaltsDesk,
    //     outlook: rssSeaSaltsDesk,
    //     apple: rssSeaSaltsDesk,
    //     alltest: "",
    //     ctaTitle: "Need similar results for your email campaigns?",
    //     ctaCopy: "I can help you create responsive, accessible HTML emails that look great across all major email clients."
    // },

    {
      id: 1,
      slug: "rss-promotional-email-suite",
      title: "Promotional email suite for Red Stick Spice.",
      keywords: "",
      tags: [
        {id: 1, tag: "Responsive"}, 
        {id: 2, tag: "Vibrant Design"}, 
        {id: 3, tag: "MJML"}, 
        {id: 4, tag: "Product Showcase"},
        {id: 5, tag: "Campaign Series"},
      ],
      desc: "A series of vibrant and engaging email templates for Red Stick Spice Co., containing 4 emails and focusing on promoting their premium spice products. The goal was to create visually appealing, user-friendly designs that effectively communicate the brand's message and drive customer engagement.",
      projectOverv: {
          challenge: "Create a cohesive series of promotional emails that would showcase Red Stick Spice Co.'s premium products while maintaining their artisanal brand identity and driving sales through visually compelling content.",
          challengeList: 
              `<li>Showcase product photography in an appetizing way</li>
              <li>Create a consistent yet unique design for each campaign</li>
              <li>Ensure mobile responsiveness across all email clients</li>
              <li>Incorporate clear calls-to-action to drive conversions</li>
              <li>Maintain brand voice while creating excitement for promotions</li>`,
          solution: "I developed a series of four distinct yet cohesive email templates, each featuring striking hero images, bold headlines, and carefully structured content to highlight product features and promotional offers.",
          solutionList: 
              `<li>Bold, attention-grabbing hero sections with product imagery</li>
              <li>Strategic color palette aligned with brand guidelines</li>
              <li>Clear typography hierarchy for scanning readability</li>
              <li>Modular content blocks for featured products</li>
              <li>Custom CTA buttons optimized for click-through rates</li>`
      },
      desktopView: rssSeaSaltsDesk,
      tabView: rssSeaSaltsDesk,
      mobView: rssSeaSaltsMob,
      campaignSeries: [
        {id: 1, title: "Email 1", desc: "This email entices new email subscribers to take advantage of the 10% off promo to shop their favorite luxurious seal salt.", img: rss10Off}, 
        {id: 2, title: "Email 2", desc: "This email invites subscribers to check out the store's collection of sea salts.", img: rssGourmetFeast}, 
        {id: 3, title: "Email 3", desc: "This email builds on the previous one and takes a step further by introducing the Fleur De Sel (Flor de sal).", img: rssFleurDeSel}, 
        {id: 4, title: `Email 4`, desc: "This email introduces Red Stick Spice's entire sea salt collection, providing information about each one.", img: rssSeaSaltsDesk},
      ],
      gmail: rssSeaSaltsDesk,
      outlook: rssSeaSaltsDesk,
      apple: rssSeaSaltsDesk,
      alltest: "",
      ctaTitle: "Need engaging promotional emails for your products?",
      ctaCopy: "I can help you create visually stunning, high-converting email campaigns that showcase your products and drive customer engagement."
    },

    {
      id: 2,
      slug: "welcome-email-template-for-capture",
      title: "Welcome email template for Capture.",
      keywords: "",
      tags: [
        {id: 1, tag: "Multi-client support"}, 
        {id: 2, tag: "MJML"}, 
        {id: 3, tag: "Onboarding"}, 
        {id: 4, tag: "Transactional email"},
      ],
      desc: "The Capture Welcome Email is designed to onboard new users to the Capture Digital Photography Collection. The email introduces users to the platform, sets expectations for upcoming communications, and encourages engagement through a clear CTA.",
      url: "https://josepholuolofinte.github.io/capture-welcome-email/",
      projectOverv: {
          challenge: "As a photography platform, Capture wanted an engaging welcome email that:",
          challengeList: 
              `
              <li>Introduces new users to the platform in a visually appealing way.</li>
              <li>Ensures brand consistency across desktop and mobile devices.</li>
              <li>Encourages immediate engagement with a clear CTA.</li>
              <li>Promotes the Capture app to drive downloads.</li>
              <li>Maintains accessibility and readability across different devices.</li>
              `,
          solution: "To address these challenges, I built the email with:",
          solutionList: 
              `
              <li>A visually rich hero section that aligns with Capture&apos;s branding.</li>
              <li>Mobile-first responsive design ensuring seamless viewing on all devices.</li>
              <li>A prominent CTA button placed strategically to maximize conversions.</li>
              <li>App store badges to enhance visibility and encourage downloads.</li>
              <li>Well-structured HTML & CSS for proper rendering across email clients.</li>
              `
      },
      oriDesign: captureDesign,
      htmlImp: captureDesktop,
      desktopView: captureDesktop,
      tabView: captureDesktop,
      mobView: captureMob,
      gmail: captureDesktop,
      outlook: captureDesktop,
      apple: captureDesktop,
      alltest: "",
      ctaTitle: "Need email templates with engaging, responsive designs?",
      ctaCopy: "With a proven track record in crafting effective email templates, I'm here to bring your vision to life."
    },

    {
      id: 3,
      slug: "linguaproofer-transactional-email-suite",
      title: "Transactional email suite for Linguaproofer.",
      keywords: "",
      tags: [
        {id: 1, tag: "Responsive"}, 
        {id: 2, tag: "Vibrant Design"}, 
        {id: 3, tag: "Multi-Client Support"}, 
        {id: 4, tag: "Transactional"},
      ],
      desc: "A comprehensive transactional email template system for Linguaproofer, a professional proofreading and translation service. The suite includes two responsive templates that help improve communication with the agency's clients.",
      projectOverv: {
          challenge: "A small translation and proofreading agency needed a way to keep their clients informed and payments running smoothly without unnecessary delays or back-and-forth emails. Their biggest concerns were:",
          challengeList: 
              `<li>Avoiding payment disruptions</li>
              <li>Keeping clients in the loop</li>
              <li>Maintaining a professional image</li>
              <li>Making emails easy to understand</li>
              <li>Ensuring mobile-friendliness</li>`,
          solution: "To solve these problems, I created a transactional email suite consisting of two essential emails:",
          solutionList: 
              `<li><b>Payment Update Reminder </b> – A polite, easy-to-follow email that notifies clients when their payment details need updating, helping to avoid service interruptions.</li>
              <li><b>Project Confirmation Email </b> – A reassuring email that confirms the agency has received a client’s project and outlines the next steps, keeping them informed from the start.</li>
              `
      },
      desktopView: linguaPUpdateDesk,
      tabView: linguaPUpdateDesk,
      mobView: linguaPUpdateMob,
      campaignSeries: [
        {id: 1, title: "Email 1", desc: "This email notifies clients when their payment details need updating.", img: linguaPUpdateDesk}, 
        {id: 2, title: "Email 2", desc: "This email confirms the agency has received a client’s project and outlines the next steps.", img: linguaProUpdateDesk}, 
      ],
      gmail: linguaProUpdateDesk,
      outlook: linguaProUpdateDesk,
      apple: linguaProUpdateDesk,
      alltest: "",
      ctaTitle: "Need engaging promotional emails for your products?",
      ctaCopy: "I can help you create visually stunning, high-converting email campaigns that showcase your products and drive customer engagement."
    },

]