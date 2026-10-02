import { writingItems } from '@/data/writing'
import WritingCard from '@/components/writing/WritingCard'
import Section from '@/components/layout/Section'

export default function WritingSection() {
  return (
    <Section
      id="writing"
      eyebrow="§ 06. WRITING & RESEARCH NOTES"
      title="Technical Breakdowns & Working Papers"
      description="Working technical documents covering socket internals, packet decoding, Linux event loops, and lessons learned from writing systems from scratch."
      accent="red"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {writingItems.map((item) => (
          <WritingCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  )
}
