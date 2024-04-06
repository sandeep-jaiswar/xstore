'use client';

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import type { BaseErrorBoundaryProps, LogError } from './index.types';
import GenericError from '../GenericError';
import type { ErrorInfo } from "react";

const logError: LogError = (errorMessage, error, errorInfo) => {
    console.log(`${errorMessage} - ${error.message}`, { errorInfo }, false);
};

const EnhancedErrorBoundary = ({
    children,
    errorMessage,
}: BaseErrorBoundaryProps) => {
    
    const catchError = (errorObject: Error, errorInfo: ErrorInfo) => {
        logError(errorMessage, errorObject, JSON.stringify(errorInfo));
    };
    
    return (
        <ReactErrorBoundary
            fallback={<GenericError/>}
            onError={catchError}
        >
            {children}
        </ReactErrorBoundary>
    );
}

EnhancedErrorBoundary.displayName = 'EnhancedErrorBoundary';
export { EnhancedErrorBoundary as ErrorBoundary };
export type { LogError, BaseErrorBoundaryProps };
