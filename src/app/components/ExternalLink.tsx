import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'

type ExternalLinkProps = ComponentProps<'a'> & {
  text: string
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <a
      className="border-none bg-none text-brand-blue text-xs uppercase flex items-center gap-2 font-bold transition-colors border-b-[1px_solid_transparent] h-[19px] leading-[19px] hover:border-brand-blue"
      {...rest}
    >
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} className="w-3 h-3" />
    </a>
  )
}
