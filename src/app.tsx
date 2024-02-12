import logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-cardt'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" className="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Search your notes"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-200">Add a note</span>
          <p className="text-sm leading-6 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>

    </div>
  )
}