function Button({children,onClick,type="button",classname})
{
   return( <button
    type={type}
    onClick={onClick}
    className={classname}
    >{children}</button>
   )
}
export default Button