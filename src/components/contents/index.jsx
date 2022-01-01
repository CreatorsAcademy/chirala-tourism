import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1560009014-7400dda58719",
        title: "Beaches & Resorts",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
        title: "Foods & Drinks",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1555529771-122e5d9f2341",
        title: "Shopping",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
        title: "Entertainment",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1620108094398-f8d5379369c1",
        title: "Must Try",
        author: "Icecream, Panipuri, Badam Milk, CFC",
        cols: 2,
    },
];

function Contents() {
    return (
        <ImageList>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&h=248&h=240&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&h=240&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        /* subtitle={item.author} */
                        actionIcon={
                            <IconButton
                                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Contents;
