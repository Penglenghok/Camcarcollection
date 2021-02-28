import * as React from 'react';
import ProfileScreen from './ProfileScreen';

export interface AppProps {
}

export default class ProfileContainer extends React.Component<AppProps, any> {
    constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <ProfileScreen />
        );
    }
}
