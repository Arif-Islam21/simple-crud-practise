import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MangoCard({ mango }) {
  console.log(mango);
  const { mangoLink, mangoName, mangoPlace, mangoType } = mango;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="40"
          image={mangoLink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mangoName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mangoPlace}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {mangoType}
        </Button>
      </CardActions>
    </Card>
  );
}
