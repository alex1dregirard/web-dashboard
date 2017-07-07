import Layout from '../types/Layout';

export function layoutSave(layout: Layout) {
    return {
        type: 'LAYOUT_SAVE',
        layout: layout
    };          
}