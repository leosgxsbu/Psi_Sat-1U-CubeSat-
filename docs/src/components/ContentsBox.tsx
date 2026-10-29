type Item = { id: string; label: string };

export function ContentsBox({ items }: { items: Item[] }) {
  return (
    <aside className="mb-8 border border-line bg-paper-soft p-4 text-sm md:sticky md:top-24">
      <p className="font-semibold text-ink">Contents</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
