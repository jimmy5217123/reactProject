'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var name = 'Josh Perez';

var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome() {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
    }

    _createClass(Welcome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'Hello, ',
                this.props.name
            );
        }
    }]);

    return Welcome;
}(React.Component);

function aaa() {
    return React.createElement(
        'div',
        null,
        React.createElement(Welcome, { name: 'sadsad' }),
        React.createElement(Welcome, { name: 'safgf' }),
        React.createElement(Welcome, { name: 'saaaaaad' })
    );
}

var element = aaa();

var Clock = function (_React$Component2) {
    _inherits(Clock, _React$Component2);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this2.state = {
            date: new Date(),
            time: 'dada sdg',
            array: ['dadas', 'rrrr', 'dadwtgtny']
        };
        return _this2;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.timer = setInterval(function () {
                return _this3.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({ date: new Date() });
        }
    }, {
        key: 'changeText',
        value: function changeText() {
            this.setState({ time: 'sdadasdasdsa' });
        }
    }, {
        key: 'list',
        value: function list() {
            return this.state.array.map(function (x, idx) {
                return React.createElement(
                    'li',
                    { key: idx, onClick: function onClick() {
                            return console.log(idx);
                        } },
                    x
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    this.state.date.toLocaleTimeString()
                ),
                React.createElement(
                    'h3',
                    null,
                    this.state.time
                ),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this4.changeText();
                        } },
                    'change'
                ),
                this.list(),
                React.createElement(
                    'div',
                    null,
                    this.state.array.map(function (x, idx) {
                        return React.createElement(
                            'div',
                            { key: idx },
                            x
                        );
                    })
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

var NameForm = function (_React$Component3) {
    _inherits(NameForm, _React$Component3);

    function NameForm(props) {
        _classCallCheck(this, NameForm);

        var _this5 = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

        _this5.state = { value: ''

            // this.handleChange = this.handleChange.bind(this)  // use (e) => this.handle(e) can not type this
            // this.handleSubmit = this.handleSubmit.bind(this)
        };return _this5;
    }

    _createClass(NameForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'form',
                { onSubmit: function onSubmit(e) {
                        return _this6.handleSubmit(e);
                    } },
                React.createElement(
                    'label',
                    null,
                    'Name:',
                    React.createElement('input', { type: 'text', value: this.state.value, onChange: function onChange(e) {
                            return _this6.handleChange(e);
                        } })
                ),
                React.createElement('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return NameForm;
}(React.Component);

var FlavorForm = function (_React$Component4) {
    _inherits(FlavorForm, _React$Component4);

    function FlavorForm(props) {
        _classCallCheck(this, FlavorForm);

        var _this7 = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

        _this7.state = { value: 'coconut' };

        _this7.handleChange = _this7.handleChange.bind(_this7);
        _this7.handleSubmit = _this7.handleSubmit.bind(_this7);
        return _this7;
    }

    _createClass(FlavorForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            alert('Your favorite flavor is: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Pick your favorite flavor:',
                    React.createElement(
                        'select',
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement(
                            'option',
                            { value: 'grapefruit' },
                            'Grapefruit'
                        ),
                        React.createElement(
                            'option',
                            { value: 'lime' },
                            'Lime'
                        ),
                        React.createElement(
                            'option',
                            { value: 'coconut' },
                            'Coconut'
                        ),
                        React.createElement(
                            'option',
                            { value: 'mango' },
                            'Mango'
                        )
                    )
                ),
                React.createElement('input', { type: 'submit', value: 'Submit' })
            );
        }
    }]);

    return FlavorForm;
}(React.Component);

var Reservation = function (_React$Component5) {
    _inherits(Reservation, _React$Component5);

    function Reservation(props) {
        _classCallCheck(this, Reservation);

        var _this8 = _possibleConstructorReturn(this, (Reservation.__proto__ || Object.getPrototypeOf(Reservation)).call(this, props));

        _this8.state = {
            isGoing: true,
            numberOfGuests: 2,
            testArray: [{
                text: 'dadadas'
            }, {
                text: 'qqeqeqtr'
            }]
        };

        _this8.handleInputChange = _this8.handleInputChange.bind(_this8);
        return _this8;
    }

    _createClass(Reservation, [{
        key: 'handleInputChange',
        value: function handleInputChange(event, idx, subKey) {
            var target = event.target;
            var name = target.name;
            var newArray = this.upDateSateArray(name, target.value, idx, subKey);

            this.setState(_defineProperty({}, name, newArray));
        }
    }, {
        key: 'upDateSateArray',
        value: function upDateSateArray(arrayKey, newValue, idx, subKey) {
            var newArray = [].concat(_toConsumableArray(this.state[arrayKey]));
            subKey ? newArray[idx][subKey] = newValue : newArray[idx] = newValue;
            return newArray;
        }
    }, {
        key: 'showArray',
        value: function showArray() {
            console.log(this.state.testArray);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            return React.createElement(
                'div',
                null,
                this.state.testArray.map(function (x, idx) {
                    return React.createElement('input', { key: idx, type: 'text', name: 'testArray', value: x.text, onChange: function onChange(e) {
                            return _this9.handleInputChange(e, idx, 'text');
                        } });
                }),
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this9.showArray();
                        } },
                    'show'
                )
            );
        }
    }]);

    return Reservation;
}(React.Component);

var domContainer = document.querySelector('#test');
var clockContainer = document.querySelector('#clock');
var formContainer = document.querySelector('#form');
var flavorFormContainer = document.querySelector('#FlavorForm');
var mutipleInputContainer = document.querySelector('#mutipleInput');
// ReactDOM.render(element, domContainer)
ReactDOM.render(React.createElement(Clock, null), clockContainer);
ReactDOM.render(React.createElement(NameForm, null), formContainer);
ReactDOM.render(React.createElement(FlavorForm, null), flavorFormContainer);
ReactDOM.render(React.createElement(Reservation, null), mutipleInputContainer);