import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

var APIcall = require("../../congfiguration/BookStoreCallAPI");
var ListBook = require("/home/admin1/Desktop/addBook/eBookStoreUi/src/component/dashboard/listOfBooks.jsx");
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TITLE: "",
      AUTHOR: "",
      YEAR: "",
      RATING: "",
      PRICE: "",
      DESCRIPTION: "",
      FILE: "",
      IMAGEPATH: null,
      COUNT: 0,
      BOOKDATA: []
    };
  }

  componentWillMount() {
    APIcall.getAllBooks()
      .then(res => {
        console.log("in sadhboard========>", res.data[0]);
        this.setState({ COUNT: res.data.length });
        this.setState({ BOOKDATA: res.data });
        for (var i = 0; i < res.data.length; i++) {
          this.setState({
            TITLE: res.data[i].TITLE,
            AUTHOR: res.data[i].AUTHOR,
            PRICE: res.data[i].PRICE,
            IMAGEPATH: res.data[i].IMAGEPATH,
            DESCRIPTION: res.data[i].DESCRIPTION
          });
        }
      })
      .catch(err => {
        console.log("err while submitting--> ", err);
      });
  }

  render() {
    return (
      <div>
        <Card
          style={{ maxWidth: 180, height: 290, marginLeft: 90, marginTop: 50 }}
        >
          <CardActionArea>
            <Tooltip title={this.state.DESCRIPTION} arrow>
              <CardMedia
                style={{
                  marginTop: 5,
                  height: 140,
                  width: 100,
                  marginLeft: 40
                }}
                src={this.state.IMAGEPATH}
                // alt = {"IMAGEPATH"}
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
                {this.state.TITLE}
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
                {this.state.AUTHOR}
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
                {this.state.PRICE}
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
      </div>
    );
  }
}

export default dashboard;
