import { Tab, Tabs } from "@mui/material";
import type { Album } from "../../models/Album";

type TabsProps = {
  albums: Album[];
  activeAlbumId: number | undefined;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
};

export default function AlbumTabs({
  albums,
  activeAlbumId,
  handleChange,
}: TabsProps) {
  return (
    <Tabs
      value={activeAlbumId || false}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
    >
      {albums.map((album) => (
        <Tab
          key={album.id}
          value={album.id}
          label={album.title.split(" ")[0]}
        />
      ))}
    </Tabs>
  );
}
