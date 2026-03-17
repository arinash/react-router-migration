import type { ReactNode } from 'react';
import '../styles/layout.scss';

export interface SectionProps {
    children: ReactNode;
    className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
    return <section className={'kto-layout-section' + ' ' + className}>
        {children}
    </section>
}

export function Container({ children }: { children: ReactNode }) {
    return <div className="kto-layout-container">
        {children}
    </div>
}