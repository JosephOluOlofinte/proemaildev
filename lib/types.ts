import { StaticImageData } from "next/image";



// type declarations for the button props
export type ButtonVariant = "primary" | "secondary" | "danger" | "whiteBtn" | "greyBtn" | "courseBtn";

export type ButtonSize = "small" | "medium" | "large";

export type Buttontype = "button" | "submit" | "reset"

export type ButtonProps = {
    text?: string; 
    inUrl?: string;
    exUrl?: string;
    variant?: ButtonVariant;
    size?: ButtonSize; 
    type?: Buttontype;
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
  
} & React.ButtonHTMLAttributes<HTMLButtonElement>;



// type declarations for the full project information data
export type Tags = {
    id: number;
    tag: string;
}

export type ProjectOverview = {
    challenge: string;
    challengeList: string;
    solution: string;
    solutionList: string;
}

export type CampaignSeries = {
    id: number;
    title: string;
    desc: string;
    img: StaticImageData | string;
}

export type ModularComps = {
    id: number;
    comp: string;
}

export type ProjectInfoProp = {
    id: number;
    slug: string;
    title: string;
    tags: Tags[];
    desc: string;
    projectOverv: ProjectOverview;
    oriDesign: StaticImageData | string;
    htmlImp: StaticImageData | string;
    desktopView: StaticImageData | string;
    tabView: StaticImageData | string;
    mobView: StaticImageData | string;
    campaignSeries?: CampaignSeries[];
    modularComp?: {
        headerComps: ModularComps[];
        contentComps: ModularComps[];
        footerComps: ModularComps[];
        code: string;
    };
    gmail: StaticImageData | string;
    outlook: StaticImageData | string;
    apple: StaticImageData | string;
    alltest: string;
    ctaTitle: string;
    ctaCopy: string;
}

// type declaration for homepage featured projects and 
// /projects page
export type FeaturedProjectProp = {
    slug: string;
    imgPreview: StaticImageData | string;
    title: string;
    desc: string;
    tags?: Tags[];
    tag1?: string;
    tag2?: string;
    tag3?: string;
}