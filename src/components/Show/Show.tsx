import { Children, isValidElement, PropsWithChildren, ReactElement, ReactNode } from 'react'
import {Nullable} from "../../types/common";


interface ShowProps {}

interface ChildProps {
    isTrue?: boolean
}

const Show = ({ children }: PropsWithChildren<ShowProps>) => {
    let when: Nullable<ReactElement<ChildProps>> = null
    let otherwise: Nullable<ReactElement<ChildProps>> = null

    Children.forEach(children, (child) => {
        if (!isValidElement<ChildProps>(child)) return

        if (!child.props.isTrue) {
            otherwise = child
        } else if (child.props.isTrue && !when) {
            when = child
        }
    })

    return when || otherwise
}

Show.When = ({ children, isTrue }: PropsWithChildren<ChildProps>) => {
    return isTrue && children
}
Show.Else = ({
                 children,
                 render
             }: PropsWithChildren<
    ChildProps & {
    render?: ReactNode
}
>) => {
    return render || children
}

export default Show