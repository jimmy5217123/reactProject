'use strict';

const e = React.createElement
const name = 'Josh Perez'



class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}


function aaa () {
    return (
        <div>
            <Welcome name="sadsad" />
            <Welcome name="safgf" />
            <Welcome name="saaaaaad" />
        </div>
    )
}

const element = aaa()


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            date: new Date(),
            time: 'dada sdg',
            array: ['dadas', 'rrrr', 'dadwtgtny']
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick () {
        this.setState({ date: new Date() })
    }

    changeText () {
        this.setState({ time: 'sdadasdasdsa' })
    }

    list () {
        return this.state.array.map((x, idx) => <li key={idx} onClick={() => console.log(idx)}>{x}</li>)    
    }

    render() {
        return (
        <div>
            <h3>{this.state.date.toLocaleTimeString()}</h3>
            <h3>{this.state.time}</h3>
            <button onClick={() => this.changeText()}>change</button>
            {this.list()}
            <div>
                {this.state.array.map((x, idx) => <div key={idx}>{x}</div>)}
            </div>
        </div>
        )
    }
}


const domContainer = document.querySelector('#test')
const clockContainer = document.querySelector('#clock')
// ReactDOM.render(element, domContainer)
ReactDOM.render(<Clock/>, clockContainer)