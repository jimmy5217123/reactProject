import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function calculateBMI({ height, weight }){
  if (!Number(height)) return NaN

  const heightNum = Number(height) / 100
  const weightNum = Number(weight)
  const result = weightNum / (heightNum * heightNum)

  return result.toFixed(2)
}

function BMIform({ bodyInfo, onBMIChange }) {

  const { height, weight } = bodyInfo

  return(
    <form>
      <label>
        身高(公分):
        <input name='height' value={height} onChange={onBMIChange}/>
      </label>
      <label>
        體重(公斤):
        <input name='weight' value={weight} onChange={onBMIChange}/>
      </label>
      <button>計算</button>
    </form>
  )
}

function Display({ type = 'BMI', value = null }){
    return(
      <div>
        您的 {type} 為： {value}
      </div>
    )
  }


function App() {
    const [ bodyInfo, setBodyInfo ] = useState ({
        height: '',
        weight: ''
    })

    const result = calculateBMI(bodyInfo)

    const onBMIChange = (e) => {
        const { name, value } = e.target

        setBodyInfo(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="App">
        <BMIform bodyInfo={bodyInfo} onBMIChange={onBMIChange}/>
        { isNaN(result) ? '請輸入正確的身高與體重' : <Display type='BMI' value={result}/> }
        </div>
    )
}

export default App;
