type Buttonprops = {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' 
    disabled?: boolean
}

export const Button = ({children, variant='primary', disabled=false}: Buttonprops) => {
    return (
        <button disabled={disabled}>{children}</button>
    )
}