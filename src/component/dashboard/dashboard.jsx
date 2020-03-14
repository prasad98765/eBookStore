import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "/home/admin1/Desktop/Clonedata/displaybooks_ui_dummy/src/book.jpeg";
import Tooltip from "@material-ui/core/Tooltip";

class dashboard extends Component {
  render() {
    return (
      <Card
        style={{ maxWidth: 180, height: 290, marginLeft: 90, marginTop: 50 }}
      >
        <CardActionArea>
          <Tooltip
            title="By default disabled elements like <button> do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.
⚠️      In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper."
            arrow
          >
            <CardMedia
              style={{ marginTop: 5, height: 140, width: 100, marginLeft: 40 }}
              image={image}
            />
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
              Beauty and the Beast
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
              Gabrielle
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
              RS 150
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="bookdiv">
          <div className="button1">
            <Button
              style={{
                border: "none",
                color: "white",
                textDecoration: "none",
                display: "inlineBlock",
                transitionDuration: 0.4,
                width: 80,
                height: 30,
                fontSize: "0.23em"
              }}
            >
              Add to Bag
            </Button>
          </div>
          <div className="button2">
            <Button
              style={{
                width: 70,
                height: 30,
                fontFamily: "Times New Roman",
                color: "black",
                fontSize: "0.27em"
              }}
            >
              Wishlist
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default dashboard;
