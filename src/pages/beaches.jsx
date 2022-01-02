import React from "react";
import Beaches from "../components/cardList";

const ItemCollection = [
    {
        id: 10001,
        title: "Abhiruchi Restaurant",
        src: "https://pr1.nicelocal.in/z0DBx_17YnHojiZnEp3R7A/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2WnT6H-IJ5xxLWxWvGb6mOKBjyPGwMltr7rYy1R3nPodSnRHc2zy2LyadJ-7memx8Q",
        alt: "Abhiruchi Restaurant",
    },
    {
        id: 10002,
        title: "Dhawat Restaurant",
        alt: "Dhawat Restaurant",
    },
    {
        id: 10003,
        title: "KanakaDurga Restaurant",
        alt: "KanakaDurga Restaurant",
    },
    {
        id: 10004,
        title: "Orange Family Restaurant",
        alt: "Dhawat Restaurant",
    },
    {
        id: 10005,
        title: "Vanamadhuri Restaurant",
        alt: "Vanamadhuri Restaurant",
    },
];

function beaches() {
    return <Beaches collection={ItemCollection} />;
}

export default beaches;
