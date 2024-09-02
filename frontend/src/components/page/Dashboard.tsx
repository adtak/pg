import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useAlbums } from "../../hooks/Album";
import { usePhoto } from "../../hooks/Photo";
import { getAlbums } from "../../models/Album";
import AlbumTabs from "../container/AlbumTabs";
import PhotoList from "../container/PhotoList";

export default function Dashboard() {
  const { albums, isAlbumsLoading, activeAlbumId, handleChange } = useAlbums();
  const { photos, isPhotosLoading } = usePhoto(activeAlbumId);
  if (isAlbumsLoading) {
    return (
      <Box sx={{ marginTop: "5rem", textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (albums) {
    return (
      <>
        <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
          Please select album
        </Typography>
        <AlbumTabs
          albums={getAlbums(albums)}
          activeAlbumId={activeAlbumId}
          handleChange={handleChange}
        />
        <Box>
          <Card variant="outlined">
            <CardContent>
              <PhotoList photos={photos} isLoading={isPhotosLoading} />
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }
}
