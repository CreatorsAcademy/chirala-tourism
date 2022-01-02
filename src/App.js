import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/home";
import Beaches from "./pages/beaches";
import Foods from "./pages/foods";
import Shopping from "./pages/shopping";
import Entertainment from "./pages/entertainment";
import Others from "./pages/others";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/header";

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false}>
                <Box sx={{ /* bgcolor: "#cfe8fc", */ height: "100vh" }}>
                    <Header />
                    <Routes>
                        <Route path="/chirala-tourism" element={<Home />} />
                        <Route path="/beaches" element={<Beaches />} />
                        <Route path="/foods" element={<Foods />} />
                        <Route path="/shopping" element={<Shopping />} />
                        <Route
                            path="/entertainment"
                            element={<Entertainment />}
                        />
                        <Route path="/others" element={<Others />} />
                    </Routes>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;
