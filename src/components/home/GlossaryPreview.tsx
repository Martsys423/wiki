import { glossaryTermsData } from '../../data/mockData';

export default function GlossaryPreview() {
  return (
    <section id="glossary" className="mb-8">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">GLOSSARY</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {glossaryTermsData.map((t, i) => (
          <div key={i} className="border-l-2 border-black pl-4">
            <h4 className="font-bold text-sm uppercase mb-1">{t.term}</h4>
            <p className="text-sm text-secondary-text font-mono">{t.def}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
