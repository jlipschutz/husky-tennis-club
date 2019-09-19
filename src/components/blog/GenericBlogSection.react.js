import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
              {props.blogSectionData.date}
            </div>
            {props.blogSectionData.linkAvailable &&
              <Link href={props.blogSectionData.link}>
                Learn More
              </Link>
            }

          </CardActions>
        </Card>
      </div>
    );
}
/*
<Button size="small" color="primary" href={props.blogSectionData.link}>
  Learn More
</Button>
*/
