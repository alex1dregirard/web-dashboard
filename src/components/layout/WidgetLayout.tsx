import * as React from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';
var ResponsiveReactGridLayout = WidthProvider(Responsive);

import 'react-grid-layout/css/styles.css';

export interface Props {
}

class WidgetLayout extends React.Component<Props, {}> {
    render() {
        var layout = [
            {i: 'messages2', x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 2},
            {i: 'events', x: 2, y: 0, w: 10, h: 2},
            {i: 'messages', x: 0, y: 1, w: 6, h: 3, minW: 2, minH: 2},
            {i: 'directory', x: 6, y: 1, w: 6, h: 3 },      
        ];

        var layouts = {lg: layout};        

        return (
            <div>
                <ResponsiveReactGridLayout 
                    className="layout" 
                    layouts={layouts}
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

export default WidgetLayout;