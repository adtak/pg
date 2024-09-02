import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useAlbums } from "../../hooks/Album";
import { getAlbums } from "../../models/Album";
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
          albums={getAlbums(data)}
          activeAlbumId={activeAlbumId}
          handleChange={handleChange}
        />
        <Box>
          <Card variant="outlined">
            <CardContent>
              <ImageList cols={5}>
                {itemData.map((item) => (
                  <ImageListItem key={item.thumbnailUrl}>
                    <img
                      srcSet={`${item.thumbnailUrl}`}
                      src={`${item.thumbnailUrl}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  }
}

const itemData = [];
