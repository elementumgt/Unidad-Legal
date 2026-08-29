import { Box, Typography } from "@mui/material";

function Block({ block, language }) {
  if (block.type === "list") {
    return (
      <Box component="ul" className="legal-list my-4 min-w-0 space-y-3 pl-5 sm:pl-6">
        {block.items[language].map((item) => <Typography component="li" color="text.secondary" className="break-words !leading-7" key={item}>{item}</Typography>)}
      </Box>
    );
  }

  if (block.type === "subtitle") {
    return (
      <div className="mt-5">
        <Typography component="h3" variant="subtitle1" className="break-words !font-bold">{block.title[language]}</Typography>
        <Typography color="text.secondary" className="mt-1 break-words !leading-7">{block.text[language]}</Typography>
      </div>
    );
  }

  return <Typography color="text.secondary" className="mt-4 break-words first:mt-0 !leading-7">{block.text[language]}</Typography>;
}

export default function DocumentBody({ language, sections }) {
  return (
    <div className="min-w-0">
      {sections.map((section) => (
        <Box component="section" className="legal-section scroll-mt-28 py-8 first:pt-0 last:pb-0" id={section.id} key={section.id}>
          <Typography component="h2" variant="h5" className="break-words !mb-4 !font-extrabold !leading-tight">{section.title[language]}</Typography>
          {section.blocks.map((block, index) => <Block block={block} language={language} key={`${section.id}-${block.type}-${index}`} />)}
        </Box>
      ))}
    </div>
  );
}
