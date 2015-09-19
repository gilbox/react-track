webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functionalEasing = __webpack_require__(157);
	
	var _reactTrackTween = __webpack_require__(162);
	
	var _reactTrackTweenValueFactories = __webpack_require__(164);
	
	var _Scrubber = __webpack_require__(165);
	
	var _Scrubber2 = _interopRequireDefault(_Scrubber);
	
	var _reactTrackTimeline = __webpack_require__(166);
	
	var _reactTrackTimeline2 = _interopRequireDefault(_reactTrackTimeline);
	
	var _reactMotion = __webpack_require__(170);
	
	var easeOutBounce = new _functionalEasing.Easer().using('out-bounce');
	var easeOutSine = new _functionalEasing.Easer().using('out-sine');
	
	var MIN_TIME = 0;
	var MAX_TIME = 100;
	
	var styles = {
	  scrubber: {
	    width: '100%',
	    boxSizing: 'border-box'
	  },
	  ball: {
	    borderRadius: '50%',
	    width: '20px',
	    height: '20px',
	    position: 'absolute',
	    backgroundColor: 'white',
	    opacity: 0.2
	  }
	};
	
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
	        _reactTrackTimeline2['default'],
	        {
	          playOnMount: true,
	          min: MIN_TIME,
	          max: MAX_TIME,
	          loop: true },
	        function (_ref) {
	          var _tween, _tween2;
	
	          var time = _ref.time;
	          var playing = _ref.playing;
	          var togglePlay = _ref.togglePlay;
	          var setTime = _ref.setTime;
	
	          var top = 100 + 40 * Math.sin(time / 5);
	          var left = (0, _reactTrackTween.tween)(time, (_tween = {}, _defineProperty(_tween, MIN_TIME, 0), _defineProperty(_tween, MAX_TIME, 100), _tween), easeOutSine);
	
	          return _react2['default'].createElement(
	            'div',
	            { style: { padding: 30 } },
	            _react2['default'].createElement(
	              _reactMotion.Spring,
	              { endValue: { val: { top: top, left: left } } },
	              function (interpolated) {
	                return _react2['default'].createElement('div', {
	                  style: _extends({}, styles.ball, {
	                    top: interpolated.val.top,
	                    left: interpolated.val.left + '%'
	                  }) });
	              }
	            ),
	            _react2['default'].createElement('div', {
	              style: _extends({}, styles.ball, {
	                top: top,
	                left: left + '%'
	              }) }),
	            _react2['default'].createElement(
	              'h2',
	              {
	                style: (0, _reactTrackTween.tween)(time, (_tween2 = {}, _defineProperty(_tween2, MIN_TIME, { transform: (0, _reactTrackTweenValueFactories.rotate)(0) }), _defineProperty(_tween2, MAX_TIME, { transform: (0, _reactTrackTweenValueFactories.rotate)(360) }), _tween2), easeOutBounce) },
	              'spin'
	            ),
	            _react2['default'].createElement(
	              'button',
	              { onClick: togglePlay },
	              playing ? 'pause' : 'play'
	            ),
	            _react2['default'].createElement(_Scrubber2['default'], {
	              style: styles.scrubber,
	              min: MIN_TIME,
	              max: MAX_TIME,
	              value: time,
	              onChangeValue: setTime })
	          );
	        }
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var inc = function inc(x) {
	  return x + 1;
	};
	
	var styles = {
	  controlRange: { display: 'inline-block',
	    lineHeight: '30px',
	    verticalAlign: 'middle',
	    width: 'calc(100% - 60px)' },
	  controlValue: { display: 'inline-block',
	    lineHeight: '30px',
	    verticalAlign: 'middle',
	    color: 'white',
	    fontSize: '11px',
	    width: '80px',
	    paddingLeft: '5px' }
	};
	
	var Scrubber = (function (_Component) {
	  _inherits(Scrubber, _Component);
	
	  function Scrubber() {
	    _classCallCheck(this, Scrubber);
	
	    _get(Object.getPrototypeOf(Scrubber.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Scrubber, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var min = _props.min;
	      var max = _props.max;
	      var value = _props.value;
	      var onChangeValue = _props.onChangeValue;
	      var name = _props.name;
	
	      return _react2['default'].createElement(
	        'div',
	        this.props,
	        _react2['default'].createElement('input', { type: 'range', min: min, max: max, style: styles.controlRange,
	          value: value,
	          onChange: function (event) {
	            return onChangeValue(Number(event.target.value));
	          } }),
	        _react2['default'].createElement(
	          'div',
	          { style: styles.controlValue },
	          value,
	          ' of ',
	          max
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: { value: 0, min: 0, max: 100, name: null },
	    enumerable: true
	  }]);
	
	  return Scrubber;
	})(_react.Component);
	
	exports['default'] = Scrubber;
	module.exports = exports['default'];

/***/ },

/***/ 166:
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

/***/ 167:
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

/***/ 168:
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

/***/ 169:
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

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reorderKeys = __webpack_require__(171);
	
	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);
	
	var _Spring = __webpack_require__(172);
	
	exports.Spring = _Spring.Spring;
	exports.TransitionSpring = _Spring.TransitionSpring;
	
	var _presets2 = __webpack_require__(188);
	
	var _presets3 = _interopRequireDefault(_presets2);
	
	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },

