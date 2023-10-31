import { Link } from 'react-router-dom'

export function Post() {
  return (
    <Link
      to="/post/1"
      className="w-full h-[16.25rem] rounded-[10px] bg-base-post border-2 border-solid border-base-post p-8 transition-colors hover:border-base-label"
    >
      <div className="flex gap-4 mb-5">
        <strong className="flex-1 leading-[160%] text-xl font-bold text-base-title">
          Javascript data types and structures
        </strong>

        <span className="w-max text-sm leading-[160%] text-base-span">
          Há 1 dia
        </span>
      </div>

      <p className="leading-[160%] text-clip text-base-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </Link>
  )
}
