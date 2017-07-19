import { StoreLayoutState } from '../types/StoreState';
import { LayoutAction } from '../types/Actions';

// Etat du store par défaut
const initialLayoutState = {
    layouts : {
        lg: [
            {i: 'messages', x: 0, y: 0, w: 2, h: 2, minW: 2, minH: 2},
            {i: 'events', x: 2, y: 0, w: 10, h: 2},
            {i: 'directory', x: 0, y: 1, w: 6, h: 3, minW: 2, minH: 2},
            {i: 'tools', x: 6, y: 1, w: 6, h: 3 },
            {i: 'actuality', x: 1, y: 1, w: 6, h: 2, minW: 4, min2: 2 },
        ]
    },
    components : ['messages', 'events', 'directory', 'tools', 'other']
};

export function layout(state: StoreLayoutState = initialLayoutState, action: LayoutAction) {
    switch (action.type) {
        case 'LAYOUT_SAVE':
            return { ...state, layouts: action.layouts };
        default:
            return state;
    }
}