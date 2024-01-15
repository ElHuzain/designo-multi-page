import { ReactNode } from 'react';

export default function RootLayout({ children, }: { children: ReactNode }) {
    return (
        <div>
            This is the main layout
            {children}
        </div>
    )
}