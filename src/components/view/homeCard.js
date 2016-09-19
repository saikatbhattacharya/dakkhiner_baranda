import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import style from '../../css/style.css';
const overlayStyle={
    top:'50%',
}
const homeCard = () => (
  <Card>
    <CardMedia>
    <div className="overlay"/>
      <img className="launchPageImage" src={"http://www.amarboi.org/contents/records/article/201508/77_1.jpg"} />
      
    </CardMedia>
  </Card>
);

export default homeCard;