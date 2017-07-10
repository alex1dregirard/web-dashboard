import Layout from './Layout';

// Store de l'application
export interface StoreState {
    layout: StoreLayoutState;
}

// Partie du store gérant la partie layout
export interface StoreLayoutState {
    layouts: {
        lg: Layout[];
    }; 
    components: string[];
}