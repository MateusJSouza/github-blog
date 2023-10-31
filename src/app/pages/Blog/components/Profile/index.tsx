import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'

export function Profile() {
  return (
    <section className="w-full h-[13.25rem] bg-base-profile shadow-sm py-8 px-10 flex rounded-[10px] gap-8 -mt-[5.5rem]">
      <img
        src="https://github.com/MateusJSouza.png"
        alt=""
        className="w-[9.25rem] h-[9.25rem] rounded-lg bg-cover"
      />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center">
          <h1 className="text-base-title text-2xl font-bold leading-[130%]">
            Mateus Jesus
          </h1>

          <ExternalLink text="Github" href="#" />
        </header>

        <span className="text-base leading-[160%] mt-2 text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>

        <ul className="flex items-center gap-6 flex-wrap mt-auto">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            MateusJSouza
          </li>

          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBuilding}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            Devsoft Enterprise
          </li>

          <li className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="w-[1.125rem] h-[1.125rem] text-base-label"
            />
            123 seguidores
          </li>
        </ul>
      </div>
    </section>
  )
}
