import * as React from 'react';
import DealersScreen from './DealersScreen';

export interface AppProps {

}

export default class DealersContainer extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <DealersScreen />
        );
    }
}
