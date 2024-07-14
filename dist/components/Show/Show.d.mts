import { PropsWithChildren, ReactNode } from 'react';

interface ShowProps {
}
interface ChildProps {
    isTrue?: boolean;
}
declare const Show: {
    ({ children }: PropsWithChildren<ShowProps>): null;
    When({ children, isTrue }: PropsWithChildren<ChildProps>): ReactNode;
    Else({ children, render }: PropsWithChildren<ChildProps & {
        render?: ReactNode;
    }>): ReactNode;
};

export { Show as default };
