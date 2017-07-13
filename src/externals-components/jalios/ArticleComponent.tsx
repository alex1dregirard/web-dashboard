import * as React from 'react';

import { Article } from './jalios-types';

export interface ArticleProps {
    article: Article;
}

export class ArticleComponent extends React.Component<ArticleProps, {}> {
  /*public static defaultProps: ArticleProps = {
    article: {
      titre : ''
    }
  };*/

  constructor(props: ArticleProps) {
    super(props);

  }  
  
  render() {
    return (
      <div>
        <h1>Articles {this.props.article.titre} </h1>
        <h2>{this.props.article.resume} </h2>
      </div>
    );
  }
}