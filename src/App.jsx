import './App.css'
import HeatMap from './components/HeatMap'

function App() {
  const data = [
    {
      year: "2024", 
      month: "01",
      day: "01",
      count: 5
    },
    {
      year: "2024", 
      month: "01",
      day: "02",
      count: 4
    },
    {
      year: "2024", 
      month: "01",
      day: "03",
      count: 2
    },
    {
      year: "2024", 
      month: "02",
      day: "02",
      count: 10
    }
  ];
  return (
    <div className='w-[90%]'>
      <HeatMap data={data} />
    </div>
  )
}

export default App
