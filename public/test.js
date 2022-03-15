'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var domContainer = document.querySelector('#test');
var clockContainer = document.querySelector('#clock');
// ReactDOM.render(element, domContainer)
ReactDOM.render(React.createElement(Clock, null), clockContainer);