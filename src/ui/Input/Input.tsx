import React from 'react';
import './style.scss';
import { classNames } from '../../utils';

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

type InputProps = {
    onChange?: (value: string) => void;
} & HTMLInputProps

export const Input = (props: InputProps) => {
    const { onChange, className, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, } = e.target;

        onChange?.(value);
    };

    return (
        <input
            onChange={onChangeHandler}
            className={classNames('input', {}, [ className ?? '' ])}
            {...otherProps}
        />
    );
};
