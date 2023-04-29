import { Button } from '../Button/Button.tsx';
import { AiFillCloseCircle } from 'react-icons/ai';
import { ModalProps } from '../../config';
import './style.scss';

export const Modal = (props: ModalProps) => {
    const { children, isOpen, handleClose, } = props;

    if(!isOpen) {
        return null;
    }

    return (
        <div className='modal'>
            <div className='modal__wrapper'>
                <Button onClick={handleClose} className="modal__close">
                    <AiFillCloseCircle />
                </Button>
                {children}
            </div>
        </div>
    );
};