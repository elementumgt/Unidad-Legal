import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import { Alert, Box, Chip, Paper, Typography } from "@mui/material";

export default function CommandCard({ command, language, labels }) {
  return (
    <Paper component="article" id={`command-${command.name}`} className="glass-card scroll-mt-5 overflow-hidden !rounded-2xl" elevation={0}>
      <div className="border-b border-[var(--glass-border)] px-5 py-5 sm:px-6 lg:px-7">
        <div className="grid min-w-0 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(280px,auto)]">
          <div className="min-w-0">
            <Typography component="h3" className="!font-mono !text-2xl !font-black !text-[var(--mui-palette-primary-main)]">/{command.name}</Typography>
            <Typography color="text.secondary" className="!mt-1 !leading-6">{command.summary[language]}</Typography>
          </div>
          <Chip icon={<SecurityRounded />} label={`${labels.access}: ${command.access[language]}`} variant="outlined" className="!h-auto !w-full max-w-full !justify-start !py-1 xl:!w-auto [&_.MuiChip-icon]:!self-start [&_.MuiChip-icon]:!mt-1 [&_.MuiChip-label]:!block [&_.MuiChip-label]:!min-w-0 [&_.MuiChip-label]:!whitespace-normal" />
        </div>
      </div>

      <div className="divide-y divide-[var(--glass-border)]">
        {command.usage.map((usage) => (
          <div className="grid min-w-0 gap-4 px-5 py-5 sm:px-6 md:grid-cols-2 lg:px-7" key={usage.syntax}>
            <div className="min-w-0">
              <Typography color="text.secondary" className="!mb-1 !text-[11px] !font-black !uppercase !tracking-wider">{labels.syntax}</Typography>
              <Box component="code" className="command-code block overflow-x-auto rounded-lg px-3 py-2 font-mono text-sm font-bold">{usage.syntax}</Box>
              <Typography color="text.secondary" className="!mt-2 !text-sm !leading-6">{usage.description[language]}</Typography>
            </div>
            <div className="min-w-0">
              <Typography color="text.secondary" className="!mb-1 !text-[11px] !font-black !uppercase !tracking-wider">{labels.example}</Typography>
              <Box component="code" className="command-example block overflow-x-auto rounded-lg px-3 py-2 font-mono text-sm">{usage.example}</Box>
            </div>
          </div>
        ))}
      </div>

      {command.notes && (
        <Alert severity="info" icon={<CheckCircleRounded />} className="!m-5 !rounded-xl md:!mx-7">
          <strong>{labels.note}:</strong> {command.notes[language]}
        </Alert>
      )}
    </Paper>
  );
}
