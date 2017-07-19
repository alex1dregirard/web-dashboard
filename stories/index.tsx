import * as React from 'react';

import { ArticleComponent } from '../src/externals-components/jalios/ArticleComponent';
import { Article } from '../src/externals-components/jalios/jalios-types';

import { AppBar } from '../src/components/AppBar';

import { storiesOf } from '@storybook/react';

import 'typeface-roboto';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

let article: Article = {
  titre: 'Présentation des nouveaux locaux',
  // tslint:disable-next-line:max-line-length
  resume: 'Les architectes viennent de nous fournir les dernières projections de nos nouveaux locaux. Nous les voulons modernes, accueillants et ouverts. Nous sommes convaincus qu\'ils nous aiderons dans nos futurs succès. ',
  auteur: 'Alexandre GIRARD',
  illustration: 'https://placeimg.com/640/200/arch',
  url: ''
};

/*
.dark-primary-color    { background: #303F9F; }
.default-primary-color { background: #3F51B5; }
.light-primary-color   { background: #C5CAE9; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #FFEB3B; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }
*/

const theme = createMuiTheme({
  palette: createPalette({
    primary: purple, // Purple and green play nicely together.
    secondary: green,
    accent: {
      ...purple,
      A400: '#00e677',
    },
    error: red,
  }),
});

storiesOf('Dashboard demo', module)
  .add('AppBar', () => <MuiThemeProvider theme={theme}><AppBar /></MuiThemeProvider>);

storiesOf('Widget Jalios', module)
  .add('Article', () => (
      <MuiThemeProvider theme={theme}>
          <ArticleComponent article={article} />
      </MuiThemeProvider>
    )
  );