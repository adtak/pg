import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import type React from "react";
import { useState } from "react";

export default function Dashboard() {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="All" />
        <Tab label="Dogs" />
        <Tab label="Cats" />
      </Tabs>
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" component="div">
              Please select upload file
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
