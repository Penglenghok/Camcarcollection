import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchScreen from './SearchScreen';

export interface AppProps {
}

export interface AppState {
}

export default class SearchContainer extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <SearchScreen />
        );
    }
}
