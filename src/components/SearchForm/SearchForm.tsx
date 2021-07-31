import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FirstNameInput from "../../ui/Form/FirstnameInput/FirstName";
import NameInput from "../../ui/Form/NameInput/Name";
import Zip from "../../ui/Form/ZipPlaceInput/Zip";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

function SearchForm() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <NameInput />
            <FirstNameInput />
            <TextField id="standard-basic" label="Geburtstag" />
            <Zip />
            <TextField id="standard-basic" label="Ort" />
            <Button variant="contained" color="secondary">
                Reset
            </Button>
            <Button variant="contained" color="primary">
                Suchen
            </Button>
        </form>
    );
}

export default SearchForm;
