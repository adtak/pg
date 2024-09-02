import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useAlbums } from "../../hooks/Album";
import AlbumTabs from "../container/AlbumTabs";

export default function Dashboard() {
  const { data, isLoading, activeAlbumId, handleChange } = useAlbums();
  if (isLoading) {
    return (
      <Box sx={{ marginTop: "5rem", textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (data) {
    return (
      <>
        <Typography variant="subtitle1" component="div" sx={{ mt: 2, ml: 1 }}>
          Please select album
        </Typography>
        <AlbumTabs
          albums={data}
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
}
