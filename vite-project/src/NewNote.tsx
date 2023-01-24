import { NoteForm } from "./NoteForm"
import { NoteData, Tag } from "./App"

export function NewNote() {
    return (
        <>
            <h1 className="mb-4">New Note</h1>
            <NoteForm />
        </>
    )
}