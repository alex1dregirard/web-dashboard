import * as React from 'react';
import { ArticleComponent } from '../src/externals-components/jalios/ArticleComponent';
import { Article } from '../src/externals-components/jalios/jalios-types';

import { storiesOf } from '@storybook/react';

let article: Article = {
  titre: 'MyTitre',
  resume: 'Resumé',
  auteur: 'Alexandre GIRARD',
  illustration: '',
  url: ''
};

storiesOf('Widget Jalios', module)
  .add('Article', () => <ArticleComponent article={article} />);