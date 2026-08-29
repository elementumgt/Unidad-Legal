import { Paper, Typography } from "@mui/material";

export default function GuideCard({ icon, id, title, body }) {
  return (
    <Paper component="section" id={id} className="glass-card flex h-full min-w-0 scroll-mt-5 flex-col !rounded-xl !p-5 sm:!p-6" elevation={0}>
      <div className="mb-3 flex min-w-0 items-start gap-3 text-[var(--mui-palette-primary-main)]">
        <span className="mt-0.5 flex shrink-0">{icon}</span>
        <Typography component="h2" className="!font-extrabold !leading-snug">{title}</Typography>
      </div>
      <Typography color="text.secondary" className="!text-sm !leading-6">{body}</Typography>
    </Paper>
  );
}
