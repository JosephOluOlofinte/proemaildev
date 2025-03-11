


// type declarations for the button props
export type ButtonProps = {
    text?: string; 
    url?: string;
    variant?: "primary" | "secondary" | "danger" | "whiteBtn" | "greyBtn" | "courseBtn";
    size?: "small" | "medium" | "large"; 
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
  
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonVariant = "primary" | "secondary" | "danger" | "whiteBtn" | "greyBtn" | "courseBtn";

export type ButtonSize = "small" | "medium" | "large";


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


export type ProjectInfoProp = {
    id: number;
    slug: string;
    title: string;
    tags: Tags[];
    desc: string;
    projectOverv: ProjectOverview;
    oriDesign: string;
    htmlImp: string;
    desktopView: string;
    tabView: string;
    mobView: string;
    lightMode: string;
    darkMode: string;
    code1: string;
    code2: string;
    gmail: string;
    outlook: string;
    apple: string;
    alltest: string;
}

// type declaration for homepage featured projects and 
// /projects page
export type FeaturedProjectProp = {
    imgPreview: string;
    title: string;
    desc: string;
    tags?: Tags[];
    tag1?: string;
    tag2?: string;
    tag3?: string;
}