import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
  };
  
const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "30%"
    },
    dense: {
        marginTop: "16%",
    },
    menu: {
        width: "25%",
    },
    textArea: {
        width: "62%"
    },
    checked: {

    },
    button: {

        justifyContent: "flex-end"
    },
    root: {
        display: "flex",
        width: "60%",
        marginTop: "20%",
        marginLeft: "20%",
        marginRight: "25%",
        padding: "2%"
    }

});

class OutlinedTextFields extends React.Component {
    constructor(props) {
        super(props)
        state = {
            name: null,
            PhoneNumber: null,
            Pincode: null,
            Locality: null,
            Address: null,
            City: null,
            Landmark: null,
            formErrors: {
                name: '',
                PhoneNumber: '',
                Pincode: '',
                Locality: '',
                Address: '',
                City: '',
                Landmark: '',
                radioValue: '',
                expanded: null,
                button: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { name } = e.target.value;
        let formErrors = { ...this.state.formErrors };

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }

    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value,
    //     });
    // };

    // handleChange = PhoneNumber => event => {
    //     this.setState({
    //         [PhoneNumber]: event.target.value,
    //     });
    // };

    // handleChange = Pincode => event => {
    //     this.setState({
    //         [Pincode]: event.target.value,
    //     });
    // };


    // handleChange = Locality => event => {
    //     this.setState({
    //         [Locality]: event.target.value,
    //     });
    // };


    // handleChange = Address => event => {
    //     this.setState({
    //         [Address]: event.target.value,
    //     });
    // };


    // handleChange = City => event => {
    //     this.setState({
    //         [City]: event.target.value,
    //     });
    // };


    // handleChange = Landmar => event => {
    //     this.setState({
    //         [Landmar]: event.target.value,
    //     });
    // };

    // handleChangeOfRadio = event => {
    //     this.setState({ radioValue: event.target.value });
    // };

    // handleChangeButton = event => {
    //     this.setState({ button: event.target.value });
    // };

    // handleChange = panel => (event, expanded) => {
    //     this.setState({
    //         expanded: expanded ? panel : false,
    //     });
    // };

    handleSubmit(e) {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--`);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

    }
    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const { formErrors } = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary >
                        <Typography className={classes.secondaryHeading}>CustomerDetails</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                                name="name"
                            />
                            <TextField
                                id="outlined-name"
                                label="PhoneNo"
                                className={classes.textField}
                                value={this.state.PhoneNumber}
                                onChange={this.handleChange('PhoneNumber')}
                                margin="normal"
                                variant="outlined"
                                name="PhoneNumber"
                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="Pincode"
                                className={classes.textField}
                                value={this.state.Pincode}
                                onChange={this.handleChange('Pincode')}
                                margin="normal"
                                variant="outlined"
                                name="Pincode"
                            />
                            <TextField
                                id="outlined-name"
                                label="Locality"
                                className={classes.textField}
                                value={this.state.Locality}
                                onChange={this.handleChange('Locality')}
                                margin="normal"
                                variant="outlined"
                                name="Locality"
                            />
                            <br />
                            <TextareaAutosize className={classes.textArea} aria-label="minimum height"
                                rowsMin={3} rowsMax={3} placeholder="Address" />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="City/Town"
                                className={classes.textField}
                                value={this.state.City}
                                onChange={this.handleChange('City')}
                                margin="normal"
                                variant="outlined"
                                name="City"
                            />
                            <TextField
                                id="outlined-name"
                                label="Landmark"
                                className={classes.textField}
                                value={this.state.Landmark}
                                onChange={this.handleChange('Landmark')}
                                margin="normal"
                                variant="outlined"
                                name="Landmark"
                            />
                            <br />

                            <div style={{ display: 'flex', }}>
                                <FormLabel >type</FormLabel>
                                <br></br>
                                <br></br>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <FormControlLabel
                                    value="Home"
                                    control={<Radio color="primary" />}
                                    label="Home"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Home"}
                                />
                                <FormControlLabel
                                    value="Work"
                                    control={<Radio color="primary" />}
                                    label="Work"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Work"}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio color="primary" />}
                                    label="Other"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === 'other'}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.button}
                                        onChange={this.handleChangeButton}
                                        className={classes.button}>
                                        CONTINUE
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div >

        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
