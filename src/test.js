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

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        // this.handleChange = this.handleChange.bind(this)  // use (e) => this.handle(e) can not type this
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
            Name:<input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}


class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testArray: [
                {
                    text: 'dadadas'
                },
                {
                    text : 'qqeqeqtr'    
                }
            ]
        }

        // this.handleInputChange = this.handleInputChange.bind(this) // use (e) => this.handle(e) can not type this
    }

    handleInputChange(event, idx, subKey) {
        const target = event.target
        const name = target.name
        const newArray = this.upDateStateArray(name, target.value, idx, subKey)

        this.setState({
            [name]: newArray
        })
    }

    arrayPush (arrayName, element) {
        this.setState({
            [arrayName]: [...this.state[arrayName], element]
        })
    }

    upDateStateArray (arrayKey, newValue, idx, subKey) {
        let newArray = [...this.state[arrayKey]]
        subKey ? newArray[idx][subKey] = newValue : newArray[idx] = newValue
        return newArray
    }

    showArray () {
        console.log(this.state.testArray)
    }

    render() {
        return (
        <div>
            <div>
                <button onClick={() => this.arrayPush('testArray', { text: '' })}>new Input</button>
                <button onClick={() => this.arrayPush('testArray', { text: '' })}>delete Input</button>
            </div>
            {this.state.testArray.map((x, idx) => <input key={idx} type="text" name="testArray" value={x.text} onChange={(e) => this.handleInputChange(e, idx, 'text')}/>)}
            <button onClick={() => this.showArray()}>show</button>
        </div>
        )
    }
}


const domContainer = document.querySelector('#test')
const clockContainer = document.querySelector('#clock')
const formContainer = document.querySelector('#form')
const flavorFormContainer = document.querySelector('#FlavorForm')
const mutipleInputContainer = document.querySelector('#mutipleInput')
// ReactDOM.render(element, domContainer)
ReactDOM.render(<Clock/>, clockContainer)
ReactDOM.render(<NameForm/>, formContainer)
ReactDOM.render(<FlavorForm/>, flavorFormContainer)
ReactDOM.render(<Reservation/>, mutipleInputContainer)