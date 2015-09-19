webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RollButton = __webpack_require__(189);
	
	var _RollButton2 = _interopRequireDefault(_RollButton);
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { href: 'https://github.com/gilbox/react-track' },
	          _react2['default'].createElement('img', {
	            style: { position: 'absolute', top: 0, right: 0, border: 0 },
	            src: 'https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67',
	            alt: 'Fork me on GitHub',
	            dataCanonicalSrc: 'https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { style: {
	              display: 'flex',
	              alignItems: 'center',
	              justifyContent: 'center',
	              height: '100vh'
	            } },
	          _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	              'div',
	              { style: { width: 300, textAlign: 'center', marginBottom: '20px' } },
	              _react2['default'].createElement(
	                'code',
	                null,
	                'button inspired by ',
	                _react2['default'].createElement(
	                  'a',
	                  { href: 'https://precursorapp.com/' },
	                  'precursor app'
	                )
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(_RollButton2['default'], {
	                width: 300,
	                height: 70,
	                staticText: 'Hug',
	                list: ['Softly', 'Blindly', 'Later', 'Twice', 'Longingly', 'Randomly', 'Always', 'Freely', 'Warmly', 'Generously', 'Forever', 'Often', 'Money', 'Gold', 'Funny', 'Scrappy', 'Steampunk', 'Instant', 'Homemade', 'DIY', 'Green', 'Fun', 'Funky', 'Burpy'] })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _raf = __webpack_require__(167);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var Timeline = (function (_Component) {
	  _inherits(Timeline, _Component);
	
	  // todo: prop types & default props
	
	  function Timeline(props, context) {
	    _classCallCheck(this, Timeline);
	
	    _get(Object.getPrototypeOf(Timeline.prototype), 'constructor', this).call(this, props, context);
	
	    this.tick = this.tick.bind(this);
	
	    this.expose = {
	      play: this.play.bind(this),
	      pause: this.pause.bind(this),
	      setPlay: this.setPlay.bind(this),
	      setTime: this.setTime.bind(this),
	      togglePlay: this.togglePlay.bind(this)
	    };
	
	    this.state = {
	      time: props.initialTime || 0, // todo: defaultProps
	      playing: !!props.playOnMount
	    };
	  }
	
	  _createClass(Timeline, [{
	    key: 'tick',
	    value: function tick() {
	      var _state = this.state;
	      var playing = _state.playing;
	      var time = _state.time;
	
	      if (time >= this.props.max) {
	        if (this.props.loop) {
	          this.setState({ time: this.props.min });
	        }
	      } else {
	        this.setState({ time: time + 1 }); // todo: arbitrary increment
	      }
	
	      if (playing) (0, _raf2['default'])(this.tick);
	    }
	  }, {
	    key: 'setTime',
	    value: function setTime(time) {
	      this.setState({ time: time });
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.setPlay(true);
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.setPlay(false);
	    }
	  }, {
	    key: 'setPlay',
	    value: function setPlay(playing) {
	      if (!this.state.playing && playing) (0, _raf2['default'])(this.tick);
	      this.setState({ playing: playing });
	    }
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay(playing) {
	      if (!this.state.playing) (0, _raf2['default'])(this.tick);
	      this.setState({ playing: !this.state.playing });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.playing) (0, _raf2['default'])(this.tick);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children(_extends({}, this.state, this.expose));
	    }
	  }]);
	
	  return Timeline;
	})(_react.Component);
	
	exports['default'] = Timeline;
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(168)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
	
	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(169)))

