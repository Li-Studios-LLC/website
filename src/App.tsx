import '@/styles/App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

// Routes
const Home = lazy(() => import('@/routes/home'));

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
