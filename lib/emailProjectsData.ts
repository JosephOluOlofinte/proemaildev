import { ProjectInfoProp } from "./types";
import rssSeaSaltsDesk from "../public/images/red-stick-spice/sea-salts-desktop.png"
import rssSeaSaltsMob from "../public/images/red-stick-spice/sea-salts-mob.png"
import rss10Off from "../public/images/red-stick-spice/rss-10-off.png"
import rssFleurDeSel from "../public/images/red-stick-spice/rss-fluer-de-sel.png"
import rssGourmetFeast from "../public/images/red-stick-spice/rss-gourmet-feast.png"

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
        oriDesign: rssSeaSaltsDesk,
        htmlImp: rssSeaSaltsDesk,
        desktopView: rssSeaSaltsDesk,
        tabView: rssSeaSaltsDesk,
        mobView: rssSeaSaltsDesk,
        gmail: rssSeaSaltsDesk,
        outlook: rssSeaSaltsDesk,
        apple: rssSeaSaltsDesk,
        alltest: "",
        ctaTitle: "Need similar results for your email campaigns?",
        ctaCopy: "I can help you create responsive, accessible HTML emails that look great across all major email clients."
    },

    {
      id: 2,
      slug: "rss-promotional-email-suite",
      title: "Red Stick Spice Co. Promotional Email Suite",
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

]