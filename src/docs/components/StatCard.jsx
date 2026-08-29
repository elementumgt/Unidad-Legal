import { Paper, Typography } from "@mui/material";

export default function StatCard({ value, label }) {
  return (
    <Paper className="glass-card !rounded-xl !px-4 !py-3" elevation={0}>
      <Typography color="primary" className="!text-2xl !font-black">{value}</Typography>
      <Typography color="text.secondary" className="!text-xs !font-semibold">{label}</Typography>
    </Paper>
  );
}
