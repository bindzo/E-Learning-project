import { Box, Container, Typography, withStyles } from "@material-ui/core";
import React from "react";
import style from "./style";
import Search from './Search'
const Carousel = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Container>
        <Box width={520}>
          <Typography variant='h3' color='textSecondary'>Learn on your schedule</Typography>
          <Box my={2}>
          <Typography variant='h6' color='textSecondary' >
            Study any topic, anytime. Choose from thousands of expert-led
            courses now.
          </Typography>
          </Box>
          <Search />
        </Box>
      </Container>
    </div>
  );
};

export default withStyles(style, { withTheme: true })(Carousel);
