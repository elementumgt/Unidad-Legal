export function validateDocument(document) {
  const ids = document.sections.map((section) => section.id);
  if (new Set(ids).size !== ids.length || document.sections.length < 10) return false;

  return document.sections.every((section) => (
    Boolean(section.title.es)
    && Boolean(section.title.en)
    && section.blocks.length > 0
    && section.blocks.every((block) => {
      const content = block.items ?? block.text;
      return Boolean(content.es) && Boolean(content.en);
    })
  ));
}
