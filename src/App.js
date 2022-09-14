import { useEffect, useState } from 'react';
import { showData } from './config/api'
import InputField from './components/InputField'

function App() {

	const [dataApi, setDataApi] = useState([])
	const [filteredResults, setFilteredResults] = useState([]);

	const numberFormat = new Intl.NumberFormat("pt-BR", { style: "decimal", currency: "BRL" })

	useEffect(() => {
		showData().then((res) => {
			setDataApi(res.data)
			setFilteredResults(res.data)
		})
	}, [])

	const searchQuery = (searchValue) => {
		let value = searchValue.trim().toLowerCase()
		let result = [];

		result = dataApi.filter((data) => {
			return data.provinceState.toLowerCase().search(value) !== -1;
		})

		setFilteredResults(result)
	}

	return (
		<div className="App p-5 lg:p-10">
			<form className="lg:w-9/12 m-auto">
				<InputField onChange={(e) => searchQuery(e.target.value)} placeholder="Pesquise por estados" />
			</form>

			<div className="overflow-x-auto relative lg:w-9/12 m-auto mt-11">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="py-3 px-6">
								Estados
							</th>
							<th scope="col" className="py-3 px-6">
								Casos confirmados
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredResults.map((elem, indice) => {
							const incidentsConfirmed = numberFormat.format(elem.confirmed)

							return (
								<tr className="bg-white even:bg-gray-100" index={indice} key={indice}>
									<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{elem.provinceState}
									</th>
									<td className="py-4 px-6">
										{incidentsConfirmed}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
