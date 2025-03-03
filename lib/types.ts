



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

