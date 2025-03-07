



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


export type ProjectOverview = {
    challenge: string;
    challengeList: string;
    solution: string;
    solutionList: string;
}

export type ProjectInfoProp = {
    title: string;
    tags: string[];
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