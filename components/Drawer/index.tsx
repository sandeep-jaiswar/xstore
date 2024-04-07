"use client"

import React, { useState } from 'react';
import type { DrawerProps } from './index.types';
import ClientPortal from '../ClientPortal';
import type { PropsWithChildren } from "react";

const Drawer = ({ isOpen, onClose, children }: DrawerProps & PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <ClientPortal show={isVisible} selector='next__portal'>
            <div
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={handleClose}
            />

            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-lg transform transition-transform ${isVisible ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-full p-4">{children}</div>
            </div>
        </ClientPortal>
    );
};

export default Drawer;
