import React from 'react';
import './style.scss';
import { classNames } from '../../utils';

type ButtonProps = {
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    const { children, className, disabled, ...otherProps } = props;

    return (
        <button
            {...otherProps}
            className={
                classNames('button', { 'button-disabled': disabled ?? false, }, [ className ?? '' ])
            }
            disabled={disabled}
        >{children}</button>
    );
};