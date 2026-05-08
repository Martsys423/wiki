import { fieldNotesData } from '../../data/mockData';

export default function FieldNotes() {
  return (
    <section id="field-notes" className="mb-16">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">FIELD NOTES</h2>
      </div>
      <div className="space-y-4">
        {fieldNotesData.map((note, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border border-black bg-white p-4 hover:bg-black hover:text-white cursor-pointer transition-none group">
            <h3 className="text-lg font-mono transition-none mb-2 sm:mb-0">{note.title}</h3>
            <div className="font-mono text-xs text-secondary-text group-hover:text-gray-400">{note.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
