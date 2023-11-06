import React, { ReactNode } from 'react'

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: ReactNode;
  variant: "btn_dark_green" | "btn_green";
};

const Button = ({title, icon, type, variant}: ButtonProps) => {
  return (
    <button 
    type={type}
    className={`flexCenter gap-3 rounded-lg border ${variant}`}
    >
        {icon}
        <span className='regular-18 whitespace-nowrap'>{title}</span>
    </button>
  )
}

export default Button