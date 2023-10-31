export function SearchInput() {
  return (
    <form className="flex flex-col mt-[4.5rem] mb-12">
      <header className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold leading-[160%] text-base-subtitle">
          Publicações
        </h3>

        <span className="text-base leading-[160%] text-base-span">
          6 publicações
        </span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="py-3 px-4 bg-base-input border-base-border border-[1px] rounded-md text-base-label placeholder:text-base-label transition-colors focus:border-brand-blue outline-none"
      />
    </form>
  )
}
