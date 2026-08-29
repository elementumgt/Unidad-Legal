import { Paper, Typography } from "@mui/material";

export default function GuideCard({ icon, id, title, body }) {
  return (
    <Paper component="section" id={id} className="glass-card scroll-mt-5 !rounded-xl !p-5" elevation={0}>
      <div className="mb-2 flex items-center gap-2 text-[var(--mui-palette-primary-main)]">
        {icon}
        <Typography component="h2" className="!font-extrabold">{title}</Typography>
      </div>
      <Typography color="text.secondary" className="!text-sm !leading-6">{body}</Typography>
    </Paper>
  );
}
