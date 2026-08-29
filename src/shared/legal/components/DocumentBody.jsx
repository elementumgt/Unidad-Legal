import { Box, Typography } from "@mui/material";

function Block({ block, language }) {
  if (block.type === "list") {
    return (
      <Box component="ul" className="legal-list my-4 space-y-3 pl-6">
        {block.items[language].map((item) => <Typography component="li" color="text.secondary" key={item}>{item}</Typography>)}
      </Box>
    );
  }

  if (block.type === "subtitle") {
    return (
      <div className="mt-5">
        <Typography component="h3" variant="subtitle1" className="!font-bold">{block.title[language]}</Typography>
        <Typography color="text.secondary" className="mt-1 !leading-7">{block.text[language]}</Typography>
      </div>
    );
  }

  return <Typography color="text.secondary" className="mt-4 first:mt-0 !leading-7">{block.text[language]}</Typography>;
}

export default function DocumentBody({ language, sections }) {
  return (
    <div>
      {sections.map((section) => (
        <Box component="section" className="legal-section scroll-mt-28 py-8 first:pt-0 last:pb-0" id={section.id} key={section.id}>
          <Typography component="h2" variant="h5" className="!mb-4 !font-extrabold">{section.title[language]}</Typography>
          {section.blocks.map((block, index) => <Block block={block} language={language} key={`${section.id}-${block.type}-${index}`} />)}
        </Box>
      ))}
    </div>
  );
}
