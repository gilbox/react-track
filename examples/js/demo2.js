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
	    key: 'togglePlay',
	    value: function togglePlay(playing) {
	      if (playing !== undefined) {
	        if (!this.state.playing && playing) (0, _raf2['default'])(this.tick);
	        this.setState({ playing: playing });
	      } else {
	        if (!this.state.playing) (0, _raf2['default'])(this.tick);
	        this.setState({ playing: !this.state.playing });
	      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGVtbzIvU2NydWJiZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9TcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9+L2xvZGFzaC5pc3BsYWlub2JqZWN0L34vbG9kYXNoLl9iYXNlZm9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3Qvfi9sb2Rhc2guaXNhcmd1bWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5rZXlzaW4vfi9sb2Rhc2guaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcGFyZVRyZWVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQStCLENBQU87Ozs7NkNBQ2xCLEdBQW1COzs0Q0FDbkIsR0FBbUI7OzBEQUNULEdBQW1DOztxQ0FDNUMsR0FBWTs7OzsrQ0FDWixHQUFzQjs7Ozt3Q0FDdEIsR0FBYzs7QUFFbkMsS0FBTSxhQUFhLEdBQUcsNkJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsS0FBTSxXQUFXLEdBQUcsNkJBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWxELEtBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNuQixLQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7O0FBRXJCLEtBQU0sTUFBTSxHQUFHO0FBQ2IsV0FBUSxFQUFFO0FBQ1IsVUFBSyxFQUFFLE1BQU07QUFDYixjQUFTLEVBQUUsWUFBWTtJQUN4QjtBQUNELE9BQUksRUFBRTtBQUNKLGlCQUFZ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TUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxXQUFVO0FBQ1Y7O0FBRUEscUM7Ozs7Ozs7QUNwU0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNuTEE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUM1R0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsd0JBQXdCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7O0FDL0JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7OztBQy9LQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQyIsImZpbGUiOiJkZW1vMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFYXNlcn0gZnJvbSAnZnVuY3Rpb25hbC1lYXNpbmcnO1xuaW1wb3J0IHt0d2Vlbn0gZnJvbSAncmVhY3QtdHJhY2svdHdlZW4nO1xuaW1wb3J0IHtyb3RhdGUsIHBlcmNlbnR9IGZyb20gJ3JlYWN0LXRyYWNrL3R3ZWVuLXZhbHVlLWZhY3Rvcmllcyc7XG5pbXBvcnQgU2NydWJiZXIgZnJvbSAnLi9TY3J1YmJlcic7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAncmVhY3QtdHJhY2svdGltZWxpbmUnO1xuaW1wb3J0IHtTcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IGVhc2VPdXRCb3VuY2UgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LWJvdW5jZScpO1xuY29uc3QgZWFzZU91dFNpbmUgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LXNpbmUnKTtcblxuY29uc3QgTUlOX1RJTUUgPSAwO1xuY29uc3QgTUFYX1RJTUUgPSAxMDA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2NydWJiZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBiYWxsOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJywgXG4gICAgd2lkdGg6ICcyMHB4JywgXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIG9wYWNpdHk6IDAuMlxuICB9XG59O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGltZWxpbmUgXG4gICAgICAgIHBsYXlPbk1vdW50PXt0cnVlfVxuICAgICAgICBtaW49e01JTl9USU1FfSBcbiAgICAgICAgbWF4PXtNQVhfVElNRX0gXG4gICAgICAgIGxvb3A9e3RydWV9PlxuICAgICAgeyh7dGltZSwgcGxheWluZywgdG9nZ2xlUGxheSwgc2V0VGltZX0pID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvcCA9ICgxMDAgKyA0MCAqIE1hdGguc2luKHRpbWUvNSkpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdHdlZW4odGltZSwge1xuICAgICAgICAgIFtNSU5fVElNRV06IDAsXG4gICAgICAgICAgW01BWF9USU1FXTogMTAwXG4gICAgICAgIH0sIGVhc2VPdXRTaW5lKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMzB9fT5cbiAgICAgICAgXG4gICAgICAgICAgPFNwcmluZyBlbmRWYWx1ZT17e3ZhbDoge3RvcCxsZWZ0fX19PlxuICAgICAgICAgIHtpbnRlcnBvbGF0ZWQgPT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAuLi5zdHlsZXMuYmFsbCxcbiAgICAgICAgICAgICAgICB0b3A6IGludGVycG9sYXRlZC52YWwudG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGludGVycG9sYXRlZC52YWwubGVmdCArICclJyxcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICB9PC9TcHJpbmc+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnN0eWxlcy5iYWxsLFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIGxlZnQ6IGxlZnQgKyAnJSdcbiAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICBcbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIHN0eWxlPXt0d2Vlbih0aW1lLCB7XG4gICAgICAgICAgICAgIFtNSU5fVElNRV06IHsgdHJhbnNmb3JtOiByb3RhdGUoMCkgfSxcbiAgICAgICAgICAgICAgW01BWF9USU1FXTogeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjApIH0gfSwgXG4gICAgICAgICAgICAgIGVhc2VPdXRCb3VuY2UpfT5cbiAgICAgICAgICAgIHNwaW5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGxheX0+XG4gICAgICAgICAgICB7cGxheWluZyA/ICdwYXVzZScgOiAncGxheSd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgPFNjcnViYmVyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLnNjcnViYmVyfVxuICAgICAgICAgICAgbWluPXtNSU5fVElNRX1cbiAgICAgICAgICAgIG1heD17TUFYX1RJTUV9XG4gICAgICAgICAgICB2YWx1ZT17dGltZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlVmFsdWU9e3NldFRpbWV9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+fVxuICAgICAgICBcbiAgICAgIH08L1RpbWVsaW5lPlxuICAgIClcbiAgfVxufVxuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzIvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGluYyA9IHggPT4geCArIDE7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udHJvbFJhbmdlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDYwcHgpJyB9LFxuICBjb250cm9sVmFsdWU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMXB4JyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3J1YmJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IHZhbHVlOiAwLCBtaW46IDAsIG1heDogMTAwLCBuYW1lOiBudWxsIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge21pbixtYXgsdmFsdWUsb25DaGFuZ2VWYWx1ZSxuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXttaW59IG1heD17bWF4fSBzdHlsZT17c3R5bGVzLmNvbnRyb2xSYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2VWYWx1ZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSkgfS8+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udHJvbFZhbHVlfT57dmFsdWV9IG9mIHttYXh9PC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzIvU2NydWJiZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyB0b2RvOiBwcm9wIHR5cGVzICYgZGVmYXVsdCBwcm9wc1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy50aWNrID0gOjp0aGlzLnRpY2s7XG5cbiAgICB0aGlzLmV4cG9zZSA9IHtcbiAgICAgIHNldFRpbWU6IDo6dGhpcy5zZXRUaW1lLFxuICAgICAgdG9nZ2xlUGxheTogOjp0aGlzLnRvZ2dsZVBsYXlcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZTogcHJvcHMuaW5pdGlhbFRpbWUgfHwgMCwgLy8gdG9kbzogZGVmYXVsdFByb3BzXG4gICAgICBwbGF5aW5nOiAhISBwcm9wcy5wbGF5T25Nb3VudFxuICAgIH07XG4gIH1cblxuICB0aWNrKCkge1xuICAgIGNvbnN0IHtwbGF5aW5nLCB0aW1lfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodGltZSA+PSB0aGlzLnByb3BzLm1heCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubG9vcCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiB0aGlzLnByb3BzLm1pbn0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiB0aW1lKzF9KTsgIC8vIHRvZG86IGFyYml0cmFyeSBpbmNyZW1lbnRcbiAgICB9XG5cbiAgICBpZiAocGxheWluZykgcmFmKHRoaXMudGljayk7XG4gIH1cblxuICBzZXRUaW1lKHRpbWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lfSk7XG4gIH1cblxuICB0b2dnbGVQbGF5KHBsYXlpbmcpIHtcbiAgICBpZiAocGxheWluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucGxheWluZyAmJiBwbGF5aW5nKSByYWYodGhpcy50aWNrKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5aW5nIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucGxheWluZykgcmFmKHRoaXMudGljayk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwbGF5aW5nOiAhdGhpcy5zdGF0ZS5wbGF5aW5nfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGxheWluZykgcmFmKHRoaXMudGljayk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIC4uLnRoaXMuZXhwb3NlXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZWxpbmUuanNcbiAqKi8iLCJ2YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JylcbiAgLCBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHt9IDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IGdsb2JhbFsncmVxdWVzdCcgKyBzdWZmaXhdXG4gICwgY2FmID0gZ2xvYmFsWydjYW5jZWwnICsgc3VmZml4XSB8fCBnbG9iYWxbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJhZjsgaSsrKSB7XG4gIHJhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XVxuICBjYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKGdsb2JhbCwgZm4pXG59XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgY2FmLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmFmL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMlxuICoqLyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDJcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVvcmRlcktleXMgPSByZXF1aXJlKCcuL3Jlb3JkZXJLZXlzJyk7XG5cbnZhciBfcmVvcmRlcktleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVvcmRlcktleXMpO1xuXG52YXIgX1NwcmluZyA9IHJlcXVpcmUoJy4vU3ByaW5nJyk7XG5cbmV4cG9ydHMuU3ByaW5nID0gX1NwcmluZy5TcHJpbmc7XG5leHBvcnRzLlRyYW5zaXRpb25TcHJpbmcgPSBfU3ByaW5nLlRyYW5zaXRpb25TcHJpbmc7XG5cbnZhciBfcHJlc2V0czIgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMyKTtcblxuZXhwb3J0cy5wcmVzZXRzID0gX3ByZXNldHMzWydkZWZhdWx0J107XG52YXIgdXRpbHMgPSB7XG4gIHJlb3JkZXJLZXlzOiBfcmVvcmRlcktleXMyWydkZWZhdWx0J11cbn07XG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZW9yZGVyS2V5cztcblxuZnVuY3Rpb24gcmVvcmRlcktleXMob2JqLCBmKSB7XG4gIHZhciBuZXdLZXlzID0gZihPYmplY3Qua2V5cyhvYmopKTtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbmV3S2V5c1tpXTtcbiAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NvbXBvbmVudHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcblxudmFyIF9jb21wb25lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvbmVudHMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb21wb25lbnRzMlsnZGVmYXVsdCddKF9yZWFjdDJbJ2RlZmF1bHQnXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9TcHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY29tcG9uZW50cztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX21hcFRyZWUgPSByZXF1aXJlKCcuL21hcFRyZWUnKTtcblxudmFyIF9tYXBUcmVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRyZWUpO1xuXG52YXIgX25vVmVsb2NpdHkgPSByZXF1aXJlKCcuL25vVmVsb2NpdHknKTtcblxudmFyIF9ub1ZlbG9jaXR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vVmVsb2NpdHkpO1xuXG52YXIgX2NvbXBhcmVUcmVlcyA9IHJlcXVpcmUoJy4vY29tcGFyZVRyZWVzJyk7XG5cbnZhciBfY29tcGFyZVRyZWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBhcmVUcmVlcyk7XG5cbnZhciBfbWVyZ2VEaWZmID0gcmVxdWlyZSgnLi9tZXJnZURpZmYnKTtcblxudmFyIF9tZXJnZURpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VEaWZmKTtcblxudmFyIF9hbmltYXRpb25Mb29wID0gcmVxdWlyZSgnLi9hbmltYXRpb25Mb29wJyk7XG5cbnZhciBfYW5pbWF0aW9uTG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmltYXRpb25Mb29wKTtcblxudmFyIF96ZXJvID0gcmVxdWlyZSgnLi96ZXJvJyk7XG5cbnZhciBfemVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96ZXJvKTtcblxudmFyIF91cGRhdGVUcmVlID0gcmVxdWlyZSgnLi91cGRhdGVUcmVlJyk7XG5cbnZhciBzdGFydEFuaW1hdGlvbiA9IF9hbmltYXRpb25Mb29wMlsnZGVmYXVsdCddKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAoc2hvdWxkTWVyZ2UsIHN0b3BBbmltYXRpb24sIGdldFByb3BzLCB0aW1lc3RlcCwgc3RhdGUpIHtcbiAgdmFyIGN1cnJWYWx1ZSA9IHN0YXRlLmN1cnJWYWx1ZTtcbiAgdmFyIGN1cnJWZWxvY2l0eSA9IHN0YXRlLmN1cnJWZWxvY2l0eTtcblxuICB2YXIgX2dldFByb3BzID0gZ2V0UHJvcHMoKTtcblxuICB2YXIgd2lsbEVudGVyID0gX2dldFByb3BzLndpbGxFbnRlcjtcbiAgdmFyIHdpbGxMZWF2ZSA9IF9nZXRQcm9wcy53aWxsTGVhdmU7XG4gIHZhciBlbmRWYWx1ZSA9IF9nZXRQcm9wcy5lbmRWYWx1ZTtcblxuICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5kVmFsdWUgPSBlbmRWYWx1ZShjdXJyVmFsdWUpO1xuICB9XG5cbiAgdmFyIG1lcmdlZFZhbHVlID0gZW5kVmFsdWU7IC8vIHNldCBtZXJnZWRWYWx1ZSB0byBlbmRWYWx1ZSBhcyB0aGUgZGVmYXVsdFxuICB2YXIgaGFzTmV3S2V5ID0gZmFsc2U7XG5cbiAgaWYgKHNob3VsZE1lcmdlKSB7XG4gICAgbWVyZ2VkVmFsdWUgPSBfbWVyZ2VEaWZmMlsnZGVmYXVsdCddKGN1cnJWYWx1ZSwgZW5kVmFsdWUsXG4gICAgLy8gVE9ETzogc3RvcCBhbGxvY2F0aW5nIGxpa2UgY3JhenkgaW4gdGhpcyB3aG9sZSBjb2RlIHBhdGhcbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgcmVzID0gd2lsbExlYXZlKGtleSwgY3VyclZhbHVlW2tleV0sIGVuZFZhbHVlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSk7XG4gICAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgICAgLy8gRm9yIGxlZ2FjeSByZWFzb24uIFdlIHdvbid0IGFsbG93IHJldHVybmluZyBudWxsIHNvb25cbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlLCBhZnRlciBuZXh0IHJlbGVhc2VcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShjdXJyVmVsb2NpdHlba2V5XSkgJiYgX2NvbXBhcmVUcmVlczJbJ2RlZmF1bHQnXShjdXJyVmFsdWVba2V5XSwgcmVzKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG5cbiAgICBPYmplY3Qua2V5cyhtZXJnZWRWYWx1ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiAhY3VyclZhbHVlLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX2V4dGVuZHMyLCBfZXh0ZW5kczM7XG5cbiAgICAgIGhhc05ld0tleSA9IHRydWU7XG4gICAgICB2YXIgZW50ZXJWYWx1ZSA9IHdpbGxFbnRlcihrZXksIG1lcmdlZFZhbHVlW2tleV0sIGVuZFZhbHVlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSk7XG5cbiAgICAgIC8vIFdlIGNhbiBtdXRhdGUgdGhpcyBoZXJlIGJlY2F1c2UgbWVyZ2VEaWZmIHJldHVybnMgYSBuZXcgT2JqXG4gICAgICBtZXJnZWRWYWx1ZVtrZXldID0gZW50ZXJWYWx1ZTtcblxuICAgICAgY3VyclZhbHVlID0gX2V4dGVuZHMoe30sIGN1cnJWYWx1ZSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IGVudGVyVmFsdWUsIF9leHRlbmRzMikpO1xuICAgICAgY3VyclZlbG9jaXR5ID0gX2V4dGVuZHMoe30sIGN1cnJWZWxvY2l0eSwgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNba2V5XSA9IF9tYXBUcmVlMlsnZGVmYXVsdCddKF96ZXJvMlsnZGVmYXVsdCddLCBlbnRlclZhbHVlKSwgX2V4dGVuZHMzKSk7XG4gICAgfSk7XG4gIH1cbiAgdmFyIG5ld0N1cnJWYWx1ZSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJWYWx1ZSh0aW1lc3RlcCwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIG1lcmdlZFZhbHVlKTtcbiAgdmFyIG5ld0N1cnJWZWxvY2l0eSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJWZWxvY2l0eSh0aW1lc3RlcCwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIG1lcmdlZFZhbHVlKTtcblxuICBpZiAoIWhhc05ld0tleSAmJiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShjdXJyVmVsb2NpdHkpICYmIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKG5ld0N1cnJWZWxvY2l0eSkpIHtcbiAgICAvLyBjaGVjayBleHBsYW5hdGlvbiBpbiBgU3ByaW5nLmFuaW1hdGlvblJlbmRlcmBcbiAgICBzdG9wQW5pbWF0aW9uKCk7IC8vIE5hc3R5IHNpZGUgZWZmZWN0cy4uLi5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3VyclZhbHVlOiBuZXdDdXJyVmFsdWUsXG4gICAgY3VyclZlbG9jaXR5OiBuZXdDdXJyVmVsb2NpdHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50cyhSZWFjdCkge1xuICB2YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHZhciBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTcHJpbmcnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgICAgZW5kVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBlbmRWYWx1ZSA9IF9wcm9wcy5lbmRWYWx1ZTtcbiAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgICB2YXIgY3VyclZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW5kVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBUT0RPOiBwcm92aWRlIHBlcmYgdGlwIGhlcmUgd2hlbiBlbmRWYWx1ZSBhcmd1bWVudCBjb3VudCBpcyAwXG4gICAgICAgICAgLy8gKG1lYW5pbmcgeW91IGNvdWxkIGhhdmUgcGFzc2VkIGFuIG9iailcbiAgICAgICAgICBjdXJyVmFsdWUgPSBlbmRWYWx1ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJWYWx1ZSA9IGVuZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyVmFsdWU6IGN1cnJWYWx1ZSxcbiAgICAgICAgY3VyclZlbG9jaXR5OiBfbWFwVHJlZTJbJ2RlZmF1bHQnXShfemVybzJbJ2RlZmF1bHQnXSwgY3VyclZhbHVlKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gYW5pbWF0aW9uU3RlcC5iaW5kKG51bGwsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgYW5pbWF0aW9uU3RlcDogbnVsbCxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICAvLyBJcyBzbWFydCBlbm91Z2ggdG8gbm90IHN0YXJ0IGl0IHR3aWNlXG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBgdGhpcy5oYXNVbm1vdW50ZWRgIG1pZ2h0IGJlIHRydWUgaW4gdGhlIGZvbGxvd2luZyBjb25kaXRpb246XG4gICAgICAvLyB1c2VyIGRvZXMgc29tZSBjaGVja3MgaW4gYGVuZFZhbHVlYCBhbmQgY2FsbHMgYW4gb3duZXIgaGFuZGxlclxuICAgICAgLy8gb3duZXIgc2V0cyBzdGF0ZSBpbiB0aGUgY2FsbGJhY2ssIHRyaWdnZXJpbmcgYSByZS1yZW5kZXJcbiAgICAgIC8vIHJlLXJlbmRlciB1bm1vdW50cyB0aGUgU3ByaW5nXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJWYWx1ZTogX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0YXRlLmN1cnJWYWx1ZSwgcHJldlN0YXRlLmN1cnJWYWx1ZSksXG4gICAgICAgICAgY3VyclZlbG9jaXR5OiBuZXh0U3RhdGUuY3VyclZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJWYWx1ZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETzogd2FybiB3aGVuIG9iaiB1c2VzIG51bWVyaWNhbCBrZXlzXG4gIC8vIFRPRE86IHdhcm4gd2hlbiBlbmRWYWx1ZSBkb2Vzbid0IGNvbnRhaW4gYSB2YWxcbiAgdmFyIFRyYW5zaXRpb25TcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uU3ByaW5nJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXG4gICAgICBlbmRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQpXSkuXG4gICAgICAvLyBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgLy8gICBrZXk6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgIC8vIH0pKSxcbiAgICAgIC8vIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICB3aWxsTGVhdmU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jXSksXG5cbiAgICAgIC8vIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAvLyBQcm9wVHlwZXMuYXJyYXksXG4gICAgICB3aWxsRW50ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jXSksXG5cbiAgICAgIC8vIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAvLyBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpbGxFbnRlcjogZnVuY3Rpb24gd2lsbEVudGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHdpbGxMZWF2ZTogZnVuY3Rpb24gd2lsbExlYXZlKCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBlbmRWYWx1ZSA9IF9wcm9wczIuZW5kVmFsdWU7XG4gICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX3Byb3BzMi5kZWZhdWx0VmFsdWU7XG5cbiAgICAgIHZhciBjdXJyVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbmRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGN1cnJWYWx1ZSA9IGVuZFZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyclZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJWYWx1ZTogY3VyclZhbHVlLFxuICAgICAgICBjdXJyVmVsb2NpdHk6IF9tYXBUcmVlMlsnZGVmYXVsdCddKF96ZXJvMlsnZGVmYXVsdCddLCBjdXJyVmFsdWUpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5hbmltYXRpb25TdGVwID0gYW5pbWF0aW9uU3RlcC5iaW5kKG51bGwsIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIucHJvcHM7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IG51bGwsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gU2VlIGNvbW1lbnQgaW4gU3ByaW5nLlxuICAgICAgaWYgKCF0aGlzLmhhc1VubW91bnRlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyVmFsdWU6IF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRTdGF0ZS5jdXJyVmFsdWUsIHByZXZTdGF0ZS5jdXJyVmFsdWUpLFxuICAgICAgICAgIGN1cnJWZWxvY2l0eTogbmV4dFN0YXRlLmN1cnJWZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5jdXJyVmFsdWUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7IFNwcmluZzogU3ByaW5nLCBUcmFuc2l0aW9uU3ByaW5nOiBUcmFuc2l0aW9uU3ByaW5nIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcG9uZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWFwVHJlZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNwbGFpbm9iamVjdCcpO1xuXG4vLyBjdXJyZW5seSBhIGhlbHBlciB1c2VkIGZvciBwcm9kdWNpbmcgYSB0cmVlIG9mIHRoZSBzYW1lIHNoYXBlIGFzIHRoZVxuLy8gaW5wdXQocyksICBidXQgd2l0aCBkaWZmZXJlbnQgdmFsdWVzLiBJdCdzIHRlY2huaWNhbGx5IG5vdCBhIHJlYWwgYG1hcGBcbi8vIGVxdWl2YWxlbnQgZm9yIHRyZWVzLCBzaW5jZSBpdCBza2lwcyBjYWxsaW5nIGYgb24gbm9uLW51bWJlcnMuXG5cbi8vIFRPRE86IHByb2JhYmx5IGRvZXNuJ3QgbmVlZCBwYXRoLCBzdG9wIGFsbG9jYXRpbmcgdXNlbGVzc2x5XG4vLyBUT0RPOiBkb24ndCBuZWVkIHRvIG1hcCBvdmVyIG1hbnkgdHJlZXMgYW55bW9yZVxuLy8gVE9ETzogc2tpcHBpbmcgbm9uLW51bWJlcnMgaXMgd2VpcmQgYW5kIG5vbi1nZW5lcmljLiBVc2UgcHJlLW9yZGVyIHRyYXZlcnNhbFxuLy8gYXNzdW1lIHRyZWVzIGFyZSBvZiB0aGUgc2FtZSBzaGFwZVxuXG52YXIgX2xvZGFzaElzcGxhaW5vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNwbGFpbm9iamVjdCk7XG5cbmZ1bmN0aW9uIF9tYXBUcmVlKHBhdGgsIGYsIHRyZWVzKSB7XG4gIHZhciB0MSA9IHRyZWVzWzBdO1xuICBpZiAodHlwZW9mIHQxID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmLmFwcGx5KHVuZGVmaW5lZCwgW3BhdGhdLmNvbmNhdCh0cmVlcykpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHQxKSkge1xuICAgIHJldHVybiB0MS5tYXAoZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIHJldHVybiBfbWFwVHJlZShbXS5jb25jYXQocGF0aCwgW2ldKSwgZiwgdHJlZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbFtpXTtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoX2xvZGFzaElzcGxhaW5vYmplY3QyWydkZWZhdWx0J10odDEpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHQxKS5yZWR1Y2UoZnVuY3Rpb24gKG5ld1RyZWUsIGtleSkge1xuICAgICAgbmV3VHJlZVtrZXldID0gX21hcFRyZWUoW10uY29uY2F0KHBhdGgsIFtrZXldKSwgZiwgdHJlZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbFtrZXldO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIG5ld1RyZWU7XG4gICAgfSwge30pO1xuICB9XG4gIC8vIHJldHVybiBsYXN0IG9uZSBqdXN0IGJlY2F1c2VcbiAgcmV0dXJuIHRyZWVzW3RyZWVzLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBtYXBUcmVlKGYpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX21hcFRyZWUoW10sIGYsIHJlc3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogbG9kYXNoIDMuMi4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUZvciA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWZvcicpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJndW1lbnRzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnbG9kYXNoLmtleXNpbicpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9ySW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JJbihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNJbik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBhc3N1bWVzIG9iamVjdHMgY3JlYXRlZCBieSB0aGUgYE9iamVjdGAgY29uc3RydWN0b3JcbiAqIGhhdmUgbm8gaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICB2YXIgQ3RvcjtcblxuICAvLyBFeGl0IGVhcmx5IGZvciBub24gYE9iamVjdGAgb2JqZWN0cy5cbiAgaWYgKCEoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBvYmplY3RUYWcgJiYgIWlzQXJndW1lbnRzKHZhbHVlKSkgfHxcbiAgICAgICghaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NvbnN0cnVjdG9yJykgJiYgKEN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvciwgdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhKEN0b3IgaW5zdGFuY2VvZiBDdG9yKSkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIElFIDwgOSBpdGVyYXRlcyBpbmhlcml0ZWQgcHJvcGVydGllcyBiZWZvcmUgb3duIHByb3BlcnRpZXMuIElmIHRoZSBmaXJzdFxuICAvLyBpdGVyYXRlZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QncyBvd24gcHJvcGVydHkgdGhlbiB0aGVyZSBhcmUgbm8gaW5oZXJpdGVkXG4gIC8vIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAgdmFyIHJlc3VsdDtcbiAgLy8gSW4gbW9zdCBlbnZpcm9ubWVudHMgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMgYXJlIGl0ZXJhdGVkIGJlZm9yZVxuICAvLyBpdHMgaW5oZXJpdGVkIHByb3BlcnRpZXMuIElmIHRoZSBsYXN0IGl0ZXJhdGVkIHByb3BlcnR5IGlzIGFuIG9iamVjdCdzXG4gIC8vIG93biBwcm9wZXJ0eSB0aGVuIHRoZXJlIGFyZSBubyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICBiYXNlRm9ySW4odmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcmVzdWx0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogbG9kYXNoIDMuMC4yIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBgXy5mb3JJbmAgb3IgYF8uZm9ySW5SaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gdG9PYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9sb2Rhc2guaXNwbGFpbm9iamVjdC9+L2xvZGFzaC5fYmFzZWZvci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjQgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9+L2xvZGFzaC5pc3BsYWlub2JqZWN0L34vbG9kYXNoLmlzYXJndW1lbnRzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAzLjAuOCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC5pc2FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3Qvfi9sb2Rhc2gua2V5c2luL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKipcbiAqIGxvZGFzaCAzLjAuNCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFycmF5VGFnO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgd2hpY2ggcmV0dXJuICdmdW5jdGlvbicgZm9yIHJlZ2V4ZXNcbiAgLy8gYW5kIFNhZmFyaSA4IGVxdWl2YWxlbnRzIHdoaWNoIHJldHVybiAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vbG9kYXNoLmlzcGxhaW5vYmplY3Qvfi9sb2Rhc2gua2V5c2luL34vbG9kYXNoLmlzYXJyYXkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG5vVmVsb2NpdHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLmlzcGxhaW5vYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzcGxhaW5vYmplY3QpO1xuXG5mdW5jdGlvbiBub1ZlbG9jaXR5KGNvbGwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29sbCkpIHtcbiAgICByZXR1cm4gY29sbC5ldmVyeShub1ZlbG9jaXR5KTtcbiAgfVxuICBpZiAoX2xvZGFzaElzcGxhaW5vYmplY3QyWydkZWZhdWx0J10oY29sbCkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY29sbCkuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGtleSA9PT0gJ2NvbmZpZycgPyB0cnVlIDogbm9WZWxvY2l0eShjb2xsW2tleV0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0eXBlb2YgY29sbCA9PT0gJ251bWJlcicgPyBjb2xsID09PSAwIDogdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9ub1ZlbG9jaXR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjb21wYXJlVHJlZXM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLmlzcGxhaW5vYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzcGxhaW5vYmplY3QpO1xuXG5mdW5jdGlvbiBjb21wYXJlVHJlZXMoYSwgYikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBhLmV2ZXJ5KGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gY29tcGFyZVRyZWVzKHYsIGJbaV0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKF9sb2Rhc2hJc3BsYWlub2JqZWN0MlsnZGVmYXVsdCddKGEpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGEpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgPT09ICdjb25maWcnID8gdHJ1ZSA6IGNvbXBhcmVUcmVlcyhhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9jb21wYXJlVHJlZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHRoaXMgZnVuY3Rpb24gaXMgYWxsb2NhdGlvbi1sZXNzIHRoYW5rcyB0byBiYWJlbCwgd2hpY2ggdHJhbnNmb3JtcyB0aGUgdGFpbFxuLy8gY2FsbHMgaW50byBsb29wc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1lcmdlRGlmZjtcbmZ1bmN0aW9uIG1lcmdlRGlmZkFycihfeCwgX3gyLCBfeDMsIF94NCwgX3g1LCBfeDYsIF94Nykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgYXJyQSA9IF94LFxuICAgICAgICBhcnJCID0gX3gyLFxuICAgICAgICBjb2xsQiA9IF94MyxcbiAgICAgICAgaW5kZXhBID0gX3g0LFxuICAgICAgICBpbmRleEIgPSBfeDUsXG4gICAgICAgIG9uUmVtb3ZlID0gX3g2LFxuICAgICAgICBhY2N1bSA9IF94NztcbiAgICBlbmRBID0gZW5kQiA9IGtleUEgPSBrZXlCID0gZmlsbCA9IGZpbGwgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG5cbiAgICB2YXIgZW5kQSA9IGluZGV4QSA9PT0gYXJyQS5sZW5ndGg7XG4gICAgdmFyIGVuZEIgPSBpbmRleEIgPT09IGFyckIubGVuZ3RoO1xuICAgIHZhciBrZXlBID0gYXJyQVtpbmRleEFdO1xuICAgIHZhciBrZXlCID0gYXJyQltpbmRleEJdO1xuICAgIGlmIChlbmRBICYmIGVuZEIpIHtcbiAgICAgIC8vIHJldHVybmluZyBudWxsIGhlcmUsIG90aGVyd2lzZSBsaW50IGNvbXBsYWlucyB0aGF0IHdlJ3JlIG5vdCBleHBlY3RpbmdcbiAgICAgIC8vIGEgcmV0dXJuIHZhbHVlIGluIHN1YnNlcXVlbnQgY2FsbHMuIFdlIGtub3cgd2hhdCB3ZSdyZSBkb2luZy5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbmRBKSB7XG4gICAgICBhY2N1bVtrZXlCXSA9IGNvbGxCW2tleUJdO1xuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmIChlbmRCKSB7XG4gICAgICB2YXIgZmlsbCA9IG9uUmVtb3ZlKGtleUEpO1xuICAgICAgaWYgKGZpbGwgIT0gbnVsbCkge1xuICAgICAgICBhY2N1bVtrZXlBXSA9IGZpbGw7XG4gICAgICB9XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGtleUEgPT09IGtleUIpIHtcbiAgICAgIGFjY3VtW2tleUFdID0gY29sbEJba2V5QV07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmICghY29sbEIuaGFzT3duUHJvcGVydHkoa2V5QSkpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBfeCA9IGFyckE7XG4gICAgX3gyID0gYXJyQjtcbiAgICBfeDMgPSBjb2xsQjtcbiAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgIF94NSA9IGluZGV4QjtcbiAgICBfeDYgPSBvblJlbW92ZTtcbiAgICBfeDcgPSBhY2N1bTtcbiAgICBfYWdhaW4gPSB0cnVlO1xuICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZURpZmYoYSwgYiwgb25SZW1vdmUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICAvLyBpZiBhbnlvbmUgY2FuIG1ha2UgdGhpcyB3b3JrIHdpdGhvdXQgYWxsb2NhdGluZyB0aGUgYXJyYXlzIGhlcmUsIHdlJ2xsXG4gIC8vIGdpdmUgeW91IGEgbWVkYWxcbiAgbWVyZ2VEaWZmQXJyKE9iamVjdC5rZXlzKGEpLCBPYmplY3Qua2V5cyhiKSwgYiwgMCwgMCwgb25SZW1vdmUsIHJldCk7XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanNcbiAqKiBtb2R1bGUgaWQgPSAxODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbmZpZ0FuaW1hdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3BlcmZvcm1hbmNlTm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93Jyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyZm9ybWFuY2VOb3cpO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG5mdW5jdGlvbiBjb25maWdBbmltYXRpb24oKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIF9jb25maWckdGltZVN0ZXAgPSBjb25maWcudGltZVN0ZXA7XG4gIHZhciB0aW1lU3RlcCA9IF9jb25maWckdGltZVN0ZXAgPT09IHVuZGVmaW5lZCA/IDEgLyA2MCAqIDEwMDAgOiBfY29uZmlnJHRpbWVTdGVwO1xuICB2YXIgX2NvbmZpZyR0aW1lU2NhbGUgPSBjb25maWcudGltZVNjYWxlO1xuICB2YXIgdGltZVNjYWxlID0gX2NvbmZpZyR0aW1lU2NhbGUgPT09IHVuZGVmaW5lZCA/IDEgOiBfY29uZmlnJHRpbWVTY2FsZTtcbiAgdmFyIF9jb25maWckbWF4U3RlcHMgPSBjb25maWcubWF4U3RlcHM7XG4gIHZhciBtYXhTdGVwcyA9IF9jb25maWckbWF4U3RlcHMgPT09IHVuZGVmaW5lZCA/IDEwIDogX2NvbmZpZyRtYXhTdGVwcztcbiAgdmFyIF9jb25maWckcmFmID0gY29uZmlnLnJhZjtcbiAgdmFyIHJhZiA9IF9jb25maWckcmFmID09PSB1bmRlZmluZWQgPyBfcmFmMlsnZGVmYXVsdCddIDogX2NvbmZpZyRyYWY7XG4gIHZhciBfY29uZmlnJG5vdyA9IGNvbmZpZy5ub3c7XG4gIHZhciBub3cgPSBfY29uZmlnJG5vdyA9PT0gdW5kZWZpbmVkID8gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddIDogX2NvbmZpZyRub3c7XG5cbiAgdmFyIGFuaW1SdW5uaW5nID0gW107XG4gIHZhciBydW5uaW5nID0gZmFsc2U7XG4gIHZhciBwcmV2VGltZSA9IDA7XG4gIHZhciBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgdmFyIGN1cnJlbnRUaW1lID0gbm93KCk7XG4gICAgdmFyIGZyYW1lVGltZSA9IGN1cnJlbnRUaW1lIC0gcHJldlRpbWU7IC8vIGRlbHRhXG5cbiAgICBwcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIGFjY3VtdWxhdGVkVGltZSArPSBmcmFtZVRpbWUgKiB0aW1lU2NhbGU7XG5cbiAgICBpZiAoYWNjdW11bGF0ZWRUaW1lID4gdGltZVN0ZXAgKiBtYXhTdGVwcykge1xuICAgICAgYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgZnJhbWVOdW1iZXIgPSBNYXRoLmNlaWwoYWNjdW11bGF0ZWRUaW1lIC8gdGltZVN0ZXApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaSA9IGFuaW1SdW5uaW5nW2ldO1xuICAgICAgdmFyIGFjdGl2ZSA9IF9hbmltUnVubmluZyRpLmFjdGl2ZTtcbiAgICAgIHZhciBzdGVwID0gX2FuaW1SdW5uaW5nJGkuc3RlcDtcbiAgICAgIHZhciBwcmV2UHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkucHJldlN0YXRlO1xuICAgICAgdmFyIHByZXZOZXh0U3RhdGUgPSBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGU7XG5cbiAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWVtcyBsaWtlIGJlY2F1c2UgdGhlIFRTIHNldHMgZGVzdFZhbHMgYXMgZW50ZXJWYWxzIGZvciB0aGUgZmlyc3RcbiAgICAgIC8vIHRpY2ssIHdlIG1pZ2h0IHJlbmRlciB0aGF0IHZhbHVlIHR3aWNlLiBXZSByZW5kZXIgaXQgb25jZSwgY3VyclZhbHVlIGlzXG4gICAgICAvLyBlbnRlclZhbCBhbmQgZGVzdFZhbCBpcyBlbnRlclZhbC4gVGhlIG5leHQgdGljayBpcyBmYXN0ZXIgdGhhbiAxNm1zLFxuICAgICAgLy8gc28gYWNjdW11bGF0ZWRUaW1lICh3aGljaCB3b3VsZCBiZSBhYm91dCAtMTZtcyBmcm9tIHRoZSBwcmV2aW91cyB0aWNrKVxuICAgICAgLy8gaXMgbmVnYXRpdmUgKC0xNm1zICsgYW55IG51bWJlciBsZXNzIHRoYW4gMTZtcyA8IDApLiBTbyB3ZSBqdXN0IHJlbmRlclxuICAgICAgLy8gcGFydCB3YXlzIHRvd2FyZHMgdGhlIG5leHRTdGF0ZSwgYnV0IHRoYXQncyBlbnRlclZhbCBzdGlsbC4gV2UgcmVuZGVyXG4gICAgICAvLyBzYXkgNzUlIGJldHdlZW4gY3VyclZhbHVlICg9PT0gZW50ZXJWYWwpIGFuZCBkZXN0VmFsdWUgKD09PSBlbnRlclZhbCkuXG4gICAgICAvLyBTbyB3ZSByZW5kZXIgdGhlIHNhbWUgdmFsdWUgYSBzZWNvbmQgdGltZS5cbiAgICAgIC8vIFRoZSBzb2x1dGlvbiBiZWxsb3cgaXMgdG8gcmVjYWxjdWxhdGUgdGhlIGRlc3RpbmF0aW9uIHN0YXRlIGV2ZW4gd2hlblxuICAgICAgLy8geW91J3JlIG1vdmluZyBwYXJ0aWFsbHkgdG93YXJkcyBpdC5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPD0gMCkge1xuICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBzdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldlByZXZTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZyYW1lTnVtYmVyOyBqKyspIHtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBzdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldk5leHRTdGF0ZSk7XG4gICAgICAgICAgdmFyIF9yZWYgPSBbcHJldk5leHRTdGF0ZSwgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlXTtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5wcmV2U3RhdGUgPSBfcmVmWzBdO1xuICAgICAgICAgIHByZXZOZXh0U3RhdGUgPSBfcmVmWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjdW11bGF0ZWRUaW1lID0gYWNjdW11bGF0ZWRUaW1lIC0gZnJhbWVOdW1iZXIgKiB0aW1lU3RlcDtcblxuICAgIC8vIFJlbmRlciBhbmQgZmlsdGVyIGluIG9uZSBpdGVyYXRpb24uXG4gICAgdmFyIGFscGhhID0gMSArIGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaTIgPSBhbmltUnVubmluZ1tpXTtcblxuICAgICAgLy8gTWlnaHQgbXV0YXRlIGFuaW1SdW5uaW5nLi4uLi4uLi5cbiAgICAgIHZhciByZW5kZXIgPSBfYW5pbVJ1bm5pbmckaTIucmVuZGVyO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF9hbmltUnVubmluZyRpMi5uZXh0U3RhdGU7XG4gICAgICB2YXIgcHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLnByZXZTdGF0ZTtcbiAgICAgIHJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIHZhciBuZXdBbmltUnVubmluZyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbmltUnVubmluZ1tpXS5hY3RpdmUpIHtcbiAgICAgICAgbmV3QW5pbVJ1bm5pbmcucHVzaChhbmltUnVubmluZ1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYW5pbVJ1bm5pbmcgPSBuZXdBbmltUnVubmluZztcblxuICAgIGlmIChhbmltUnVubmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFmKGxvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghcnVubmluZykge1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICBwcmV2VGltZSA9IG5vdygpO1xuICAgICAgYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgIHJhZihsb29wKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oc3RhdGUsIHN0ZXAsIHJlbmRlcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB2YWwgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIGlmICh2YWwuc3RlcCA9PT0gc3RlcCkge1xuICAgICAgICB2YWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFsLnByZXZTdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzdGFydCgpO1xuICAgICAgICByZXR1cm4gdmFsLnN0b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG5ld0FuaW0gPSB7XG4gICAgICBzdGVwOiBzdGVwLFxuICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICBwcmV2U3RhdGU6IHN0YXRlLFxuICAgICAgbmV4dFN0YXRlOiBzdGF0ZSxcbiAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgIH07XG5cbiAgICBuZXdBbmltLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3QW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuICAgIGFuaW1SdW5uaW5nLnB1c2gobmV3QW5pbSk7XG5cbiAgICBzdGFydCgpO1xuXG4gICAgcmV0dXJuIG5ld0FuaW0uc3RvcDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9hbmltYXRpb25Mb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMTgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHVzZWQgYnkgdGhlIHRyZWUtd2Fsa2luZyB1cGRhdGVzIGFuZCBzcHJpbmdzLiBBdm9pZHMgc29tZSBhbGxvY2F0aW9uc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHplcm87XG5cbmZ1bmN0aW9uIHplcm8oKSB7XG4gIHJldHVybiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZVZhbHVlID0gaW50ZXJwb2xhdGVWYWx1ZTtcbmV4cG9ydHMudXBkYXRlQ3VyclZhbHVlID0gdXBkYXRlQ3VyclZhbHVlO1xuZXhwb3J0cy51cGRhdGVDdXJyVmVsb2NpdHkgPSB1cGRhdGVDdXJyVmVsb2NpdHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLmlzcGxhaW5vYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc3BsYWlub2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzcGxhaW5vYmplY3QpO1xuXG52YXIgX21hcFRyZWUgPSByZXF1aXJlKCcuL21hcFRyZWUnKTtcblxudmFyIF9tYXBUcmVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRyZWUpO1xuXG52YXIgX3N0ZXBwZXIgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIpO1xuXG52YXIgX3plcm8gPSByZXF1aXJlKCcuL3plcm8nKTtcblxudmFyIF96ZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3plcm8pO1xuXG52YXIgX3ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxuLy8gVE9ETzogcmVmYWN0b3IgY29tbW9uIGxvZ2ljIHdpdGggdXBkYXRlQ3VyclZhbHVlIGFuZCB1cGRhdGVDdXJyVmVsb2NpdHlcblxudmFyIF9wcmVzZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMpO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0VmFsdWUsIHByZXZWYWx1ZSkge1xuICBpZiAobmV4dFZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAocHJldlZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbmV4dFZhbHVlO1xuICB9XG4gIGlmICh0eXBlb2YgbmV4dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGVuZ2xvdS9yZWFjdC1tb3Rpb24vcHVsbC81NyNpc3N1ZWNvbW1lbnQtMTIxOTI0NjI4XG4gICAgcmV0dXJuIG5leHRWYWx1ZSAqIGFscGhhICsgcHJldlZhbHVlICogKDEgLSBhbHBoYSk7XG4gIH1cbiAgaWYgKG5leHRWYWx1ZS52YWwgIT0gbnVsbCAmJiBuZXh0VmFsdWUuY29uZmlnICYmIG5leHRWYWx1ZS5jb25maWcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgfVxuICBpZiAobmV4dFZhbHVlLnZhbCAhPSBudWxsKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgIHZhbDogaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFZhbHVlLnZhbCwgcHJldlZhbHVlLnZhbClcbiAgICB9O1xuICAgIGlmIChuZXh0VmFsdWUuY29uZmlnKSB7XG4gICAgICByZXQuY29uZmlnID0gbmV4dFZhbHVlLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShuZXh0VmFsdWUpKSB7XG4gICAgcmV0dXJuIG5leHRWYWx1ZS5tYXAoZnVuY3Rpb24gKF8sIGkpIHtcbiAgICAgIHJldHVybiBpbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0VmFsdWVbaV0sIHByZXZWYWx1ZVtpXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKF9sb2Rhc2hJc3BsYWlub2JqZWN0MlsnZGVmYXVsdCddKG5leHRWYWx1ZSkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV4dFZhbHVlKS5yZWR1Y2UoZnVuY3Rpb24gKHJldCwga2V5KSB7XG4gICAgICByZXRba2V5XSA9IGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRWYWx1ZVtrZXldLCBwcmV2VmFsdWVba2V5XSk7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sIHt9KTtcbiAgfVxuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG4vLyBUT0RPOiByZWZhY3RvciBjb21tb24gbG9naWMgd2l0aCBfdXBkYXRlQ3VyclZlbG9jaXR5XG5mdW5jdGlvbiBfdXBkYXRlQ3VyclZhbHVlKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlLCBrLCBiKSB7XG4gIGlmIChlbmRWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoayA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuZFZhbHVlO1xuICAgIH1cbiAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgdG8gc3RlcHBlciB0byBtYWtlIHRoaXMgbm90IGFsbG9jYXRlICgyIHN0ZXBwZXJzPylcbiAgICByZXR1cm4gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUsIGssIGIpWzBdO1xuICB9XG4gIGlmIChlbmRWYWx1ZS52YWwgIT0gbnVsbCAmJiBlbmRWYWx1ZS5jb25maWcgJiYgZW5kVmFsdWUuY29uZmlnLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBlbmRWYWx1ZTtcbiAgfVxuICBpZiAoZW5kVmFsdWUudmFsICE9IG51bGwpIHtcbiAgICB2YXIgX3JlZiA9IGVuZFZhbHVlLmNvbmZpZyB8fCBfcHJlc2V0czJbJ2RlZmF1bHQnXS5ub1dvYmJsZTtcblxuICAgIHZhciBfayA9IF9yZWZbMF07XG4gICAgdmFyIF9iID0gX3JlZlsxXTtcblxuICAgIHZhciByZXQgPSB7XG4gICAgICB2YWw6IF91cGRhdGVDdXJyVmFsdWUoZnJhbWVSYXRlLCBjdXJyVmFsdWUudmFsLCBjdXJyVmVsb2NpdHkudmFsLCBlbmRWYWx1ZS52YWwsIF9rLCBfYilcbiAgICB9O1xuICAgIGlmIChlbmRWYWx1ZS5jb25maWcpIHtcbiAgICAgIHJldC5jb25maWcgPSBlbmRWYWx1ZS5jb25maWc7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoZW5kVmFsdWUpKSB7XG4gICAgcmV0dXJuIGVuZFZhbHVlLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgcmV0dXJuIF91cGRhdGVDdXJyVmFsdWUoZnJhbWVSYXRlLCBjdXJyVmFsdWVbaV0sIGN1cnJWZWxvY2l0eVtpXSwgZW5kVmFsdWVbaV0sIGssIGIpO1xuICAgIH0pO1xuICB9XG4gIGlmIChfbG9kYXNoSXNwbGFpbm9iamVjdDJbJ2RlZmF1bHQnXShlbmRWYWx1ZSkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZW5kVmFsdWUpLnJlZHVjZShmdW5jdGlvbiAocmV0LCBrZXkpIHtcbiAgICAgIHJldFtrZXldID0gX3VwZGF0ZUN1cnJWYWx1ZShmcmFtZVJhdGUsIGN1cnJWYWx1ZVtrZXldLCBjdXJyVmVsb2NpdHlba2V5XSwgZW5kVmFsdWVba2V5XSwgaywgYik7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sIHt9KTtcbiAgfVxuICByZXR1cm4gZW5kVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJWYWx1ZShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSkge1xuICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciBfcHJlc2V0cyRub1dvYmJsZSA9IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlO1xuICAgIHZhciBrID0gX3ByZXNldHMkbm9Xb2JibGVbMF07XG4gICAgdmFyIGIgPSBfcHJlc2V0cyRub1dvYmJsZVsxXTtcblxuICAgIHJldHVybiBfc3RlcHBlcjJbJ2RlZmF1bHQnXShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSwgaywgYilbMF07XG4gIH1cblxuICByZXR1cm4gX3VwZGF0ZUN1cnJWYWx1ZShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVDdXJyVmVsb2NpdHkoZnJhbWVSYXRlLCBjdXJyVmFsdWUsIGN1cnJWZWxvY2l0eSwgZW5kVmFsdWUsIGssIGIpIHtcbiAgaWYgKGVuZFZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIGVuZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGlmIChrID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gX21hcFRyZWUyWydkZWZhdWx0J10oX3plcm8yWydkZWZhdWx0J10sIGN1cnJWZWxvY2l0eSk7XG4gICAgfVxuICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyB0byBzdGVwcGVyIHRvIG1ha2UgdGhpcyBub3QgYWxsb2NhdGUgKDIgc3RlcHBlcnM/KVxuICAgIHJldHVybiBfc3RlcHBlcjJbJ2RlZmF1bHQnXShmcmFtZVJhdGUsIGN1cnJWYWx1ZSwgY3VyclZlbG9jaXR5LCBlbmRWYWx1ZSwgaywgYilbMV07XG4gIH1cbiAgaWYgKGVuZFZhbHVlLnZhbCAhPSBudWxsICYmIGVuZFZhbHVlLmNvbmZpZyAmJiBlbmRWYWx1ZS5jb25maWcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIF9tYXBUcmVlMlsnZGVmYXVsdCddKF96ZXJvMlsnZGVmYXVsdCddLCBjdXJyVmVsb2NpdHkpO1xuICB9XG4gIGlmIChlbmRWYWx1ZS52YWwgIT0gbnVsbCkge1xuICAgIHZhciBfcmVmMiA9IGVuZFZhbHVlLmNvbmZpZyB8fCBfcHJlc2V0czJbJ2RlZmF1bHQnXS5ub1dvYmJsZTtcblxuICAgIHZhciBfayA9IF9yZWYyWzBdO1xuICAgIHZhciBfYiA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHJldCA9IHtcbiAgICAgIHZhbDogX3VwZGF0ZUN1cnJWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJWYWx1ZS52YWwsIGN1cnJWZWxvY2l0eS52YWwsIGVuZFZhbHVlLnZhbCwgX2ssIF9iKVxuICAgIH07XG4gICAgaWYgKGVuZFZhbHVlLmNvbmZpZykge1xuICAgICAgcmV0LmNvbmZpZyA9IGVuZFZhbHVlLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShlbmRWYWx1ZSkpIHtcbiAgICByZXR1cm4gZW5kVmFsdWUubWFwKGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZUN1cnJWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJWYWx1ZVtpXSwgY3VyclZlbG9jaXR5W2ldLCBlbmRWYWx1ZVtpXSwgaywgYik7XG4gICAgfSk7XG4gIH1cbiAgaWYgKF9sb2Rhc2hJc3BsYWlub2JqZWN0MlsnZGVmYXVsdCddKGVuZFZhbHVlKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbmRWYWx1ZSkucmVkdWNlKGZ1bmN0aW9uIChyZXQsIGtleSkge1xuICAgICAgcmV0W2tleV0gPSBfdXBkYXRlQ3VyclZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VyclZhbHVlW2tleV0sIGN1cnJWZWxvY2l0eVtrZXldLCBlbmRWYWx1ZVtrZXldLCBrLCBiKTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSwge30pO1xuICB9XG4gIHJldHVybiBfbWFwVHJlZTJbJ2RlZmF1bHQnXShfemVybzJbJ2RlZmF1bHQnXSwgY3VyclZlbG9jaXR5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VyclZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZW5kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIF9wcmVzZXRzJG5vV29iYmxlMiA9IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlO1xuICAgIHZhciBrID0gX3ByZXNldHMkbm9Xb2JibGUyWzBdO1xuICAgIHZhciBiID0gX3ByZXNldHMkbm9Xb2JibGUyWzFdO1xuXG4gICAgcmV0dXJuIF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlLCBrLCBiKVsxXTtcbiAgfVxuXG4gIHJldHVybiBfdXBkYXRlQ3VyclZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VyclZhbHVlLCBjdXJyVmVsb2NpdHksIGVuZFZhbHVlKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3VwZGF0ZVRyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGVwcGVyO1xudmFyIGVycm9yTWFyZ2luID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBzdGVwcGVyKGZyYW1lUmF0ZSwgeCwgdiwgZGVzdFgsIGssIGIpIHtcbiAgLy8gU3ByaW5nIHN0aWZmbmVzcywgaW4ga2cgLyBzXjJcblxuICAvLyBmb3IgYW5pbWF0aW9ucywgZGVzdFggaXMgcmVhbGx5IHNwcmluZyBsZW5ndGggKHNwcmluZyBhdCByZXN0KS4gaW5pdGlhbFxuICAvLyBwb3NpdGlvbiBpcyBjb25zaWRlcmVkIGFzIHRoZSBzdHJldGNoZWQvY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBhIHNwcmluZ1xuICB2YXIgRnNwcmluZyA9IC1rICogKHggLSBkZXN0WCk7XG5cbiAgLy8gRGFtcGluZywgaW4ga2cgLyBzXG4gIHZhciBGZGFtcGVyID0gLWIgKiB2O1xuXG4gIC8vIHVzdWFsbHkgd2UgcHV0IG1hc3MgaGVyZSwgYnV0IGZvciBhbmltYXRpb24gcHVycG9zZXMsIHNwZWNpZnlpbmcgbWFzcyBpcyBhXG4gIC8vIGJpdCByZWR1bmRhbnQuIHlvdSBjb3VsZCBzaW1wbHkgYWRqdXN0IGsgYW5kIGIgYWNjb3JkaW5nbHlcbiAgLy8gbGV0IGEgPSAoRnNwcmluZyArIEZkYW1wZXIpIC8gbWFzcztcbiAgdmFyIGEgPSBGc3ByaW5nICsgRmRhbXBlcjtcblxuICB2YXIgbmV3ViA9IHYgKyBhICogZnJhbWVSYXRlO1xuICB2YXIgbmV3WCA9IHggKyBuZXdWICogZnJhbWVSYXRlO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWIC0gdikgPCBlcnJvck1hcmdpbiAmJiBNYXRoLmFicyhuZXdYIC0geCkgPCBlcnJvck1hcmdpbikge1xuICAgIHJldHVybiBbZGVzdFgsIDBdO1xuICB9XG5cbiAgcmV0dXJuIFtuZXdYLCBuZXdWXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFtzdGlmZm5lc3MsIGRhbXBpbmddXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBub1dvYmJsZTogWzE3MCwgMjZdLCAvLyB0aGUgZGVmYXVsdFxuICBnZW50bGU6IFsxMjAsIDE0XSxcbiAgd29iYmx5OiBbMTgwLCAxMl0sXG4gIHN0aWZmOiBbMjEwLCAyMF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==