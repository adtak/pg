import { Box, Card, CardContent, Typography } from "@mui/material";
import { useAlbums } from "../../hooks/Album";
import AlbumTabs from "../Container/AlbumTabs";

export default function Dashboard() {
  const { albums, activeAlbumId, handleChange } = useAlbums();
  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
        Please select album
      </Typography>
      <AlbumTabs
        albums={albums}
        activeAlbumId={activeAlbumId}
        handleChange={handleChange}
      />
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" component="div">
              This album id is {activeAlbumId}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
