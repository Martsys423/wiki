import { fieldNotesData } from '../../data/mockData';

export default function FieldNotes() {
  return (
    <section id="field-notes" className="mb-16">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">FIELD NOTES</h2>
      </div>
      <div className="space-y-4">
        {fieldNotesData.map((note, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border border-black bg-white p-4 hover:bg-black hover:text-white cursor-pointer group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <h3 className="text-lg font-mono mb-2 sm:mb-0">{note.title}</h3>
            <div className="font-mono text-xs text-secondary-text group-hover:text-gray-400">{note.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
