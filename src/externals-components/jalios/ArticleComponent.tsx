import * as React from 'react';

import { Article } from './jalios-types';

// import { withStyles, createStyleSheet } from 'material-ui/styles';

import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export interface ArticleProps {
    article: Article;
}

var divStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%'
};

var cardStyle: React.CSSProperties = {
    width: '100%',
    overflow: 'auto'
};

export class ArticleComponent extends React.Component<ArticleProps, {}> {

  constructor(props: ArticleProps) {
    super(props);

  }  

  render() {
    return (      
    <div style={divStyle}>
      <Card style={cardStyle}>
        <CardHeader 
          title={this.props.article.titre}
          subheader={'par ' + this.props.article.auteur}
        />
        <CardMedia>
          <img src={this.props.article.illustration} width={'100%'} />
        </CardMedia>
        <CardContent>
          <Typography component="p">
            {this.props.article.resume}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense={true} color="primary">
            Lire la suite...
          </Button>
        </CardActions>
      </Card>
    </div>
    );
  }
}

export default ArticleComponent;