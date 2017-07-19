import * as React from 'react';

// Redux
import * as actions from '../../actions/layout-actions';
import { StoreState } from '../../types/StoreState';
import { connect, Dispatch } from 'react-redux';

import { Responsive, WidthProvider } from 'react-grid-layout';
var ResponsiveReactGridLayout = WidthProvider(Responsive);

import 'react-grid-layout/css/styles.css';

import Layout from '../../types/Layout';

import { Article } from '../../externals-components/jalios/jalios-types';
import { ArticleComponent } from '../../externals-components/jalios/ArticleComponent';

export interface Props {
    layouts: {
        lg: Layout[];
    };
    components: string[];
    onLayoutChange: (layout: {}, layouts: {}) => void; 
}

class WidgetLayout extends React.Component<Props, {}> {
    render() {
        let article: Article = {
            titre: 'Présentation des nouveaux locaux',
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:max-line-length
            resume: 'Les architectes viennent de nous fournir les dernières projections de nos nouveaux locaux. Nous les voulons modernes, accueillants et ouverts. Nous sommes convaincus qu\'ils nous aiderons dans nos futurs succès.',
            auteur: 'Alexandre GIRARD',
            illustration: 'https://placeimg.com/250/120/arch',
            url: ''
        };

        return (

            <div>
                <ResponsiveReactGridLayout 
                    className="layout" 
                    layouts={this.props.layouts}
                    onLayoutChange={this.props.onLayoutChange}  
                    // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    // cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    // rowHeight={94} 
                    isDraggable={true} 
                    isResizable={true}
                >
                    {
                        this.props.components.map(function(component: string){
                            // var divStyle = {
                            //    backgroundColor: 'blanchedalmond'
                            // };

                            return (
                                <div key={component} style={divStyle} >
                                    {component}
                                </div>
                            );
                        })
                    }
                    <div key={'actuality'} style={divStyle} >
                        <ArticleComponent article={article} />
                    </div>                    
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

var divStyle: React.CSSProperties = {
    backgroundColor: 'blanchedalmond',
    display: 'flex',

};

/*
var divStyle2 = {
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    padding: '10'
};
*/

export function mapStateToProps(state: StoreState) {
  return {
      layouts: state.layout.layouts,
      components: state.layout.components
  };
}

export function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
      onLayoutChange: (layout, layouts) => dispatch(actions.layoutSave(layout, layouts)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetLayout);