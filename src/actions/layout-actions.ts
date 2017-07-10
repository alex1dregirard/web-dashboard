import Layout from '../types/Layout';

export function layoutSave(layout: Layout, layouts: {}) {
    return {
        type: 'LAYOUT_SAVE',
        layouts: layouts
    };          
}