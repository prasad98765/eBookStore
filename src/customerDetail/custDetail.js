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
import '../customerDetail.css';
import BookImage from '../image/first.jpg';
import Minus from '../image/minus.png';
import Plus from '../image/plus.png';

const styles = theme => ({
    container: {

    },
    radiobutton: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
            justifyContent: "place-around"

        },
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap",
            justifyContent: "place-around"

        },

    },
    textField: {
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%",
            display: "flex",
            justifyContent: "place-around"

        },
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "30%",
    },
    dense: {
        marginTop: "16%",
    },
    menu: {
        width: "25%",
    },
    textArea: {
        [theme.breakpoints.down('sm')]: {
            width: "62%",
            justifyContent: "place-around"
        },

        [theme.breakpoints.down('xs')]: {
            width: "40%",
            display: "flex",
            justifyContent: "place-around"

        },
        width: "62%"
    },
    checked: {

    },

    placeOrderButton: {

        [theme.breakpoints.down('sm')]: {
            width: "50%",
            height: "10%",
            justifyContent: 'left',
            alignContent: 'flex-end',
        },

        [theme.breakpoints.down('xs')]: {
            alignSelf: "Flex-end",
            width: "50%",
            height: "10%",
            justifyContent: 'left',
            alignContent: 'flex-end',
        },

    },

    button: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            justifyContent: 'flex-end',
            justifyContent: "place-around"

        },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: 'flex-end',
            justifyContent: "place-around"
        },
    },
    root: {
        width: "60%",
        marginTop: "10%",
        marginLeft: "20%",
        marginRight: "25%",
        padding: "2%",

    }


});

class OutlinedTextFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            PhoneNumber: '',
            Pincode: '',
            Locality: '',
            Address: '',
            City: '',
            Landmark: '',
            radioValue: '',
            expanded: false,
            button: '',
            placeOrderButton: '',
            CheckOutButton: '',
            bookName: "The Name Jar",
            authorName: "yangsook chai",
            price: 1500,
            count: 1

        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };
    handleChangeName = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangePhoneNumber = PhoneNumber => event => {
        this.setState({
            [PhoneNumber]: event.target.value,
        });
    };
    handleChangePincode = Pincode => event => {
        this.setState({
            [Pincode]: event.target.value,
        });
    };
    handleChangeLocality = Locality => event => {
        this.setState({
            [Locality]: event.target.value,
        });
    };
    handleChangeAddress = Address => event => {
        this.setState({
            [Address]: event.target.value,
        });
    };
    handleChangeCity = City => event => {
        this.setState({
            [City]: event.target.value,
        });
    };
    handleChangeLandmark = Landmar => event => {
        this.setState({
            [Landmar]: event.target.value,
        });
    };
    handleChangeOfRadio = event => {
        this.setState({ radioValue: event.target.value });
    };
    handleChangeContinueButton = nextPanelString => (event, expanded) => {
        this.setState({
            expanded: nextPanelString,

        });

    };
    handleChangePlaceOrder = nextPanelString => (event, expanded) => {
        this.setState({
            expanded: nextPanelString,

        });
    };
    handleChangeCheckOutButton = event => {
        this.setState({ CheckOutButton: event.target.value });
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {

        const { classes } = this.props;
        const { expanded } = this.state;
        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={true} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary >
                        <Typography className={classes.secondaryHeading}> My cart({this.state.count})</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="outerBorder">
                            <div className="cartDetails">
                                <img className="image" src={BookImage} />
                                <div className="cartinfo">
                                    <p className="bookname">{this.state.bookName}</p>
                                    <p className="authorname">by {this.state.authorName}</p>
                                    <p className="p">Rs. {this.state.price}</p>

                                    <img className="plusImg" src={Minus} onClick={this.decrement} />
                                    <input className="inputCount" value={this.state.count}></input>
                                    <img className="plusImg" src={Plus} onClick={this.increment} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "50%", marginLeft: "25%" }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.placeOrderButton}
                                        onClick={this.handleChangePlaceOrder('panel2')}
                                        className={classes.placeOrderButton}>
                                        PlaceOrder
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br></br>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
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
                                onChange={this.handleChangeName('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-name"
                                label="PhoneNo"
                                className={classes.textField}
                                value={this.state.PhoneNumber}
                                onChange={this.handleChangePhoneNumber('PhoneNumber')}
                                margin="normal"
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="Pincode"
                                className={classes.textField}
                                value={this.state.Pincode}
                                onChange={this.handleChangePincode('Pincode')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-name"
                                label="Locality"
                                className={classes.textField}
                                value={this.state.Locality}
                                onChange={this.handleChangeLocality('Locality')}
                                margin="normal"
                                variant="outlined"
                            />
                            <br />
                            <TextareaAutosize
                                className={classes.textArea}
                                aria-label="minimum height"
                                rowsMin={3} rowsMax={3}
                                placeholder="Address"
                                value={this.state.Address}
                                onChange={this.handleChangeAddress('Address')}

                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="City/Town"
                                className={classes.textField}
                                value={this.state.City}
                                onChange={this.handleChangeCity('City')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-name"
                                label="Landmark"
                                className={classes.textField}
                                value={this.state.Landmark}
                                onChange={this.handleChangeLandmark('Landmark')}
                                margin="normal"
                                variant="outlined"
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
                                    className={classes.radiobutton}
                                    label="Home"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Home"}
                                />
                                <FormControlLabel
                                    value="Work"
                                    control={<Radio color="primary" />}
                                    className={classes.radiobutton}
                                    label="Work"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Work"}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio color="primary" />}
                                    className={classes.radiobutton}
                                    label="Other"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === 'other'}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', height: "5%" }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.button}
                                        onClick={this.handleChangeContinueButton('panel3')}
                                        className={classes.button}>
                                        CONTINUE
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br></br>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary ><Typography className={classes.secondaryHeading}>
                        Order Summary
                             </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="outerBorder">
                            <div className="cartDetails">
                                <img className="image" src={BookImage} />
                                <div className="cartinfo">
                                    <p className="bookname">{this.state.bookName}</p>
                                    <p className="authorname">by {this.state.authorName}</p>
                                    <p className="p">Rs. {this.state.price}</p>
                                </div><br />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', height: "5%", marginTop: "25%", marginLeft: "30%" }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.CheckOutButton}
                                        onChange={this.handleChangeCheckOutButton}
                                        className={classes.button}>
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
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