/***/ 171:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reorderKeys;
	
	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }
	
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components = __webpack_require__(173);
	
	var _components2 = _interopRequireDefault(_components);
	
	module.exports = _components2['default'](_react2['default']);

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = components;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapTree = __webpack_require__(174);
	
	var _mapTree2 = _interopRequireDefault(_mapTree);
	
	var _noVelocity = __webpack_require__(180);
	
	var _noVelocity2 = _interopRequireDefault(_noVelocity);
	
	var _compareTrees = __webpack_require__(181);
	
	var _compareTrees2 = _interopRequireDefault(_compareTrees);
	
	var _mergeDiff = __webpack_require__(182);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _animationLoop = __webpack_require__(183);
	
	var _animationLoop2 = _interopRequireDefault(_animationLoop);
	
	var _zero = __webpack_require__(185);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _updateTree = __webpack_require__(186);
	
	var startAnimation = _animationLoop2['default']();
	
	function animationStep(shouldMerge, stopAnimation, getProps, timestep, state) {
	  var currValue = state.currValue;
	  var currVelocity = state.currVelocity;
	
	  var _getProps = getProps();
	
	  var willEnter = _getProps.willEnter;
	  var willLeave = _getProps.willLeave;
	  var endValue = _getProps.endValue;
	
	  if (typeof endValue === 'function') {
	    endValue = endValue(currValue);
	  }
	
	  var mergedValue = endValue; // set mergedValue to endValue as the default
	  var hasNewKey = false;
	
	  if (shouldMerge) {
	    mergedValue = _mergeDiff2['default'](currValue, endValue,
	    // TODO: stop allocating like crazy in this whole code path
	    function (key) {
	      var res = willLeave(key, currValue[key], endValue, currValue, currVelocity);
	      if (res == null) {
	        // For legacy reason. We won't allow returning null soon
	        // TODO: remove, after next release
	        return null;
	      }
	
	      if (_noVelocity2['default'](currVelocity[key]) && _compareTrees2['default'](currValue[key], res)) {
	        return null;
	      }
	      return res;
	    });
	
	    Object.keys(mergedValue).filter(function (key) {
	      return !currValue.hasOwnProperty(key);
	    }).forEach(function (key) {
	      var _extends2, _extends3;
	
	      hasNewKey = true;
	      var enterValue = willEnter(key, mergedValue[key], endValue, currValue, currVelocity);
	
	      // We can mutate this here because mergeDiff returns a new Obj
	      mergedValue[key] = enterValue;
	
	      currValue = _extends({}, currValue, (_extends2 = {}, _extends2[key] = enterValue, _extends2));
	      currVelocity = _extends({}, currVelocity, (_extends3 = {}, _extends3[key] = _mapTree2['default'](_zero2['default'], enterValue), _extends3));
	    });
	  }
	  var newCurrValue = _updateTree.updateCurrValue(timestep, currValue, currVelocity, mergedValue);
	  var newCurrVelocity = _updateTree.updateCurrVelocity(timestep, currValue, currVelocity, mergedValue);
	
	  if (!hasNewKey && _noVelocity2['default'](currVelocity) && _noVelocity2['default'](newCurrVelocity)) {
	    // check explanation in `Spring.animationRender`
	    stopAnimation(); // Nasty side effects....
	  }
	
	  return {
	    currValue: newCurrValue,
	    currVelocity: newCurrVelocity
	  };
	}
	
	function components(React) {
	  var PropTypes = React.PropTypes;
	
	  var Spring = React.createClass({
	    displayName: 'Spring',
	
	    propTypes: {
	      defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
	      endValue: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array, PropTypes.number]).isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var endValue = _props.endValue;
	      var defaultValue = _props.defaultValue;
	
	      var currValue = undefined;
	      if (defaultValue == null) {
	        if (typeof endValue === 'function') {
	          // TODO: provide perf tip here when endValue argument count is 0
	          // (meaning you could have passed an obj)
	          currValue = endValue();
	        } else {
	          currValue = endValue;
	        }
	      } else {
	        currValue = defaultValue;
	      }
	      return {
	        currValue: currValue,
	        currVelocity: _mapTree2['default'](_zero2['default'], currValue)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      var _this = this;
	
	      this.animationStep = animationStep.bind(null, false, function () {
	        return _this.stopAnimation();
	      }, function () {
	        return _this.props;
	      });
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    animationStep: null,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `endValue` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // re-render unmounts the Spring
	      if (!this.hasUnmounted) {
	        this.setState({
	          currValue: _updateTree.interpolateValue(alpha, nextState.currValue, prevState.currValue),
	          currVelocity: nextState.currVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var renderedChildren = this.props.children(this.state.currValue);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  // TODO: warn when obj uses numerical keys
	  // TODO: warn when endValue doesn't contain a val
	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',
	
	    propTypes: {
	      defaultValue: PropTypes.objectOf(PropTypes.any),
	      endValue: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).
	      // PropTypes.arrayOf(PropTypes.shape({
	      //   key: PropTypes.any.isRequired,
	      // })),
	      // PropTypes.arrayOf(PropTypes.element),
	      isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	
	      // PropTypes.object,
	      // PropTypes.array,
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	
	      // PropTypes.object,
	      // PropTypes.array,
	      children: PropTypes.func.isRequired
	    },
	
	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var endValue = _props2.endValue;
	      var defaultValue = _props2.defaultValue;
	
	      var currValue = undefined;
	      if (defaultValue == null) {
	        if (typeof endValue === 'function') {
	          currValue = endValue();
	        } else {
	          currValue = endValue;
	        }
	      } else {
	        currValue = defaultValue;
	      }
	      return {
	        currValue: currValue,
	        currVelocity: _mapTree2['default'](_zero2['default'], currValue)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      var _this2 = this;
	
	      this.animationStep = animationStep.bind(null, true, function () {
	        return _this2.stopAnimation();
	      }, function () {
	        return _this2.props;
	      });
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    animationStep: null,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Spring.
	      if (!this.hasUnmounted) {
	        this.setState({
	          currValue: _updateTree.interpolateValue(alpha, nextState.currValue, prevState.currValue),
	          currVelocity: nextState.currVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var renderedChildren = this.props.children(this.state.currValue);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapTree;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(175);
	
	// currenly a helper used for producing a tree of the same shape as the
	// input(s),  but with different values. It's technically not a real `map`
	// equivalent for trees, since it skips calling f on non-numbers.
	
	// TODO: probably doesn't need path, stop allocating uselessly
	// TODO: don't need to map over many trees anymore
	// TODO: skipping non-numbers is weird and non-generic. Use pre-order traversal
	// assume trees are of the same shape
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	function _mapTree(path, f, trees) {
	  var t1 = trees[0];
	  if (typeof t1 === 'number') {
	    return f.apply(undefined, [path].concat(trees));
	  }
	  if (Array.isArray(t1)) {
	    return t1.map(function (_, i) {
	      return _mapTree([].concat(path, [i]), f, trees.map(function (val) {
	        return val[i];
	      }));
	    });
	  }
	  if (_lodashIsplainobject2['default'](t1)) {
	    return Object.keys(t1).reduce(function (newTree, key) {
	      newTree[key] = _mapTree([].concat(path, [key]), f, trees.map(function (val) {
	        return val[key];
	      }));
	      return newTree;
	    }, {});
	  }
	  // return last one just because
	  return trees[trees.length - 1];
	}
	
	function mapTree(f) {
	  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    rest[_key - 1] = arguments[_key];
	  }
	
	  return _mapTree([], f, rest);
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(176),
	    isArguments = __webpack_require__(177),
	    keysIn = __webpack_require__(178);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
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

/***/ 176:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
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
	
	module.exports = baseFor;


/***/ },

/***/ 177:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
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
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(177),
	    isArray = __webpack_require__(179);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
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
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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

/***/ 179:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
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
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
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
	
	module.exports = isArray;


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = noVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(175);
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	function noVelocity(coll) {
	  if (Array.isArray(coll)) {
	    return coll.every(noVelocity);
	  }
	  if (_lodashIsplainobject2['default'](coll)) {
	    return Object.keys(coll).every(function (key) {
	      return key === 'config' ? true : noVelocity(coll[key]);
	    });
	  }
	  return typeof coll === 'number' ? coll === 0 : true;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = compareTrees;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(175);
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	function compareTrees(a, b) {
	  if (Array.isArray(a)) {
	    return a.every(function (v, i) {
	      return compareTrees(v, b[i]);
	    });
	  }
	
	  if (_lodashIsplainobject2['default'](a)) {
	    return Object.keys(a).every(function (key) {
	      return key === 'config' ? true : compareTrees(a[key], b[key]);
	    });
	  }
	
	  return a === b;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 182:
/***/ function(module, exports) {

	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;
	
	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;
	
	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }
	
	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}
	
	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = configAnimation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _performanceNow = __webpack_require__(184);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(167);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;
	
	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;
	
	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta
	
	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;
	
	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }
	
	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var step = _animRunning$i.step;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;
	
	      if (!active) {
	        continue;
	      }
	
	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution bellow is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = step(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = step(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }
	
	    accumulatedTime = accumulatedTime - frameNumber * timeStep;
	
	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	
	      // Might mutate animRunning........
	      var render = _animRunning$i2.render;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;
	      render(alpha, nextState, prevState);
	    }
	
	    var newAnimRunning = [];
	    for (var i = 0; i < animRunning.length; i++) {
	      if (animRunning[i].active) {
	        newAnimRunning.push(animRunning[i]);
	      }
	    }
	
	    animRunning = newAnimRunning;
	
	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }
	
	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }
	
	  return function startAnimation(state, step, render) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.step === step) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }
	
	    var newAnim = {
	      step: step,
	      render: render,
	      prevState: state,
	      nextState: state,
	      active: true
	    };
	
	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);
	
	    start();
	
	    return newAnim.stop;
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 184:
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

/***/ 185:
/***/ function(module, exports) {

	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = zero;
	
	function zero() {
	  return 0;
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrValue = updateCurrValue;
	exports.updateCurrVelocity = updateCurrVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(175);
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	var _mapTree = __webpack_require__(174);
	
	var _mapTree2 = _interopRequireDefault(_mapTree);
	
	var _stepper = __webpack_require__(187);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	var _zero = __webpack_require__(185);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _presets = __webpack_require__(188);
	
	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	
	var _presets2 = _interopRequireDefault(_presets);
	
	function interpolateValue(alpha, nextValue, prevValue) {
	  if (nextValue == null) {
	    return null;
	  }
	  if (prevValue == null) {
	    return nextValue;
	  }
	  if (typeof nextValue === 'number') {
	    // https://github.com/chenglou/react-motion/pull/57#issuecomment-121924628
	    return nextValue * alpha + prevValue * (1 - alpha);
	  }
	  if (nextValue.val != null && nextValue.config && nextValue.config.length === 0) {
	    return nextValue;
	  }
	  if (nextValue.val != null) {
	    var ret = {
	      val: interpolateValue(alpha, nextValue.val, prevValue.val)
	    };
	    if (nextValue.config) {
	      ret.config = nextValue.config;
	    }
	    return ret;
	  }
	  if (Array.isArray(nextValue)) {
	    return nextValue.map(function (_, i) {
	      return interpolateValue(alpha, nextValue[i], prevValue[i]);
	    });
	  }
	  if (_lodashIsplainobject2['default'](nextValue)) {
	    return Object.keys(nextValue).reduce(function (ret, key) {
	      ret[key] = interpolateValue(alpha, nextValue[key], prevValue[key]);
	      return ret;
	    }, {});
	  }
	  return nextValue;
	}
	
	// TODO: refactor common logic with _updateCurrVelocity
	function _updateCurrValue(frameRate, currValue, currVelocity, endValue, k, b) {
	  if (endValue == null) {
	    return null;
	  }
	  if (typeof endValue === 'number') {
	    if (k == null || b == null) {
	      return endValue;
	    }
	    // TODO: do something to stepper to make this not allocate (2 steppers?)
	    return _stepper2['default'](frameRate, currValue, currVelocity, endValue, k, b)[0];
	  }
	  if (endValue.val != null && endValue.config && endValue.config.length === 0) {
	    return endValue;
	  }
	  if (endValue.val != null) {
	    var _ref = endValue.config || _presets2['default'].noWobble;
	
	    var _k = _ref[0];
	    var _b = _ref[1];
	
	    var ret = {
	      val: _updateCurrValue(frameRate, currValue.val, currVelocity.val, endValue.val, _k, _b)
	    };
	    if (endValue.config) {
	      ret.config = endValue.config;
	    }
	    return ret;
	  }
	  if (Array.isArray(endValue)) {
	    return endValue.map(function (_, i) {
	      return _updateCurrValue(frameRate, currValue[i], currVelocity[i], endValue[i], k, b);
	    });
	  }
	  if (_lodashIsplainobject2['default'](endValue)) {
	    return Object.keys(endValue).reduce(function (ret, key) {
	      ret[key] = _updateCurrValue(frameRate, currValue[key], currVelocity[key], endValue[key], k, b);
	      return ret;
	    }, {});
	  }
	  return endValue;
	}
	
	function updateCurrValue(frameRate, currValue, currVelocity, endValue) {
	  if (typeof endValue === 'number') {
	    var _presets$noWobble = _presets2['default'].noWobble;
	    var k = _presets$noWobble[0];
	    var b = _presets$noWobble[1];
	
	    return _stepper2['default'](frameRate, currValue, currVelocity, endValue, k, b)[0];
	  }
	
	  return _updateCurrValue(frameRate, currValue, currVelocity, endValue);
	}
	
	function _updateCurrVelocity(frameRate, currValue, currVelocity, endValue, k, b) {
	  if (endValue == null) {
	    return null;
	  }
	  if (typeof endValue === 'number') {
	    if (k == null || b == null) {
	      return _mapTree2['default'](_zero2['default'], currVelocity);
	    }
	    // TODO: do something to stepper to make this not allocate (2 steppers?)
	    return _stepper2['default'](frameRate, currValue, currVelocity, endValue, k, b)[1];
	  }
	  if (endValue.val != null && endValue.config && endValue.config.length === 0) {
	    return _mapTree2['default'](_zero2['default'], currVelocity);
	  }
	  if (endValue.val != null) {
	    var _ref2 = endValue.config || _presets2['default'].noWobble;
	
	    var _k = _ref2[0];
	    var _b = _ref2[1];
	
	    var ret = {
	      val: _updateCurrVelocity(frameRate, currValue.val, currVelocity.val, endValue.val, _k, _b)
	    };
	    if (endValue.config) {
	      ret.config = endValue.config;
	    }
	    return ret;
	  }
	  if (Array.isArray(endValue)) {
	    return endValue.map(function (_, i) {
	      return _updateCurrVelocity(frameRate, currValue[i], currVelocity[i], endValue[i], k, b);
	    });
	  }
	  if (_lodashIsplainobject2['default'](endValue)) {
	    return Object.keys(endValue).reduce(function (ret, key) {
	      ret[key] = _updateCurrVelocity(frameRate, currValue[key], currVelocity[key], endValue[key], k, b);
	      return ret;
	    }, {});
	  }
	  return _mapTree2['default'](_zero2['default'], currVelocity);
	}
	
	function updateCurrVelocity(frameRate, currValue, currVelocity, endValue) {
	  if (typeof endValue === 'number') {
	    var _presets$noWobble2 = _presets2['default'].noWobble;
	    var k = _presets$noWobble2[0];
	    var b = _presets$noWobble2[1];
	
	    return _stepper2['default'](frameRate, currValue, currVelocity, endValue, k, b)[1];
	  }
	
	  return _updateCurrVelocity(frameRate, currValue, currVelocity, endValue);
	}

/***/ },

/***/ 187:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	var errorMargin = 0.0001;
	
	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;
	
	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }
	
	  return [newX, newV];
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// [stiffness, damping]
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGVtbzIvU2NydWJiZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9TcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9+L2xvZGFzaC5pc3BsYWlub2JqZWN0L34vbG9kYXNoLl9iYXNlZm9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3Qvfi9sb2Rhc2guaXNhcmd1bWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vfi9sb2Rhc2guaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcGFyZVRyZWVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQStCLENBQU87Ozs7NkNBQ2xCLEdBQW1COzs0Q0FDbkIsR0FBbUI7OzBEQUNULEdBQW1DOztxQ0FDNUMsR0FBWTs7OzsrQ0FDWixHQUFzQjs7Ozt3Q0FDdEIsR0FBYzs7QUFFbkMsS0FBTSxhQUFhLEdBQUcsNkJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsS0FBTSxXQUFXLEdBQUcsNkJBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWxELEtBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNuQixLQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7O0FBRXJCLEtBQU0sTUFBTSxHQUFHO0FBQ2IsV0FBUSxFQUFFO0FBQ1IsVUFBSyxFQUFFLE1BQU07QUFDYixjQUFTLEVBQUUsWUFBWTtJQUN4QjtBQUNELE9BQUksRUFBRTtBQUNKLGlCQUFZ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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFL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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7O0FDL0JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7OztBQy9LQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQyIsImZpbGUiOiJkZW1vMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFYXNlcn0gZnJvbSAnZnVuY3Rpb25hbC1lYXNpbmcnO1xuaW1wb3J0IHt0d2Vlbn0gZnJvbSAncmVhY3QtdHJhY2svdHdlZW4nO1xuaW1wb3J0IHtyb3RhdGUsIHBlcmNlbnR9IGZyb20gJ3JlYWN0LXRyYWNrL3R3ZWVuLXZhbHVlLWZhY3Rvcmllcyc7XG5pbXBvcnQgU2NydWJiZXIgZnJvbSAnLi9TY3J1YmJlcic7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAncmVhY3QtdHJhY2svdGltZWxpbmUnO1xuaW1wb3J0IHtTcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IGVhc2VPdXRCb3VuY2UgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LWJvdW5jZScpO1xuY29uc3QgZWFzZU91dFNpbmUgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LXNpbmUnKTtcblxuY29uc3QgTUlOX1RJTUUgPSAwO1xuY29uc3QgTUFYX1RJTUUgPSAxMDA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2NydWJiZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBiYWxsOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBvcGFjaXR5OiAwLjJcbiAgfVxufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lbGluZVxuICAgICAgICBwbGF5T25Nb3VudD17dHJ1ZX1cbiAgICAgICAgbWluPXtNSU5fVElNRX1cbiAgICAgICAgbWF4PXtNQVhfVElNRX1cbiAgICAgICAgbG9vcD17dHJ1ZX0+XG4gICAgICB7KHt0aW1lLCBwbGF5aW5nLCB0b2dnbGVQbGF5LCBzZXRUaW1lfSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRvcCA9ICgxMDAgKyA0MCAqIE1hdGguc2luKHRpbWUvNSkpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdHdlZW4odGltZSwge1xuICAgICAgICAgIFtNSU5fVElNRV06IDAsXG4gICAgICAgICAgW01BWF9USU1FXTogMTAwXG4gICAgICAgIH0sIGVhc2VPdXRTaW5lKTtcblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e3BhZGRpbmc6IDMwfX0+XG5cbiAgICAgICAgICA8U3ByaW5nIGVuZFZhbHVlPXt7dmFsOiB7dG9wLGxlZnR9fX0+XG4gICAgICAgICAge2ludGVycG9sYXRlZCA9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5iYWxsLFxuICAgICAgICAgICAgICAgIHRvcDogaW50ZXJwb2xhdGVkLnZhbC50b3AsXG4gICAgICAgICAgICAgICAgbGVmdDogaW50ZXJwb2xhdGVkLnZhbC5sZWZ0ICsgJyUnLFxuICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgIH08L1NwcmluZz5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5iYWxsLFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIGxlZnQ6IGxlZnQgKyAnJSdcbiAgICAgICAgICAgIH19Lz5cblxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHRpbWUsIHtcbiAgICAgICAgICAgICAgW01JTl9USU1FXTogeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9LFxuICAgICAgICAgICAgICBbTUFYX1RJTUVdOiB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCkgfSB9LFxuICAgICAgICAgICAgICBlYXNlT3V0Qm91bmNlKX0+XG4gICAgICAgICAgICBzcGluXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGxheX0+XG4gICAgICAgICAgICB7cGxheWluZyA/ICdwYXVzZScgOiAncGxheSd9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8U2NydWJiZXJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2NydWJiZXJ9XG4gICAgICAgICAgICBtaW49e01JTl9USU1FfVxuICAgICAgICAgICAgbWF4PXtNQVhfVElNRX1cbiAgICAgICAgICAgIHZhbHVlPXt0aW1lfVxuICAgICAgICAgICAgb25DaGFuZ2VWYWx1ZT17c2V0VGltZX0gLz5cblxuICAgICAgICA8L2Rpdj59XG5cbiAgICAgIH08L1RpbWVsaW5lPlxuICAgIClcbiAgfVxufVxuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzIvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGluYyA9IHggPT4geCArIDE7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udHJvbFJhbmdlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDYwcHgpJyB9LFxuICBjb250cm9sVmFsdWU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3J1YmJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IHZhbHVlOiAwLCBtaW46IDAsIG1heDogMTAwLCBuYW1lOiBudWxsIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21pbixtYXgsdmFsdWUsb25DaGFuZ2VWYWx1ZSxuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXttaW59IG1heD17bWF4fSBzdHlsZT17c3R5bGVzLmNvbnRyb2xSYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2VWYWx1ZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSkgfS8+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udHJvbFZhbHVlfT57dmFsdWV9IG9mIHttYXh9PC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzIvU2NydWJiZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyB0b2RvOiBwcm9wIHR5cGVzICYgZGVmYXVsdCBwcm9wc1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy50aWNrID0gOjp0aGlzLnRpY2s7XG5cbiAgICB0aGlzLmV4cG9zZSA9IHtcbiAgICAgIHBsYXk6IDo6dGhpcy5wbGF5LFxuICAgICAgcGF1c2U6IDo6dGhpcy5wYXVzZSxcbiAgICAgIHNldFBsYXk6IDo6dGhpcy5zZXRQbGF5LFxuICAgICAgc2V0VGltZTogOjp0aGlzLnNldFRpbWUsXG4gICAgICB0b2dnbGVQbGF5OiA6OnRoaXMudG9nZ2xlUGxheVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lOiBwcm9wcy5pbml0aWFsVGltZSB8fCAwLCAvLyB0b2RvOiBkZWZhdWx0UHJvcHNcbiAgICAgIHBsYXlpbmc6ICEhIHByb3BzLnBsYXlPbk1vdW50XG4gICAgfTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgY29uc3Qge3BsYXlpbmcsIHRpbWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh0aW1lID49IHRoaXMucHJvcHMubWF4KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb29wKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IHRoaXMucHJvcHMubWlufSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IHRpbWUrMX0pOyAgLy8gdG9kbzogYXJiaXRyYXJ5IGluY3JlbWVudFxuICAgIH1cblxuICAgIGlmIChwbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgfVxuXG4gIHNldFRpbWUodGltZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWV9KTtcbiAgfVxuXG4gIHBsYXkoKSB7IHRoaXMuc2V0UGxheSh0cnVlKSB9XG4gIHBhdXNlKCkgeyB0aGlzLnNldFBsYXkoZmFsc2UpIH1cblxuICBzZXRQbGF5KHBsYXlpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucGxheWluZyAmJiBwbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGxheWluZyB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBsYXkocGxheWluZykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5wbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5aW5nOiAhdGhpcy5zdGF0ZS5wbGF5aW5nfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4udGhpcy5leHBvc2VcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lbGluZS5qc1xuICoqLyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8ge30gOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gZ2xvYmFsWydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSBnbG9iYWxbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IGdsb2JhbFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmFmOyBpKyspIHtcbiAgcmFmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JhZi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4gKiogbW9kdWxlIGlkID0gMTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZW9yZGVyS2V5cyA9IHJlcXVpcmUoJy4vcmVvcmRlcktleXMnKTtcblxudmFyIF9yZW9yZGVyS2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW9yZGVyS2V5cyk7XG5cbnZhciBfU3ByaW5nID0gcmVxdWlyZSgnLi9TcHJpbmcnKTtcblxuZXhwb3J0cy5TcHJpbmcgPSBfU3ByaW5nLlNwcmluZztcbmV4cG9ydHMuVHJhbnNpdGlvblNwcmluZyA9IF9TcHJpbmcuVHJhbnNpdGlvblNwcmluZztcblxudmFyIF9wcmVzZXRzMiA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0czIpO1xuXG5leHBvcnRzLnByZXNldHMgPSBfcHJlc2V0czNbJ2RlZmF1bHQnXTtcbnZhciB1dGlscyA9IHtcbiAgcmVvcmRlcktleXM6IF9yZW9yZGVyS2V5czJbJ2RlZmF1bHQnXVxufTtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlb3JkZXJLZXlzO1xuXG5mdW5jdGlvbiByZW9yZGVyS2V5cyhvYmosIGYpIHtcbiAgdmFyIG5ld0tleXMgPSBmKE9iamVjdC5rZXlzKG9iaikpO1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3S2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBuZXdLZXlzW2ldO1xuICAgIHJldFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY29tcG9uZW50cyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuXG52YXIgX2NvbXBvbmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50cyk7XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbXBvbmVudHMyWydkZWZhdWx0J10oX3JlYWN0MlsnZGVmYXVsdCddKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL1NwcmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb21wb25lbnRzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbWFwVHJlZSA9IHJlcXVpcmUoJy4vbWFwVHJlZScpO1xuXG52YXIgX21hcFRyZWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVHJlZSk7XG5cbnZhciBfbm9WZWxvY2l0eSA9IHJlcXVpcmUoJy4vbm9WZWxvY2l0eScpO1xuXG52YXIgX25vVmVsb2NpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9WZWxvY2l0eSk7XG5cbnZhciBfY29tcGFyZVRyZWVzID0gcmVxdWlyZSgnLi9jb21wYXJlVHJlZXMnKTtcblxudmFyIF9jb21wYXJlVHJlZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGFyZVRyZWVzKTtcblxudmFyIF9tZXJnZURpZmYgPSByZXF1aXJlKCcuL21lcmdlRGlmZicpO1xuXG52YXIgX21lcmdlRGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZURpZmYpO1xuXG52YXIgX2FuaW1hdGlvbkxvb3AgPSByZXF1aXJlKCcuL2FuaW1hdGlvbkxvb3AnKTtcblxudmFyIF9hbmltYXRpb25Mb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbkxvb3ApO1xuXG52YXIgX3plcm8gPSByZXF1aXJlKCcuL3plcm8nKTtcblxudmFyIF96ZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3plcm8pO1xuXG52YXIgX3VwZGF0ZVRyZWUgPSByZXF1aXJlKCcuL3VwZGF0ZVRyZWUnKTtcblxudmFyIHN0YXJ0QW5pbWF0aW9uID0gX2FuaW1hdGlvbkxvb3AyWydkZWZhdWx0J10oKTtcblxuZnVuY3Rpb24gYW5pbWF0aW9uU3RlcChzaG91bGRNZXJnZSwgc3RvcEFuaW1hdGlvbiwgZ2V0UHJvcHMsIHRpbWVzdGVwLCBzdGF0ZSkge1xuICB2YXIgY3VyclZhbHVlID0gc3RhdGUuY3VyclZhbHVlO1xuICB2YXIgY3VyclZlbG9jaXR5ID0gc3RhdGUuY3VyclZlbG9jaXR5O1xuXG4gIHZhciBfZ2V0UHJvcHMgPSBnZXRQcm9wcygpO1xuXG4gIHZhciB3aWxsRW50ZXIgPSBfZ2V0UHJvcHMud2lsbEVudGVyO1xuICB2YXIgd2lsbExlYXZlID0gX2dldFByb3BzLndpbGxMZWF2ZTtcbiAgdmFyIGVuZFZhbHVlID0gX2dldFByb3BzLmVuZFZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZW5kVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlKGN1cnJWYWx1ZSk7XG4gIH1cblxuICB2YXIgbWVyZ2VkVmFsdWUgPSBlbmRWYWx1ZTsgLy8gc2V0IG1lcmdlZFZhbHVlIHRvIGVuZFZhbHVlIGFzIHRoZSBkZWZhdWx0XG4gIHZhciBoYXNOZXdLZXkgPSBmYWxzZTtcblxuICBpZiAoc2hvdWxkTWVyZ2UpIHtcbiAgICBtZXJnZWRWYWx1ZSA9IF9tZXJnZURpZmYyWydkZWZhdWx0J10oY3VyclZhbHVlLCBlbmRWYWx1ZSxcbiAgICAvLyBUT0RPOiBzdG9wIGFsbG9jYXRpbmcgbGlrZSBjcmF6eSBpbiB0aGlzIHdob2xlIGNvZGUgcGF0aFxuICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciByZXMgPSB3aWxsTGVhdmUoa2V5LCBjdXJyVmFsdWVba2V5XSwgZW5kVmFsdWUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5KTtcbiAgICAgIGlmIChyZXMgPT0gbnVsbCkge1xuICAgICAgICAvLyBGb3IgbGVnYWN5IHJlYXNvbi4gV2Ugd29uJ3QgYWxsb3cgcmV0dXJuaW5nIG51bGwgc29vblxuICAgICAgICAvLyBUT0RPOiByZW1vdmUsIGFmdGVyIG5leHQgcmVsZWFzZVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKGN1cnJWZWxvY2l0eVtrZXldKSAmJiBfY29tcGFyZVRyZWVzMlsnZGVmYXVsdCddKGN1cnJWYWx1ZVtrZXldLCByZXMpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKG1lcmdlZFZhbHVlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuICFjdXJyVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBfZXh0ZW5kczIsIF9leHRlbmRzMztcblxuICAgICAgaGFzTmV3S2V5ID0gdHJ1ZTtcbiAgICAgIHZhciBlbnRlclZhbHVlID0gd2lsbEVudGVyKGtleSwgbWVyZ2VkVmFsdWVba2V5XSwgZW5kVmFsdWUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5KTtcblxuICAgICAgLy8gV2UgY2FuIG11dGF0ZSB0aGlzIGhlcmUgYmVjYXVzZSBtZXJnZURpZmYgcmV0dXJucyBhIG5ldyBPYmpcbiAgICAgIG1lcmdlZFZhbHVlW2tleV0gPSBlbnRlclZhbHVlO1xuXG4gICAgICBjdXJyVmFsdWUgPSBfZXh0ZW5kcyh7fSwgY3VyclZhbHVlLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltrZXldID0gZW50ZXJWYWx1ZSwgX2V4dGVuZHMyKSk7XG4gICAgICBjdXJyVmVsb2NpdHkgPSBfZXh0ZW5kcyh7fSwgY3VyclZlbG9jaXR5LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1trZXldID0gX21hcFRyZWUyWydkZWZhdWx0J10oX3plcm8yWydkZWZhdWx0J10sIGVudGVyVmFsdWUpLCBfZXh0ZW5kczMpKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgbmV3Q3VyclZhbHVlID0gX3VwZGF0ZVRyZWUudXBkYXRlQ3VyclZhbHVlKHRpbWVzdGVwLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgbWVyZ2VkVmFsdWUpO1xuICB2YXIgbmV3Q3VyclZlbG9jaXR5ID0gX3VwZGF0ZVRyZWUudXBkYXRlQ3VyclZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgbWVyZ2VkVmFsdWUpO1xuXG4gIGlmICghaGFzTmV3S2V5ICYmIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKGN1cnJWZWxvY2l0eSkgJiYgX25vVmVsb2NpdHkyWydkZWZhdWx0J10obmV3Q3VyclZlbG9jaXR5KSkge1xuICAgIC8vIGNoZWNrIGV4cGxhbmF0aW9uIGluIGBTcHJpbmcuYW5pbWF0aW9uUmVuZGVyYFxuICAgIHN0b3BBbmltYXRpb24oKTsgLy8gTmFzdHkgc2lkZSBlZmZlY3RzLi4uLlxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJyVmFsdWU6IG5ld0N1cnJWYWx1ZSxcbiAgICBjdXJyVmVsb2NpdHk6IG5ld0N1cnJWZWxvY2l0eVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRzKFJlYWN0KSB7XG4gIHZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgdmFyIFNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1NwcmluZycsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5LCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgICBlbmRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGVuZFZhbHVlID0gX3Byb3BzLmVuZFZhbHVlO1xuICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9wcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICAgIHZhciBjdXJyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIFRPRE86IHByb3ZpZGUgcGVyZiB0aXAgaGVyZSB3aGVuIGVuZFZhbHVlIGFyZ3VtZW50IGNvdW50IGlzIDBcbiAgICAgICAgICAvLyAobWVhbmluZyB5b3UgY291bGQgaGF2ZSBwYXNzZWQgYW4gb2JqKVxuICAgICAgICAgIGN1cnJWYWx1ZSA9IGVuZFZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyclZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJWYWx1ZTogY3VyclZhbHVlLFxuICAgICAgICBjdXJyVmVsb2NpdHk6IF9tYXBUcmVlMlsnZGVmYXVsdCddKF96ZXJvMlsnZGVmYXVsdCddLCBjdXJyVmFsdWUpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLmJpbmQobnVsbCwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBhbmltYXRpb25TdGVwOiBudWxsLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIC8vIElzIHNtYXJ0IGVub3VnaCB0byBub3Qgc3RhcnQgaXQgdHdpY2VcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIGB0aGlzLmhhc1VubW91bnRlZGAgbWlnaHQgYmUgdHJ1ZSBpbiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbjpcbiAgICAgIC8vIHVzZXIgZG9lcyBzb21lIGNoZWNrcyBpbiBgZW5kVmFsdWVgIGFuZCBjYWxscyBhbiBvd25lciBoYW5kbGVyXG4gICAgICAvLyBvd25lciBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjaywgdHJpZ2dlcmluZyBhIHJlLXJlbmRlclxuICAgICAgLy8gcmUtcmVuZGVyIHVubW91bnRzIHRoZSBTcHJpbmdcbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VyclZhbHVlOiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0U3RhdGUuY3VyclZhbHVlLCBwcmV2U3RhdGUuY3VyclZhbHVlKSxcbiAgICAgICAgICBjdXJyVmVsb2NpdHk6IG5leHRTdGF0ZS5jdXJyVmVsb2NpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuc3RhdGUuY3VyclZhbHVlKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIFJlYWN0LkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPOiB3YXJuIHdoZW4gb2JqIHVzZXMgbnVtZXJpY2FsIGtleXNcbiAgLy8gVE9ETzogd2FybiB3aGVuIGVuZFZhbHVlIGRvZXNuJ3QgY29udGFpbiBhIHZhbFxuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25TcHJpbmcnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIGVuZFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCldKS5cbiAgICAgIC8vIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAvLyAgIGtleTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgLy8gfSkpLFxuICAgICAgLy8gUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIHdpbGxMZWF2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgICAgLy8gUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIC8vIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIHdpbGxFbnRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgICAgLy8gUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIC8vIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lsbEVudGVyOiBmdW5jdGlvbiB3aWxsRW50ZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgd2lsbExlYXZlOiBmdW5jdGlvbiB3aWxsTGVhdmUoKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGVuZFZhbHVlID0gX3Byb3BzMi5lbmRWYWx1ZTtcbiAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfcHJvcHMyLmRlZmF1bHRWYWx1ZTtcblxuICAgICAgdmFyIGN1cnJWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3VyclZhbHVlID0gZW5kVmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VyclZhbHVlOiBjdXJyVmFsdWUsXG4gICAgICAgIGN1cnJWZWxvY2l0eTogX21hcFRyZWUyWydkZWZhdWx0J10oX3plcm8yWydkZWZhdWx0J10sIGN1cnJWYWx1ZSlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSBhbmltYXRpb25TdGVwLmJpbmQobnVsbCwgdHJ1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgYW5pbWF0aW9uU3RlcDogbnVsbCxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBTZWUgY29tbWVudCBpbiBTcHJpbmcuXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJWYWx1ZTogX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0YXRlLmN1cnJWYWx1ZSwgcHJldlN0YXRlLmN1cnJWYWx1ZSksXG4gICAgICAgICAgY3VyclZlbG9jaXR5OiBuZXh0U3RhdGUuY3VyclZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJWYWx1ZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgU3ByaW5nOiBTcHJpbmcsIFRyYW5zaXRpb25TcHJpbmc6IFRyYW5zaXRpb25TcHJpbmcgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9jb21wb25lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTczXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtYXBUcmVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoSXNwbGFpbm9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC5pc3BsYWlub2JqZWN0Jyk7XG5cbi8vIGN1cnJlbmx5IGEgaGVscGVyIHVzZWQgZm9yIHByb2R1Y2luZyBhIHRyZWUgb2YgdGhlIHNhbWUgc2hhcGUgYXMgdGhlXG4vLyBpbnB1dChzKSwgIGJ1dCB3aXRoIGRpZmZlcmVudCB2YWx1ZXMuIEl0J3MgdGVjaG5pY2FsbHkgbm90IGEgcmVhbCBgbWFwYFxuLy8gZXF1aXZhbGVudCBmb3IgdHJlZXMsIHNpbmNlIGl0IHNraXBzIGNhbGxpbmcgZiBvbiBub24tbnVtYmVycy5cblxuLy8gVE9ETzogcHJvYmFibHkgZG9lc24ndCBuZWVkIHBhdGgsIHN0b3AgYWxsb2NhdGluZyB1c2VsZXNzbHlcbi8vIFRPRE86IGRvbid0IG5lZWQgdG8gbWFwIG92ZXIgbWFueSB0cmVlcyBhbnltb3JlXG4vLyBUT0RPOiBza2lwcGluZyBub24tbnVtYmVycyBpcyB3ZWlyZCBhbmQgbm9uLWdlbmVyaWMuIFVzZSBwcmUtb3JkZXIgdHJhdmVyc2FsXG4vLyBhc3N1bWUgdHJlZXMgYXJlIG9mIHRoZSBzYW1lIHNoYXBlXG5cbnZhciBfbG9kYXNoSXNwbGFpbm9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc3BsYWlub2JqZWN0KTtcblxuZnVuY3Rpb24gX21hcFRyZWUocGF0aCwgZiwgdHJlZXMpIHtcbiAgdmFyIHQxID0gdHJlZXNbMF07XG4gIGlmICh0eXBlb2YgdDEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGYuYXBwbHkodW5kZWZpbmVkLCBbcGF0aF0uY29uY2F0KHRyZWVzKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodDEpKSB7XG4gICAgcmV0dXJuIHQxLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIF9tYXBUcmVlKFtdLmNvbmNhdChwYXRoLCBbaV0pLCBmLCB0cmVlcy5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsW2ldO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChfbG9kYXNoSXNwbGFpbm9iamVjdDJbJ2RlZmF1bHQnXSh0MSkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModDEpLnJlZHVjZShmdW5jdGlvbiAobmV3VHJlZSwga2V5KSB7XG4gICAgICBuZXdUcmVlW2tleV0gPSBfbWFwVHJlZShbXS5jb25jYXQocGF0aCwgW2tleV0pLCBmLCB0cmVlcy5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsW2tleV07XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gbmV3VHJlZTtcbiAgICB9LCB7fSk7XG4gIH1cbiAgLy8gcmV0dXJuIGxhc3Qgb25lIGp1c3QgYmVjYXVzZVxuICByZXR1cm4gdHJlZXNbdHJlZXMubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIG1hcFRyZWUoZikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfbWFwVHJlZShbXSwgZiwgcmVzdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvbWFwVHJlZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggMy4yLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlRm9yID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlZm9yJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdsb2Rhc2guaXNhcmd1bWVudHMnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCdsb2Rhc2gua2V5c2luJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvckluKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5c0luKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGFzc3VtZXMgb2JqZWN0cyBjcmVhdGVkIGJ5IHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3RvclxuICogaGF2ZSBubyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHZhciBDdG9yO1xuXG4gIC8vIEV4aXQgZWFybHkgZm9yIG5vbiBgT2JqZWN0YCBvYmplY3RzLlxuICBpZiAoIShpc09iamVjdExpa2UodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IG9iamVjdFRhZyAmJiAhaXNBcmd1bWVudHModmFsdWUpKSB8fFxuICAgICAgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY29uc3RydWN0b3InKSAmJiAoQ3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yLCB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmICEoQ3RvciBpbnN0YW5jZW9mIEN0b3IpKSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSUUgPCA5IGl0ZXJhdGVzIGluaGVyaXRlZCBwcm9wZXJ0aWVzIGJlZm9yZSBvd24gcHJvcGVydGllcy4gSWYgdGhlIGZpcnN0XG4gIC8vIGl0ZXJhdGVkIHByb3BlcnR5IGlzIGFuIG9iamVjdCdzIG93biBwcm9wZXJ0eSB0aGVuIHRoZXJlIGFyZSBubyBpbmhlcml0ZWRcbiAgLy8gZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICB2YXIgcmVzdWx0O1xuICAvLyBJbiBtb3N0IGVudmlyb25tZW50cyBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyBhcmUgaXRlcmF0ZWQgYmVmb3JlXG4gIC8vIGl0cyBpbmhlcml0ZWQgcHJvcGVydGllcy4gSWYgdGhlIGxhc3QgaXRlcmF0ZWQgcHJvcGVydHkgaXMgYW4gb2JqZWN0J3NcbiAgLy8gb3duIHByb3BlcnR5IHRoZW4gdGhlcmUgYXJlIG5vIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gIGJhc2VGb3JJbih2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCByZXN1bHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjIgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvckluYCBhbmQgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBvYmplY3RgIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBpbnZva2luZyBgaXRlcmF0ZWVgIGZvclxuICogZWFjaCBwcm9wZXJ0eS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5XG4gKiByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIG9iamVjdCBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IE9iamVjdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9+L2xvZGFzaC5pc3BsYWlub2JqZWN0L34vbG9kYXNoLl9iYXNlZm9yL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAzLjAuNCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3Qvfi9sb2Rhc2guaXNhcmd1bWVudHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogbG9kYXNoIDMuMC44IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdsb2Rhc2guaXNhcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJyYXknKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogbG9kYXNoIDMuMC40IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggZXF1aXZhbGVudHMgd2hpY2ggcmV0dXJuICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vfi9sb2Rhc2guaXNhcnJheS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbm9WZWxvY2l0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNwbGFpbm9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNwbGFpbm9iamVjdCk7XG5cbmZ1bmN0aW9uIG5vVmVsb2NpdHkoY29sbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb2xsKSkge1xuICAgIHJldHVybiBjb2xsLmV2ZXJ5KG5vVmVsb2NpdHkpO1xuICB9XG4gIGlmIChfbG9kYXNoSXNwbGFpbm9iamVjdDJbJ2RlZmF1bHQnXShjb2xsKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb2xsKS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5ID09PSAnY29uZmlnJyA/IHRydWUgOiBub1ZlbG9jaXR5KGNvbGxba2V5XSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBjb2xsID09PSAnbnVtYmVyJyA/IGNvbGwgPT09IDAgOiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL25vVmVsb2NpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbXBhcmVUcmVlcztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNwbGFpbm9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNwbGFpbm9iamVjdCk7XG5cbmZ1bmN0aW9uIGNvbXBhcmVUcmVlcyhhLCBiKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIGEuZXZlcnkoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHJldHVybiBjb21wYXJlVHJlZXModiwgYltpXSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoX2xvZGFzaElzcGxhaW5vYmplY3QyWydkZWZhdWx0J10oYSkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYSkuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PT0gJ2NvbmZpZycgPyB0cnVlIDogY29tcGFyZVRyZWVzKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBhcmVUcmVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gdGhpcyBmdW5jdGlvbiBpcyBhbGxvY2F0aW9uLWxlc3MgdGhhbmtzIHRvIGJhYmVsLCB3aGljaCB0cmFuc2Zvcm1zIHRoZSB0YWlsXG4vLyBjYWxscyBpbnRvIGxvb3BzXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWVyZ2VEaWZmO1xuZnVuY3Rpb24gbWVyZ2VEaWZmQXJyKF94LCBfeDIsIF94MywgX3g0LCBfeDUsIF94NiwgX3g3KSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBhcnJBID0gX3gsXG4gICAgICAgIGFyckIgPSBfeDIsXG4gICAgICAgIGNvbGxCID0gX3gzLFxuICAgICAgICBpbmRleEEgPSBfeDQsXG4gICAgICAgIGluZGV4QiA9IF94NSxcbiAgICAgICAgb25SZW1vdmUgPSBfeDYsXG4gICAgICAgIGFjY3VtID0gX3g3O1xuICAgIGVuZEEgPSBlbmRCID0ga2V5QSA9IGtleUIgPSBmaWxsID0gZmlsbCA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHZhciBlbmRBID0gaW5kZXhBID09PSBhcnJBLmxlbmd0aDtcbiAgICB2YXIgZW5kQiA9IGluZGV4QiA9PT0gYXJyQi5sZW5ndGg7XG4gICAgdmFyIGtleUEgPSBhcnJBW2luZGV4QV07XG4gICAgdmFyIGtleUIgPSBhcnJCW2luZGV4Ql07XG4gICAgaWYgKGVuZEEgJiYgZW5kQikge1xuICAgICAgLy8gcmV0dXJuaW5nIG51bGwgaGVyZSwgb3RoZXJ3aXNlIGxpbnQgY29tcGxhaW5zIHRoYXQgd2UncmUgbm90IGV4cGVjdGluZ1xuICAgICAgLy8gYSByZXR1cm4gdmFsdWUgaW4gc3Vic2VxdWVudCBjYWxscy4gV2Uga25vdyB3aGF0IHdlJ3JlIGRvaW5nLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVuZEEpIHtcbiAgICAgIGFjY3VtW2tleUJdID0gY29sbEJba2V5Ql07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGVuZEIpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoa2V5QSA9PT0ga2V5Qikge1xuICAgICAgYWNjdW1ba2V5QV0gPSBjb2xsQltrZXlBXTtcbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFjb2xsQi5oYXNPd25Qcm9wZXJ0eShrZXlBKSkge1xuICAgICAgdmFyIGZpbGwgPSBvblJlbW92ZShrZXlBKTtcbiAgICAgIGlmIChmaWxsICE9IG51bGwpIHtcbiAgICAgICAgYWNjdW1ba2V5QV0gPSBmaWxsO1xuICAgICAgfVxuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICAgIF94NSA9IGluZGV4QjtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIF94ID0gYXJyQTtcbiAgICBfeDIgPSBhcnJCO1xuICAgIF94MyA9IGNvbGxCO1xuICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgX3g1ID0gaW5kZXhCO1xuICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgIF94NyA9IGFjY3VtO1xuICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgY29udGludWUgX2Z1bmN0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGlmZihhLCBiLCBvblJlbW92ZSkge1xuICB2YXIgcmV0ID0ge307XG4gIC8vIGlmIGFueW9uZSBjYW4gbWFrZSB0aGlzIHdvcmsgd2l0aG91dCBhbGxvY2F0aW5nIHRoZSBhcnJheXMgaGVyZSwgd2UnbGxcbiAgLy8gZ2l2ZSB5b3UgYSBtZWRhbFxuICBtZXJnZURpZmZBcnIoT2JqZWN0LmtleXMoYSksIE9iamVjdC5rZXlzKGIpLCBiLCAwLCAwLCBvblJlbW92ZSwgcmV0KTtcbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY29uZmlnQW5pbWF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJmb3JtYW5jZU5vdyk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbmZ1bmN0aW9uIGNvbmZpZ0FuaW1hdGlvbigpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgX2NvbmZpZyR0aW1lU3RlcCA9IGNvbmZpZy50aW1lU3RlcDtcbiAgdmFyIHRpbWVTdGVwID0gX2NvbmZpZyR0aW1lU3RlcCA9PT0gdW5kZWZpbmVkID8gMSAvIDYwICogMTAwMCA6IF9jb25maWckdGltZVN0ZXA7XG4gIHZhciBfY29uZmlnJHRpbWVTY2FsZSA9IGNvbmZpZy50aW1lU2NhbGU7XG4gIHZhciB0aW1lU2NhbGUgPSBfY29uZmlnJHRpbWVTY2FsZSA9PT0gdW5kZWZpbmVkID8gMSA6IF9jb25maWckdGltZVNjYWxlO1xuICB2YXIgX2NvbmZpZyRtYXhTdGVwcyA9IGNvbmZpZy5tYXhTdGVwcztcbiAgdmFyIG1heFN0ZXBzID0gX2NvbmZpZyRtYXhTdGVwcyA9PT0gdW5kZWZpbmVkID8gMTAgOiBfY29uZmlnJG1heFN0ZXBzO1xuICB2YXIgX2NvbmZpZyRyYWYgPSBjb25maWcucmFmO1xuICB2YXIgcmFmID0gX2NvbmZpZyRyYWYgPT09IHVuZGVmaW5lZCA/IF9yYWYyWydkZWZhdWx0J10gOiBfY29uZmlnJHJhZjtcbiAgdmFyIF9jb25maWckbm93ID0gY29uZmlnLm5vdztcbiAgdmFyIG5vdyA9IF9jb25maWckbm93ID09PSB1bmRlZmluZWQgPyBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10gOiBfY29uZmlnJG5vdztcblxuICB2YXIgYW5pbVJ1bm5pbmcgPSBbXTtcbiAgdmFyIHJ1bm5pbmcgPSBmYWxzZTtcbiAgdmFyIHByZXZUaW1lID0gMDtcbiAgdmFyIGFjY3VtdWxhdGVkVGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBub3coKTtcbiAgICB2YXIgZnJhbWVUaW1lID0gY3VycmVudFRpbWUgLSBwcmV2VGltZTsgLy8gZGVsdGFcblxuICAgIHByZXZUaW1lID0gY3VycmVudFRpbWU7XG4gICAgYWNjdW11bGF0ZWRUaW1lICs9IGZyYW1lVGltZSAqIHRpbWVTY2FsZTtcblxuICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPiB0aW1lU3RlcCAqIG1heFN0ZXBzKSB7XG4gICAgICBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBmcmFtZU51bWJlciA9IE1hdGguY2VpbChhY2N1bXVsYXRlZFRpbWUgLyB0aW1lU3RlcCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9hbmltUnVubmluZyRpID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICB2YXIgYWN0aXZlID0gX2FuaW1SdW5uaW5nJGkuYWN0aXZlO1xuICAgICAgdmFyIHN0ZXAgPSBfYW5pbVJ1bm5pbmckaS5zdGVwO1xuICAgICAgdmFyIHByZXZQcmV2U3RhdGUgPSBfYW5pbVJ1bm5pbmckaS5wcmV2U3RhdGU7XG4gICAgICB2YXIgcHJldk5leHRTdGF0ZSA9IGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZTtcblxuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlZW1zIGxpa2UgYmVjYXVzZSB0aGUgVFMgc2V0cyBkZXN0VmFscyBhcyBlbnRlclZhbHMgZm9yIHRoZSBmaXJzdFxuICAgICAgLy8gdGljaywgd2UgbWlnaHQgcmVuZGVyIHRoYXQgdmFsdWUgdHdpY2UuIFdlIHJlbmRlciBpdCBvbmNlLCBjdXJyVmFsdWUgaXNcbiAgICAgIC8vIGVudGVyVmFsIGFuZCBkZXN0VmFsIGlzIGVudGVyVmFsLiBUaGUgbmV4dCB0aWNrIGlzIGZhc3RlciB0aGFuIDE2bXMsXG4gICAgICAvLyBzbyBhY2N1bXVsYXRlZFRpbWUgKHdoaWNoIHdvdWxkIGJlIGFib3V0IC0xNm1zIGZyb20gdGhlIHByZXZpb3VzIHRpY2spXG4gICAgICAvLyBpcyBuZWdhdGl2ZSAoLTE2bXMgKyBhbnkgbnVtYmVyIGxlc3MgdGhhbiAxNm1zIDwgMCkuIFNvIHdlIGp1c3QgcmVuZGVyXG4gICAgICAvLyBwYXJ0IHdheXMgdG93YXJkcyB0aGUgbmV4dFN0YXRlLCBidXQgdGhhdCdzIGVudGVyVmFsIHN0aWxsLiBXZSByZW5kZXJcbiAgICAgIC8vIHNheSA3NSUgYmV0d2VlbiBjdXJyVmFsdWUgKD09PSBlbnRlclZhbCkgYW5kIGRlc3RWYWx1ZSAoPT09IGVudGVyVmFsKS5cbiAgICAgIC8vIFNvIHdlIHJlbmRlciB0aGUgc2FtZSB2YWx1ZSBhIHNlY29uZCB0aW1lLlxuICAgICAgLy8gVGhlIHNvbHV0aW9uIGJlbGxvdyBpcyB0byByZWNhbGN1bGF0ZSB0aGUgZGVzdGluYXRpb24gc3RhdGUgZXZlbiB3aGVuXG4gICAgICAvLyB5b3UncmUgbW92aW5nIHBhcnRpYWxseSB0b3dhcmRzIGl0LlxuICAgICAgaWYgKGFjY3VtdWxhdGVkVGltZSA8PSAwKSB7XG4gICAgICAgIGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZSA9IHN0ZXAodGltZVN0ZXAgLyAxMDAwLCBwcmV2UHJldlN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnJhbWVOdW1iZXI7IGorKykge1xuICAgICAgICAgIGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZSA9IHN0ZXAodGltZVN0ZXAgLyAxMDAwLCBwcmV2TmV4dFN0YXRlKTtcbiAgICAgICAgICB2YXIgX3JlZiA9IFtwcmV2TmV4dFN0YXRlLCBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGVdO1xuICAgICAgICAgIGFuaW1SdW5uaW5nW2ldLnByZXZTdGF0ZSA9IF9yZWZbMF07XG4gICAgICAgICAgcHJldk5leHRTdGF0ZSA9IF9yZWZbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY2N1bXVsYXRlZFRpbWUgPSBhY2N1bXVsYXRlZFRpbWUgLSBmcmFtZU51bWJlciAqIHRpbWVTdGVwO1xuXG4gICAgLy8gUmVuZGVyIGFuZCBmaWx0ZXIgaW4gb25lIGl0ZXJhdGlvbi5cbiAgICB2YXIgYWxwaGEgPSAxICsgYWNjdW11bGF0ZWRUaW1lIC8gdGltZVN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9hbmltUnVubmluZyRpMiA9IGFuaW1SdW5uaW5nW2ldO1xuXG4gICAgICAvLyBNaWdodCBtdXRhdGUgYW5pbVJ1bm5pbmcuLi4uLi4uLlxuICAgICAgdmFyIHJlbmRlciA9IF9hbmltUnVubmluZyRpMi5yZW5kZXI7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLm5leHRTdGF0ZTtcbiAgICAgIHZhciBwcmV2U3RhdGUgPSBfYW5pbVJ1bm5pbmckaTIucHJldlN0YXRlO1xuICAgICAgcmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFyIG5ld0FuaW1SdW5uaW5nID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFuaW1SdW5uaW5nW2ldLmFjdGl2ZSkge1xuICAgICAgICBuZXdBbmltUnVubmluZy5wdXNoKGFuaW1SdW5uaW5nW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltUnVubmluZyA9IG5ld0FuaW1SdW5uaW5nO1xuXG4gICAgaWYgKGFuaW1SdW5uaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYobG9vcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgIHByZXZUaW1lID0gbm93KCk7XG4gICAgICBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgcmFmKGxvb3ApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbihzdGF0ZSwgc3RlcCwgcmVuZGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbCA9IGFuaW1SdW5uaW5nW2ldO1xuICAgICAgaWYgKHZhbC5zdGVwID09PSBzdGVwKSB7XG4gICAgICAgIHZhbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB2YWwucHJldlN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB2YWwuc3RvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3QW5pbSA9IHtcbiAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgIHByZXZTdGF0ZTogc3RhdGUsXG4gICAgICBuZXh0U3RhdGU6IHN0YXRlLFxuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfTtcblxuICAgIG5ld0FuaW0uc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXdBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgYW5pbVJ1bm5pbmcucHVzaChuZXdBbmltKTtcblxuICAgIHN0YXJ0KCk7XG5cbiAgICByZXR1cm4gbmV3QW5pbS5zdG9wO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAxODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gdXNlZCBieSB0aGUgdHJlZS13YWxraW5nIHVwZGF0ZXMgYW5kIHNwcmluZ3MuIEF2b2lkcyBzb21lIGFsbG9jYXRpb25zXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gemVybztcblxuZnVuY3Rpb24gemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi96ZXJvLmpzXG4gKiogbW9kdWxlIGlkID0gMTg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmludGVycG9sYXRlVmFsdWUgPSBpbnRlcnBvbGF0ZVZhbHVlO1xuZXhwb3J0cy51cGRhdGVDdXJyVmFsdWUgPSB1cGRhdGVDdXJyVmFsdWU7XG5leHBvcnRzLnVwZGF0ZUN1cnJWZWxvY2l0eSA9IHVwZGF0ZUN1cnJWZWxvY2l0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNwbGFpbm9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNwbGFpbm9iamVjdCk7XG5cbnZhciBfbWFwVHJlZSA9IHJlcXVpcmUoJy4vbWFwVHJlZScpO1xuXG52YXIgX21hcFRyZWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVHJlZSk7XG5cbnZhciBfc3RlcHBlciA9IHJlcXVpcmUoJy4vc3RlcHBlcicpO1xuXG52YXIgX3N0ZXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RlcHBlcik7XG5cbnZhciBfemVybyA9IHJlcXVpcmUoJy4vemVybycpO1xuXG52YXIgX3plcm8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfemVybyk7XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG4vLyBUT0RPOiByZWZhY3RvciBjb21tb24gbG9naWMgd2l0aCB1cGRhdGVDdXJyVmFsdWUgYW5kIHVwZGF0ZUN1cnJWZWxvY2l0eVxuXG52YXIgX3ByZXNldHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0cyk7XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRWYWx1ZSwgcHJldlZhbHVlKSB7XG4gIGlmIChuZXh0VmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwcmV2VmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXh0VmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBuZXh0VmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NoZW5nbG91L3JlYWN0LW1vdGlvbi9wdWxsLzU3I2lzc3VlY29tbWVudC0xMjE5MjQ2MjhcbiAgICByZXR1cm4gbmV4dFZhbHVlICogYWxwaGEgKyBwcmV2VmFsdWUgKiAoMSAtIGFscGhhKTtcbiAgfVxuICBpZiAobmV4dFZhbHVlLnZhbCAhPSBudWxsICYmIG5leHRWYWx1ZS5jb25maWcgJiYgbmV4dFZhbHVlLmNvbmZpZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV4dFZhbHVlO1xuICB9XG4gIGlmIChuZXh0VmFsdWUudmFsICE9IG51bGwpIHtcbiAgICB2YXIgcmV0ID0ge1xuICAgICAgdmFsOiBpbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0VmFsdWUudmFsLCBwcmV2VmFsdWUudmFsKVxuICAgIH07XG4gICAgaWYgKG5leHRWYWx1ZS5jb25maWcpIHtcbiAgICAgIHJldC5jb25maWcgPSBuZXh0VmFsdWUuY29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5leHRWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV4dFZhbHVlLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRWYWx1ZVtpXSwgcHJldlZhbHVlW2ldKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoX2xvZGFzaElzcGxhaW5vYmplY3QyWydkZWZhdWx0J10obmV4dFZhbHVlKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXh0VmFsdWUpLnJlZHVjZShmdW5jdGlvbiAocmV0LCBrZXkpIHtcbiAgICAgIHJldFtrZXldID0gaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFZhbHVlW2tleV0sIHByZXZWYWx1ZVtrZXldKTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSwge30pO1xuICB9XG4gIHJldHVybiBuZXh0VmFsdWU7XG59XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIF91cGRhdGVDdXJyVmVsb2NpdHlcbmZ1bmN0aW9uIF91cGRhdGVDdXJyVmFsdWUoZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUsIGssIGIpIHtcbiAgaWYgKGVuZFZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGlmIChrID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5kVmFsdWU7XG4gICAgfVxuICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyB0byBzdGVwcGVyIHRvIG1ha2UgdGhpcyBub3QgYWxsb2NhdGUgKDIgc3RlcHBlcnM/KVxuICAgIHJldHVybiBfc3RlcHBlcjJbJ2RlZmF1bHQnXShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSwgaywgYilbMF07XG4gIH1cbiAgaWYgKGVuZFZhbHVlLnZhbCAhPSBudWxsICYmIGVuZFZhbHVlLmNvbmZpZyAmJiBlbmRWYWx1ZS5jb25maWcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGVuZFZhbHVlO1xuICB9XG4gIGlmIChlbmRWYWx1ZS52YWwgIT0gbnVsbCkge1xuICAgIHZhciBfcmVmID0gZW5kVmFsdWUuY29uZmlnIHx8IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlO1xuXG4gICAgdmFyIF9rID0gX3JlZlswXTtcbiAgICB2YXIgX2IgPSBfcmVmWzFdO1xuXG4gICAgdmFyIHJldCA9IHtcbiAgICAgIHZhbDogX3VwZGF0ZUN1cnJWYWx1ZShmcmFtZVJhdGUsIGN1cnJWYWx1ZS52YWwsIGN1cnJWZWxvY2l0eS52YWwsIGVuZFZhbHVlLnZhbCwgX2ssIF9iKVxuICAgIH07XG4gICAgaWYgKGVuZFZhbHVlLmNvbmZpZykge1xuICAgICAgcmV0LmNvbmZpZyA9IGVuZFZhbHVlLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShlbmRWYWx1ZSkpIHtcbiAgICByZXR1cm4gZW5kVmFsdWUubWFwKGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZUN1cnJWYWx1ZShmcmFtZVJhdGUsIGN1cnJWYWx1ZVtpXSwgY3VyclZlbG9jaXR5W2ldLCBlbmRWYWx1ZVtpXSwgaywgYik7XG4gICAgfSk7XG4gIH1cbiAgaWYgKF9sb2Rhc2hJc3BsYWlub2JqZWN0MlsnZGVmYXVsdCddKGVuZFZhbHVlKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbmRWYWx1ZSkucmVkdWNlKGZ1bmN0aW9uIChyZXQsIGtleSkge1xuICAgICAgcmV0W2tleV0gPSBfdXBkYXRlQ3VyclZhbHVlKGZyYW1lUmF0ZSwgY3VyclZhbHVlW2tleV0sIGN1cnJWZWxvY2l0eVtrZXldLCBlbmRWYWx1ZVtrZXldLCBrLCBiKTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSwge30pO1xuICB9XG4gIHJldHVybiBlbmRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VyclZhbHVlKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZW5kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIF9wcmVzZXRzJG5vV29iYmxlID0gX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGU7XG4gICAgdmFyIGsgPSBfcHJlc2V0cyRub1dvYmJsZVswXTtcbiAgICB2YXIgYiA9IF9wcmVzZXRzJG5vV29iYmxlWzFdO1xuXG4gICAgcmV0dXJuIF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlLCBrLCBiKVswXTtcbiAgfVxuXG4gIHJldHVybiBfdXBkYXRlQ3VyclZhbHVlKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlKTtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZUN1cnJWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSwgaywgYikge1xuICBpZiAoZW5kVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgZW5kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGsgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICAgIHJldHVybiBfbWFwVHJlZTJbJ2RlZmF1bHQnXShfemVybzJbJ2RlZmF1bHQnXSwgY3VyclZlbG9jaXR5KTtcbiAgICB9XG4gICAgLy8gVE9ETzogZG8gc29tZXRoaW5nIHRvIHN0ZXBwZXIgdG8gbWFrZSB0aGlzIG5vdCBhbGxvY2F0ZSAoMiBzdGVwcGVycz8pXG4gICAgcmV0dXJuIF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlLCBrLCBiKVsxXTtcbiAgfVxuICBpZiAoZW5kVmFsdWUudmFsICE9IG51bGwgJiYgZW5kVmFsdWUuY29uZmlnICYmIGVuZFZhbHVlLmNvbmZpZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gX21hcFRyZWUyWydkZWZhdWx0J10oX3plcm8yWydkZWZhdWx0J10sIGN1cnJWZWxvY2l0eSk7XG4gIH1cbiAgaWYgKGVuZFZhbHVlLnZhbCAhPSBudWxsKSB7XG4gICAgdmFyIF9yZWYyID0gZW5kVmFsdWUuY29uZmlnIHx8IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlO1xuXG4gICAgdmFyIF9rID0gX3JlZjJbMF07XG4gICAgdmFyIF9iID0gX3JlZjJbMV07XG5cbiAgICB2YXIgcmV0ID0ge1xuICAgICAgdmFsOiBfdXBkYXRlQ3VyclZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VyclZhbHVlLnZhbCwgY3VyclZlbG9jaXR5LnZhbCwgZW5kVmFsdWUudmFsLCBfaywgX2IpXG4gICAgfTtcbiAgICBpZiAoZW5kVmFsdWUuY29uZmlnKSB7XG4gICAgICByZXQuY29uZmlnID0gZW5kVmFsdWUuY29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGVuZFZhbHVlKSkge1xuICAgIHJldHVybiBlbmRWYWx1ZS5tYXAoZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIHJldHVybiBfdXBkYXRlQ3VyclZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VyclZhbHVlW2ldLCBjdXJyVmVsb2NpdHlbaV0sIGVuZFZhbHVlW2ldLCBrLCBiKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoX2xvZGFzaElzcGxhaW5vYmplY3QyWydkZWZhdWx0J10oZW5kVmFsdWUpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVuZFZhbHVlKS5yZWR1Y2UoZnVuY3Rpb24gKHJldCwga2V5KSB7XG4gICAgICByZXRba2V5XSA9IF91cGRhdGVDdXJyVmVsb2NpdHkoZnJhbWVSYXRlLCBjdXJyVmFsdWVba2V5XSwgY3VyclZlbG9jaXR5W2tleV0sIGVuZFZhbHVlW2tleV0sIGssIGIpO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LCB7fSk7XG4gIH1cbiAgcmV0dXJuIF9tYXBUcmVlMlsnZGVmYXVsdCddKF96ZXJvMlsnZGVmYXVsdCddLCBjdXJyVmVsb2NpdHkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyVmVsb2NpdHkoZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBlbmRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgX3ByZXNldHMkbm9Xb2JibGUyID0gX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGU7XG4gICAgdmFyIGsgPSBfcHJlc2V0cyRub1dvYmJsZTJbMF07XG4gICAgdmFyIGIgPSBfcHJlc2V0cyRub1dvYmJsZTJbMV07XG5cbiAgICByZXR1cm4gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUsIGssIGIpWzFdO1xuICB9XG5cbiAgcmV0dXJuIF91cGRhdGVDdXJyVmVsb2NpdHkoZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0ZXBwZXI7XG52YXIgZXJyb3JNYXJnaW4gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIHN0ZXBwZXIoZnJhbWVSYXRlLCB4LCB2LCBkZXN0WCwgaywgYikge1xuICAvLyBTcHJpbmcgc3RpZmZuZXNzLCBpbiBrZyAvIHNeMlxuXG4gIC8vIGZvciBhbmltYXRpb25zLCBkZXN0WCBpcyByZWFsbHkgc3ByaW5nIGxlbmd0aCAoc3ByaW5nIGF0IHJlc3QpLiBpbml0aWFsXG4gIC8vIHBvc2l0aW9uIGlzIGNvbnNpZGVyZWQgYXMgdGhlIHN0cmV0Y2hlZC9jb21wcmVzc2VkIHBvc2l0aW9uIG9mIGEgc3ByaW5nXG4gIHZhciBGc3ByaW5nID0gLWsgKiAoeCAtIGRlc3RYKTtcblxuICAvLyBEYW1waW5nLCBpbiBrZyAvIHNcbiAgdmFyIEZkYW1wZXIgPSAtYiAqIHY7XG5cbiAgLy8gdXN1YWxseSB3ZSBwdXQgbWFzcyBoZXJlLCBidXQgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcywgc3BlY2lmeWluZyBtYXNzIGlzIGFcbiAgLy8gYml0IHJlZHVuZGFudC4geW91IGNvdWxkIHNpbXBseSBhZGp1c3QgayBhbmQgYiBhY2NvcmRpbmdseVxuICAvLyBsZXQgYSA9IChGc3ByaW5nICsgRmRhbXBlcikgLyBtYXNzO1xuICB2YXIgYSA9IEZzcHJpbmcgKyBGZGFtcGVyO1xuXG4gIHZhciBuZXdWID0gdiArIGEgKiBmcmFtZVJhdGU7XG4gIHZhciBuZXdYID0geCArIG5ld1YgKiBmcmFtZVJhdGU7XG5cbiAgaWYgKE1hdGguYWJzKG5ld1YgLSB2KSA8IGVycm9yTWFyZ2luICYmIE1hdGguYWJzKG5ld1ggLSB4KSA8IGVycm9yTWFyZ2luKSB7XG4gICAgcmV0dXJuIFtkZXN0WCwgMF07XG4gIH1cblxuICByZXR1cm4gW25ld1gsIG5ld1ZdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gW3N0aWZmbmVzcywgZGFtcGluZ11cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIG5vV29iYmxlOiBbMTcwLCAyNl0sIC8vIHRoZSBkZWZhdWx0XG4gIGdlbnRsZTogWzEyMCwgMTRdLFxuICB3b2JibHk6IFsxODAsIDEyXSxcbiAgc3RpZmY6IFsyMTAsIDIwXVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9wcmVzZXRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9