import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState<boolean>(true)
  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === '') {
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()
    toast("Wow so easy!")
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">Add a note</span>
        <p className="text-sm leading-6 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none h-[60vh]">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Add note
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">Start <button onClick={handleStartEditor} className="font-medium text-lime-400 hover:underline">recording a note</button> with audio or <button className="font-medium text-lime-400 hover:underline">use text</button></p>
              ) : (
                <textarea
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  autoFocus
                  onChange={handleContentChange}
                >

                </textarea>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
            >
              Save note
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}