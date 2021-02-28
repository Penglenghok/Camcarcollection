import { Provider } from 'mobx-react';
import * as React from 'react';
import { ActivityIndicator, LogBox, StatusBar } from 'react-native';
// Lazy load component
const App = React.lazy(() => import("../app/routes"))

export interface Props { }

export interface State {
	ready: boolean;
}

LogBox.ignoreLogs(['Warning: componentWill']);
function app(stores: any) {
	return React.memo(function Setup() {
		const [ready, setReady] = React.useState<boolean>(false)

		React.useEffect(() => {
			let _mounted: boolean = true
			if (_mounted) {
				StatusBar.setBarStyle('dark-content')
				setReady(true)
			}
			return () => {
				_mounted = false
			}
		}, [])

		if (!ready) { return <ActivityIndicator /> }
		return (
			<Provider {...stores}>
				<React.Suspense fallback={true}>
					<App />
				</React.Suspense>
			</Provider>
		);
	})
}

export default app
