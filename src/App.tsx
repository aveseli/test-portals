import React from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";
import AppPortal from "./util/AppPortal";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function App() {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Box my={4}>
                    <SearchForm />
                </Box>
            </Container>
            <AppPortal elementId="part_two">
                <Container maxWidth="sm">
                    <Box my={4}>
                        <SearchResults />
                    </Box>
                </Container>
            </AppPortal>
        </React.Fragment>
    );
}

export default App;
