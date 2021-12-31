import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/header";
import Contents from "./components/contents";

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false}>
                <Box sx={{ /* bgcolor: "#cfe8fc", */ height: "100vh" }}>
                    <Header />
                    <Contents />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;
