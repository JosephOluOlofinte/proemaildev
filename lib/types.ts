


// type declarations for the button props
export type ButtonVariant = "primary" | "secondary" | "danger" | "whiteBtn" | "greyBtn" | "courseBtn";

export type ButtonSize = "small" | "medium" | "large";

export type Buttontype = "button" | "submit" | "reset"

export type ButtonProps = {
    text?: string; 
    url?: string;
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
    gmail: string;
    outlook: string;
    apple: string;
    alltest: string;
    ctaTitle: string;
    ctaCopy: string;
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