import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function CardItem(props) {
    const { title, src, alt } = props;
    return (
        <Card
            sx={{
                maxWidth: 345,
                m: 1,
            }}
        >
            <CardMedia component="img" height="140" image={src} alt={alt} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
                <IconButton size="small" color="primary">
                    <ShareOutlinedIcon />
                </IconButton>
                <IconButton size="small" color="primary">
                    <PinDropIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CardItem;
