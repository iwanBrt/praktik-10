import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const MaterialUI = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Material-UI Components
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            This is a simple card component using Material-UI.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Primary
          </Button>
          <Button variant="outlined">
            Outlined Button
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialUI;