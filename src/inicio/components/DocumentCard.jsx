import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function DocumentCard({ accent, action, description, href, icon, title }) {
  return (
    <Paper
      component={RouterLink}
      to={href}
      className="glass-card interactive-card block h-full !rounded-2xl !p-7 no-underline md:!p-8"
      elevation={0}
      sx={{ color: "text.primary" }}
    >
      <Box className="flex h-12 w-12 items-center justify-center rounded-xl" sx={{ background: `${accent}1F`, border: `1px solid ${accent}40`, color: accent }}>
        {icon}
      </Box>
      <Typography component="h2" variant="h5" className="!mt-6 !font-extrabold">{title}</Typography>
      <Typography color="text.secondary" className="!mt-3 !leading-7">{description}</Typography>
      <Typography color="primary" className="!mt-6 flex items-center gap-2 !font-bold">{action}<ArrowForwardRounded fontSize="small" /></Typography>
    </Paper>
  );
}
