import * as React from 'react';

// Redux
import * as actions from '../../actions/layout-actions';
import { StoreState } from '../../types/StoreState';
import { connect, Dispatch } from 'react-redux';

import { Responsive, WidthProvider } from 'react-grid-layout';
var ResponsiveReactGridLayout = WidthProvider(Responsive);

import 'react-grid-layout/css/styles.css';

import Layout from '../../types/Layout';

export interface Props {
    layout: Layout;
    onLayoutChange: (layout: {}, layouts: {}) => void; 
}

class WidgetLayout extends React.Component<Props, {}> {
    render() {
        var layouts = {lg: this.props.layout};        

        return (
            <div>
                <ResponsiveReactGridLayout 
                    className="layout" 
                    layouts={layouts}
                    onLayoutChange={this.props.onLayoutChange}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    rowHeight={94} 
                    isDraggable={true} 
                    isResizable={true}
                >
                    <div style={divStyle} key={'messages'} >
                        messages
                    </div>
                    <div style={divStyle} key={'events'}>
                        evenements
                    </div>        
                    <div style={divStyle} key={'directory'}>
                        annuaire
                    </div>
                    <div style={divStyle} key={'messages2'}>
                        messages 2
                    </div>          
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

var divStyle = {
  backgroundColor: 'blanchedalmond'
};

export function mapStateToProps(state: StoreState) {
  return {
      layout: state.layout.layout
  };
}

export function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
      onLayoutChange: (layout, layouts) => dispatch(actions.layoutSave(layout)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetLayout);