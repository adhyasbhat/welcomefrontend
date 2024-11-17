function Button({text,onClick,type="button",classname})
{
    <button
    type={type}
    onClick={onClick}
    className={classname}
    >{text}</button>
}
export default Button