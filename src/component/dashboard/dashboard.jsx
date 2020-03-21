import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import "../dashboard/dashboard.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState({ open: true });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card
          style={{
            maxWidth: 180,
            height: 270,
            marginLeft: 80,
            marginTop: 20,
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
        >
          <CardActionArea>
            <Tooltip title={this.props.value.DESCRIPTION} arrow>
              <div className="xyz">
                <img
                  className="imagePath"
                  src={this.props.value.IMAGEURL}
                  style={{
                    height: "150px",
                    width: "70%",
                    marginTop: "6%",
                    marginLeft: "15%"
                  }}
                  alt="no Cover"
                />
              </div>
            </Tooltip>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  marginTop: -10,
                  fontSize: 13,
                  marginLeft: 10
                }}
              >
                {this.props.value.TITLE}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "grey",
                  marginTop: -30,
                  fontSize: 10,
                  marginLeft: 10
                }}
              >
                {this.props.value.AUTHOR}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: 10,
                  marginLeft: 10,
                  marginTop: -45
                }}
              >
                {this.props.value.PRICE}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="bookdiv">
            <div className="button1" onClick={this.AddtoBag}>
              <Button
                onClick={this.handleClick}
                style={{
                  border: "none",
                  backgroundColor: "#800000",
                  color: "white",
                  textDecoration: "none",
                  display: "inlineBlock",
                  transitionDuration: 0.4,
                  marginTop: -70,
                  marginTop: -70,
                  width: 80,
                  height: 30,
                  fontSize: "0.60em"
                }}
              >
                Add to Bag
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">Book added successfully</span>}
                action={[
                  <Button
                    key="undo"
                    color="secondary"
                    size="small"
                    onClick={this.handleClose}
                  >
                    UNDO
                  </Button>,
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </div>
            <div className="button2" onClick={this.AddWishList}>
              <Button
                onClick={this.handleClick}
                style={{
                  borderStyle: "solid",
                  borderWidth: "thin",
                  width: 70,
                  height: 30,
                  marginTop: -70,
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: "0.60em"
                }}
              >
                WISHLIST
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">Book added successfully</span>}
                action={[
                  <Button
                    key="undo"
                    color="secondary"
                    size="small"
                    onClick={this.handleClose}
                  >
                    UNDO
                  </Button>,
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                ]}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(dashboard);
