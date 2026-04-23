export default function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
