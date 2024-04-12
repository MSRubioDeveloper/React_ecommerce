import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

import  "./ProductCard.css";



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Products = {
  id:            number;
  SKU:           string;
  Nombre:        string;
  Stock:         number;
  Imagen:        string;
  Calificacion:  string;
  categorias_id: number;
  ventas_id:     number;
  created_at:    string;
  updated_at:    null;
}

type Props = {
  productos: Products[]
}



export default function ProductCard( {productos}: Props  ) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    <div id='card-container'>
        
      {
        productos.map( producto => {

          return <Card key={ producto.Nombre } sx={{ maxWidth: 345 }} id="card">
          <CardHeader 
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={ producto.Nombre }
            // subheader={  producto. }
          />
          <CardMedia
            component="img"
            height="194"
            image={ producto.Imagen}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Llevate este: { producto.Nombre } - Stock: { producto.Stock }

             
            </Typography>

            <div id='btn-buy-container'>
              <Button id='btn-buy' variant="contained">Comprar</Button>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <StarIcon aria-label="add to favorites">
              <FavoriteIcon /> 
            </StarIcon>
            { producto.Calificacion }
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
               Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Velit, saepe itaque, necessitatibus obcaecati 
               cumque inventore in similique ut adipisci nesciunt 
               amet ratione expedita dolorum ipsa odio natus 
               tempore numquam. Totam!
              </Typography>
    
            </CardContent>
          </Collapse>
                  </Card>

        })
      }

    </div>
  );
}