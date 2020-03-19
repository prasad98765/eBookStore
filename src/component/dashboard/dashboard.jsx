import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// import image from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/topbar/img_girl.jpg"

var APIcall = require("../../congfiguration/BookStoreCallAPI");
var ListBook = require('../dashboard/listOfBooks');
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TITLE: this.props.value.TITLE,
      AUTHOR: this.props.value.AUTHOR,
      YEAR: this.props.value.YEAR,
      RATING: this.props.value.RATING,
      PRICE: this.props.value.PRICE,
      DESCRIPTION: this.props.value.DESCRIPTION,
      FILE: "",
      IMAGEPATH: this.props.value.IMAGEURL,
      COUNT: "",
      BOOKDATA: [],
      FACKNAM:"abc"
    };
  }

  wishListClick(event){
    this.setState({FACKNAM: event.target.value})

  }

  AddtoBag(event){
    
  }

  // AddtoBag(){

  // }
  

  // componentWillMount() {
  //   APIcall.getAllBooks().file.path
  //     .then(res => {
  //       console.log("in sadhboard========>", res.data[0]);
  //       this.setState({ COUNT: res.data.length });
  //       this.setState({ BOOKDATA: res.data });
  //       for (var i = 0; i < res.data.length; i++) {
  //         this.setState({
  //           TITLE: res.data[i].TITLE,
  //           AUTHOR: res.data[i].AUTHOR,
  //           PRICE: res.data[i].PRICE,
  //           IMAGEPATH: res.data[i].IMAGEPATH,
  //           DESCRIPTION: res.data[i].DESCRIPTION
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       console.log("err while submitting--> ", err);
  //     });
  // }

  render() {
    console.log(this.state.IMAGEPATH);
    
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
                source={{url:this.state.IMAGEPATH}}
             
              /> 
              {/* <img alt="eq" src={this.state.IMAGEPATH} /> */}
              
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
            <div className="button1" onClick = {this.AddtoBag}>
              <Button
                style={{
                  border: "none",
                  color: "black",
                  textDecoration: "none",
                  display: "inlineBlock",
                  transitionDuration: 0.4,
                  marginTop:-70,marginTop:-70,
                  width: 80,
                  height: 30,
                  fontSize: "0.60em"
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
                  marginTop:-70,
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: "0.60em"
                }} >
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
