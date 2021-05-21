import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2) 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardactions: {
    marginTop: theme.spacing(-2),
    marginBottom: theme.spacing(-1)
  } 
}));

export default function DishCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.dish.dname[0]}
          </Avatar>
        }
        title={props.dish.dname}
      />
      <CardMedia
        className={classes.media}
        image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        title={props.dish.dname}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.dish.dname} is an impressive perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Typography variant="subtitle1" color="primary" component="p">
          Having {props.dish.dcarb} carbohydrates(g), {props.dish.dprot} protiens(g), {props.dish.dfat} fats(g) and {props.dish.dcal} calories.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardactions} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
