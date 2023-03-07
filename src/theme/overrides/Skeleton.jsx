// ----------------------------------------------------------------------

export default function Skeleton(theme) {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500_16],
        },
      },
    },
  };
}
