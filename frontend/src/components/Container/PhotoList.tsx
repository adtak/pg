import { Box, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import type { Photo } from "../../models/Photo";

export default function PhotoList({
  photos,
  isLoading,
}: { photos: Photo[] | undefined; isLoading: boolean }) {
  if (isLoading) {
    return (
      <Box sx={{ marginTop: "1rem", textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (photos) {
    return (
      <ImageList cols={5}>
        {photos.map((photo) => (
          <ImageListItem key={photo.thumbnailUrl}>
            <img
              srcSet={`${photo.thumbnailUrl}`}
              src={`${photo.thumbnailUrl}`}
              alt={photo.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
}
