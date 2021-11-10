import './App.scss';
import Form from './Form';
import Current from './current/Current';
import Forecast from './forecast/Forecast';
import Footer from './Footer';
function App() {
	return (
		<div className='App' data-units='imperial'>
			<Form className='Form' />
			<main className='main'>
				<Current />
				<Forecast />
			</main>
			<Footer />
		</div>
	);
}

export default App;
