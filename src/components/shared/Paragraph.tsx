interface ParagraphProps {
    children: React.ReactNode
    className?: string,
}

export const Paragragh = ({children, className=""}: ParagraphProps) => {
    return (
          <p className={`text-heading-3 md:text-lg ${className}`}> {children} </p>
        
    )
} 