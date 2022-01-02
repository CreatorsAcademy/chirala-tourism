import React from "react";
import Stack from "@mui/material/Stack";
import Card from "../card";

function CardList(props) {
    const { collection } = props;
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            {collection.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </Stack>
    );
}

export default CardList;
