import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const tennisCourt = require("../../images/tenniscourt.jpg");
const style = require("../../style/blogs.module.css");


const useStyles = makeStyles({
  card: {
    marginTop: 50,
  },
  media: {
    height: 140,
  },
  actions: {
    marginRight: 15,
  },
});


export default function GenericBlogCard(props) {
    const classes = useStyles();
    return (
      <div className={style.flexGrow}>
          <Card className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image= {tennisCourt}
                title={props.blogSectionData.imageTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.blogSectionData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.blogSectionData.description}
                </Typography>
              </CardContent>
            </CardContent>
            <CardActions>
              <div>
              <div className = {classes.actions}>
                {props.blogSectionData.date}
              </div>
              {props.blogSectionData.linkAvailable &&
                <Link href={props.blogSectionData.link} target="_blank">
                  Learn More
                </Link>
              }
              </div>
            </CardActions>
          </Card>
      </div>
    );
}
