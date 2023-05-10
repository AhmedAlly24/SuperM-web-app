import clsx from 'clsx'; 

export default function input(props){
const {className,placeholder,required,type='text',...rest}=props;

const classNames =clsx({input:true},className); 

return(
<label className='label'>
{placeholder}
{required && <span className='input-required'></span>}
<div>
<input
type={type}
placeholder={placeholder} 
required={required} 
{...rest}
/>
</div>
</label>
)
}