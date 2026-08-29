export const bilingual = (es, en) => ({ es, en });
export const paragraph = (es, en) => ({ type: "paragraph", text: bilingual(es, en) });
export const list = (es, en) => ({ type: "list", items: bilingual(es, en) });
export const subtitle = (titleEs, titleEn, textEs, textEn) => ({
  type: "subtitle",
  title: bilingual(titleEs, titleEn),
  text: bilingual(textEs, textEn),
});
