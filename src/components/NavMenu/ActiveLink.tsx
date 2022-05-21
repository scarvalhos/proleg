import { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter();

    let isActive = false

    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if(!shouldMatchExactHref
        && (asPath.startsWith(String(rest.href))
        || (asPath.startsWith(String(rest.as)))
    )) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "gray.50" : 'gray.600',
                _after: isActive ? {
                    content: '" "',
                    display: 'inline-block',
                    width: '150%',
                    height: '1',
                    transform: 'translateX(-15%)',
                    marginBottom: '-2',
                    borderRadius: '2',
                    bgGradient: 'linear(to-r, pink.500, purple.400)'
                } : {
                    content: '" "',
                    display: 'inline-block',
                }
            })}
        </Link>
    )
}
