import './styles.scss';
import { classNames } from '../../utils';
import React from 'react';

type TextProps = {
    children: React.ReactNode
    className?: string
}

export const Text = ({ children, className, }: TextProps) => {
    return (
        <span className={classNames('text', {}, [ className ?? '' ])}>{children}</span>
    );
};