import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WishlistScreen from './WishlistScreen';

export interface AppProps {
}

export interface AppState {
    
}

export default class WishlistContainer extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <WishlistScreen />
        );
    }
}
