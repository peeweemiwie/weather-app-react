import './App.scss';
import Form from './Form';
import Current from './current/Current';
import Forecast from './forecast/Forecast';

function App() {
	return (
		<div className='App' data-units="imperial">
			<Form className='Form' value='test' />
			<main className="main" id="container-main">
				<Current />
				<Forecast />
			</main>
			<footer>
				Design and code by <a href="https://www.linkedin.com/in/miwayagi/" target="_blank" rel="noreferrer">Miwa Kaur</a>. View code at GitHub.
			</footer>
		</div>
	);
}

export default App;
