import React, { Component } from "react";
import { connect } from "react-redux";
import { getListCourse } from "../../redux/actions/courseActions";
import {
  Container,
  Grid,
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  withStyles,
} from "@material-ui/core";
import wrapper from "../../HOCs/functionWrapper";

import style from "./style";

class HomePage extends Component {
  goToDetail =(id) => () =>{
    this.props.history.push('/detail/' + id);
  }
  renderListCourse = () => {
    return this.props.courseList.map((course, index) => {
      return (
        <Grid item xs={4} md={5} lg={4} key={index}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={course.hinhAnh}
                className={this.props.classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button onClick={this.goToDetail(course.maKhoaHoc)} size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        // <div className="col-3">
        //   <div className="card text-left">
        //     <img className="card-img-top" src={course.hinhAnh} alt />
        //     <div className="card-body">
        //       <h4 className="card-title">Title</h4>
        //       <p className="card-text">Body</p>
        //     </div>
        //   </div>
        // </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Danh Sách Khóa Học</h2>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {this.renderListCourse()}
          </Grid>

          {/* <div className="row">{this.renderListCourse()}</div> */}
        </Container>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.listCourse,
  };
};

export default connect(mapStateToProps)(
  withStyles(style, { withTheme: true })(wrapper(HomePage))
);
