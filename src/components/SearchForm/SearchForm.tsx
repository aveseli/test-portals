import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NameInput from "../../ui/Form/NameInput/Name";

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
            <TextField id="standard-basic" label="Voname" />
            <TextField id="standard-basic" label="Geburtstag" />
            <TextField id="standard-basic" label="PLZ" />
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