/***/ },
/* 169 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functionalEasing = __webpack_require__(157);
	
	var _reactTrackTween = __webpack_require__(162);
	
	var _reactTrackTweenValueFactories = __webpack_require__(164);
	
	var _reactTrackTimeline = __webpack_require__(166);
	
	var _reactTrackTimeline2 = _interopRequireDefault(_reactTrackTimeline);
	
	var _reactStatefulStream = __webpack_require__(190);
	
	var _reactStatefulStream2 = _interopRequireDefault(_reactStatefulStream);
	
	var _reactDerive = __webpack_require__(198);
	
	var _updeep = __webpack_require__(199);
	
	var _updeep2 = _interopRequireDefault(_updeep);
	
	var immutable = (0, _updeep2['default'])({});
	
	var easeOutElastic = new _functionalEasing.Easer().using('out-elastic').withParameters(2, .6);
	var easeOutSine = new _functionalEasing.Easer().using('out-sine');
	
	var borderColor = 'rgba(255,255,255,1.0)';
	var listStyle = { color: '#ccc' };
	
	var RollButton = (function (_Component) {
	  _inherits(RollButton, _Component);
	
	  function RollButton() {
	    _classCallCheck(this, _RollButton);
	
	    _get(Object.getPrototypeOf(_RollButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(RollButton, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var currentIndex = _props.currentIndex;
	      var staticText = _props.staticText;
	      var edit = _props.edit;
	      var isOver = _props.isOver;
	      var list = _props.list;
	      var partitionedList = _props.partitionedList;
	      var width = _props.width;
	      var height = _props.height;
	
	      var _partitionedList = _slicedToArray(partitionedList, 2);
	
	      var topList = _partitionedList[0];
	      var bottomList = _partitionedList[1];
	
	      var update = function update(updates) {
	        return edit((0, _updeep2['default'])(updates));
	      };
	      var currentText = list[currentIndex];
	
	      return _react2['default'].createElement(
	        'div',
	        {
	          style: {
	            width: width,
	            height: height,
	            cursor: 'pointer',
	            border: '4px solid ' + borderColor,
	            background: isOver ? borderColor : 'transparent',
	            borderRadius: 2,
	            textAlign: 'center',
	            display: 'flex',
	            alignItems: 'center',
	            justifyContent: 'center',
	            overflow: 'hidden'
	          },
	          onMouseEnter: function (event) {
	            _this.timeline.setTime(0);
	            _this.timeline.play();
	            update({
	              currentIndex: ~ ~(Math.random() * list.length),
	              isOver: true
	            });
	          },
	          onMouseLeave: function (event) {
	            return update({ isOver: false });
	          } },
	        _react2['default'].createElement(
	          'div',
	          {
	            style: {
	              position: 'relative',
	              verticalAlign: 'middle',
	              color: isOver ? 'black' : 'white'
	            } },
	          _react2['default'].createElement(
	            'div',
	            { style: { display: 'inline-block' } },
	            staticText,
	            ' '
	          ),
	          _react2['default'].createElement(
	            'div',
	            { style: { display: 'inline-block', position: 'relative' } },
	            _react2['default'].createElement(
	              _reactTrackTimeline2['default'],
	              { ref: function (ref) {
	                  return _this.timeline = ref;
	                }, max: 53 },
	              function (_ref) {
	                var time = _ref.time;
	                return isOver && _react2['default'].createElement(
	                  'div',
	                  { style: _extends({
	                      position: 'absolute'
	                    }, (0, _reactTrackTween.tween)(time, {
	                      0: { transform: (0, _reactTrackTweenValueFactories.translateY)(450), ease: easeOutSine },
	                      30: { transform: (0, _reactTrackTweenValueFactories.translateY)(-15), ease: easeOutElastic },
	                      50: { transform: (0, _reactTrackTweenValueFactories.translateY)(0) }
	                    })) },
	                  _react2['default'].createElement(
	                    'div',
	                    { style: { opacity: (0, _reactTrackTween.tween)(time, { 0: 1, 30: 1, 40: 0 }), position: 'absolute', bottom: 0, textAlign: 'left' } },
	                    topList.map(function (item) {
	                      return _react2['default'].createElement(
	                        'div',
	                        { style: listStyle, key: item },
	                        item
	                      );
	                    })
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { style: { position: 'absolute', top: '100%', textAlign: 'left' } },
	                    _react2['default'].createElement(
	                      'div',
	                      { style: { color: 'black', opacity: (0, _reactTrackTween.tween)(time, { 0: 0.4, 18: 0.4, 22: 1 }) } },
	                      currentText
	                    ),
	                    bottomList.map(function (item) {
	                      return _react2['default'].createElement(
	                        'div',
	                        { style: _extends({ opacity: (0, _reactTrackTween.tween)(time, { 0: 1, 30: 1, 40: 0 }) }, listStyle), key: item },
	                        item
	                      );
	                    })
	                  )
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              'span',
	              { style: isOver ? { color: 'transparent' } : {} },
	              currentText
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  var _RollButton = RollButton;
	  RollButton = (0, _reactDerive.derive)(_createDecoratedObject([{
	    key: 'newList',
	    decorators: [(0, _reactDerive.track)('currentIndex')],
	    value: function newList(_ref2) {
	      var currentIndex = _ref2.currentIndex;
	      var list = _ref2.list;
	      // re-arrange list
	      var currentItem = list[currentIndex];
	      return list.filter(function (item) {
	        return item !== currentItem;
	      }).sort(function () {
	        return Math.random() - .5;
	      });
	    }
	  }, {
	    key: 'partitionedList',
	    decorators: [(0, _reactDerive.track)('currentIndex')],
	    value: function partitionedList() {
	      return [this.newList().slice(0, -3), this.newList().slice(-3)];
	    }
	  }]))(RollButton) || RollButton;
	  RollButton = (0, _reactStatefulStream2['default'])(immutable({
	    isOver: false,
	    currentIndex: 0
	  }))(RollButton) || RollButton;
	  return RollButton;
	})(_react.Component);
	
	exports['default'] = RollButton;
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = stateful;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Atom = __webpack_require__(191);
	
	var _Atom2 = _interopRequireDefault(_Atom);
	
	var _flyd = __webpack_require__(192);
	
	function stateful(initialState) {
	  var editPropName = arguments.length <= 1 || arguments[1] === undefined ? 'edit' : arguments[1];
	
	  return function (DecoratedComponent) {
	    return (function (_Component) {
	      _inherits(StatefulDecorator, _Component);
	
	      _createClass(StatefulDecorator, null, [{
	        key: 'displayName',
	        value: 'Stateful(' + getDisplayName(DecoratedComponent) + ')',
	        enumerable: true
	      }, {
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }]);
	
	      function StatefulDecorator(props, context) {
	        _classCallCheck(this, StatefulDecorator);
	
	        _get(Object.getPrototypeOf(StatefulDecorator.prototype), 'constructor', this).call(this, props, context);
	
	        var state = typeof initialState === 'function' ? initialState(props, context) : initialState;
	
	        this.state = { state: state, atom: new _Atom2['default'](state) };
	      }
	
	      _createClass(StatefulDecorator, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var _this = this;
	
	          var atom = this.state.atom;
	
	          // connect atom updates to component's state
	          (0, _flyd.on)(function (state) {
	            return _this.setState({ state: state });
	          }, atom.didSetState$);
	        }
	      }, {
	        key: 'componentDidUnmount',
	        value: function componentDidUnmount() {
	          this.state.atom.destroy();
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _state = this.state;
	          var atom = _state.atom;
	          var state = _state.state;
	
	          return _react2['default'].createElement(DecoratedComponent, _extends({
	            atom: atom
	          }, this.props, state, _defineProperty({}, editPropName, atom.updateState)));
	        }
	      }]);
	
	      return StatefulDecorator;
	    })(_react.Component);
	  };
	}
	
	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _flyd = __webpack_require__(192);
	
	var Atom = (function () {
	  function Atom(state) {
	    _classCallCheck(this, Atom);
	
	    this.state = state;
	
	    // directly-updated state, used to update "watcher" App component
	    this.didSetState$ = (0, _flyd.stream)();
	
	    // used to indicate "user" update
	    this.didUpdateState$ = (0, _flyd.stream)();
	
	    this.updateState = this.updateState.bind(this);
	    this.getState = this.getState.bind(this);
	    this.silentlyUpdateState = this.silentlyUpdateState.bind(this);
	  }
	
	  _createClass(Atom, [{
	    key: '_setState',
	    value: function _setState(state) {
	      return this.didSetState$(this.state = state).val;
	    }
	  }, {
	    key: 'silentlyUpdateState',
	    value: function silentlyUpdateState(transform) {
	      return this._setState(transform(this.state));
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(transform) {
	      return this.didUpdateState$(this._setState(transform(this.state))).val;
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.state = null;
	      this.didSetState$.end(true);
	      this.didUpdateState$.end(true);
	    }
	  }]);
	
	  return Atom;
	})();
	
	exports['default'] = Atom;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var curryN = __webpack_require__(193);
	
	'use strict';
	
	function isFunction(obj) {
	  return !!(obj && obj.constructor && obj.call && obj.apply);
	}
	
	// Globals
	var toUpdate = [];
	var inStream;
	
	function map(f, s) {
	  return stream([s], function(self) { self(f(s.val)); });
	}
	
	function on(f, s) {
	  stream([s], function() { f(s.val); });
	}
	
	function boundMap(f) { return map(f, this); }
	
	var scan = curryN(3, function(f, acc, s) {
	  var ns = stream([s], function() {
	    return (acc = f(acc, s()));
	  });
	  if (!ns.hasVal) ns(acc);
	  return ns;
	});
	
	var merge = curryN(2, function(s1, s2) {
	  var s = immediate(stream([s1, s2], function(n, changed) {
	    return changed[0] ? changed[0]()
	         : s1.hasVal  ? s1()
	                      : s2();
	  }));
	  endsOn(stream([s1.end, s2.end], function(self, changed) {
	    return true;
	  }), s);
	  return s;
	});
	
	function ap(s2) {
	  var s1 = this;
	  return stream([s1, s2], function() { return s1()(s2()); });
	}
	
	function initialDepsNotMet(stream) {
	  stream.depsMet = stream.deps.every(function(s) {
	    return s.hasVal;
	  });
	  return !stream.depsMet;
	}
	
	function updateStream(s) {
	  if ((s.depsMet !== true && initialDepsNotMet(s)) ||
	      (s.end !== undefined && s.end.val === true)) return;
	  if (inStream !== undefined) {
	    toUpdate.push(s);
	    return;
	  }
	  inStream = s;
	  var returnVal = s.fn(s, s.depsChanged);
	  if (returnVal !== undefined) {
	    s(returnVal);
	  }
	  inStream = undefined;
	  if (s.depsChanged !== undefined) s.depsChanged = [];
	  s.shouldUpdate = false;
	  if (flushing === false) flushUpdate();
	}
	
	var order = [];
	var orderNextIdx = -1;
	
	function findDeps(s) {
	  var i, listeners = s.listeners;
	  if (s.queued === false) {
	    s.queued = true;
	    for (i = 0; i < listeners.length; ++i) {
	      findDeps(listeners[i]);
	    }
	    order[++orderNextIdx] = s;
	  }
	}
	
	function updateDeps(s) {
	  var i, o, list, listeners = s.listeners;
	  for (i = 0; i < listeners.length; ++i) {
	    list = listeners[i];
	    if (list.end === s) {
	      endStream(list);
	    } else {
	      if (list.depsChanged !== undefined) list.depsChanged.push(s);
	      list.shouldUpdate = true;
	      findDeps(list);
	    }
	  }
	  for (; orderNextIdx >= 0; --orderNextIdx) {
	    o = order[orderNextIdx];
	    if (o.shouldUpdate === true) updateStream(o);
	    o.queued = false;
	  }
	}
	
	var flushing = false;
	
	function flushUpdate() {
	  flushing = true;
	  while (toUpdate.length > 0) {
	    var s = toUpdate.shift();
	    if (s.vals.length > 0) s.val = s.vals.shift();
	    updateDeps(s);
	  }
	  flushing = false;
	}
	
	function isStream(stream) {
	  return isFunction(stream) && 'hasVal' in stream;
	}
	
	function streamToString() {
	  return 'stream(' + this.val + ')';
	}
	
	function updateStreamValue(s, n) {
	  if (n !== undefined && n !== null && isFunction(n.then)) {
	    n.then(s);
	    return;
	  }
	  s.val = n;
	  s.hasVal = true;
	  if (inStream === undefined) {
	    flushing = true;
	    updateDeps(s);
	    if (toUpdate.length > 0) flushUpdate(); else flushing = false;
	  } else if (inStream === s) {
	    markListeners(s, s.listeners);
	  } else {
	    s.vals.push(n);
	    toUpdate.push(s);
	  }
	}
	
	function markListeners(s, lists) {
	  var i, list;
	  for (i = 0; i < lists.length; ++i) {
	    list = lists[i];
	    if (list.end !== s) {
	      if (list.depsChanged !== undefined) {
	        list.depsChanged.push(s);
	      }
	      list.shouldUpdate = true;
	    } else {
	      endStream(list);
	    }
	  }
	}
	
	function createStream() {
	  function s(n) {
	    return arguments.length > 0 ? (updateStreamValue(s, n), s)
	                                : s.val;
	  }
	  s.hasVal = false;
	  s.val = undefined;
	  s.vals = [];
	  s.listeners = [];
	  s.queued = false;
	  s.end = undefined;
	
	  s.map = boundMap;
	  s.ap = ap;
	  s.of = stream;
	  s.toString = streamToString;
	
	  return s;
	}
	
	function addListeners(deps, s) {
	  for (var i = 0; i < deps.length; ++i) {
	    deps[i].listeners.push(s);
	  }
	}
	
	function createDependentStream(deps, fn) {
	  var s = createStream();
	  s.fn = fn;
	  s.deps = deps;
	  s.depsMet = false;
	  s.depsChanged = fn.length > 1 ? [] : undefined;
	  s.shouldUpdate = false;
	  addListeners(deps, s);
	  return s;
	}
	
	function immediate(s) {
	  if (s.depsMet === false) {
	    s.depsMet = true;
	    updateStream(s);
	  }
	  return s;
	}
	
	function removeListener(s, listeners) {
	  var idx = listeners.indexOf(s);
	  listeners[idx] = listeners[listeners.length - 1];
	  listeners.length--;
	}
	
	function detachDeps(s) {
	  for (var i = 0; i < s.deps.length; ++i) {
	    removeListener(s, s.deps[i].listeners);
	  }
	  s.deps.length = 0;
	}
	
	function endStream(s) {
	  if (s.deps !== undefined) detachDeps(s);
	  if (s.end !== undefined) detachDeps(s.end);
	}
	
	function endsOn(endS, s) {
	  detachDeps(s.end);
	  endS.listeners.push(s.end);
	  s.end.deps.push(endS);
	  return s;
	}
	
	function trueFn() { return true; }
	
	function stream(arg, fn) {
	  var i, s, deps, depEndStreams;
	  var endStream = createDependentStream([], trueFn);
	  if (arguments.length > 1) {
	    deps = []; depEndStreams = [];
	    for (i = 0; i < arg.length; ++i) {
	      if (arg[i] !== undefined) {
	        deps.push(arg[i]);
	        if (arg[i].end !== undefined) depEndStreams.push(arg[i].end);
	      }
	    }
	    s = createDependentStream(deps, fn);
	    s.end = endStream;
	    endStream.listeners.push(s);
	    addListeners(depEndStreams, endStream);
	    endStream.deps = depEndStreams;
	    updateStream(s);
	  } else {
	    s = createStream();
	    s.end = endStream;
	    endStream.listeners.push(s);
	    if (arguments.length === 1) s(arg);
	  }
	  return s;
	}
	
	var transduce = curryN(2, function(xform, source) {
	  xform = xform(new StreamTransformer());
	  return stream([source], function(self) {
	    var res = xform['@@transducer/step'](undefined, source());
	    if (res && res['@@transducer/reduced'] === true) {
	      self.end(true);
	      return res['@@transducer/value'];
	    } else {
	      return res;
	    }
	  });
	});
	
	function StreamTransformer() { }
	StreamTransformer.prototype['@@transducer/init'] = function() { };
	StreamTransformer.prototype['@@transducer/result'] = function() { };
	StreamTransformer.prototype['@@transducer/step'] = function(s, v) { return v; };
	
	module.exports = {
	  stream: stream,
	  isStream: isStream,
	  transduce: transduce,
	  merge: merge,
	  scan: scan,
	  endsOn: endsOn,
	  map: curryN(2, map),
	  on: curryN(2, on),
	  curryN: curryN,
	  immediate: immediate,
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(194);
	var _curry1 = __webpack_require__(195);
	var _curry2 = __webpack_require__(196);
	var _curryN = __webpack_require__(197);
	
	
	/**
	 * Returns a curried equivalent of the provided function, with the
	 * specified arity. The curried function has two unusual capabilities.
	 * First, its arguments needn't be provided one at a time. If `g` is
	 * `R.curryN(3, f)`, the following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`,
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFourNumbers = function() {
	 *        return R.sum([].slice.call(arguments, 0, 4));
	 *      };
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});


/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function _arity(n, fn) {
	  // jshint unused:vars
	  switch (n) {
	    case 0: return function() { return fn.apply(this, arguments); };
	    case 1: return function(a0) { return fn.apply(this, arguments); };
	    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
	    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
	    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
	    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
	    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
	    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};


/***/ },
/* 195 */
/***/ function(module, exports) {

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0) {
	      return f1;
	    } else if (a != null && a['@@functional/placeholder'] === true) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(195);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    var n = arguments.length;
	    if (n === 0) {
	      return f2;
	    } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 1) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true &&
	                          b != null && b['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
	      return _curry1(function(a) { return fn(a, b); });
	    } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else {
	      return fn(a, b);
	    }
	  };
	};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(194);
	
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @return {array} An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function() {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length &&
	          (received[combinedIdx] == null ||
	           received[combinedIdx]['@@functional/placeholder'] !== true ||
	           argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (result == null || result['@@functional/placeholder'] !== true) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	  };
	};


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.derive = derive;
	exports.track = track;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var BLOCKED = {};
	
	var globalOptions = { debug: false };
	
	exports.globalOptions = globalOptions;
	/**
	 * ## derive
	 *
	 * Create a derived data higher-order component (HoC).
	 *
	 * @param {Object} options (optional)
	 * @param {Boolean} debug (optional)
	 * @return {Object}
	 */
	
	function derive() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return function (DecoratedComponent) {
	    return (function (_Component) {
	      _inherits(DeriveDecorator, _Component);
	
	      function DeriveDecorator() {
	        _classCallCheck(this, DeriveDecorator);
	
	        _get(Object.getPrototypeOf(DeriveDecorator.prototype), 'constructor', this).apply(this, arguments);
	      }
	
	      _createClass(DeriveDecorator, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          this.derivedProps = deriveProps(options, {}, this.props, {});
	        }
	      }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	          this.derivedProps = deriveProps(options, this.props, nextProps, this.derivedProps || {});
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(DecoratedComponent, this.derivedProps);
	        }
	      }], [{
	        key: 'displayName',
	        value: 'Derive(' + getDisplayName(DecoratedComponent) + ')',
	        enumerable: true
	      }, {
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }]);
	
	      return DeriveDecorator;
	    })(_react.Component);
	  };
	}
	
	// `deriveProps` takes props from the previous render (`prevProps`, `derivedProps`),
	// and props from the current render (`nextProps`) and calculates the next derived props.
	function deriveProps(options, prevProps, nextProps, derivedProps) {
	  var nextDerivedProps = {};
	
	  var calcDerivedProp = function calcDerivedProp(key, xf) {
	
	    // When `xf` is annotated with `trackedProps` (by `@track`), only re-calculate
	    // derived props when the tracked props changed.
	    if (xf.trackedProps && xf.trackedProps.every(function (p) {
	      return prevProps[p] === nextProps[p];
	    })) {
	      return derivedProps[key];
	    }
	
	    if (globalOptions.debug) console.log('Recalculating derived prop \'' + key + '\'');
	    return xf.call(delegates, nextProps, derivedProps);
	  };
	
	  // `delegates` is the object that will be attached to the `this` Object
	  // of deriver (`xf`) functions. (see `xf.call(delegates...)` above)
	  var delegates = map.call(options, function (xf, key) {
	    return function () {
	      if (!nextDerivedProps.hasOwnProperty(key)) {
	        nextDerivedProps[key] = BLOCKED;
	        return nextDerivedProps[key] = calcDerivedProp(key, xf);
	      } else {
	        if (nextDerivedProps[key] === BLOCKED) {
	          throw Error('Circular dependencies in derived props, \'' + key + '\' was blocked.');
	        }
	        return nextDerivedProps[key];
	      }
	    };
	  });
	
	  Object.keys(options).forEach(function (key) {
	    if (!nextDerivedProps.hasOwnProperty(key))
	      // calculate derived prop
	      nextDerivedProps[key] = calcDerivedProp(key, options[key]);
	  });
	
	  return _extends({}, nextProps, nextDerivedProps);
	}
	
	function getDisplayName(comp) {
	  return comp.displayName || comp.name || 'Component';
	}
	
	// map an object to an object
	function map(f) {
	  var _this = this;
	
	  var result = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(this).forEach(function (k) {
	    return result[k] = f(_this[k], k);
	  });
	  return result;
	}
	
	/**
	 * ## track
	 *
	 * Object literal decorator that annotates a mapper function
	 * to have a 'trackedProps' property. Used by `@derive` to memoize
	 * props.
	 *
	 * @param {String...} trackedProps
	 * @return {Function}
	 */
	
	function track() {
	  for (var _len = arguments.length, trackedProps = Array(_len), _key = 0; _key < _len; _key++) {
	    trackedProps[_key] = arguments[_key];
	  }
	
	  return function (target, key, descriptor) {
	    if (descriptor) {
	      // ES7 decorator
	      descriptor.value.trackedProps = trackedProps;
	    } else {
	      // ES6
	      target.trackedProps = trackedProps;
	      return target;
	    }
	  };
	}
	
	/**
	 * ## Derive
	 *
	 * `@derive` as a component.
	 * @prop {Object} options
	 */
	
	var Derive = (function (_Component2) {
	  _inherits(Derive, _Component2);
	
	  function Derive() {
	    _classCallCheck(this, Derive);
	
	    _get(Object.getPrototypeOf(Derive.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Derive, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.derivedProps = deriveProps(this.props.options, {}, this.props, {});
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      this.derivedProps = deriveProps(nextProps.options, this.props, nextProps, this.derivedProps || {});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children(this.derivedProps));
	    }
	  }]);
	
	  return Derive;
	})(_react.Component);
	
	exports.Derive = Derive;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _constant = __webpack_require__(200);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _freeze = __webpack_require__(201);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _is = __webpack_require__(202);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _if2 = __webpack_require__(253);
	
	var _if3 = _interopRequireDefault(_if2);
	
	var _ifElse = __webpack_require__(254);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _map = __webpack_require__(261);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _omit = __webpack_require__(270);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	var _reject = __webpack_require__(284);
	
	var _reject2 = _interopRequireDefault(_reject);
	
	var _update = __webpack_require__(255);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _updateIn = __webpack_require__(285);
	
	var _updateIn2 = _interopRequireDefault(_updateIn);
	
	var _withDefault = __webpack_require__(286);
	
	var _withDefault2 = _interopRequireDefault(_withDefault);
	
	var _utilCurry = __webpack_require__(252);
	
	var u = _update2['default'];
	
	u._ = _utilCurry._;
	u.constant = _constant2['default'];
	u['if'] = _if3['default'];
	u.ifElse = _ifElse2['default'];
	u.is = _is2['default'];
	u.freeze = _freeze2['default'];
	u.map = _map2['default'];
	u.omit = _omit2['default'];
	u.reject = _reject2['default'];
	u.update = _update2['default'];
	u.updateIn = _updateIn2['default'];
	u.withDefault = _withDefault2['default'];
	
	exports['default'] = u;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _freeze = __webpack_require__(201);
	
	/**
	 * Returns a function that always returns the supplied value.
	 *
	 * Useful for replacing an object outright rather than merging it.
	 *
	 * @function
	 * @sig a -> (* -> a)
	 * @memberOf u
	 * @param  {*} value what to return from returned function.
	 * @return {function} a new function that will always return value.
	 *
	 * @example
	 * var alwaysFour = u.constant(4);
	 * expect(alwaysFour(32)).toEqual(4);
	 *
	 * @example
	 * var user = {
	 *   name: 'Mitch',
	 *   favorites: {
	 *     band: 'Nirvana',
	 *     movie: 'The Matrix'
	 *   }
	 * };
	 *
	 * var newFavorites = {
	 *   band: 'Coldplay'
	 * };
	 *
	 * var result = u({ favorites: u.constant(newFavorites) }, user);
	 *
	 * expect(result).toEqual({ name: 'Mitch', favorites: { band: 'Coldplay' } });
	 */
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function constant(value) {
	  var frozen = _freeze2['default'](value);
	  return function () {
	    return frozen;
	  };
	}
	
	exports['default'] = constant;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	function isFreezable(object) {
	  if (object === null) return false;
	
	  return Array.isArray(object) || typeof object === 'object';
	}
	
	function needsFreezing(object) {
	  return isFreezable(object) && !Object.isFrozen(object);
	}
	
	function recur(object) {
	  Object.freeze(object);
	
	  Object.keys(object).forEach(function (key) {
	    var value = object[key];
	    if (needsFreezing(value)) {
	      recur(value);
	    }
	  });
	
	  return object;
	}
	
	/**
	 * Deeply freeze a plain javascript object.
	 *
	 * If `process.env.NODE_ENV === 'production'`, this returns the original object
	 * witout freezing.
	 *
	 * @function
	 * @sig a -> a
	 * @param  {object} object Object to freeze.
	 * @return {object} Frozen object, unless in production, then the same object.
	 */
	function freeze(object) {
	  if (false) {
	    return object;
	  }
	
	  if (needsFreezing(object)) {
	    recur(object);
	  }
	
	  return object;
	}
	
	exports['default'] = freeze;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilSplitPath = __webpack_require__(203);
	
	var _utilSplitPath2 = _interopRequireDefault(_utilSplitPath);
	
	var _utilCurry = __webpack_require__(252);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	function is(path, predicate, object) {
	  var parts = _utilSplitPath2['default'](path);
	
	  var rest = object;
	  var part = undefined;
	  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      part = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      part = _i.value;
	    }
	
	    if (typeof rest === 'undefined') return false;
	    rest = rest[part];
	  }
	
	  if (typeof predicate === 'function') {
	    return predicate(rest);
	  }
	
	  return predicate === rest;
	}
	
	exports['default'] = _utilCurry2['default'](is);
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = splitPath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashCollectionReject = __webpack_require__(204);
	
	var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);
	
	function splitPath(path) {
	  return Array.isArray(path) ? path : _lodashCollectionReject2['default'](path.split('.'), function (x) {
	    return !x;
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(205),
	    baseCallback = __webpack_require__(206),
	    baseFilter = __webpack_require__(246),
	    isArray = __webpack_require__(227);
	
	/**
	 * The opposite of `_.filter`; this method returns the elements of `collection`
	 * that `predicate` does **not** return truthy for.
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Array} Returns the new filtered array.
	 * @example
	 *
	 * _.reject([1, 2, 3, 4], function(n) {
	 *   return n % 2 == 0;
	 * });
	 * // => [1, 3]
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': true }
	 * ];
	 *
	 * // using the `_.matches` callback shorthand
	 * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	 * // => ['barney']
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.pluck(_.reject(users, 'active', false), 'user');
	 * // => ['fred']
	 *
	 * // using the `_.property` callback shorthand
	 * _.pluck(_.reject(users, 'active'), 'user');
	 * // => ['barney']
	 */
	function reject(collection, predicate, thisArg) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  predicate = baseCallback(predicate, thisArg, 3);
	  return func(collection, function(value, index, collection) {
	    return !predicate(value, index, collection);
	  });
	}
	
	module.exports = reject;


/***/ },
/* 205 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[++resIndex] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(207),
	    baseMatchesProperty = __webpack_require__(235),
	    bindCallback = __webpack_require__(242),
	    identity = __webpack_require__(243),
	    property = __webpack_require__(244);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(208),
	    getMatchData = __webpack_require__(232),
	    toObject = __webpack_require__(231);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(209),
	    toObject = __webpack_require__(231);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(210),
	    isObject = __webpack_require__(219),
	    isObjectLike = __webpack_require__(220);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(211),
	    equalByTag = __webpack_require__(213),
	    equalObjects = __webpack_require__(214),
	    isArray = __webpack_require__(227),
	    isTypedArray = __webpack_require__(230);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(212);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 212 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 213 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(215);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(216),
	    isArrayLike = __webpack_require__(221),
	    isObject = __webpack_require__(219),
	    shimKeys = __webpack_require__(225);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(217);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(218),
	    isObjectLike = __webpack_require__(220);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(219);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 219 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(222),
	    isLength = __webpack_require__(224);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(223);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 224 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(226),
	    isArray = __webpack_require__(227),
	    isIndex = __webpack_require__(228),
	    isLength = __webpack_require__(224),
	    keysIn = __webpack_require__(229);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(221),
	    isObjectLike = __webpack_require__(220);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(216),
	    isLength = __webpack_require__(224),
	    isObjectLike = __webpack_require__(220);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 228 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(226),
	    isArray = __webpack_require__(227),
	    isIndex = __webpack_require__(228),
	    isLength = __webpack_require__(224),
	    isObject = __webpack_require__(219);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(224),
	    isObjectLike = __webpack_require__(220);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(219);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(233),
	    pairs = __webpack_require__(234);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(219);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(215),
	    toObject = __webpack_require__(231);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(236),
	    baseIsEqual = __webpack_require__(209),
	    baseSlice = __webpack_require__(237),
	    isArray = __webpack_require__(227),
	    isKey = __webpack_require__(238),
	    isStrictComparable = __webpack_require__(233),
	    last = __webpack_require__(239),
	    toObject = __webpack_require__(231),
	    toPath = __webpack_require__(240);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(231);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(227),
	    toObject = __webpack_require__(231);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 239 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(241),
	    isArray = __webpack_require__(227);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 241 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(243);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(223),
	    basePropertyDeep = __webpack_require__(245),
	    isKey = __webpack_require__(238);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(236),
	    toPath = __webpack_require__(240);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(247);
	
	/**
	 * The base implementation of `_.filter` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}
	
	module.exports = baseFilter;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(248),
	    createBaseEach = __webpack_require__(251);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(249),
	    keys = __webpack_require__(215);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(250);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(231);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(222),
	    isLength = __webpack_require__(224),
	    toObject = __webpack_require__(231);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 252 */
/***/ function(module, exports) {

	/* eslint no-shadow:0, no-param-reassign:0 */
	'use strict';
	
	exports.__esModule = true;
	exports.curry1 = curry1;
	exports.curry2 = curry2;
	exports.curry3 = curry3;
	exports.curry4 = curry4;
	exports['default'] = curry;
	var _ = '@@updeep/placeholder';
	
	exports._ = _;
	function countArguments(args, max) {
	  var n = args.length;
	  if (n > max) n = max;
	
	  while (args[n - 1] === _) {
	    n--;
	  }
	
	  return n;
	}
	
	function curry1(fn) {
	  return function curried(a) {
	    for (var _len = arguments.length, _ref = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      _ref[_key - 1] = arguments[_key];
	    }
	
	    var b = _ref[0],
	        c = _ref[1];
	
	    var n = countArguments(arguments);
	
	    if (n >= 1) return fn(a, b, c);
	    return curried;
	  };
	}
	
	function curry2(fn) {
	  return function curried(a, b) {
	    for (var _len2 = arguments.length, _ref2 = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      _ref2[_key2 - 2] = arguments[_key2];
	    }
	
	    var c = _ref2[0],
	        d = _ref2[1];
	
	    var n = countArguments(arguments, 2);
	
	    if (b === _ || c === _ || d === _) {
	      throw new Error('Can only use placeholder on first argument of this function.');
	    }
	
	    if (n >= 2) {
	      if (a === _) return curry1(function (a, c, d) {
	        return fn(a, b, c, d);
	      });
	      return fn(a, b, c, d);
	    }
	
	    if (n === 1) return curry1(function (b, c, d) {
	      return fn(a, b, c, d);
	    });
	    return curried;
	  };
	}
	
	function curry3(fn) {
	  return function curried(a, b, c) {
	    for (var _len3 = arguments.length, _ref3 = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	      _ref3[_key3 - 3] = arguments[_key3];
	    }
	
	    var d = _ref3[0],
	        e = _ref3[1];
	
	    var n = countArguments(arguments, 3);
	
	    if (c === _ || d === _ || e === _) {
	      throw new Error('Can only use placeholder on first or second argument of this function.');
	    }
	
	    if (n >= 3) {
	      if (a === _) {
	        if (b === _) return curry2(function (a, b, d, e) {
	          return fn(a, b, c, d, e);
	        });
	        return curry1(function (a, d, e) {
	          return fn(a, b, c, d, e);
	        });
	      }
	      if (b === _) return curry1(function (b, d, e) {
	        return fn(a, b, c, d, e);
	      });
	      return fn(a, b, c, d, e);
	    }
	
	    if (n === 2) {
	      if (a === _) return curry2(function (a, c, d, e) {
	        return fn(a, b, c, d, e);
	      });
	      return curry1(function (c, d, e) {
	        return fn(a, b, c, d, e);
	      });
	    }
	
	    if (n === 1) return curry2(function (b, c, d, e) {
	      return fn(a, b, c, d, e);
	    });
	
	    return curried;
	  };
	}
	
	function curry4(fn) {
	  return function curried(a, b, c, d) {
	    for (var _len4 = arguments.length, _ref4 = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
	      _ref4[_key4 - 4] = arguments[_key4];
	    }
	
	    var e = _ref4[0],
	        f = _ref4[1];
	
	    var n = countArguments(arguments, 4);
	
	    if (d === _ || e === _ || f === _) {
	      throw new Error('Can only use placeholder on first, second or third argument of this function.');
	    }
	
	    if (n >= 4) {
	      if (a === _) {
	        if (b === _) {
	          if (c === _) return curry3(function (a, b, c, e, f) {
	            return fn(a, b, c, d, e, f);
	          });
	          return curry2(function (a, b, e, f) {
	            return fn(a, b, c, d, e, f);
	          });
	        }
	        if (c === _) return curry2(function (a, c, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry1(function (a, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (b === _) {
	        if (c === _) return curry2(function (b, c, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry1(function (b, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (c === _) return curry1(function (c, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return fn(a, b, c, d, e, f);
	    }
	
	    if (n === 3) {
	      if (a === _) {
	        if (b === _) return curry3(function (a, b, d, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry2(function (a, d, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (b === _) return curry2(function (b, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return curry1(function (d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	    }
	
	    if (n === 2) {
	      if (a === _) return curry3(function (a, c, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return curry2(function (c, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	    }
	
	    if (n === 1) return curry3(function (b, c, d, e, f) {
	      return fn(a, b, c, d, e, f);
	    });
	    return curried;
	  };
	}
	
	function curry(fn) {
	  var length = arguments.length <= 1 || arguments[1] === undefined ? fn.length : arguments[1];
	  return (function () {
	    return [fn, curry1, curry2, curry3, curry4][length](fn);
	  })();
	}

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ifElse = __webpack_require__(254);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _utilCurry = __webpack_require__(252);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	exports['default'] = _utilCurry2['default'](function (predicate, trueUpdates, object) {
	  return _ifElse2['default'](predicate, trueUpdates, function (x) {
	    return x;
	  }, object);
	});
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(255);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _wrap = __webpack_require__(256);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function updateIfElse(predicate, trueUpdates, falseUpdates, object) {
	  var test = typeof predicate === 'function' ? predicate(object) : predicate;
	
	  var updates = test ? trueUpdates : falseUpdates;
	
	  return _update2['default'](updates, object);
	}
	
	exports['default'] = _wrap2['default'](updateIfElse);
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrap = __webpack_require__(256);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utilIsEmpty = __webpack_require__(257);
	
	var _utilIsEmpty2 = _interopRequireDefault(_utilIsEmpty);
	
	var _utilDefaultObject = __webpack_require__(258);
	
	var _utilDefaultObject2 = _interopRequireDefault(_utilDefaultObject);
	
	var _lodashLangIsPlainObject = __webpack_require__(259);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	function reduce(object, callback, initialValue) {
	  return Object.keys(object).reduce(function (acc, key) {
	    return callback(acc, object[key], key);
	  }, initialValue);
	}
	
	function resolveUpdates(updates, object) {
	  return reduce(updates, function (acc, value, key) {
	    var updatedValue = value;
	
	    if (!Array.isArray(value) && value !== null && typeof value === 'object') {
	      updatedValue = update(value, object[key]);
	    } else if (typeof value === 'function') {
	      updatedValue = value(object[key]);
	    }
	
	    if (object[key] !== updatedValue) {
	      acc[key] = updatedValue;
	    }
	
	    return acc;
	  }, {});
	}
	
	function updateArray(updates, object) {
	  var newArray = [].concat(object);
	
	  Object.keys(updates).forEach(function (key) {
	    newArray[key] = updates[key];
	  });
	
	  return newArray;
	}
	
	/**
	 * Recursively update an object or array.
	 *
	 * Can update with values:
	 * update({ foo: 3 }, { foo: 1, bar: 2 });
	 * // => { foo: 3, bar: 2 }
	 *
	 * Or with a function:
	 * update({ foo: x => (x + 1) }, { foo: 2 });
	 * // => { foo: 3 }
	 *
	 * @function
	 * @name update
	 * @param {Object|Function} updates
	 * @param {Object|Array}    object to update
	 * @return {Object|Array}   new object with modifications
	 */
	function update(updates, object) {
	  if (typeof updates === 'function') {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    return updates.apply(undefined, [object].concat(args));
	  }
	
	  if (!_lodashLangIsPlainObject2['default'](updates)) {
	    return updates;
	  }
	
	  var defaultedObject = _utilDefaultObject2['default'](object, updates);
	
	  var resolvedUpdates = resolveUpdates(updates, defaultedObject);
	
	  if (_utilIsEmpty2['default'](resolvedUpdates)) {
	    return defaultedObject;
	  }
	
	  if (Array.isArray(defaultedObject)) {
	    return updateArray(resolvedUpdates, defaultedObject);
	  }
	
	  return _extends({}, defaultedObject, resolvedUpdates);
	}
	
	exports['default'] = _wrap2['default'](update, 2);
	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrap;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilCurry = __webpack_require__(252);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	var _freeze = __webpack_require__(201);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function wrap(func) {
	  var length = arguments.length <= 1 || arguments[1] === undefined ? func.length : arguments[1];
	  return (function () {
	    return _utilCurry2['default'](function () {
	      return _freeze2['default'](func.apply(undefined, arguments));
	    }, length);
	  })();
	}
	
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	function isEmpty(object) {
	  return !Object.keys(object).length;
	}
	
	exports["default"] = isEmpty;
	module.exports = exports["default"];

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _isEmpty = __webpack_require__(257);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function isInt(value) {
	  if (isNaN(value)) {
	    return false;
	  }
	  var x = parseFloat(value);
	  return (x | 0) === x;
	}
	
	function isArrayUpdate(updates) {
	  for (var _iterator = Object.keys(updates), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;
	
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }
	
	    var updateKey = _ref;
	
	    if (!isInt(updateKey)) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function arrayOrObject(updates) {
	  if (!_isEmpty2['default'](updates) && isArrayUpdate(updates)) {
	    return [];
	  }
	
	  return {};
	}
	
	function defaultObject(object, updates) {
	  if (typeof object === 'undefined' || object === null) {
	    return arrayOrObject(updates);
	  }
	
	  return object;
	}
	
	exports['default'] = defaultObject;
	module.exports = exports['default'];

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(260),
	    isArguments = __webpack_require__(226),
	    isObjectLike = __webpack_require__(220);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(249),
	    keysIn = __webpack_require__(229);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(255);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _wrap = __webpack_require__(256);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _lodashCollectionForEach = __webpack_require__(262);
	
	var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);
	
	var _lodashCollectionMap = __webpack_require__(265);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	var _lodashObjectMapValues = __webpack_require__(268);
	
	var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);
	
	function shallowEqual(object, otherObject) {
	  var equal = true;
	  _lodashCollectionForEach2['default'](otherObject, function (value, key) {
	    if (value !== object[key]) {
	      equal = false;
	
	      // exit early
	      return false;
	    }
	  });
	
	  return equal;
	}
	
	function map(iteratee, object) {
	  var updater = typeof iteratee === 'function' ? iteratee : _update2['default'](iteratee);
	
	  var mapper = Array.isArray(object) ? _lodashCollectionMap2['default'] : _lodashObjectMapValues2['default'];
	
	  var newObject = mapper(object, updater);
	  var equal = shallowEqual(object, newObject);
	
	  return equal ? object : newObject;
	}
	
	exports['default'] = _wrap2['default'](map);
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(263),
	    baseEach = __webpack_require__(247),
	    createForEach = __webpack_require__(264);
	
	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);
	
	module.exports = forEach;


/***/ },
/* 263 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(242),
	    isArray = __webpack_require__(227);
	
	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}
	
	module.exports = createForEach;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(266),
	    baseCallback = __webpack_require__(206),
	    baseMap = __webpack_require__(267),
	    isArray = __webpack_require__(227);
	
	/**
	 * Creates an array of values by running each element in `collection` through
	 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	 * `sum`, `uniq`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @alias collect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function timesThree(n) {
	 *   return n * 3;
	 * }
	 *
	 * _.map([1, 2], timesThree);
	 * // => [3, 6]
	 *
	 * _.map({ 'a': 1, 'b': 2 }, timesThree);
	 * // => [3, 6] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // using the `_.property` callback shorthand
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee, thisArg) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  iteratee = baseCallback(iteratee, thisArg, 3);
	  return func(collection, iteratee);
	}
	
	module.exports = map;


/***/ },
/* 266 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(247),
	    isArrayLike = __webpack_require__(221);
	
	/**
	 * The base implementation of `_.map` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(269);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(206),
	    baseForOwn = __webpack_require__(248);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashObjectOmit = __webpack_require__(271);
	
	var _lodashObjectOmit2 = _interopRequireDefault(_lodashObjectOmit);
	
	var _wrap = __webpack_require__(256);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function omit(predicate, collection) {
	  return _lodashObjectOmit2['default'](collection, predicate);
	}
	
	exports['default'] = _wrap2['default'](omit);
	module.exports = exports['default'];

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(266),
	    baseDifference = __webpack_require__(272),
	    baseFlatten = __webpack_require__(279),
	    bindCallback = __webpack_require__(242),
	    keysIn = __webpack_require__(229),
	    pickByArray = __webpack_require__(281),
	    pickByCallback = __webpack_require__(282),
	    restParam = __webpack_require__(283);
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to omit, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.omit(object, 'age');
	 * // => { 'user': 'fred' }
	 *
	 * _.omit(object, _.isNumber);
	 * // => { 'user': 'fred' }
	 */
	var omit = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  if (typeof props[0] != 'function') {
	    var props = arrayMap(baseFlatten(props), String);
	    return pickByArray(object, baseDifference(keysIn(object), props));
	  }
	  var predicate = bindCallback(props[0], props[1], 3);
	  return pickByCallback(object, function(value, key, object) {
	    return !predicate(value, key, object);
	  });
	});
	
	module.exports = omit;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(273),
	    cacheIndexOf = __webpack_require__(275),
	    createCache = __webpack_require__(276);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(274);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 274 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(219);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(277),
	    getNative = __webpack_require__(216);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(278),
	    getNative = __webpack_require__(216);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(219);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(280),
	    isArguments = __webpack_require__(226),
	    isArray = __webpack_require__(227),
	    isArrayLike = __webpack_require__(221),
	    isObjectLike = __webpack_require__(220);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 280 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(231);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);
	
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}
	
	module.exports = pickByArray;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(260);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	
	module.exports = pickByCallback;


/***/ },
/* 283 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashCollectionReject = __webpack_require__(204);
	
	var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);
	
	var _wrap = __webpack_require__(256);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function reject(predicate, collection) {
	  return _lodashCollectionReject2['default'](collection, predicate);
	}
	
	exports['default'] = _wrap2['default'](reject);
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilCurry = __webpack_require__(252);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	var _update2 = __webpack_require__(255);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _map = __webpack_require__(261);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _utilSplitPath = __webpack_require__(203);
	
	var _utilSplitPath2 = _interopRequireDefault(_utilSplitPath);
	
	var wildcard = '*';
	
	function reducePath(acc, key) {
	  var _ref;
	
	  if (key === wildcard) {
	    return function (value) {
	      var _update;
	
	      return Object.prototype.hasOwnProperty.call(value, wildcard) ?
	      // If we actually have wildcard as a property, update that
	      _update3['default']((_update = {}, _update[wildcard] = acc, _update), value) :
	      // Otherwise map over all properties
	      _map2['default'](acc, value);
	    };
	  }
	
	  return (_ref = {}, _ref[key] = acc, _ref);
	}
	
	function updateIn(path, value, object) {
	  var parts = _utilSplitPath2['default'](path);
	  var updates = parts.reduceRight(reducePath, value);
	
	  return _update3['default'](updates, object);
	}
	
	exports['default'] = _utilCurry2['default'](updateIn);
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(255);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _utilCurry = __webpack_require__(252);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	function withDefault(defaultValue, updates, object) {
	  if (typeof object === 'undefined') {
	    return _update2['default'](updates, defaultValue);
	  }
	
	  return _update2['default'](updates, object);
	}
	
	exports['default'] = _utilCurry2['default'](withDefault);
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVsaW5lLmpzPzgxYTAiLCJ3ZWJwYWNrOi8vLy4vfi9yYWYvaW5kZXguanM/MDExNyIsIndlYnBhY2s6Ly8vLi9+L3JhZi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzP2UwZmMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzPzZmMGUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGVtbzMvUm9sbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9BdG9tLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2N1cnJ5Ti5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2FyaXR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkxLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnlOLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZGVyaXZlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC9mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3V0aWwvc3BsaXRQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbGxlY3Rpb24vcmVqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3NoaW1LZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9wYWlycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2FycmF5L2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91dGlsaXR5L3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3V0aWwvY3VycnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC9pZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L2lmRWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC91dGlsL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC91dGlsL2RlZmF1bHRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb2xsZWN0aW9uL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZvckVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29sbGVjdGlvbi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3QvbWFwVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZU9iamVjdE1hcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L29taXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5kZXhPZk5hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jYWNoZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY2FjaGVQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC9yZWplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC91cGRhdGVJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3dpdGhEZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQStCLENBQU87Ozs7dUNBQ2YsR0FBYzs7OztLQUUvQixHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUVELGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7O2FBQUcsSUFBSSxFQUFDLHVDQUF1QztXQUM3QztBQUNFLGtCQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzNELGdCQUFHLEVBQUMsd05BQXdOO0FBQzVOLGdCQUFHLEVBQUMsbUJBQW1CO0FBQ3ZCLDZCQUFnQixFQUFDLHVFQUF1RSxHQUFHO1VBQUk7U0FDbkc7O2FBQUssS0FBSyxFQUFFO0FBQ1Ysc0JBQU8sRUFBRSxNQUFNO0FBQ2YseUJBQVUsRUFBRSxRQUFRO0FBQ3BCLDZCQUFjLEVBQUUsUUFBUTtBQUN4QixxQkFBTSxFQUFFLE9BQU87Y0FDZjtXQUNBOzs7YUFDRTs7aUJBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFF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OztBQUVBO0FBQ0EscUMiLCJmaWxlIjoiZGVtbzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb2xsQnV0dG9uIGZyb20gJy4vUm9sbEJ1dHRvbic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC10cmFja1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzAwLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cbiAgICAgICAgICAgICAgPGNvZGU+YnV0dG9uIGluc3BpcmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3ByZWN1cnNvcmFwcC5jb20vXCI+cHJlY3Vyc29yIGFwcDwvYT48L2NvZGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxSb2xsQnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICAgICAgICAgIHN0YXRpY1RleHQ9XCJIdWdcIlxuICAgICAgICAgICAgICAgIGxpc3Q9e1snU29mdGx5JywgJ0JsaW5kbHknLCAnTGF0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAnVHdpY2UnLCAnTG9uZ2luZ2x5JywgJ1JhbmRvbWx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Fsd2F5cycsICdGcmVlbHknLCAnV2FybWx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ0dlbmVyb3VzbHknLCAnRm9yZXZlcicsICdPZnRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICdNb25leScsICdHb2xkJywgJ0Z1bm55JyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ1NjcmFwcHknLCAnU3RlYW1wdW5rJywgJ0luc3RhbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAnSG9tZW1hZGUnLCAnRElZJywgJ0dyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgJ0Z1bicsICdGdW5reScsICdCdXJweSddfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vMy9hcHAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyB0b2RvOiBwcm9wIHR5cGVzICYgZGVmYXVsdCBwcm9wc1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy50aWNrID0gOjp0aGlzLnRpY2s7XG5cbiAgICB0aGlzLmV4cG9zZSA9IHtcbiAgICAgIHBsYXk6IDo6dGhpcy5wbGF5LFxuICAgICAgcGF1c2U6IDo6dGhpcy5wYXVzZSxcbiAgICAgIHNldFBsYXk6IDo6dGhpcy5zZXRQbGF5LFxuICAgICAgc2V0VGltZTogOjp0aGlzLnNldFRpbWUsXG4gICAgICB0b2dnbGVQbGF5OiA6OnRoaXMudG9nZ2xlUGxheVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lOiBwcm9wcy5pbml0aWFsVGltZSB8fCAwLCAvLyB0b2RvOiBkZWZhdWx0UHJvcHNcbiAgICAgIHBsYXlpbmc6ICEhIHByb3BzLnBsYXlPbk1vdW50XG4gICAgfTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgY29uc3Qge3BsYXlpbmcsIHRpbWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh0aW1lID49IHRoaXMucHJvcHMubWF4KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb29wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IHRoaXMucHJvcHMubWlufSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IHRpbWUrMX0pOyAgLy8gdG9kbzogYXJiaXRyYXJ5IGluY3JlbWVudFxuICAgIH1cblxuICAgIGlmIChwbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgfVxuXG4gIHNldFRpbWUodGltZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWV9KTtcbiAgfVxuXG4gIHBsYXkoKSB7IHRoaXMuc2V0UGxheSh0cnVlKSB9XG4gIHBhdXNlKCkgeyB0aGlzLnNldFBsYXkoZmFsc2UpIH1cblxuICBzZXRQbGF5KHBsYXlpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucGxheWluZyAmJiBwbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGxheWluZyB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBsYXkocGxheWluZykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5wbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5aW5nOiAhdGhpcy5zdGF0ZS5wbGF5aW5nfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4udGhpcy5leHBvc2VcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lbGluZS5qc1xuICoqLyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8ge30gOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gZ2xvYmFsWydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSBnbG9iYWxbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IGdsb2JhbFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmFmOyBpKyspIHtcbiAgcmFmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4gKiogbW9kdWxlIGlkID0gMTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWFzZXJ9IGZyb20gJ2Z1bmN0aW9uYWwtZWFzaW5nJztcbmltcG9ydCB7dHdlZW59IGZyb20gJ3JlYWN0LXRyYWNrL3R3ZWVuJztcbmltcG9ydCB7dHJhbnNsYXRlWX0gZnJvbSAncmVhY3QtdHJhY2svdHdlZW4tdmFsdWUtZmFjdG9yaWVzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICdyZWFjdC10cmFjay90aW1lbGluZSc7XG5pbXBvcnQgc3RhdGVmdWwgZnJvbSAncmVhY3Qtc3RhdGVmdWwtc3RyZWFtJztcbmltcG9ydCB7dHJhY2ssIGRlcml2ZX0gZnJvbSAncmVhY3QtZGVyaXZlJztcbmltcG9ydCB1IGZyb20gJ3VwZGVlcCc7XG5jb25zdCBpbW11dGFibGUgPSB1KHt9KTtcblxuY29uc3QgZWFzZU91dEVsYXN0aWMgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LWVsYXN0aWMnKS53aXRoUGFyYW1ldGVycygyLC42KTtcbmNvbnN0IGVhc2VPdXRTaW5lID0gbmV3IEVhc2VyKCkudXNpbmcoJ291dC1zaW5lJyk7XG5cbmNvbnN0IGJvcmRlckNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMS4wKSc7XG5jb25zdCBsaXN0U3R5bGUgPSB7IGNvbG9yOiAnI2NjYycgfTtcblxuQHN0YXRlZnVsKGltbXV0YWJsZSh7XG4gIGlzT3ZlcjogZmFsc2UsXG4gIGN1cnJlbnRJbmRleDogMFxufSkpXG5AZGVyaXZlKHtcbiAgQHRyYWNrKCdjdXJyZW50SW5kZXgnKVxuICBuZXdMaXN0KHtjdXJyZW50SW5kZXgsIGxpc3R9KSB7IC8vIHJlLWFycmFuZ2UgbGlzdFxuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gbGlzdFtjdXJyZW50SW5kZXhdO1xuICAgIHJldHVybiBsaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGN1cnJlbnRJdGVtKVxuICAgICAgICAgICAgICAgLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIC41KTtcbiAgfSxcblxuICBAdHJhY2soJ2N1cnJlbnRJbmRleCcpXG4gIHBhcnRpdGlvbmVkTGlzdCgpIHtcbiAgICByZXR1cm4gWyB0aGlzLm5ld0xpc3QoKS5zbGljZSgwLC0zKSxcbiAgICAgICAgICAgICB0aGlzLm5ld0xpc3QoKS5zbGljZSgtMykgICAgXTtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGxCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICBzdGF0aWNUZXh0LFxuICAgICAgICAgICAgZWRpdCxcbiAgICAgICAgICAgIGlzT3ZlcixcbiAgICAgICAgICAgIGxpc3QsXG4gICAgICAgICAgICBwYXJ0aXRpb25lZExpc3QsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBbdG9wTGlzdCwgYm90dG9tTGlzdF0gPSBwYXJ0aXRpb25lZExpc3Q7XG4gICAgY29uc3QgdXBkYXRlID0gdXBkYXRlcyA9PiBlZGl0KHUodXBkYXRlcykpO1xuICAgIGNvbnN0IGN1cnJlbnRUZXh0ID0gbGlzdFtjdXJyZW50SW5kZXhdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkICcgKyBib3JkZXJDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpc092ZXIgPyBib3JkZXJDb2xvciA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VFbnRlcj17ZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMudGltZWxpbmUuc2V0VGltZSgwKTtcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKTtcbiAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgY3VycmVudEluZGV4OiB+fihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpLFxuICAgICAgICAgICAgaXNPdmVyOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VMZWF2ZT17ZXZlbnQgPT5cbiAgICAgICAgICB1cGRhdGUoe2lzT3ZlcjogZmFsc2V9KX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGNvbG9yOiBpc092ZXIgPyAnYmxhY2snIDogJ3doaXRlJyxcbiAgICAgICAgICB9fT5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgICAgIHtzdGF0aWNUZXh0fSZuYnNwO1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgPFRpbWVsaW5lIHJlZj17cmVmID0+IHRoaXMudGltZWxpbmU9cmVmfSBtYXg9ezUzfT5cbiAgICAgICAgICAgIHsoe3RpbWV9KSA9PlxuICAgICAgICAgICAgICBpc092ZXIgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIC4uLnR3ZWVuKHRpbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAwOiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NTApLCBlYXNlOiBlYXNlT3V0U2luZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIDMwOiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUpLCBlYXNlOiBlYXNlT3V0RWxhc3RpYyB9LFxuICAgICAgICAgICAgICAgICAgICAgIDUwOiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB9LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3BhY2l0eTogdHdlZW4odGltZSwgezA6IDEsIDMwOiAxLCA0MDogMH0pLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAwLCB0ZXh0QWxpZ246ICdsZWZ0J319PlxuICAgICAgICAgICAgICAgICAgICB7dG9wTGlzdC5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xpc3RTdHlsZX0ga2V5PXtpdGVtfT57aXRlbX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0J319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6ICdibGFjaycsIG9wYWNpdHk6IHR3ZWVuKHRpbWUsIHswOjAuNCwgMTg6MC40LCAyMjoxfSl9fT57Y3VycmVudFRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtib3R0b21MaXN0Lm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e29wYWNpdHk6IHR3ZWVuKHRpbWUsIHswOiAxLCAzMDogMSwgNDA6IDB9KSwgLi4ubGlzdFN0eWxlfX0ga2V5PXtpdGVtfT57aXRlbX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9PC9UaW1lbGluZT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtpc092ZXIgPyB7Y29sb3I6ICd0cmFuc3BhcmVudCd9IDoge319PntjdXJyZW50VGV4dH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzMvUm9sbEJ1dHRvbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94MiwgX3gzLCBfeDQpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gyLCBwcm9wZXJ0eSA9IF94MywgcmVjZWl2ZXIgPSBfeDQ7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3gyID0gcGFyZW50OyBfeDMgPSBwcm9wZXJ0eTsgX3g0ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3RhdGVmdWw7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9BdG9tID0gcmVxdWlyZSgnLi9BdG9tJyk7XG5cbnZhciBfQXRvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdG9tKTtcblxudmFyIF9mbHlkID0gcmVxdWlyZSgnZmx5ZCcpO1xuXG5mdW5jdGlvbiBzdGF0ZWZ1bChpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGVkaXRQcm9wTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICdlZGl0JyA6IGFyZ3VtZW50c1sxXTtcblxuICByZXR1cm4gZnVuY3Rpb24gKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhTdGF0ZWZ1bERlY29yYXRvciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhTdGF0ZWZ1bERlY29yYXRvciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ1N0YXRlZnVsKCcgKyBnZXREaXNwbGF5TmFtZShEZWNvcmF0ZWRDb21wb25lbnQpICsgJyknLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1dKTtcblxuICAgICAgZnVuY3Rpb24gU3RhdGVmdWxEZWNvcmF0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlZnVsRGVjb3JhdG9yKTtcblxuICAgICAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGF0ZWZ1bERlY29yYXRvci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB2YXIgc3RhdGUgPSB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbFN0YXRlKHByb3BzLCBjb250ZXh0KSA6IGluaXRpYWxTdGF0ZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0geyBzdGF0ZTogc3RhdGUsIGF0b206IG5ldyBfQXRvbTJbJ2RlZmF1bHQnXShzdGF0ZSkgfTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKFN0YXRlZnVsRGVjb3JhdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgYXRvbSA9IHRoaXMuc3RhdGUuYXRvbTtcblxuICAgICAgICAgIC8vIGNvbm5lY3QgYXRvbSB1cGRhdGVzIHRvIGNvbXBvbmVudCdzIHN0YXRlXG4gICAgICAgICAgKDAsIF9mbHlkLm9uKShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IHN0YXRlOiBzdGF0ZSB9KTtcbiAgICAgICAgICB9LCBhdG9tLmRpZFNldFN0YXRlJCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVbm1vdW50KCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuYXRvbS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICB2YXIgYXRvbSA9IF9zdGF0ZS5hdG9tO1xuICAgICAgICAgIHZhciBzdGF0ZSA9IF9zdGF0ZS5zdGF0ZTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGF0b206IGF0b21cbiAgICAgICAgICB9LCB0aGlzLnByb3BzLCBzdGF0ZSwgX2RlZmluZVByb3BlcnR5KHt9LCBlZGl0UHJvcE5hbWUsIGF0b20udXBkYXRlU3RhdGUpKSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFN0YXRlZnVsRGVjb3JhdG9yO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfZmx5ZCA9IHJlcXVpcmUoJ2ZseWQnKTtcblxudmFyIEF0b20gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdG9tKHN0YXRlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF0b20pO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgLy8gZGlyZWN0bHktdXBkYXRlZCBzdGF0ZSwgdXNlZCB0byB1cGRhdGUgXCJ3YXRjaGVyXCIgQXBwIGNvbXBvbmVudFxuICAgIHRoaXMuZGlkU2V0U3RhdGUkID0gKDAsIF9mbHlkLnN0cmVhbSkoKTtcblxuICAgIC8vIHVzZWQgdG8gaW5kaWNhdGUgXCJ1c2VyXCIgdXBkYXRlXG4gICAgdGhpcy5kaWRVcGRhdGVTdGF0ZSQgPSAoMCwgX2ZseWQuc3RyZWFtKSgpO1xuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lsZW50bHlVcGRhdGVTdGF0ZSA9IHRoaXMuc2lsZW50bHlVcGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEF0b20sIFt7XG4gICAga2V5OiAnX3NldFN0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFN0YXRlKHN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaWRTZXRTdGF0ZSQodGhpcy5zdGF0ZSA9IHN0YXRlKS52YWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lsZW50bHlVcGRhdGVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpbGVudGx5VXBkYXRlU3RhdGUodHJhbnNmb3JtKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0U3RhdGUodHJhbnNmb3JtKHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlkVXBkYXRlU3RhdGUkKHRoaXMuX3NldFN0YXRlKHRyYW5zZm9ybSh0aGlzLnN0YXRlKSkpLnZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuZGlkU2V0U3RhdGUkLmVuZCh0cnVlKTtcbiAgICAgIHRoaXMuZGlkVXBkYXRlU3RhdGUkLmVuZCh0cnVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXRvbTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEF0b207XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vQXRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGN1cnJ5TiA9IHJlcXVpcmUoJ3JhbWRhL3NyYy9jdXJyeU4nKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xufVxuXG4vLyBHbG9iYWxzXG52YXIgdG9VcGRhdGUgPSBbXTtcbnZhciBpblN0cmVhbTtcblxuZnVuY3Rpb24gbWFwKGYsIHMpIHtcbiAgcmV0dXJuIHN0cmVhbShbc10sIGZ1bmN0aW9uKHNlbGYpIHsgc2VsZihmKHMudmFsKSk7IH0pO1xufVxuXG5mdW5jdGlvbiBvbihmLCBzKSB7XG4gIHN0cmVhbShbc10sIGZ1bmN0aW9uKCkgeyBmKHMudmFsKTsgfSk7XG59XG5cbmZ1bmN0aW9uIGJvdW5kTWFwKGYpIHsgcmV0dXJuIG1hcChmLCB0aGlzKTsgfVxuXG52YXIgc2NhbiA9IGN1cnJ5TigzLCBmdW5jdGlvbihmLCBhY2MsIHMpIHtcbiAgdmFyIG5zID0gc3RyZWFtKFtzXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChhY2MgPSBmKGFjYywgcygpKSk7XG4gIH0pO1xuICBpZiAoIW5zLmhhc1ZhbCkgbnMoYWNjKTtcbiAgcmV0dXJuIG5zO1xufSk7XG5cbnZhciBtZXJnZSA9IGN1cnJ5TigyLCBmdW5jdGlvbihzMSwgczIpIHtcbiAgdmFyIHMgPSBpbW1lZGlhdGUoc3RyZWFtKFtzMSwgczJdLCBmdW5jdGlvbihuLCBjaGFuZ2VkKSB7XG4gICAgcmV0dXJuIGNoYW5nZWRbMF0gPyBjaGFuZ2VkWzBdKClcbiAgICAgICAgIDogczEuaGFzVmFsICA/IHMxKClcbiAgICAgICAgICAgICAgICAgICAgICA6IHMyKCk7XG4gIH0pKTtcbiAgZW5kc09uKHN0cmVhbShbczEuZW5kLCBzMi5lbmRdLCBmdW5jdGlvbihzZWxmLCBjaGFuZ2VkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pLCBzKTtcbiAgcmV0dXJuIHM7XG59KTtcblxuZnVuY3Rpb24gYXAoczIpIHtcbiAgdmFyIHMxID0gdGhpcztcbiAgcmV0dXJuIHN0cmVhbShbczEsIHMyXSwgZnVuY3Rpb24oKSB7IHJldHVybiBzMSgpKHMyKCkpOyB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbERlcHNOb3RNZXQoc3RyZWFtKSB7XG4gIHN0cmVhbS5kZXBzTWV0ID0gc3RyZWFtLmRlcHMuZXZlcnkoZnVuY3Rpb24ocykge1xuICAgIHJldHVybiBzLmhhc1ZhbDtcbiAgfSk7XG4gIHJldHVybiAhc3RyZWFtLmRlcHNNZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0cmVhbShzKSB7XG4gIGlmICgocy5kZXBzTWV0ICE9PSB0cnVlICYmIGluaXRpYWxEZXBzTm90TWV0KHMpKSB8fFxuICAgICAgKHMuZW5kICE9PSB1bmRlZmluZWQgJiYgcy5lbmQudmFsID09PSB0cnVlKSkgcmV0dXJuO1xuICBpZiAoaW5TdHJlYW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRvVXBkYXRlLnB1c2gocyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGluU3RyZWFtID0gcztcbiAgdmFyIHJldHVyblZhbCA9IHMuZm4ocywgcy5kZXBzQ2hhbmdlZCk7XG4gIGlmIChyZXR1cm5WYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHMocmV0dXJuVmFsKTtcbiAgfVxuICBpblN0cmVhbSA9IHVuZGVmaW5lZDtcbiAgaWYgKHMuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkgcy5kZXBzQ2hhbmdlZCA9IFtdO1xuICBzLnNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICBpZiAoZmx1c2hpbmcgPT09IGZhbHNlKSBmbHVzaFVwZGF0ZSgpO1xufVxuXG52YXIgb3JkZXIgPSBbXTtcbnZhciBvcmRlck5leHRJZHggPSAtMTtcblxuZnVuY3Rpb24gZmluZERlcHMocykge1xuICB2YXIgaSwgbGlzdGVuZXJzID0gcy5saXN0ZW5lcnM7XG4gIGlmIChzLnF1ZXVlZCA9PT0gZmFsc2UpIHtcbiAgICBzLnF1ZXVlZCA9IHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgZmluZERlcHMobGlzdGVuZXJzW2ldKTtcbiAgICB9XG4gICAgb3JkZXJbKytvcmRlck5leHRJZHhdID0gcztcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVEZXBzKHMpIHtcbiAgdmFyIGksIG8sIGxpc3QsIGxpc3RlbmVycyA9IHMubGlzdGVuZXJzO1xuICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgbGlzdCA9IGxpc3RlbmVyc1tpXTtcbiAgICBpZiAobGlzdC5lbmQgPT09IHMpIHtcbiAgICAgIGVuZFN0cmVhbShsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxpc3QuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkgbGlzdC5kZXBzQ2hhbmdlZC5wdXNoKHMpO1xuICAgICAgbGlzdC5zaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgZmluZERlcHMobGlzdCk7XG4gICAgfVxuICB9XG4gIGZvciAoOyBvcmRlck5leHRJZHggPj0gMDsgLS1vcmRlck5leHRJZHgpIHtcbiAgICBvID0gb3JkZXJbb3JkZXJOZXh0SWR4XTtcbiAgICBpZiAoby5zaG91bGRVcGRhdGUgPT09IHRydWUpIHVwZGF0ZVN0cmVhbShvKTtcbiAgICBvLnF1ZXVlZCA9IGZhbHNlO1xuICB9XG59XG5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaFVwZGF0ZSgpIHtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB3aGlsZSAodG9VcGRhdGUubGVuZ3RoID4gMCkge1xuICAgIHZhciBzID0gdG9VcGRhdGUuc2hpZnQoKTtcbiAgICBpZiAocy52YWxzLmxlbmd0aCA+IDApIHMudmFsID0gcy52YWxzLnNoaWZ0KCk7XG4gICAgdXBkYXRlRGVwcyhzKTtcbiAgfVxuICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1N0cmVhbShzdHJlYW0pIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oc3RyZWFtKSAmJiAnaGFzVmFsJyBpbiBzdHJlYW07XG59XG5cbmZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKCkge1xuICByZXR1cm4gJ3N0cmVhbSgnICsgdGhpcy52YWwgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0cmVhbVZhbHVlKHMsIG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCAmJiBuICE9PSBudWxsICYmIGlzRnVuY3Rpb24obi50aGVuKSkge1xuICAgIG4udGhlbihzKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcy52YWwgPSBuO1xuICBzLmhhc1ZhbCA9IHRydWU7XG4gIGlmIChpblN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIHVwZGF0ZURlcHMocyk7XG4gICAgaWYgKHRvVXBkYXRlLmxlbmd0aCA+IDApIGZsdXNoVXBkYXRlKCk7IGVsc2UgZmx1c2hpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpblN0cmVhbSA9PT0gcykge1xuICAgIG1hcmtMaXN0ZW5lcnMocywgcy5saXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIHMudmFscy5wdXNoKG4pO1xuICAgIHRvVXBkYXRlLnB1c2gocyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0xpc3RlbmVycyhzLCBsaXN0cykge1xuICB2YXIgaSwgbGlzdDtcbiAgZm9yIChpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgKytpKSB7XG4gICAgbGlzdCA9IGxpc3RzW2ldO1xuICAgIGlmIChsaXN0LmVuZCAhPT0gcykge1xuICAgICAgaWYgKGxpc3QuZGVwc0NoYW5nZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaXN0LmRlcHNDaGFuZ2VkLnB1c2gocyk7XG4gICAgICB9XG4gICAgICBsaXN0LnNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZFN0cmVhbShsaXN0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKCkge1xuICBmdW5jdGlvbiBzKG4pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyAodXBkYXRlU3RyZWFtVmFsdWUocywgbiksIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcy52YWw7XG4gIH1cbiAgcy5oYXNWYWwgPSBmYWxzZTtcbiAgcy52YWwgPSB1bmRlZmluZWQ7XG4gIHMudmFscyA9IFtdO1xuICBzLmxpc3RlbmVycyA9IFtdO1xuICBzLnF1ZXVlZCA9IGZhbHNlO1xuICBzLmVuZCA9IHVuZGVmaW5lZDtcblxuICBzLm1hcCA9IGJvdW5kTWFwO1xuICBzLmFwID0gYXA7XG4gIHMub2YgPSBzdHJlYW07XG4gIHMudG9TdHJpbmcgPSBzdHJlYW1Ub1N0cmluZztcblxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGRlcHMsIHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXBzLmxlbmd0aDsgKytpKSB7XG4gICAgZGVwc1tpXS5saXN0ZW5lcnMucHVzaChzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbnRTdHJlYW0oZGVwcywgZm4pIHtcbiAgdmFyIHMgPSBjcmVhdGVTdHJlYW0oKTtcbiAgcy5mbiA9IGZuO1xuICBzLmRlcHMgPSBkZXBzO1xuICBzLmRlcHNNZXQgPSBmYWxzZTtcbiAgcy5kZXBzQ2hhbmdlZCA9IGZuLmxlbmd0aCA+IDEgPyBbXSA6IHVuZGVmaW5lZDtcbiAgcy5zaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgYWRkTGlzdGVuZXJzKGRlcHMsIHMpO1xuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gaW1tZWRpYXRlKHMpIHtcbiAgaWYgKHMuZGVwc01ldCA9PT0gZmFsc2UpIHtcbiAgICBzLmRlcHNNZXQgPSB0cnVlO1xuICAgIHVwZGF0ZVN0cmVhbShzKTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIocywgbGlzdGVuZXJzKSB7XG4gIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihzKTtcbiAgbGlzdGVuZXJzW2lkeF0gPSBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdO1xuICBsaXN0ZW5lcnMubGVuZ3RoLS07XG59XG5cbmZ1bmN0aW9uIGRldGFjaERlcHMocykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHMuZGVwcy5sZW5ndGg7ICsraSkge1xuICAgIHJlbW92ZUxpc3RlbmVyKHMsIHMuZGVwc1tpXS5saXN0ZW5lcnMpO1xuICB9XG4gIHMuZGVwcy5sZW5ndGggPSAwO1xufVxuXG5mdW5jdGlvbiBlbmRTdHJlYW0ocykge1xuICBpZiAocy5kZXBzICE9PSB1bmRlZmluZWQpIGRldGFjaERlcHMocyk7XG4gIGlmIChzLmVuZCAhPT0gdW5kZWZpbmVkKSBkZXRhY2hEZXBzKHMuZW5kKTtcbn1cblxuZnVuY3Rpb24gZW5kc09uKGVuZFMsIHMpIHtcbiAgZGV0YWNoRGVwcyhzLmVuZCk7XG4gIGVuZFMubGlzdGVuZXJzLnB1c2gocy5lbmQpO1xuICBzLmVuZC5kZXBzLnB1c2goZW5kUyk7XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB0cnVlRm4oKSB7IHJldHVybiB0cnVlOyB9XG5cbmZ1bmN0aW9uIHN0cmVhbShhcmcsIGZuKSB7XG4gIHZhciBpLCBzLCBkZXBzLCBkZXBFbmRTdHJlYW1zO1xuICB2YXIgZW5kU3RyZWFtID0gY3JlYXRlRGVwZW5kZW50U3RyZWFtKFtdLCB0cnVlRm4pO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBkZXBzID0gW107IGRlcEVuZFN0cmVhbXMgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoYXJnW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVwcy5wdXNoKGFyZ1tpXSk7XG4gICAgICAgIGlmIChhcmdbaV0uZW5kICE9PSB1bmRlZmluZWQpIGRlcEVuZFN0cmVhbXMucHVzaChhcmdbaV0uZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcyA9IGNyZWF0ZURlcGVuZGVudFN0cmVhbShkZXBzLCBmbik7XG4gICAgcy5lbmQgPSBlbmRTdHJlYW07XG4gICAgZW5kU3RyZWFtLmxpc3RlbmVycy5wdXNoKHMpO1xuICAgIGFkZExpc3RlbmVycyhkZXBFbmRTdHJlYW1zLCBlbmRTdHJlYW0pO1xuICAgIGVuZFN0cmVhbS5kZXBzID0gZGVwRW5kU3RyZWFtcztcbiAgICB1cGRhdGVTdHJlYW0ocyk7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGNyZWF0ZVN0cmVhbSgpO1xuICAgIHMuZW5kID0gZW5kU3RyZWFtO1xuICAgIGVuZFN0cmVhbS5saXN0ZW5lcnMucHVzaChzKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkgcyhhcmcpO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG52YXIgdHJhbnNkdWNlID0gY3VycnlOKDIsIGZ1bmN0aW9uKHhmb3JtLCBzb3VyY2UpIHtcbiAgeGZvcm0gPSB4Zm9ybShuZXcgU3RyZWFtVHJhbnNmb3JtZXIoKSk7XG4gIHJldHVybiBzdHJlYW0oW3NvdXJjZV0sIGZ1bmN0aW9uKHNlbGYpIHtcbiAgICB2YXIgcmVzID0geGZvcm1bJ0BAdHJhbnNkdWNlci9zdGVwJ10odW5kZWZpbmVkLCBzb3VyY2UoKSk7XG4gICAgaWYgKHJlcyAmJiByZXNbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10gPT09IHRydWUpIHtcbiAgICAgIHNlbGYuZW5kKHRydWUpO1xuICAgICAgcmV0dXJuIHJlc1snQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBTdHJlYW1UcmFuc2Zvcm1lcigpIHsgfVxuU3RyZWFtVHJhbnNmb3JtZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gZnVuY3Rpb24oKSB7IH07XG5TdHJlYW1UcmFuc2Zvcm1lci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IGZ1bmN0aW9uKCkgeyB9O1xuU3RyZWFtVHJhbnNmb3JtZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocywgdikgeyByZXR1cm4gdjsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0cmVhbTogc3RyZWFtLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIHRyYW5zZHVjZTogdHJhbnNkdWNlLFxuICBtZXJnZTogbWVyZ2UsXG4gIHNjYW46IHNjYW4sXG4gIGVuZHNPbjogZW5kc09uLFxuICBtYXA6IGN1cnJ5TigyLCBtYXApLFxuICBvbjogY3VycnlOKDIsIG9uKSxcbiAgY3VycnlOOiBjdXJyeU4sXG4gIGltbWVkaWF0ZTogaW1tZWRpYXRlLFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9jdXJyeU4gPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLCB3aXRoIHRoZVxuICogc3BlY2lmaWVkIGFyaXR5LiBUaGUgY3VycmllZCBmdW5jdGlvbiBoYXMgdHdvIHVudXN1YWwgY2FwYWJpbGl0aWVzLlxuICogRmlyc3QsIGl0cyBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmUgYXQgYSB0aW1lLiBJZiBgZ2AgaXNcbiAqIGBSLmN1cnJ5TigzLCBmKWAsIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBgUi5fX2AgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBgUi5fX2AsXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKCogLT4gYSkgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IGZvciB0aGUgcmV0dXJuZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWRkRm91ck51bWJlcnMgPSBmdW5jdGlvbigpIHtcbiAqICAgICAgICByZXR1cm4gUi5zdW0oW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIDQpKTtcbiAqICAgICAgfTtcbiAqXG4gKiAgICAgIHZhciBjdXJyaWVkQWRkRm91ck51bWJlcnMgPSBSLmN1cnJ5Tig0LCBhZGRGb3VyTnVtYmVycyk7XG4gKiAgICAgIHZhciBmID0gY3VycmllZEFkZEZvdXJOdW1iZXJzKDEsIDIpO1xuICogICAgICB2YXIgZyA9IGYoMyk7XG4gKiAgICAgIGcoNCk7IC8vPT4gMTBcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGN1cnJ5TihsZW5ndGgsIGZuKSB7XG4gIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gX2N1cnJ5MShmbik7XG4gIH1cbiAgcmV0dXJuIF9hcml0eShsZW5ndGgsIF9jdXJyeU4obGVuZ3RoLCBbXSwgZm4pKTtcbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9jdXJyeU4uanNcbiAqKiBtb2R1bGUgaWQgPSAxOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2FyaXR5KG4sIGZuKSB7XG4gIC8vIGpzaGludCB1bnVzZWQ6dmFyc1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYTApIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA3OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgOTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxMDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gX2FyaXR5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciBubyBncmVhdGVyIHRoYW4gdGVuJyk7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19hcml0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgdHdvLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkxKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMShhKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmMTtcbiAgICB9IGVsc2UgaWYgKGEgIT0gbnVsbCAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkxLmpzXG4gKiogbW9kdWxlIGlkID0gMTk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHR3by1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5Mihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjIoYSwgYikge1xuICAgIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYyO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMSAmJiBhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmMjtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDEpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYSAhPSBudWxsICYmIGFbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGIgIT0gbnVsbCAmJiBiWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGYyO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMiAmJiBhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIgJiYgYiAhPSBudWxsICYmIGJbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gX2N1cnJ5MShmdW5jdGlvbihiKSB7IHJldHVybiBmbihhLCBiKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmbihhLCBiKTtcbiAgICB9XG4gIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fY3VycnkyLmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9fYXJpdHknKTtcblxuXG4vKipcbiAqIEludGVybmFsIGN1cnJ5TiBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBvZiB0aGUgY3VycmllZCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2FycmF5fSBBbiBhcnJheSBvZiBhcmd1bWVudHMgcmVjZWl2ZWQgdGh1cyBmYXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5TihsZW5ndGgsIHJlY2VpdmVkLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gW107XG4gICAgdmFyIGFyZ3NJZHggPSAwO1xuICAgIHZhciBsZWZ0ID0gbGVuZ3RoO1xuICAgIHZhciBjb21iaW5lZElkeCA9IDA7XG4gICAgd2hpbGUgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoIHx8IGFyZ3NJZHggPCBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoICYmXG4gICAgICAgICAgKHJlY2VpdmVkW2NvbWJpbmVkSWR4XSA9PSBudWxsIHx8XG4gICAgICAgICAgIHJlY2VpdmVkW2NvbWJpbmVkSWR4XVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gIT09IHRydWUgfHxcbiAgICAgICAgICAgYXJnc0lkeCA+PSBhcmd1bWVudHMubGVuZ3RoKSkge1xuICAgICAgICByZXN1bHQgPSByZWNlaXZlZFtjb21iaW5lZElkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhcmd1bWVudHNbYXJnc0lkeF07XG4gICAgICAgIGFyZ3NJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkW2NvbWJpbmVkSWR4XSA9IHJlc3VsdDtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHRbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddICE9PSB0cnVlKSB7XG4gICAgICAgIGxlZnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkSWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0IDw9IDAgPyBmbi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBfYXJpdHkobGVmdCwgX2N1cnJ5TihsZW5ndGgsIGNvbWJpbmVkLCBmbikpO1xuICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Ti5qc1xuICoqIG1vZHVsZSBpZCA9IDE5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gzLCBfeDQsIF94NSkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDMsIHByb3BlcnR5ID0gX3g0LCByZWNlaXZlciA9IF94NTsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDMgPSBwYXJlbnQ7IF94NCA9IHByb3BlcnR5OyBfeDUgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5leHBvcnRzLmRlcml2ZSA9IGRlcml2ZTtcbmV4cG9ydHMudHJhY2sgPSB0cmFjaztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBCTE9DS0VEID0ge307XG5cbnZhciBnbG9iYWxPcHRpb25zID0geyBkZWJ1ZzogZmFsc2UgfTtcblxuZXhwb3J0cy5nbG9iYWxPcHRpb25zID0gZ2xvYmFsT3B0aW9ucztcbi8qKlxuICogIyMgZGVyaXZlXG4gKlxuICogQ3JlYXRlIGEgZGVyaXZlZCBkYXRhIGhpZ2hlci1vcmRlciBjb21wb25lbnQgKEhvQykuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtCb29sZWFufSBkZWJ1ZyAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gZGVyaXZlKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERlcml2ZURlY29yYXRvciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIERlcml2ZURlY29yYXRvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlcml2ZURlY29yYXRvcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGVyaXZlRGVjb3JhdG9yLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEZXJpdmVEZWNvcmF0b3IsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5kZXJpdmVkUHJvcHMgPSBkZXJpdmVQcm9wcyhvcHRpb25zLCB7fSwgdGhpcy5wcm9wcywge30pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgICB0aGlzLmRlcml2ZWRQcm9wcyA9IGRlcml2ZVByb3BzKG9wdGlvbnMsIHRoaXMucHJvcHMsIG5leHRQcm9wcywgdGhpcy5kZXJpdmVkUHJvcHMgfHwge30pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgdGhpcy5kZXJpdmVkUHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0Rlcml2ZSgnICsgZ2V0RGlzcGxheU5hbWUoRGVjb3JhdGVkQ29tcG9uZW50KSArICcpJyxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBEZXJpdmVEZWNvcmF0b3I7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbi8vIGBkZXJpdmVQcm9wc2AgdGFrZXMgcHJvcHMgZnJvbSB0aGUgcHJldmlvdXMgcmVuZGVyIChgcHJldlByb3BzYCwgYGRlcml2ZWRQcm9wc2ApLFxuLy8gYW5kIHByb3BzIGZyb20gdGhlIGN1cnJlbnQgcmVuZGVyIChgbmV4dFByb3BzYCkgYW5kIGNhbGN1bGF0ZXMgdGhlIG5leHQgZGVyaXZlZCBwcm9wcy5cbmZ1bmN0aW9uIGRlcml2ZVByb3BzKG9wdGlvbnMsIHByZXZQcm9wcywgbmV4dFByb3BzLCBkZXJpdmVkUHJvcHMpIHtcbiAgdmFyIG5leHREZXJpdmVkUHJvcHMgPSB7fTtcblxuICB2YXIgY2FsY0Rlcml2ZWRQcm9wID0gZnVuY3Rpb24gY2FsY0Rlcml2ZWRQcm9wKGtleSwgeGYpIHtcblxuICAgIC8vIFdoZW4gYHhmYCBpcyBhbm5vdGF0ZWQgd2l0aCBgdHJhY2tlZFByb3BzYCAoYnkgYEB0cmFja2ApLCBvbmx5IHJlLWNhbGN1bGF0ZVxuICAgIC8vIGRlcml2ZWQgcHJvcHMgd2hlbiB0aGUgdHJhY2tlZCBwcm9wcyBjaGFuZ2VkLlxuICAgIGlmICh4Zi50cmFja2VkUHJvcHMgJiYgeGYudHJhY2tlZFByb3BzLmV2ZXJ5KGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcHJldlByb3BzW3BdID09PSBuZXh0UHJvcHNbcF07XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBkZXJpdmVkUHJvcHNba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsT3B0aW9ucy5kZWJ1ZykgY29uc29sZS5sb2coJ1JlY2FsY3VsYXRpbmcgZGVyaXZlZCBwcm9wIFxcJycgKyBrZXkgKyAnXFwnJyk7XG4gICAgcmV0dXJuIHhmLmNhbGwoZGVsZWdhdGVzLCBuZXh0UHJvcHMsIGRlcml2ZWRQcm9wcyk7XG4gIH07XG5cbiAgLy8gYGRlbGVnYXRlc2AgaXMgdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlIGB0aGlzYCBPYmplY3RcbiAgLy8gb2YgZGVyaXZlciAoYHhmYCkgZnVuY3Rpb25zLiAoc2VlIGB4Zi5jYWxsKGRlbGVnYXRlcy4uLilgIGFib3ZlKVxuICB2YXIgZGVsZWdhdGVzID0gbWFwLmNhbGwob3B0aW9ucywgZnVuY3Rpb24gKHhmLCBrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFuZXh0RGVyaXZlZFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbmV4dERlcml2ZWRQcm9wc1trZXldID0gQkxPQ0tFRDtcbiAgICAgICAgcmV0dXJuIG5leHREZXJpdmVkUHJvcHNba2V5XSA9IGNhbGNEZXJpdmVkUHJvcChrZXksIHhmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0RGVyaXZlZFByb3BzW2tleV0gPT09IEJMT0NLRUQpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgZGVwZW5kZW5jaWVzIGluIGRlcml2ZWQgcHJvcHMsIFxcJycgKyBrZXkgKyAnXFwnIHdhcyBibG9ja2VkLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0RGVyaXZlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFuZXh0RGVyaXZlZFByb3BzLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAvLyBjYWxjdWxhdGUgZGVyaXZlZCBwcm9wXG4gICAgICBuZXh0RGVyaXZlZFByb3BzW2tleV0gPSBjYWxjRGVyaXZlZFByb3Aoa2V5LCBvcHRpb25zW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG5leHRQcm9wcywgbmV4dERlcml2ZWRQcm9wcyk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKGNvbXApIHtcbiAgcmV0dXJuIGNvbXAuZGlzcGxheU5hbWUgfHwgY29tcC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBtYXAgYW4gb2JqZWN0IHRvIGFuIG9iamVjdFxuZnVuY3Rpb24gbWFwKGYpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgcmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgT2JqZWN0LmtleXModGhpcykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiByZXN1bHRba10gPSBmKF90aGlzW2tdLCBrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogIyMgdHJhY2tcbiAqXG4gKiBPYmplY3QgbGl0ZXJhbCBkZWNvcmF0b3IgdGhhdCBhbm5vdGF0ZXMgYSBtYXBwZXIgZnVuY3Rpb25cbiAqIHRvIGhhdmUgYSAndHJhY2tlZFByb3BzJyBwcm9wZXJ0eS4gVXNlZCBieSBgQGRlcml2ZWAgdG8gbWVtb2l6ZVxuICogcHJvcHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmcuLi59IHRyYWNrZWRQcm9wc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gdHJhY2soKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFja2VkUHJvcHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFja2VkUHJvcHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgIC8vIEVTNyBkZWNvcmF0b3JcbiAgICAgIGRlc2NyaXB0b3IudmFsdWUudHJhY2tlZFByb3BzID0gdHJhY2tlZFByb3BzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFUzZcbiAgICAgIHRhcmdldC50cmFja2VkUHJvcHMgPSB0cmFja2VkUHJvcHM7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiAjIyBEZXJpdmVcbiAqXG4gKiBgQGRlcml2ZWAgYXMgYSBjb21wb25lbnQuXG4gKiBAcHJvcCB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxudmFyIERlcml2ZSA9IChmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKERlcml2ZSwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIERlcml2ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVyaXZlKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKERlcml2ZS5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERlcml2ZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLmRlcml2ZWRQcm9wcyA9IGRlcml2ZVByb3BzKHRoaXMucHJvcHMub3B0aW9ucywge30sIHRoaXMucHJvcHMsIHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuZGVyaXZlZFByb3BzID0gZGVyaXZlUHJvcHMobmV4dFByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMsIG5leHRQcm9wcywgdGhpcy5kZXJpdmVkUHJvcHMgfHwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuZGVyaXZlZFByb3BzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERlcml2ZTtcbn0pKF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLkRlcml2ZSA9IERlcml2ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kZXJpdmUvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKTtcblxudmFyIF9jb25zdGFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25zdGFudCk7XG5cbnZhciBfZnJlZXplID0gcmVxdWlyZSgnLi9mcmVlemUnKTtcblxudmFyIF9mcmVlemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJlZXplKTtcblxudmFyIF9pcyA9IHJlcXVpcmUoJy4vaXMnKTtcblxudmFyIF9pczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pcyk7XG5cbnZhciBfaWYyID0gcmVxdWlyZSgnLi9pZicpO1xuXG52YXIgX2lmMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lmMik7XG5cbnZhciBfaWZFbHNlID0gcmVxdWlyZSgnLi9pZkVsc2UnKTtcblxudmFyIF9pZkVsc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaWZFbHNlKTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX29taXQgPSByZXF1aXJlKCcuL29taXQnKTtcblxudmFyIF9vbWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29taXQpO1xuXG52YXIgX3JlamVjdCA9IHJlcXVpcmUoJy4vcmVqZWN0Jyk7XG5cbnZhciBfcmVqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlamVjdCk7XG5cbnZhciBfdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKTtcblxudmFyIF91cGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXBkYXRlKTtcblxudmFyIF91cGRhdGVJbiA9IHJlcXVpcmUoJy4vdXBkYXRlSW4nKTtcblxudmFyIF91cGRhdGVJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGVJbik7XG5cbnZhciBfd2l0aERlZmF1bHQgPSByZXF1aXJlKCcuL3dpdGhEZWZhdWx0Jyk7XG5cbnZhciBfd2l0aERlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aERlZmF1bHQpO1xuXG52YXIgX3V0aWxDdXJyeSA9IHJlcXVpcmUoJy4vdXRpbC9jdXJyeScpO1xuXG52YXIgdSA9IF91cGRhdGUyWydkZWZhdWx0J107XG5cbnUuXyA9IF91dGlsQ3VycnkuXztcbnUuY29uc3RhbnQgPSBfY29uc3RhbnQyWydkZWZhdWx0J107XG51WydpZiddID0gX2lmM1snZGVmYXVsdCddO1xudS5pZkVsc2UgPSBfaWZFbHNlMlsnZGVmYXVsdCddO1xudS5pcyA9IF9pczJbJ2RlZmF1bHQnXTtcbnUuZnJlZXplID0gX2ZyZWV6ZTJbJ2RlZmF1bHQnXTtcbnUubWFwID0gX21hcDJbJ2RlZmF1bHQnXTtcbnUub21pdCA9IF9vbWl0MlsnZGVmYXVsdCddO1xudS5yZWplY3QgPSBfcmVqZWN0MlsnZGVmYXVsdCddO1xudS51cGRhdGUgPSBfdXBkYXRlMlsnZGVmYXVsdCddO1xudS51cGRhdGVJbiA9IF91cGRhdGVJbjJbJ2RlZmF1bHQnXTtcbnUud2l0aERlZmF1bHQgPSBfd2l0aERlZmF1bHQyWydkZWZhdWx0J107XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZnJlZXplID0gcmVxdWlyZSgnLi9mcmVlemUnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyB0aGUgc3VwcGxpZWQgdmFsdWUuXG4gKlxuICogVXNlZnVsIGZvciByZXBsYWNpbmcgYW4gb2JqZWN0IG91dHJpZ2h0IHJhdGhlciB0aGFuIG1lcmdpbmcgaXQuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAc2lnIGEgLT4gKCogLT4gYSlcbiAqIEBtZW1iZXJPZiB1XG4gKiBAcGFyYW0gIHsqfSB2YWx1ZSB3aGF0IHRvIHJldHVybiBmcm9tIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHJldHVybiB7ZnVuY3Rpb259IGEgbmV3IGZ1bmN0aW9uIHRoYXQgd2lsbCBhbHdheXMgcmV0dXJuIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgYWx3YXlzRm91ciA9IHUuY29uc3RhbnQoNCk7XG4gKiBleHBlY3QoYWx3YXlzRm91cigzMikpLnRvRXF1YWwoNCk7XG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciB1c2VyID0ge1xuICogICBuYW1lOiAnTWl0Y2gnLFxuICogICBmYXZvcml0ZXM6IHtcbiAqICAgICBiYW5kOiAnTmlydmFuYScsXG4gKiAgICAgbW92aWU6ICdUaGUgTWF0cml4J1xuICogICB9XG4gKiB9O1xuICpcbiAqIHZhciBuZXdGYXZvcml0ZXMgPSB7XG4gKiAgIGJhbmQ6ICdDb2xkcGxheSdcbiAqIH07XG4gKlxuICogdmFyIHJlc3VsdCA9IHUoeyBmYXZvcml0ZXM6IHUuY29uc3RhbnQobmV3RmF2b3JpdGVzKSB9LCB1c2VyKTtcbiAqXG4gKiBleHBlY3QocmVzdWx0KS50b0VxdWFsKHsgbmFtZTogJ01pdGNoJywgZmF2b3JpdGVzOiB7IGJhbmQ6ICdDb2xkcGxheScgfSB9KTtcbiAqL1xuXG52YXIgX2ZyZWV6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcmVlemUpO1xuXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICB2YXIgZnJvemVuID0gX2ZyZWV6ZTJbJ2RlZmF1bHQnXSh2YWx1ZSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZyb3plbjtcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29uc3RhbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9jb25zdGFudC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gaXNGcmVlemFibGUob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmplY3QpIHx8IHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBuZWVkc0ZyZWV6aW5nKG9iamVjdCkge1xuICByZXR1cm4gaXNGcmVlemFibGUob2JqZWN0KSAmJiAhT2JqZWN0LmlzRnJvemVuKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlY3VyKG9iamVjdCkge1xuICBPYmplY3QuZnJlZXplKG9iamVjdCk7XG5cbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICBpZiAobmVlZHNGcmVlemluZyh2YWx1ZSkpIHtcbiAgICAgIHJlY3VyKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogRGVlcGx5IGZyZWV6ZSBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0LlxuICpcbiAqIElmIGBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nYCwgdGhpcyByZXR1cm5zIHRoZSBvcmlnaW5hbCBvYmplY3RcbiAqIHdpdG91dCBmcmVlemluZy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaWcgYSAtPiBhXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9iamVjdCBPYmplY3QgdG8gZnJlZXplLlxuICogQHJldHVybiB7b2JqZWN0fSBGcm96ZW4gb2JqZWN0LCB1bmxlc3MgaW4gcHJvZHVjdGlvbiwgdGhlbiB0aGUgc2FtZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZyZWV6ZShvYmplY3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaWYgKG5lZWRzRnJlZXppbmcob2JqZWN0KSkge1xuICAgIHJlY3VyKG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmcmVlemU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9mcmVlemUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxTcGxpdFBhdGggPSByZXF1aXJlKCcuL3V0aWwvc3BsaXRQYXRoJyk7XG5cbnZhciBfdXRpbFNwbGl0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsU3BsaXRQYXRoKTtcblxudmFyIF91dGlsQ3VycnkgPSByZXF1aXJlKCcuL3V0aWwvY3VycnknKTtcblxudmFyIF91dGlsQ3VycnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbEN1cnJ5KTtcblxuZnVuY3Rpb24gaXMocGF0aCwgcHJlZGljYXRlLCBvYmplY3QpIHtcbiAgdmFyIHBhcnRzID0gX3V0aWxTcGxpdFBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgdmFyIHJlc3QgPSBvYmplY3Q7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkO1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXJ0cywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgIHBhcnQgPSBfaXRlcmF0b3JbX2krK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgIHBhcnQgPSBfaS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3QgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgcmVzdCA9IHJlc3RbcGFydF07XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWRpY2F0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwcmVkaWNhdGUocmVzdCk7XG4gIH1cblxuICByZXR1cm4gcHJlZGljYXRlID09PSByZXN0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfdXRpbEN1cnJ5MlsnZGVmYXVsdCddKGlzKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L2lzLmpzXG4gKiogbW9kdWxlIGlkID0gMjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzcGxpdFBhdGg7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vcmVqZWN0Jyk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblJlamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0KTtcblxuZnVuY3Rpb24gc3BsaXRQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogX2xvZGFzaENvbGxlY3Rpb25SZWplY3QyWydkZWZhdWx0J10ocGF0aC5zcGxpdCgnLicpLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAheDtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3V0aWwvc3BsaXRQYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMjAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheUZpbHRlcicpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRmlsdGVyJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5maWx0ZXJgOyB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmBcbiAqIHRoYXQgYHByZWRpY2F0ZWAgZG9lcyAqKm5vdCoqIHJldHVybiB0cnV0aHkgZm9yLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYHByZWRpY2F0ZWAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZWplY3QoWzEsIDIsIDMsIDRdLCBmdW5jdGlvbihuKSB7XG4gKiAgIHJldHVybiBuICUgMiA9PSAwO1xuICogfSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2LCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLnJlamVjdCh1c2VycywgeyAnYWdlJzogNDAsICdhY3RpdmUnOiB0cnVlIH0pLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknXVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLnJlamVjdCh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnZnJlZCddXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5yZWplY3QodXNlcnMsICdhY3RpdmUnKSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5J11cbiAqL1xuZnVuY3Rpb24gcmVqZWN0KGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUZpbHRlciA6IGJhc2VGaWx0ZXI7XG4gIHByZWRpY2F0ZSA9IGJhc2VDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gIXByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvY29sbGVjdGlvbi9yZWplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0WysrcmVzSW5kZXhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnLi9iaW5kQ2FsbGJhY2snKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jYWxsYmFja2Agd2hpY2ggc3VwcG9ydHMgc3BlY2lmeWluZyB0aGVcbiAqIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW2Z1bmM9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBjYWxsYmFjay5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJhc2VDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBmdW5jO1xuICBpZiAodHlwZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaXNBcmcgPT09IHVuZGVmaW5lZFxuICAgICAgPyBmdW5jXG4gICAgICA6IGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCk7XG4gIH1cbiAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBiYXNlTWF0Y2hlcyhmdW5jKTtcbiAgfVxuICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgPyBwcm9wZXJ0eShmdW5jKVxuICAgIDogYmFzZU1hdGNoZXNQcm9wZXJ0eShmdW5jLCB0aGlzQXJnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2FsbGJhY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNhbGxiYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMjA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9nZXRNYXRjaERhdGEnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHZhciBrZXkgPSBtYXRjaERhdGFbMF1bMF0sXG4gICAgICAgIHZhbHVlID0gbWF0Y2hEYXRhWzBdWzFdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiB0b09iamVjdChvYmplY3QpKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSkgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZCA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgY3VzdG9taXplciwgdHJ1ZSkgOiByZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzTWF0Y2guanNcbiAqKiBtb2R1bGUgaWQgPSAyMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2l0aG91dCBzdXBwb3J0IGZvciBgdGhpc2AgYmluZGluZ1xuICogYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL2VxdWFsT2JqZWN0cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQj1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IGFycmF5VGFnLFxuICAgICAgb3RoVGFnID0gYXJyYXlUYWc7XG5cbiAgaWYgKCFvYmpJc0Fycikge1xuICAgIG9ialRhZyA9IG9ialRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbiAgICBpZiAob2JqVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG9ialRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG9ialRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG9iaklzQXJyID0gaXNUeXBlZEFycmF5KG9iamVjdCk7XG4gICAgfVxuICB9XG4gIGlmICghb3RoSXNBcnIpIHtcbiAgICBvdGhUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG90aGVyKTtcbiAgICBpZiAob3RoVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG90aFRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG90aFRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG90aElzQXJyID0gaXNUeXBlZEFycmF5KG90aGVyKTtcbiAgICB9XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiAhKG9iaklzQXJyIHx8IG9iaklzT2JqKSkge1xuICAgIHJldHVybiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZyk7XG4gIH1cbiAgaWYgKCFpc0xvb3NlKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCwgb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZGV0ZWN0aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMgc2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jSk8uXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdID09IG90aGVyO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgYG9iamVjdGAgYW5kIGBvdGhlcmAgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBzdGFja0EucHVzaChvYmplY3QpO1xuICBzdGFja0IucHVzaChvdGhlcik7XG5cbiAgdmFyIHJlc3VsdCA9IChvYmpJc0FyciA/IGVxdWFsQXJyYXlzIDogZXF1YWxPYmplY3RzKShvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcblxuICBzdGFja0EucG9wKCk7XG4gIHN0YWNrQi5wb3AoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBhcnJheVNvbWUgPSByZXF1aXJlKCcuL2FycmF5U29tZScpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBhcnJheXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc0xvb3NlICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IGFyclZhbHVlLCBpc0xvb3NlID8gYXJyVmFsdWUgOiBvdGhWYWx1ZSwgaW5kZXgpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChpc0xvb3NlKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxBcnJheXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5U29tZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsLlxuICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cbiAgICAgIHJldHVybiAob2JqZWN0ICE9ICtvYmplY3QpXG4gICAgICAgID8gb3RoZXIgIT0gK290aGVyXG4gICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncyBwcmltaXRpdmVzIGFuZCBzdHJpbmdcbiAgICAgIC8vIG9iamVjdHMgYXMgZXF1YWwuIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc0xvb3NlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzTG9vc2UgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgc2tpcEN0b3IgPSBpc0xvb3NlO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBvYmpWYWx1ZSwgaXNMb29zZT8gb2JqVmFsdWUgOiBvdGhWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIDogcmVzdWx0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKCFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxPYmplY3RzLmpzXG4gKiogbW9kdWxlIGlkID0gMjE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIHNoaW1LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvc2hpbUtleXMnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xudmFyIGtleXMgPSAhbmF0aXZlS2V5cyA/IHNoaW1LZXlzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmICgodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0KSB8fFxuICAgICAgKHR5cGVvZiBvYmplY3QgIT0gJ2Z1bmN0aW9uJyAmJiBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgIHJldHVybiBzaGltS2V5cyhvYmplY3QpO1xuICB9XG4gIHJldHVybiBpc09iamVjdChvYmplY3QpID8gbmF0aXZlS2V5cyhvYmplY3QpIDogW107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMjE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMjE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMjIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAyMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFycmF5VGFnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9rZXlzSW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID0gdHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tvYmpUb1N0cmluZy5jYWxsKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBwYWlycyA9IHJlcXVpcmUoJy4uL29iamVjdC9wYWlycycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gcGFpcnMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgcmVzdWx0W2xlbmd0aF1bMl0gPSBpc1N0cmljdENvbXBhcmFibGUocmVzdWx0W2xlbmd0aF1bMV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2dldE1hdGNoRGF0YS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzU3RyaWN0Q29tcGFyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciBgb2JqZWN0YCxcbiAqIGUuZy4gYFtba2V5MSwgdmFsdWUxXSwgW2tleTIsIHZhbHVlMl1dYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhaXJzKHsgJ2Jhcm5leSc6IDM2LCAnZnJlZCc6IDQwIH0pO1xuICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHBhaXJzKG9iamVjdCkge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpcnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vYmFzZVNsaWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4uL2FycmF5L2xhc3QnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuL3RvUGF0aCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHBhdGgpLFxuICAgICAgaXNDb21tb24gPSBpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpLFxuICAgICAgcGF0aEtleSA9IChwYXRoICsgJycpO1xuXG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHBhdGhLZXk7XG4gICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICBpZiAoKGlzQXJyIHx8ICFpc0NvbW1vbikgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgb2JqZWN0ID0gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBrZXkgPSBsYXN0KHBhdGgpO1xuICAgICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZVxuICAgICAgPyAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIG9iamVjdCkpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmplY3Rba2V5XSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0cmluZyBwYXRoc1xuICogYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhLZXldIFRoZSBrZXkgcmVwcmVzZW50YXRpb24gb2YgcGF0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXRoS2V5ICE9PSB1bmRlZmluZWQgJiYgcGF0aEtleSBpbiB0b09iamVjdChvYmplY3QpKSB7XG4gICAgcGF0aCA9IFtwYXRoS2V5XTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAoKHR5cGUgPT0gJ3N0cmluZycgJiYgcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSkgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIHJlc3VsdCB8fCAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gdG9PYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNLZXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hcnJheS9sYXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMjQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDI0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNLZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBhdCBgcGF0aGAgb24gYVxuICogZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMiB9IH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMSB9IH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmIuYycpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ucGx1Y2soXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYicsICdjJ10pKSwgJ2EuYi5jJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkocGF0aCkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3V0aWxpdHkvcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9iYXNlR2V0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi90b1BhdGgnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgdmFyIHBhdGhLZXkgPSAocGF0aCArICcnKTtcbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuL2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdHxzdHJpbmd9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JPd24uanNcbiAqKiBtb2R1bGUgaWQgPSAyNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBgXy5mb3JJbmAgb3IgYF8uZm9ySW5SaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gdG9PYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uID8gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pIDogMDtcbiAgICBpZiAoIWlzTGVuZ3RoKGxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IHRvT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyogZXNsaW50IG5vLXNoYWRvdzowLCBuby1wYXJhbS1yZWFzc2lnbjowICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJ5MSA9IGN1cnJ5MTtcbmV4cG9ydHMuY3VycnkyID0gY3VycnkyO1xuZXhwb3J0cy5jdXJyeTMgPSBjdXJyeTM7XG5leHBvcnRzLmN1cnJ5NCA9IGN1cnJ5NDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGN1cnJ5O1xudmFyIF8gPSAnQEB1cGRlZXAvcGxhY2Vob2xkZXInO1xuXG5leHBvcnRzLl8gPSBfO1xuZnVuY3Rpb24gY291bnRBcmd1bWVudHMoYXJncywgbWF4KSB7XG4gIHZhciBuID0gYXJncy5sZW5ndGg7XG4gIGlmIChuID4gbWF4KSBuID0gbWF4O1xuXG4gIHdoaWxlIChhcmdzW24gLSAxXSA9PT0gXykge1xuICAgIG4tLTtcbiAgfVxuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBjdXJyeTEoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoYSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfcmVmID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX3JlZltfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGIgPSBfcmVmWzBdLFxuICAgICAgICBjID0gX3JlZlsxXTtcblxuICAgIHZhciBuID0gY291bnRBcmd1bWVudHMoYXJndW1lbnRzKTtcblxuICAgIGlmIChuID49IDEpIHJldHVybiBmbihhLCBiLCBjKTtcbiAgICByZXR1cm4gY3VycmllZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3VycnkyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKGEsIGIpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9yZWYyID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgX3JlZjJbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIGMgPSBfcmVmMlswXSxcbiAgICAgICAgZCA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIG4gPSBjb3VudEFyZ3VtZW50cyhhcmd1bWVudHMsIDIpO1xuXG4gICAgaWYgKGIgPT09IF8gfHwgYyA9PT0gXyB8fCBkID09PSBfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHVzZSBwbGFjZWhvbGRlciBvbiBmaXJzdCBhcmd1bWVudCBvZiB0aGlzIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChuID49IDIpIHtcbiAgICAgIGlmIChhID09PSBfKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChhLCBjLCBkKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQpO1xuICAgIH1cblxuICAgIGlmIChuID09PSAxKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJpZWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGN1cnJ5Myhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZChhLCBiLCBjKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBfcmVmMyA9IEFycmF5KF9sZW4zID4gMyA/IF9sZW4zIC0gMyA6IDApLCBfa2V5MyA9IDM7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIF9yZWYzW19rZXkzIC0gM10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciBkID0gX3JlZjNbMF0sXG4gICAgICAgIGUgPSBfcmVmM1sxXTtcblxuICAgIHZhciBuID0gY291bnRBcmd1bWVudHMoYXJndW1lbnRzLCAzKTtcblxuICAgIGlmIChjID09PSBfIHx8IGQgPT09IF8gfHwgZSA9PT0gXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSB1c2UgcGxhY2Vob2xkZXIgb24gZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKG4gPj0gMykge1xuICAgICAgaWYgKGEgPT09IF8pIHtcbiAgICAgICAgaWYgKGIgPT09IF8pIHJldHVybiBjdXJyeTIoZnVuY3Rpb24gKGEsIGIsIGQsIGUpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChhLCBkLCBlKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChiID09PSBfKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChiLCBkLCBlKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgIH1cblxuICAgIGlmIChuID09PSAyKSB7XG4gICAgICBpZiAoYSA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgYywgZCwgZSkge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGMsIGQsIGUpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDEpIHJldHVybiBjdXJyeTIoZnVuY3Rpb24gKGIsIGMsIGQsIGUpIHtcbiAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyaWVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeTQoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoYSwgYiwgYywgZCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgX3JlZjQgPSBBcnJheShfbGVuNCA+IDQgPyBfbGVuNCAtIDQgOiAwKSwgX2tleTQgPSA0OyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBfcmVmNFtfa2V5NCAtIDRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICB2YXIgZSA9IF9yZWY0WzBdLFxuICAgICAgICBmID0gX3JlZjRbMV07XG5cbiAgICB2YXIgbiA9IGNvdW50QXJndW1lbnRzKGFyZ3VtZW50cywgNCk7XG5cbiAgICBpZiAoZCA9PT0gXyB8fCBlID09PSBfIHx8IGYgPT09IF8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgdXNlIHBsYWNlaG9sZGVyIG9uIGZpcnN0LCBzZWNvbmQgb3IgdGhpcmQgYXJndW1lbnQgb2YgdGhpcyBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobiA+PSA0KSB7XG4gICAgICBpZiAoYSA9PT0gXykge1xuICAgICAgICBpZiAoYiA9PT0gXykge1xuICAgICAgICAgIGlmIChjID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBiLCBjLCBlLCBmKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgYiwgZSwgZikge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjID09PSBfKSByZXR1cm4gY3VycnkyKGZ1bmN0aW9uIChhLCBjLCBlLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGN1cnJ5MShmdW5jdGlvbiAoYSwgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gXykge1xuICAgICAgICBpZiAoYyA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYiwgYywgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGIsIGUsIGYpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGMgPT09IF8pIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGMsIGUsIGYpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDMpIHtcbiAgICAgIGlmIChhID09PSBfKSB7XG4gICAgICAgIGlmIChiID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBiLCBkLCBlLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgZCwgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYiwgZCwgZSwgZikge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGQsIGUsIGYpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDIpIHtcbiAgICAgIGlmIChhID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBjLCBkLCBlLCBmKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYywgZCwgZSwgZikge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobiA9PT0gMSkgcmV0dXJuIGN1cnJ5MyhmdW5jdGlvbiAoYiwgYywgZCwgZSwgZikge1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgIH0pO1xuICAgIHJldHVybiBjdXJyaWVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeShmbikge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZm4ubGVuZ3RoIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW2ZuLCBjdXJyeTEsIGN1cnJ5MiwgY3VycnkzLCBjdXJyeTRdW2xlbmd0aF0oZm4pO1xuICB9KSgpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3V0aWwvY3VycnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2lmRWxzZSA9IHJlcXVpcmUoJy4vaWZFbHNlJyk7XG5cbnZhciBfaWZFbHNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lmRWxzZSk7XG5cbnZhciBfdXRpbEN1cnJ5ID0gcmVxdWlyZSgnLi91dGlsL2N1cnJ5Jyk7XG5cbnZhciBfdXRpbEN1cnJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDdXJyeSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF91dGlsQ3VycnkyWydkZWZhdWx0J10oZnVuY3Rpb24gKHByZWRpY2F0ZSwgdHJ1ZVVwZGF0ZXMsIG9iamVjdCkge1xuICByZXR1cm4gX2lmRWxzZTJbJ2RlZmF1bHQnXShwcmVkaWNhdGUsIHRydWVVcGRhdGVzLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9LCBvYmplY3QpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9pZi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKTtcblxudmFyIF91cGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXBkYXRlKTtcblxudmFyIF93cmFwID0gcmVxdWlyZSgnLi93cmFwJyk7XG5cbnZhciBfd3JhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKTtcblxuZnVuY3Rpb24gdXBkYXRlSWZFbHNlKHByZWRpY2F0ZSwgdHJ1ZVVwZGF0ZXMsIGZhbHNlVXBkYXRlcywgb2JqZWN0KSB7XG4gIHZhciB0ZXN0ID0gdHlwZW9mIHByZWRpY2F0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHByZWRpY2F0ZShvYmplY3QpIDogcHJlZGljYXRlO1xuXG4gIHZhciB1cGRhdGVzID0gdGVzdCA/IHRydWVVcGRhdGVzIDogZmFsc2VVcGRhdGVzO1xuXG4gIHJldHVybiBfdXBkYXRlMlsnZGVmYXVsdCddKHVwZGF0ZXMsIG9iamVjdCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKHVwZGF0ZUlmRWxzZSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9pZkVsc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxudmFyIF93cmFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXApO1xuXG52YXIgX3V0aWxJc0VtcHR5ID0gcmVxdWlyZSgnLi91dGlsL2lzRW1wdHknKTtcblxudmFyIF91dGlsSXNFbXB0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsSXNFbXB0eSk7XG5cbnZhciBfdXRpbERlZmF1bHRPYmplY3QgPSByZXF1aXJlKCcuL3V0aWwvZGVmYXVsdE9iamVjdCcpO1xuXG52YXIgX3V0aWxEZWZhdWx0T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxEZWZhdWx0T2JqZWN0KTtcblxudmFyIF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9sYW5nL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHJldHVybiBjYWxsYmFjayhhY2MsIG9iamVjdFtrZXldLCBrZXkpO1xuICB9LCBpbml0aWFsVmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVXBkYXRlcyh1cGRhdGVzLCBvYmplY3QpIHtcbiAgcmV0dXJuIHJlZHVjZSh1cGRhdGVzLCBmdW5jdGlvbiAoYWNjLCB2YWx1ZSwga2V5KSB7XG4gICAgdmFyIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB1cGRhdGVkVmFsdWUgPSB1cGRhdGUodmFsdWUsIG9iamVjdFtrZXldKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUob2JqZWN0W2tleV0pO1xuICAgIH1cblxuICAgIGlmIChvYmplY3Rba2V5XSAhPT0gdXBkYXRlZFZhbHVlKSB7XG4gICAgICBhY2Nba2V5XSA9IHVwZGF0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KHVwZGF0ZXMsIG9iamVjdCkge1xuICB2YXIgbmV3QXJyYXkgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICBPYmplY3Qua2V5cyh1cGRhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBuZXdBcnJheVtrZXldID0gdXBkYXRlc1trZXldO1xuICB9KTtcblxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdXBkYXRlIGFuIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBDYW4gdXBkYXRlIHdpdGggdmFsdWVzOlxuICogdXBkYXRlKHsgZm9vOiAzIH0sIHsgZm9vOiAxLCBiYXI6IDIgfSk7XG4gKiAvLyA9PiB7IGZvbzogMywgYmFyOiAyIH1cbiAqXG4gKiBPciB3aXRoIGEgZnVuY3Rpb246XG4gKiB1cGRhdGUoeyBmb286IHggPT4gKHggKyAxKSB9LCB7IGZvbzogMiB9KTtcbiAqIC8vID0+IHsgZm9vOiAzIH1cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBuYW1lIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IHVwZGF0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSAgICBvYmplY3QgdG8gdXBkYXRlXG4gKiBAcmV0dXJuIHtPYmplY3R8QXJyYXl9ICAgbmV3IG9iamVjdCB3aXRoIG1vZGlmaWNhdGlvbnNcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKHVwZGF0ZXMsIG9iamVjdCkge1xuICBpZiAodHlwZW9mIHVwZGF0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVzLmFwcGx5KHVuZGVmaW5lZCwgW29iamVjdF0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIGlmICghX2xvZGFzaExhbmdJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKHVwZGF0ZXMpKSB7XG4gICAgcmV0dXJuIHVwZGF0ZXM7XG4gIH1cblxuICB2YXIgZGVmYXVsdGVkT2JqZWN0ID0gX3V0aWxEZWZhdWx0T2JqZWN0MlsnZGVmYXVsdCddKG9iamVjdCwgdXBkYXRlcyk7XG5cbiAgdmFyIHJlc29sdmVkVXBkYXRlcyA9IHJlc29sdmVVcGRhdGVzKHVwZGF0ZXMsIGRlZmF1bHRlZE9iamVjdCk7XG5cbiAgaWYgKF91dGlsSXNFbXB0eTJbJ2RlZmF1bHQnXShyZXNvbHZlZFVwZGF0ZXMpKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRlZE9iamVjdDtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHRlZE9iamVjdCkpIHtcbiAgICByZXR1cm4gdXBkYXRlQXJyYXkocmVzb2x2ZWRVcGRhdGVzLCBkZWZhdWx0ZWRPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0ZWRPYmplY3QsIHJlc29sdmVkVXBkYXRlcyk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKHVwZGF0ZSwgMik7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHdyYXA7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsQ3VycnkgPSByZXF1aXJlKCcuL3V0aWwvY3VycnknKTtcblxudmFyIF91dGlsQ3VycnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbEN1cnJ5KTtcblxudmFyIF9mcmVlemUgPSByZXF1aXJlKCcuL2ZyZWV6ZScpO1xuXG52YXIgX2ZyZWV6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcmVlemUpO1xuXG5mdW5jdGlvbiB3cmFwKGZ1bmMpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGZ1bmMubGVuZ3RoIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3V0aWxDdXJyeTJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2ZyZWV6ZTJbJ2RlZmF1bHQnXShmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gICAgfSwgbGVuZ3RoKTtcbiAgfSkoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3Qvd3JhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuICByZXR1cm4gIU9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGlzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3V0aWwvaXNFbXB0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDI1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaXNFbXB0eSA9IHJlcXVpcmUoJy4vaXNFbXB0eScpO1xuXG52YXIgX2lzRW1wdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFbXB0eSk7XG5cbmZ1bmN0aW9uIGlzSW50KHZhbHVlKSB7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHggPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuICh4IHwgMCkgPT09IHg7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlVcGRhdGUodXBkYXRlcykge1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyh1cGRhdGVzKSwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB1cGRhdGVLZXkgPSBfcmVmO1xuXG4gICAgaWYgKCFpc0ludCh1cGRhdGVLZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGFycmF5T3JPYmplY3QodXBkYXRlcykge1xuICBpZiAoIV9pc0VtcHR5MlsnZGVmYXVsdCddKHVwZGF0ZXMpICYmIGlzQXJyYXlVcGRhdGUodXBkYXRlcykpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRPYmplY3Qob2JqZWN0LCB1cGRhdGVzKSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyB8fCBvYmplY3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXlPck9iamVjdCh1cGRhdGVzKTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC91dGlsL2RlZmF1bHRPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiYXNlRm9ySW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRm9ySW4nKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGFzc3VtZXMgb2JqZWN0cyBjcmVhdGVkIGJ5IHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3RvclxuICogaGF2ZSBubyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHZhciBDdG9yO1xuXG4gIC8vIEV4aXQgZWFybHkgZm9yIG5vbiBgT2JqZWN0YCBvYmplY3RzLlxuICBpZiAoIShpc09iamVjdExpa2UodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IG9iamVjdFRhZyAmJiAhaXNBcmd1bWVudHModmFsdWUpKSB8fFxuICAgICAgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY29uc3RydWN0b3InKSAmJiAoQ3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yLCB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmICEoQ3RvciBpbnN0YW5jZW9mIEN0b3IpKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSUUgPCA5IGl0ZXJhdGVzIGluaGVyaXRlZCBwcm9wZXJ0aWVzIGJlZm9yZSBvd24gcHJvcGVydGllcy4gSWYgdGhlIGZpcnN0XG4gIC8vIGl0ZXJhdGVkIHByb3BlcnR5IGlzIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0eSB0aGVuIHRoZXJlIGFyZSBubyBpbmhlcml0ZWRcbiAgLy8gZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICB2YXIgcmVzdWx0O1xuICAvLyBJbiBtb3N0IGVudmlyb25tZW50cyBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyBhcmUgaXRlcmF0ZWQgYmVmb3JlXG4gIC8vIGl0cyBpbmhlcml0ZWQgcHJvcGVydGllcy4gSWYgdGhlIGxhc3QgaXRlcmF0ZWQgcHJvcGVydHkgaXMgYW4gb2JqZWN0J3NcbiAgLy8gb3duIHByb3BlcnR5IHRoZW4gdGhlcmUgYXJlIG5vIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gIGJhc2VGb3JJbih2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCByZXN1bHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc1BsYWluT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vYmFzZUZvcicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvckluKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5c0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9ySW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvckluLmpzXG4gKiogbW9kdWxlIGlkID0gMjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUpO1xuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxudmFyIF93cmFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXApO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZm9yRWFjaCcpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uTWFwID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vbWFwJyk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uTWFwKTtcblxudmFyIF9sb2Rhc2hPYmplY3RNYXBWYWx1ZXMgPSByZXF1aXJlKCdsb2Rhc2gvb2JqZWN0L21hcFZhbHVlcycpO1xuXG52YXIgX2xvZGFzaE9iamVjdE1hcFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RNYXBWYWx1ZXMpO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqZWN0LCBvdGhlck9iamVjdCkge1xuICB2YXIgZXF1YWwgPSB0cnVlO1xuICBfbG9kYXNoQ29sbGVjdGlvbkZvckVhY2gyWydkZWZhdWx0J10ob3RoZXJPYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKHZhbHVlICE9PSBvYmplY3Rba2V5XSkge1xuICAgICAgZXF1YWwgPSBmYWxzZTtcblxuICAgICAgLy8gZXhpdCBlYXJseVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsO1xufVxuXG5mdW5jdGlvbiBtYXAoaXRlcmF0ZWUsIG9iamVjdCkge1xuICB2YXIgdXBkYXRlciA9IHR5cGVvZiBpdGVyYXRlZSA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXJhdGVlIDogX3VwZGF0ZTJbJ2RlZmF1bHQnXShpdGVyYXRlZSk7XG5cbiAgdmFyIG1hcHBlciA9IEFycmF5LmlzQXJyYXkob2JqZWN0KSA/IF9sb2Rhc2hDb2xsZWN0aW9uTWFwMlsnZGVmYXVsdCddIDogX2xvZGFzaE9iamVjdE1hcFZhbHVlczJbJ2RlZmF1bHQnXTtcblxuICB2YXIgbmV3T2JqZWN0ID0gbWFwcGVyKG9iamVjdCwgdXBkYXRlcik7XG4gIHZhciBlcXVhbCA9IHNoYWxsb3dFcXVhbChvYmplY3QsIG5ld09iamVjdCk7XG5cbiAgcmV0dXJuIGVxdWFsID8gb2JqZWN0IDogbmV3T2JqZWN0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfd3JhcDJbJ2RlZmF1bHQnXShtYXApO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlFYWNoJyksXG4gICAgYmFzZUVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRWFjaCcpLFxuICAgIGNyZWF0ZUZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVGb3JFYWNoJyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3IgZWFjaCBlbGVtZW50LlxuICogVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5XG4gKiBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqICoqTm90ZToqKiBBcyB3aXRoIG90aGVyIFwiQ29sbGVjdGlvbnNcIiBtZXRob2RzLCBvYmplY3RzIHdpdGggYSBcImxlbmd0aFwiIHByb3BlcnR5XG4gKiBhcmUgaXRlcmF0ZWQgbGlrZSBhcnJheXMuIFRvIGF2b2lkIHRoaXMgYmVoYXZpb3IgYF8uZm9ySW5gIG9yIGBfLmZvck93bmBcbiAqIG1heSBiZSB1c2VkIGZvciBvYmplY3QgaXRlcmF0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgZWFjaFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdHxzdHJpbmd9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfKFsxLCAyXSkuZm9yRWFjaChmdW5jdGlvbihuKSB7XG4gKiAgIGNvbnNvbGUubG9nKG4pO1xuICogfSkudmFsdWUoKTtcbiAqIC8vID0+IGxvZ3MgZWFjaCB2YWx1ZSBmcm9tIGxlZnQgdG8gcmlnaHQgYW5kIHJldHVybnMgdGhlIGFycmF5XG4gKlxuICogXy5mb3JFYWNoKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24obiwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKG4sIGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IGxvZ3MgZWFjaCB2YWx1ZS1rZXkgcGFpciBhbmQgcmV0dXJucyB0aGUgb2JqZWN0IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbnZhciBmb3JFYWNoID0gY3JlYXRlRm9yRWFjaChhcnJheUVhY2gsIGJhc2VFYWNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2NvbGxlY3Rpb24vZm9yRWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gZm9yIGBfLmZvckVhY2hgIG9yIGBfLmZvckVhY2hSaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFycmF5RnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGFuIGFycmF5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBlYWNoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGFycmF5RnVuYywgZWFjaEZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgaXRlcmF0ZWUgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzQXJnID09PSB1bmRlZmluZWQgJiYgaXNBcnJheShjb2xsZWN0aW9uKSlcbiAgICAgID8gYXJyYXlGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKVxuICAgICAgOiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBiaW5kQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGb3JFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZvckVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5TWFwJyksXG4gICAgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZU1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMgYnkgcnVubmluZyBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocm91Z2hcbiAqIGBpdGVyYXRlZWAuIFRoZSBgaXRlcmF0ZWVgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5ldmVyeWAsIGBfLmZpbHRlcmAsIGBfLm1hcGAsIGBfLm1hcFZhbHVlc2AsIGBfLnJlamVjdGAsIGFuZCBgXy5zb21lYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhcnlgLCBgY2FsbGJhY2tgLCBgY2h1bmtgLCBgY2xvbmVgLCBgY3JlYXRlYCwgYGN1cnJ5YCwgYGN1cnJ5UmlnaHRgLFxuICogYGRyb3BgLCBgZHJvcFJpZ2h0YCwgYGV2ZXJ5YCwgYGZpbGxgLCBgZmxhdHRlbmAsIGBpbnZlcnRgLCBgbWF4YCwgYG1pbmAsXG4gKiBgcGFyc2VJbnRgLCBgc2xpY2VgLCBgc29ydEJ5YCwgYHRha2VgLCBgdGFrZVJpZ2h0YCwgYHRlbXBsYXRlYCwgYHRyaW1gLFxuICogYHRyaW1MZWZ0YCwgYHRyaW1SaWdodGAsIGB0cnVuY2AsIGByYW5kb21gLCBgcmFuZ2VgLCBgc2FtcGxlYCwgYHNvbWVgLFxuICogYHN1bWAsIGB1bmlxYCwgYW5kIGB3b3Jkc2BcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGNvbGxlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBpdGVyYXRlZWAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHRpbWVzVGhyZWUobikge1xuICogICByZXR1cm4gbiAqIDM7XG4gKiB9XG4gKlxuICogXy5tYXAoWzEsIDJdLCB0aW1lc1RocmVlKTtcbiAqIC8vID0+IFszLCA2XVxuICpcbiAqIF8ubWFwKHsgJ2EnOiAxLCAnYic6IDIgfSwgdGltZXNUaHJlZSk7XG4gKiAvLyA9PiBbMywgNl0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JyB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIF07XG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ubWFwKHVzZXJzLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknLCAnZnJlZCddXG4gKi9cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheU1hcCA6IGJhc2VNYXA7XG4gIGl0ZXJhdGVlID0gYmFzZUNhbGxiYWNrKGl0ZXJhdGVlLCB0aGlzQXJnLCAzKTtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9jb2xsZWN0aW9uL21hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheU1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9iYXNlRWFjaCcpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hcGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzXG4gKiBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gaXRlcmF0ZWUodmFsdWUsIGtleSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGNyZWF0ZU9iamVjdE1hcHBlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NyZWF0ZU9iamVjdE1hcHBlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhcyBgb2JqZWN0YCBhbmQgdmFsdWVzIGdlbmVyYXRlZCBieVxuICogcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG9mIGBvYmplY3RgIHRocm91Z2ggYGl0ZXJhdGVlYC4gVGhlXG4gKiBpdGVyYXRlZSBmdW5jdGlvbiBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAodmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLm1hcFZhbHVlcyh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKG4pIHtcbiAqICAgcmV0dXJuIG4gKiAzO1xuICogfSk7XG4gKiAvLyA9PiB7ICdhJzogMywgJ2InOiA2IH1cbiAqXG4gKiB2YXIgdXNlcnMgPSB7XG4gKiAgICdmcmVkJzogICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwIH0sXG4gKiAgICdwZWJibGVzJzogeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEgfVxuICogfTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5tYXBWYWx1ZXModXNlcnMsICdhZ2UnKTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiA0MCwgJ3BlYmJsZXMnOiAxIH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xudmFyIG1hcFZhbHVlcyA9IGNyZWF0ZU9iamVjdE1hcHBlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFZhbHVlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3QvbWFwVmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGZvciBgXy5tYXBLZXlzYCBvciBgXy5tYXBWYWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc01hcEtleXNdIFNwZWNpZnkgbWFwcGluZyBrZXlzIGluc3RlYWQgb2YgdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWFwIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RNYXBwZXIoaXNNYXBLZXlzKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGl0ZXJhdGVlID0gYmFzZUNhbGxiYWNrKGl0ZXJhdGVlLCB0aGlzQXJnLCAzKTtcblxuICAgIGJhc2VGb3JPd24ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICAgIHZhciBtYXBwZWQgPSBpdGVyYXRlZSh2YWx1ZSwga2V5LCBvYmplY3QpO1xuICAgICAga2V5ID0gaXNNYXBLZXlzID8gbWFwcGVkIDoga2V5O1xuICAgICAgdmFsdWUgPSBpc01hcEtleXMgPyB2YWx1ZSA6IG1hcHBlZDtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVPYmplY3RNYXBwZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlT2JqZWN0TWFwcGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hPYmplY3RPbWl0ID0gcmVxdWlyZSgnbG9kYXNoL29iamVjdC9vbWl0Jyk7XG5cbnZhciBfbG9kYXNoT2JqZWN0T21pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RPbWl0KTtcblxudmFyIF93cmFwID0gcmVxdWlyZSgnLi93cmFwJyk7XG5cbnZhciBfd3JhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKTtcblxuZnVuY3Rpb24gb21pdChwcmVkaWNhdGUsIGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIF9sb2Rhc2hPYmplY3RPbWl0MlsnZGVmYXVsdCddKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKG9taXQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3Qvb21pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlNYXAnKSxcbiAgICBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRmxhdHRlbicpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2JpbmRDYWxsYmFjaycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyksXG4gICAgcGlja0J5QXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9waWNrQnlBcnJheScpLFxuICAgIHBpY2tCeUNhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGlja0J5Q2FsbGJhY2snKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9yZXN0UGFyYW0nKTtcblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYF8ucGlja2A7IHRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIHRoZVxuICogb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgIHRoYXQgYXJlIG5vdCBvbWl0dGVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbnwuLi4oc3RyaW5nfHN0cmluZ1tdKX0gW3ByZWRpY2F0ZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyXG4gKiAgaXRlcmF0aW9uIG9yIHByb3BlcnR5IG5hbWVzIHRvIG9taXQsIHNwZWNpZmllZCBhcyBpbmRpdmlkdWFsIHByb3BlcnR5XG4gKiAgbmFtZXMgb3IgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcsICdhZ2UnOiA0MCB9O1xuICpcbiAqIF8ub21pdChvYmplY3QsICdhZ2UnKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICpcbiAqIF8ub21pdChvYmplY3QsIF8uaXNOdW1iZXIpO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJyB9XG4gKi9cbnZhciBvbWl0ID0gcmVzdFBhcmFtKGZ1bmN0aW9uKG9iamVjdCwgcHJvcHMpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGlmICh0eXBlb2YgcHJvcHNbMF0gIT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBwcm9wcyA9IGFycmF5TWFwKGJhc2VGbGF0dGVuKHByb3BzKSwgU3RyaW5nKTtcbiAgICByZXR1cm4gcGlja0J5QXJyYXkob2JqZWN0LCBiYXNlRGlmZmVyZW5jZShrZXlzSW4ob2JqZWN0KSwgcHJvcHMpKTtcbiAgfVxuICB2YXIgcHJlZGljYXRlID0gYmluZENhbGxiYWNrKHByb3BzWzBdLCBwcm9wc1sxXSwgMyk7XG4gIHJldHVybiBwaWNrQnlDYWxsYmFjayhvYmplY3QsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iamVjdCkge1xuICAgIHJldHVybiAhcHJlZGljYXRlKHZhbHVlLCBrZXksIG9iamVjdCk7XG4gIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gb21pdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qvb21pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9iYXNlSW5kZXhPZicpLFxuICAgIGNhY2hlSW5kZXhPZiA9IHJlcXVpcmUoJy4vY2FjaGVJbmRleE9mJyksXG4gICAgY3JlYXRlQ2FjaGUgPSByZXF1aXJlKCcuL2NyZWF0ZUNhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZGlmZmVyZW5jZWAgd2hpY2ggYWNjZXB0cyBhIHNpbmdsZSBhcnJheVxuICogb2YgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcykge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5kZXhPZiA9IGJhc2VJbmRleE9mLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgY2FjaGUgPSAoaXNDb21tb24gJiYgdmFsdWVzLmxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSA/IGNyZWF0ZUNhY2hlKHZhbHVlcykgOiBudWxsLFxuICAgICAgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBpbmRleE9mID0gY2FjaGVJbmRleE9mO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgdmFsdWVzID0gY2FjaGU7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgaWYgKGlzQ29tbW9uICYmIHZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlc0luZGV4ID0gdmFsdWVzTGVuZ3RoO1xuICAgICAgd2hpbGUgKHZhbHVlc0luZGV4LS0pIHtcbiAgICAgICAgaWYgKHZhbHVlc1t2YWx1ZXNJbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXhPZih2YWx1ZXMsIHZhbHVlLCAwKSA8IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRGlmZmVyZW5jZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRGlmZmVyZW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGluZGV4T2ZOYU4gPSByZXF1aXJlKCcuL2luZGV4T2ZOYU4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGJpbmFyeSBzZWFyY2hlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjczXG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCIvKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGBOYU5gIGlzIGZvdW5kIGluIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgYE5hTmAsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDAgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICB2YXIgb3RoZXIgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKG90aGVyICE9PSBvdGhlcikge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXhPZk5hTjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbmRleE9mTmFOLmpzXG4gKiogbW9kdWxlIGlkID0gMjc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gYGNhY2hlYCBtaW1pY2tpbmcgdGhlIHJldHVybiBzaWduYXR1cmUgb2ZcbiAqIGBfLmluZGV4T2ZgIGJ5IHJldHVybmluZyBgMGAgaWYgdGhlIHZhbHVlIGlzIGZvdW5kLCBlbHNlIGAtMWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYDBgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVJbmRleE9mKGNhY2hlLCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGNhY2hlLmRhdGEsXG4gICAgICByZXN1bHQgPSAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzT2JqZWN0KHZhbHVlKSkgPyBkYXRhLnNldC5oYXModmFsdWUpIDogZGF0YS5oYXNoW3ZhbHVlXTtcblxuICByZXR1cm4gcmVzdWx0ID8gMCA6IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSW5kZXhPZjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jYWNoZUluZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vU2V0Q2FjaGUnKSxcbiAgICBnZXROYXRpdmUgPSByZXF1aXJlKCcuL2dldE5hdGl2ZScpO1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShnbG9iYWwsICdTZXQnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBTZXRgIGNhY2hlIG9iamVjdCB0byBvcHRpbWl6ZSBsaW5lYXIgc2VhcmNoZXMgb2YgbGFyZ2UgYXJyYXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgY2FjaGUgb2JqZWN0IGlmIGBTZXRgIGlzIHN1cHBvcnRlZCwgZWxzZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKHZhbHVlcykge1xuICByZXR1cm4gKG5hdGl2ZUNyZWF0ZSAmJiBTZXQpID8gbmV3IFNldENhY2hlKHZhbHVlcykgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUNhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMjc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJ2YXIgY2FjaGVQdXNoID0gcmVxdWlyZSgnLi9jYWNoZVB1c2gnKSxcbiAgICBnZXROYXRpdmUgPSByZXF1aXJlKCcuL2dldE5hdGl2ZScpO1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShnbG9iYWwsICdTZXQnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmRhdGEgPSB7ICdoYXNoJzogbmF0aXZlQ3JlYXRlKG51bGwpLCAnc2V0JzogbmV3IFNldCB9O1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB0aGlzLnB1c2godmFsdWVzW2xlbmd0aF0pO1xuICB9XG59XG5cbi8vIEFkZCBmdW5jdGlvbnMgdG8gdGhlIGBTZXRgIGNhY2hlLlxuU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBjYWNoZVB1c2g7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvU2V0Q2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBwdXNoXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBjYWNoZVB1c2godmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgZGF0YS5zZXQuYWRkKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhLmhhc2hbdmFsdWVdID0gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlUHVzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jYWNoZVB1c2guanNcbiAqKiBtb2R1bGUgaWQgPSAyNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL2FycmF5UHVzaCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggYWRkZWQgc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmdcbiAqIGZsYXR0ZW5pbmcgYW5kIHNwZWNpZnlpbmcgdGhlIHN0YXJ0IGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCBmbGF0dGVuaW5nIHRvIGFycmF5cy1saWtlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAgIChpc1N0cmljdCB8fCBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICBpZiAoaXNEZWVwKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRmxhdHRlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheVB1c2guanNcbiAqKiBtb2R1bGUgaWQgPSAyODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucGlja2Agd2hpY2ggcGlja3MgYG9iamVjdGAgcHJvcGVydGllcyBzcGVjaWZpZWRcbiAqIGJ5IGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gcGljay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHBpY2tCeUFycmF5KG9iamVjdCwgcHJvcHMpIHtcbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrQnlBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwidmFyIGJhc2VGb3JJbiA9IHJlcXVpcmUoJy4vYmFzZUZvckluJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnBpY2tgIHdoaWNoIHBpY2tzIGBvYmplY3RgIHByb3BlcnRpZXMgYHByZWRpY2F0ZWBcbiAqIHJldHVybnMgdHJ1dGh5IGZvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGlja0J5Q2FsbGJhY2sob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBiYXNlRm9ySW4ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBrZXksIG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrQnlDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDI4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXMgYW4gYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uIHRoZSBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9GdW5jdGlvbnMvcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3RQYXJhbShmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0UGFyYW0oZnVuYywgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogKCtzdGFydCB8fCAwKSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICByZXN0W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCByZXN0KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCByZXN0KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdFBhcmFtO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Z1bmN0aW9uL3Jlc3RQYXJhbS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblJlamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL3JlamVjdCcpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25SZWplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvblJlamVjdCk7XG5cbnZhciBfd3JhcCA9IHJlcXVpcmUoJy4vd3JhcCcpO1xuXG52YXIgX3dyYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcCk7XG5cbmZ1bmN0aW9uIHJlamVjdChwcmVkaWNhdGUsIGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0MlsnZGVmYXVsdCddKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKHJlamVjdCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9yZWplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxDdXJyeSA9IHJlcXVpcmUoJy4vdXRpbC9jdXJyeScpO1xuXG52YXIgX3V0aWxDdXJyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ3VycnkpO1xuXG52YXIgX3VwZGF0ZTIgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUyKTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX3V0aWxTcGxpdFBhdGggPSByZXF1aXJlKCcuL3V0aWwvc3BsaXRQYXRoJyk7XG5cbnZhciBfdXRpbFNwbGl0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsU3BsaXRQYXRoKTtcblxudmFyIHdpbGRjYXJkID0gJyonO1xuXG5mdW5jdGlvbiByZWR1Y2VQYXRoKGFjYywga2V5KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChrZXkgPT09IHdpbGRjYXJkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIF91cGRhdGU7XG5cbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHdpbGRjYXJkKSA/XG4gICAgICAvLyBJZiB3ZSBhY3R1YWxseSBoYXZlIHdpbGRjYXJkIGFzIGEgcHJvcGVydHksIHVwZGF0ZSB0aGF0XG4gICAgICBfdXBkYXRlM1snZGVmYXVsdCddKChfdXBkYXRlID0ge30sIF91cGRhdGVbd2lsZGNhcmRdID0gYWNjLCBfdXBkYXRlKSwgdmFsdWUpIDpcbiAgICAgIC8vIE90aGVyd2lzZSBtYXAgb3ZlciBhbGwgcHJvcGVydGllc1xuICAgICAgX21hcDJbJ2RlZmF1bHQnXShhY2MsIHZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIChfcmVmID0ge30sIF9yZWZba2V5XSA9IGFjYywgX3JlZik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluKHBhdGgsIHZhbHVlLCBvYmplY3QpIHtcbiAgdmFyIHBhcnRzID0gX3V0aWxTcGxpdFBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG4gIHZhciB1cGRhdGVzID0gcGFydHMucmVkdWNlUmlnaHQocmVkdWNlUGF0aCwgdmFsdWUpO1xuXG4gIHJldHVybiBfdXBkYXRlM1snZGVmYXVsdCddKHVwZGF0ZXMsIG9iamVjdCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF91dGlsQ3VycnkyWydkZWZhdWx0J10odXBkYXRlSW4pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvdXBkYXRlSW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3VwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyk7XG5cbnZhciBfdXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VwZGF0ZSk7XG5cbnZhciBfdXRpbEN1cnJ5ID0gcmVxdWlyZSgnLi91dGlsL2N1cnJ5Jyk7XG5cbnZhciBfdXRpbEN1cnJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDdXJyeSk7XG5cbmZ1bmN0aW9uIHdpdGhEZWZhdWx0KGRlZmF1bHRWYWx1ZSwgdXBkYXRlcywgb2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBfdXBkYXRlMlsnZGVmYXVsdCddKHVwZGF0ZXMsIGRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gX3VwZGF0ZTJbJ2RlZmF1bHQnXSh1cGRhdGVzLCBvYmplY3QpO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfdXRpbEN1cnJ5MlsnZGVmYXVsdCddKHdpdGhEZWZhdWx0KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3dpdGhEZWZhdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gMjg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9