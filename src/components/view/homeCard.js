import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const overlayStyle={
    top:'50%',
}
const homeCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    
    >
      <img src={"http://img.wallpaperfolder.com/f/4FB85481001A/feather-pen-and-paper-fountain.jpg"} />
      
    </CardMedia>
  </Card>
);

export default homeCard;