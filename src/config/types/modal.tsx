import React from 'react';

export type ModalProps = {
    isOpen: boolean
    handleClose: () => void
    children: React.ReactNode
}