import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />

      <main className="w-full grid grid-cols-app gap-8 mb-56">
        <Post />
        <Post />
      </main>
    </>
  )
}
