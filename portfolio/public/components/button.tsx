import styles from '@styles/Home.module.css'
import { ArrowRight } from 'react-feather'
import { useEffect, useState } from 'react';

export const Button: React.FC<{ title: string, href: string, icon?: any, theme?: boolean, args?: any }> = ({ title, href, icon, theme, ...args }) => {
    if(title == "" && icon)
        return <a href={href} style={{ backgroundColor: 'transparent'}}>{icon}</a>

    return theme ? 
        <a href={href} className={styles.headerButton} {...args}>{title}</a>
    : 
        <a href={href} {...args}>{title ? title : ""}{icon ? icon : <ArrowRight size={18} strokeWidth={2}></ArrowRight>}</a>
}

export default Button