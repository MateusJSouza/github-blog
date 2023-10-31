import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full h-[18.5rem] bg-header-image bg-cover bg-no-repeat flex items-center justify-center">
      <img src={logoImg} alt="" className="mb-20" />
    </header>
  )
}
