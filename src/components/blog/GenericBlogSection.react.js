import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const tennisCourt = require("../../images/tenniscourt.jpg");

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 50,
    marginLeft: "7%",
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
      <div>
        <Card className={classes.card}>
          <CardActionArea>
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
          </CardActionArea>
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
