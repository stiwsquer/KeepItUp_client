import React from 'react';
// import { styled } from '@mui/material/styles';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function CardGif({ gifUrl }) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <>
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
      <CardContent>
        <CardMedia
          component="img"
          height="194"
          image={gifUrl}
          alt="Paella dish"
        />
      </CardContent>
      {/* </Collapse> */}
    </>
  );
}
