import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import { cn } from '../utils/cn'

type ExternalLinkProps = ComponentProps<'a'> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function ExternalLink({
  text,
  icon,
  variant,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        'border-none bg-[none] text-brand-blue text-xs uppercase flex items-center gap-2 font-bold transition-colors h-[19px] leading-[19px]',
        'border-b-transparent hover:border-solid border-brand-blue',
        variant === 'iconLeft' && 'flex-row-reverse',
      )}
      {...rest}
    >
      {text}
      {icon ?? (
        <FontAwesomeIcon icon={faUpRightFromSquare} className="w-3 h-3" />
      )}
    </a>
  )
}
