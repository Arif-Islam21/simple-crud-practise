import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function MangoCard({ mango, setMango, mangos }) {
  // const handleUpdateMango = (id) => {
  //   fetch(`http://localhost:5000/mangoData/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(mango),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/mangoData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = mangos.filter((oneMango) => oneMango._id !== id);
        setMango(remaining);
      });
  };

  // console.log(mango);
  const { _id, mangoLink, mangoName, mangoPlace, mangoType } = mango;
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
      <CardActions className="flex justify-around">
        <Link to={`/updateMango/${_id}`}>
          <Button size="small" color="primary">
            Update
          </Button>
        </Link>
        <Button onClick={() => handleDelete(_id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
