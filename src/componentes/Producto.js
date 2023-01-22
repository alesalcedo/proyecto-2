import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';  
import { AddShoppingCart} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop: '3 rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

function Producto() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Nombre del calzado"
        subheader="September 14, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000"
        alt="Nike LD Wafle Sacai Black"
        title="zapa pa correr"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Zapatillas
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" >
            <AddShoppingCart fontSize='large'/>
        
        </IconButton>
        {Array(4)
        .fill()
        .map((_,i) => (
            <p>&#11088;</p>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          

          <Typography>
            Caracteristicas del producto
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Producto