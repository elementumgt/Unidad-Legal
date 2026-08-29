import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function DocumentCard({ accent, action, description, href, icon, title }) {
  return (
    <Paper
      component={RouterLink}
      to={href}
      className="glass-card interactive-card flex h-full min-w-0 flex-col items-center text-center !rounded-2xl !p-6 no-underline sm:!p-7 xl:!p-8"
      elevation={0}
      sx={{ color: "text.primary" }}
    >
      <Box className="flex h-12 w-12 items-center justify-center rounded-xl" sx={{ background: `${accent}1F`, border: `1px solid ${accent}40`, color: accent }}>
        {icon}
      </Box>
      <Typography component="h2" variant="h5" className="!mt-6 !font-extrabold !leading-tight">{title}</Typography>
      <Typography color="text.secondary" className="!mt-3 !leading-7">{description}</Typography>
      <Typography color="primary" className="!mt-auto flex items-center justify-center gap-2 !pt-6 !font-bold">{action}<ArrowForwardRounded className="shrink-0" fontSize="small" /></Typography>
    </Paper>
  );
}
