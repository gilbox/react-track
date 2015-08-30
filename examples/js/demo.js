webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(156);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _functionalEasing = __webpack_require__(157);
	
	var _reactTrack = __webpack_require__(161);
	
	var _reactTrackTween = __webpack_require__(162);
	
	var _reactTrackTrackingFormulas = __webpack_require__(163);
	
	var _reactTrackTweenValueFactories = __webpack_require__(164);
	
	var easeOutBounce = new _functionalEasing.Easer().using('out-bounce');
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // initialize svg
	      var node = _react2['default'].findDOMNode(this.sparkPath);
	      var length = ~ ~node.getTotalLength();
	      this.offsetTarget = length;
	      node.style.strokeDasharray = length + ' ' + length; // i'm cheating
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      return _react2['default'].createElement(
	        _reactTrack.TrackDocument,
	        { formulas: [_reactTrackTrackingFormulas.getDocumentElement, _reactTrackTrackingFormulas.getDocumentRect, _reactTrackTrackingFormulas.calculateScrollY, _reactTrackTrackingFormulas.topTop, _reactTrackTrackingFormulas.topBottom, _reactTrackTrackingFormulas.topCenter, _reactTrackTrackingFormulas.centerCenter, _reactTrackTrackingFormulas.bottomBottom, _reactTrackTrackingFormulas.bottomTop] },
	        function (documentElement, documentRect, scrollY, topTop, topBottom, topCenter, centerCenter, bottomBottom, bottomTop) {
	          return _react2['default'].createElement(
	            'div',
	            { style: { minHeight: '5000px' } },
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
	              _reactTrack.TrackedDiv,
	              { className: 'hero', formulas: [topTop] },
	              function (posTopTop) {
	                var _tween, _tween2, _tween3;
	
	                return _react2['default'].createElement(
	                  'div',
	                  null,
	                  _react2['default'].createElement(
	                    'a',
	                    { href: 'https://github.com/gilbox/react-track' },
	                    _react2['default'].createElement(
	                      'h1',
	                      {
	                        style: (0, _reactTrackTween.tween)(scrollY, (_tween = {}, _defineProperty(_tween, posTopTop, { opacity: 1, transform: (0, _reactTrackTweenValueFactories.translate3d)(0, 150, 0) }), _defineProperty(_tween, posTopTop + 200, { opacity: 0, transform: (0, _reactTrackTweenValueFactories.translate3d)(0, 100, 0) }), _tween)) },
	                      _react2['default'].createElement(
	                        'span',
	                        null,
	                        _react2['default'].createElement(
	                          'svg',
	                          { width: '296px', height: '228px', viewBox: '0 0 296 228', version: '1.1' },
	                          _react2['default'].createElement(
	                            'g',
	                            { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
	                            _react2['default'].createElement('path', {
	                              ref: function (r) {
	                                return _this.sparkPath = r;
	                              },
	                              style: { strokeDashoffset: (0, _reactTrackTween.tween)(scrollY, (_tween2 = {}, _defineProperty(_tween2, posTopTop, 0), _defineProperty(_tween2, posTopTop + 150, _this.offsetTarget), _tween2)) },
	                              d: 'M43.7774442,71.4898495 C68.1223861,13.9815032 2.19454397,48.0407223 21.6782286,62.6489207 C35.6643945,73.1352682 58.9096882,70.7747789 65.8766598,90.2775999 C81.3266094,133.527037 58.7305466,191.386016 8.96667524,191.386016 C-21.7867278,124.419226 58.5165505,95.0604409 105.657733,71.4898495 C111.587019,68.5252065 106.843786,84.8551006 105.657733,91.3772797 C99.6123965,124.620967 91.5214411,157.47733 85.7703029,190.833069 C84.8685764,196.062948 81.6274642,214.829299 80.7937857,222.32616 C80.6715598,223.425278 80.7937857,226.749731 80.7937857,225.643838 C80.7937857,178.19023 80.0535912,132.979764 92.3994463,86.6741293 C93.8113405,81.3785334 108.30594,39.7685738 124.99843,54.0751457 C156.752595,81.2905735 92.5724441,93.4702936 121.127805,96.0680044 C128.282422,96.7188674 135.65546,97.5726529 142.680287,96.0680044 C148.736462,94.7708318 187.108665,71.4402165 175.273058,59.6046093 C159.768414,44.0999652 147.084798,89.2989658 152.06795,90.5447538 C167.304679,94.3539362 163.498851,72.3099498 171.408646,72.3099498 C175.432165,72.3099498 170.909757,82.6418308 174.726325,83.9156104 C188.108938,88.3820577 200.672172,72.3568753 206.772362,66.2337527 C207.900248,65.1016258 206.423589,91.2727357 216.160024,86.1211829 C225.148096,81.3655893 232.107661,66.8252089 236.053667,57.9457702 C238.752882,51.8719041 253.48624,1.58873203 246.553435,1.58873203 C241.137697,1.58873203 228.944808,94.9098646 223.342114,100.491575 C218.092273,105.721754 247.690967,38.5929831 260.364668,41.3698053 C278.111625,45.2581835 231.741761,65.8490563 230.530416,69.4830892 C229.69667,71.984328 235.745427,70.3606023 238.265453,71.1357154 C260.054171,77.8375207 284.345377,96.4449716 294.622491,116.999199', id: 'Path-13', stroke: '#382513', strokeWidth: '3' })
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    {
	                      className: 'down-arrow',
	                      style: (0, _reactTrackTween.tween)(scrollY, (_tween3 = {}, _defineProperty(_tween3, posTopTop, { opacity: 1, transform: (0, _reactTrackTweenValueFactories.translate3d)(0, 0, 0) }), _defineProperty(_tween3, posTopTop + 200, { opacity: 0, transform: (0, _reactTrackTweenValueFactories.translate3d)(0, -150, 0) }), _tween3)) },
	                    'v'
	                  )
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              _reactTrack.Track,
	              { component: 'h2', formulas: [topBottom, centerCenter] },
	              function (H2, posTopBottom, posCenterCenter) {
	                var _tween4;
	
	                return _react2['default'].createElement(
	                  H2,
	                  {
	                    style: (0, _reactTrackTween.tween)(scrollY, (_tween4 = {}, _defineProperty(_tween4, posTopBottom, { opacity: 0 }), _defineProperty(_tween4, posCenterCenter, { opacity: 1 }), _tween4)) },
	                  'fade'
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              _reactTrack.Track,
	              { component: 'h2', formulas: [topBottom, centerCenter] },
	              function (H2, posTopBottom, posCenterCenter) {
	                var _tween5;
	
	                return _react2['default'].createElement(
	                  H2,
	                  {
	                    style: (0, _reactTrackTween.tween)(scrollY, (_tween5 = {}, _defineProperty(_tween5, posTopBottom, { marginLeft: (0, _reactTrackTweenValueFactories.px)(-500), opacity: 0 }), _defineProperty(_tween5, posCenterCenter, { marginLeft: (0, _reactTrackTweenValueFactories.px)(0), opacity: 1 }), _tween5), easeOutBounce) },
	                  'move'
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              _reactTrack.TrackedDiv,
	              { formulas: [topBottom, centerCenter] },
	              function (posTopBottom, posCenterCenter) {
	                var _tween6;
	
	                return _react2['default'].createElement(
	                  'h2',
	                  {
	                    style: (0, _reactTrackTween.tween)(scrollY, (_tween6 = {}, _defineProperty(_tween6, posTopBottom, { transform: (0, _reactTrackTweenValueFactories.rotate)(0) }), _defineProperty(_tween6, posCenterCenter, { transform: (0, _reactTrackTweenValueFactories.rotate)(360) }), _tween6)) },
	                  'spin'
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              _reactTrack.TrackedDiv,
	              { formulas: [topCenter] },
	              function (posTopCenter) {
	                var _tween7;
	
	                return _react2['default'].createElement(
	                  'h2',
	                  {
	                    proxy: 'scale-proxy',
	                    style: (0, _reactTrackTween.tween)(scrollY, (_tween7 = {}, _defineProperty(_tween7, posTopCenter - 201, { transform: (0, _reactTrackTweenValueFactories.scale)(0.01), opacity: 0 }), _defineProperty(_tween7, posTopCenter - 200, { transform: (0, _reactTrackTweenValueFactories.scale)(0.01), opacity: 1 }), _defineProperty(_tween7, posTopCenter + 70, { transform: (0, _reactTrackTweenValueFactories.scale)(1), opacity: 1 }), _tween7), easeOutBounce) },
	                  'scale'
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              _reactTrack.TrackedDiv,
	              { className: 'pin-cont', formulas: [topTop, bottomBottom] },
	              function (posTopTop, posBottomBottom) {
	                var _tween8, _tween9, _tween10, _tween11;
	
	                return _react2['default'].createElement(
	                  'section',
	                  {
	                    className: (0, _classnames2['default'])("pin", {
	                      'pin-pin': scrollY > posTopTop,
	                      'pin-unpin': scrollY > posBottomBottom }) },
	                  _react2['default'].createElement(
	                    'h3',
	                    {
	                      className: 'pin-txt',
	                      style: (0, _reactTrackTween.tween)(scrollY, (_tween8 = {}, _defineProperty(_tween8, posTopTop, { top: (0, _reactTrackTweenValueFactories.percent)(0), marginTop: (0, _reactTrackTweenValueFactories.px)(0) }), _defineProperty(_tween8, posTopTop + 50, { top: (0, _reactTrackTweenValueFactories.percent)(50), marginTop: (0, _reactTrackTweenValueFactories.px)(-60) }), _tween8)) },
	                    'pin'
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    {
	                      className: 'reveal',
	                      style: (0, _reactTrackTween.tween)(scrollY, (_tween9 = {}, _defineProperty(_tween9, posTopTop + 100, { width: (0, _reactTrackTweenValueFactories.percent)(0), backgroundColor: (0, _reactTrackTweenValueFactories.rgba)(92, 131, 47, 1) }), _defineProperty(_tween9, posTopTop + 250, { width: (0, _reactTrackTweenValueFactories.percent)(100), backgroundColor: (0, _reactTrackTweenValueFactories.rgba)(56, 37, 19, 1) }), _tween9)) },
	                    _react2['default'].createElement(
	                      'h3',
	                      { className: 'reveal-txt' },
	                      'reveal'
	                    )
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    {
	                      className: (0, _classnames2['default'])("slide", { hide: scrollY < posTopTop + 250 }),
	                      style: (0, _reactTrackTween.tween)(scrollY, (_tween10 = {}, _defineProperty(_tween10, posTopTop + 250, { bottom: (0, _reactTrackTweenValueFactories.percent)(100), backgroundColor: (0, _reactTrackTweenValueFactories.rgb)(92, 131, 47) }), _defineProperty(_tween10, posTopTop + 400, { bottom: (0, _reactTrackTweenValueFactories.percent)(0), backgroundColor: (0, _reactTrackTweenValueFactories.rgb)(40, 73, 7) }), _defineProperty(_tween10, posTopTop + 450, { bottom: (0, _reactTrackTweenValueFactories.percent)(0), backgroundColor: (0, _reactTrackTweenValueFactories.rgb)(0, 0, 170) }), _defineProperty(_tween10, posTopTop + 500, { bottom: (0, _reactTrackTweenValueFactories.percent)(0), backgroundColor: (0, _reactTrackTweenValueFactories.rgb)(170, 0, 0) }), _defineProperty(_tween10, posTopTop + 550, { bottom: (0, _reactTrackTweenValueFactories.percent)(0), backgroundColor: (0, _reactTrackTweenValueFactories.rgb)(92, 131, 47) }), _tween10)) },
	                    _react2['default'].createElement(
	                      'h3',
	                      { className: 'slide-txt' },
	                      scrollY > posTopTop + 400 ? 'color' : 'slide'
	                    ),
	                    _react2['default'].createElement(
	                      'h3',
	                      {
	                        className: (0, _classnames2['default'])("unpin-txt", { hide: scrollY < posTopTop + 600 }),
	                        style: (0, _reactTrackTween.tween)(scrollY, (_tween11 = {}, _defineProperty(_tween11, posTopTop + 600, { top: (0, _reactTrackTweenValueFactories.percent)(100) }), _defineProperty(_tween11, posBottomBottom, { top: (0, _reactTrackTweenValueFactories.percent)(50) }), _tween11)) },
	                      'unpin'
	                    )
	                  )
	                );
	              }
	            ),
	            _react2['default'].createElement('div', { className: 'spacer50' }),
	            _react2['default'].createElement(
	              'a',
	              { href: 'https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/' },
	              _react2['default'].createElement(
	                _reactTrack.Track,
	                { component: 'div', formulas: [topBottom, bottomTop] },
	                function (Div, posTopBottom, posBottomTop) {
	                  var _tween12, _tween13, _tween14, _tween15;
	
	                  return _react2['default'].createElement(
	                    Div,
	                    { className: 'parallax-cont' },
	                    _react2['default'].createElement('div', { className: 'parallax-shadow' }),
	                    _react2['default'].createElement('div', {
	                      className: 'parallax-img',
	                      style: (0, _reactTrackTween.tween)(scrollY, (_tween12 = {}, _defineProperty(_tween12, posTopBottom, { transform: (0, _reactTrackTweenValueFactories.translate3d)(0, 0, 0) }), _defineProperty(_tween12, posBottomTop, { transform: (0, _reactTrackTweenValueFactories.translate3d)(0, -80, 0) }), _tween12)) }),
	                    _react2['default'].createElement(
	                      'h3',
	                      {
	                        className: 'parallax-txt fade2',
	                        style: (0, _reactTrackTween.tween)(scrollY, (_tween13 = {}, _defineProperty(_tween13, posTopBottom, { transform: (0, _reactTrackTween.combine)((0, _reactTrackTweenValueFactories.scale)(0.8), (0, _reactTrackTweenValueFactories.translate3d)(0, 120, 0)) }), _defineProperty(_tween13, posBottomTop, { transform: (0, _reactTrackTween.combine)((0, _reactTrackTweenValueFactories.scale)(0.8), (0, _reactTrackTweenValueFactories.translate3d)(0, -120, 0)) }), _tween13)) },
	                      'parallax'
	                    ),
	                    _react2['default'].createElement(
	                      'h3',
	                      {
	                        className: 'parallax-txt fade1',
	                        style: (0, _reactTrackTween.tween)(scrollY, (_tween14 = {}, _defineProperty(_tween14, posTopBottom, { transform: (0, _reactTrackTween.combine)((0, _reactTrackTweenValueFactories.scale)(0.9), (0, _reactTrackTweenValueFactories.translate3d)(0, 160, 0)) }), _defineProperty(_tween14, posBottomTop, { transform: (0, _reactTrackTween.combine)((0, _reactTrackTweenValueFactories.scale)(0.9), (0, _reactTrackTweenValueFactories.translate3d)(0, -160, 0)) }), _tween14)) },
	                      'parallax'
	                    ),
	                    _react2['default'].createElement(
	                      'h3',
	                      {
	                        className: 'parallax-txt',
	                        style: (0, _reactTrackTween.tween)(scrollY, (_tween15 = {}, _defineProperty(_tween15, posTopBottom, { transform: (0, _reactTrackTweenValueFactories.translate3d)(0, 200, 0) }), _defineProperty(_tween15, posBottomTop, { transform: (0, _reactTrackTweenValueFactories.translate3d)(0, -200, 0) }), _tween15)) },
	                      'parallax'
	                    )
	                  );
	                }
	              )
	            ),
	            _react2['default'].createElement('div', { className: 'spacer50' }),
	            _react2['default'].createElement(
	              'a',
	              { href: 'https://github.com/gilbox/react-track' },
	              _react2['default'].createElement('img', { className: 'center', src: 'GitHub-Mark-64px.png', alt: '' })
	            ),
	            _react2['default'].createElement('div', { className: 'spacer10' }),
	            _react2['default'].createElement(
	              'p',
	              { className: 'center' },
	              'This demo was inspired by ',
	              _react2['default'].createElement(
	                'a',
	                { href: 'http://janpaepke.github.io/ScrollMagic/' },
	                'ScrollMagic'
	              )
	            ),
	            _react2['default'].createElement('div', { className: 'spacer10' })
	          );
	        }
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));
	/* fade */ /* move */ /* spin */ /* scale */ /* pin, reveal, slide, color, unpin */ /* when we hit the appropriate scroll position, change the
	                                                                                         text to 'slide' or 'color' depending on the position */ /* parallax */

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
	exports.defaultRect = defaultRect;
	var identity = function identity(x) {
	  return x;
	};
	
	var Track = (function (_Component) {
	  _inherits(Track, _Component);
	
	  _createClass(Track, null, [{
	    key: 'propTypes',
	    value: { ref: _react2['default'].PropTypes.func,
	      children: _react2['default'].PropTypes.func.isRequired,
	      formulas: _react2['default'].PropTypes.array },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { formulas: [identity], component: 'div' },
	    enumerable: true
	  }]);
	
	  function Track(props) {
	    _classCallCheck(this, Track);
	
	    _get(Object.getPrototypeOf(Track.prototype), 'constructor', this).call(this, props);
	
	    var self = this;
	
	    this.DecoratedComponent = (function (_Component2) {
	      _inherits(_class, _Component2);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	      }
	
	      _createClass(_class, [{
	        key: 'render',
	        value: function render() {
	          var _props$ref = this.props.ref;
	          var ref = _props$ref === undefined ? props.ref || identity : _props$ref;
	
	          return _react2['default'].createElement(props.component, _extends({}, props, this.props, {
	            ref: function (r) {
	              return ref(self.nodeRef = r);
	            } }));
	        }
	      }], [{
	        key: 'propTypes',
	        value: { ref: _react2['default'].PropTypes.func },
	        enumerable: true
	      }]);
	
	      return _class;
	    })(_react.Component);
	    this.state = {};
	  }
	
	  _createClass(Track, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      var node = _react2['default'].findDOMNode(this.nodeRef);
	      var rect = node.getBoundingClientRect();
	      this.setState({ rect: rect, node: node });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props;
	
	      var _state = this.state;
	      var _state$rect = _state.rect;
	      var rect = _state$rect === undefined ? defaultRect : _state$rect;
	      var _state$node = _state.node;
	      var node = _state$node === undefined ? {} : _state$node;
	
	      return (_props = this.props).children.apply(_props, [this.DecoratedComponent].concat(_toConsumableArray(this.props.formulas.map(function (formula) {
	        return formula(rect, node);
	      }))));
	    }
	  }]);
	
	  return Track;
	})(_react.Component);
	
	exports.Track = Track;
	
	var TrackDocument = (function (_Component3) {
	  _inherits(TrackDocument, _Component3);
	
	  _createClass(TrackDocument, null, [{
	    key: 'propTypes',
	    value: { children: _react2['default'].PropTypes.func.isRequired,
	      formulas: _react2['default'].PropTypes.array },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { formulas: [identity] },
	    enumerable: true
	  }]);
	
	  function TrackDocument(props) {
	    _classCallCheck(this, TrackDocument);
	
	    _get(Object.getPrototypeOf(TrackDocument.prototype), 'constructor', this).call(this, props);
	    this.state = { rect: null };
	  }
	
	  _createClass(TrackDocument, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this = this;
	
	      window.addEventListener('scroll', function (event) {
	        _this.setState({ rect: document.documentElement.getBoundingClientRect() });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2;
	
	      var rect = this.state.rect;
	
	      var element = typeof document !== 'undefined' && document.documentElement;
	      if (!rect) {
	        if (element) {
	          rect = element.getBoundingClientRect();
	        } else {
	          rect = defaultRect;
	          element = {}; // bah
	        }
	      }
	      return (_props2 = this.props).children.apply(_props2, _toConsumableArray(this.props.formulas.map(function (formula) {
	        return formula(rect, element);
	      })));
	    }
	  }]);
	
	  return TrackDocument;
	})(_react.Component);
	
	exports.TrackDocument = TrackDocument;
	
	var TrackedDiv = (function (_Component4) {
	  _inherits(TrackedDiv, _Component4);
	
	  _createClass(TrackedDiv, null, [{
	    key: 'propTypes',
	    value: { children: _react2['default'].PropTypes.func.isRequired,
	      formulas: _react2['default'].PropTypes.array,
	      component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]) },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { formulas: [identity], component: 'div' },
	    enumerable: true
	  }]);
	
	  function TrackedDiv(props) {
	    _classCallCheck(this, TrackedDiv);
	
	    _get(Object.getPrototypeOf(TrackedDiv.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(TrackedDiv, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      var node = _react2['default'].findDOMNode(this.div);
	      var rect = node.getBoundingClientRect();
	      this.setState({ rect: rect, node: node });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3,
	          _this2 = this;
	
	      var _state2 = this.state;
	      var _state2$rect = _state2.rect;
	      var rect = _state2$rect === undefined ? defaultRect : _state2$rect;
	      var _state2$node = _state2.node;
	      var node = _state2$node === undefined ? {} : _state2$node;
	      var Comp = this.props.component;
	
	      return _react2['default'].createElement(
	        Comp,
	        _extends({ ref: function (r) {
	            return _this2.div = r;
	          } }, this.props),
	        (_props3 = this.props).children.apply(_props3, _toConsumableArray(this.props.formulas.map(function (formula) {
	          return formula(rect, node);
	        })))
	      );
	    }
	  }]);
	
	  return TrackedDiv;
	})(_react.Component);

	exports.TrackedDiv = TrackedDiv;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var topTop = function topTop(containerRect) {
	  return function (rect) {
	    return ~ ~(rect.top - containerRect.top);
	  };
	};
	
	exports.topTop = topTop;
	var topBottom = function topBottom(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.top - containerRect.top - container.clientHeight);
	  };
	};
	
	exports.topBottom = topBottom;
	var topCenter = function topCenter(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.top - containerRect.top - container.clientHeight / 2);
	  };
	};
	
	exports.topCenter = topCenter;
	var centerTop = function centerTop(containerRect) {
	  return function (rect) {
	    return ~ ~(rect.top + rect.height / 2 - containerRect.top);
	  };
	};
	
	exports.centerTop = centerTop;
	var centerCenter = function centerCenter(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2);
	  };
	};
	
	exports.centerCenter = centerCenter;
	var centerBottom = function centerBottom(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight);
	  };
	};
	
	exports.centerBottom = centerBottom;
	var bottomBottom = function bottomBottom(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.bottom - containerRect.top - container.clientHeight);
	  };
	};
	
	exports.bottomBottom = bottomBottom;
	var bottomTop = function bottomTop(containerRect) {
	  return function (rect) {
	    return ~ ~(rect.bottom - containerRect.top);
	  };
	};
	
	exports.bottomTop = bottomTop;
	var bottomCenter = function bottomCenter(containerRect, container) {
	  return function (rect) {
	    return ~ ~(rect.bottom - containerRect.top - container.clientHeight / 2);
	  };
	};
	
	exports.bottomCenter = bottomCenter;
	var getDocumentRect = function getDocumentRect(documentRect) {
	  return documentRect;
	};
	exports.getDocumentRect = getDocumentRect;
	var getDocumentElement = function getDocumentElement(_, documentElement) {
	  return documentElement;
	};
	exports.getDocumentElement = getDocumentElement;
	var calculateScrollY = function calculateScrollY(_ref) {
	  var top = _ref.top;
	  return -top;
	};
	exports.calculateScrollY = calculateScrollY;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2luZy1mb3JtdWxhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUErQixDQUFPOzs7O3VDQUN2QixHQUFZOzs7OzZDQUNQLEdBQW1COzt1Q0FDUSxHQUFhOzs0Q0FDL0IsR0FBbUI7O3VEQVNqQixHQUErQjs7MERBRXZCLEdBQW1DOztBQUUxRSxLQUFNLGFBQWEsR0FBRyw2QkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7S0FFaEQsR0FBRzthQUFILEdBQUc7O1lBQUgsR0FBRzsyQkFBSCxHQUFHOztnQ0FBSCxHQUFHOzs7Z0JBQUgsR0FBRzs7WUFDVSw2QkFBRzs7QUFFbEIsV0FBSSxJQUFJLEdBQUcsbUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxXQUFJLE1BQU0sR0FBRyxFQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RDLFdBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFdBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO01BQ3BEOzs7WUFFSyxrQkFBRzs7O0FBQ1AsY0FDRTs7V0FBZSxRQUFRLEVBQUUsd1hBRVc7U0FDbkMsVUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQzlDLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTO2tCQUMzRDs7ZUFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFO2FBRS9COztpQkFBRyxJQUFJLEVBQUMsdUNBQXVDO2VBQzdDO0FB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OztBQUV2RSxLQUFNLFlBQVksR0FBRyxTQUFmLFlBQVksQ0FBSSxhQUFhLEVBQUUsU0FBUztVQUFLLGNBQUk7WUFDNUQsRUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQUE7RUFBQSxDQUFDOzs7QUFFeEQsS0FBTSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQUcsYUFBYTtVQUFJLGNBQUk7WUFDNUMsRUFBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUFBO0VBQUEsQ0FBQzs7O0FBRS9CLEtBQU0sWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFJLGFBQWEsRUFBRSxTQUFTO1VBQUssY0FBSTtZQUM1RCxFQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQUE7RUFBQSxDQUFDOzs7QUFFNUQsS0FBTSxlQUFlLEdBQUcsU0FBbEIsZUFBZSxDQUFHLFlBQVk7VUFBSSxZQUFZO0VBQUEsQ0FBQzs7QUFDckQsS0FBTSxrQkFBa0IsR0FBRyxTQUFyQixrQkFBa0IsQ0FBSSxDQUFDLEVBQUMsZUFBZTtVQUFLLGVBQWU7RUFBQSxDQUFDOztBQUNsRSxLQUFNLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFnQixDQUFJLElBQUs7T0FBSixHQUFHLEdBQUosSUFBSyxDQUFKLEdBQUc7VUFBTSxDQUFDLEdBQUc7RUFBQSxDQUFDIiwiZmlsZSI6ImRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7RWFzZXJ9IGZyb20gJ2Z1bmN0aW9uYWwtZWFzaW5nJztcbmltcG9ydCB7VHJhY2ssIFRyYWNrZWREaXYsIFRyYWNrRG9jdW1lbnR9IGZyb20gJ3JlYWN0LXRyYWNrJztcbmltcG9ydCB7dHdlZW4sIGNvbWJpbmV9IGZyb20gJ3JlYWN0LXRyYWNrL3R3ZWVuJztcbmltcG9ydCB7dG9wVG9wLFxuICAgICAgICB0b3BCb3R0b20sXG4gICAgICAgIGNlbnRlckNlbnRlcixcbiAgICAgICAgdG9wQ2VudGVyLFxuICAgICAgICBib3R0b21Cb3R0b20sXG4gICAgICAgIGJvdHRvbVRvcCxcbiAgICAgICAgZ2V0RG9jdW1lbnRSZWN0LFxuICAgICAgICBnZXREb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIGNhbGN1bGF0ZVNjcm9sbFl9IGZyb20gJ3JlYWN0LXRyYWNrL3RyYWNraW5nLWZvcm11bGFzJztcbmltcG9ydCB7cmdiLCByZ2JhLCBzY2FsZSwgcm90YXRlLCBcbiAgICAgICAgcHgsIHBlcmNlbnQsIHRyYW5zbGF0ZTNkfSBmcm9tICdyZWFjdC10cmFjay90d2Vlbi12YWx1ZS1mYWN0b3JpZXMnO1xuXG5jb25zdCBlYXNlT3V0Qm91bmNlID0gbmV3IEVhc2VyKCkudXNpbmcoJ291dC1ib3VuY2UnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW5pdGlhbGl6ZSBzdmdcbiAgICB2YXIgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuc3BhcmtQYXRoKTtcbiAgICB2YXIgbGVuZ3RoID0gfn4gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIHRoaXMub2Zmc2V0VGFyZ2V0ID0gbGVuZ3RoO1xuICAgIG5vZGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gbGVuZ3RoICsgJyAnICsgbGVuZ3RoOyAvLyBpJ20gY2hlYXRpbmdcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VHJhY2tEb2N1bWVudCBmb3JtdWxhcz17W2dldERvY3VtZW50RWxlbWVudCwgZ2V0RG9jdW1lbnRSZWN0LCBjYWxjdWxhdGVTY3JvbGxZLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BUb3AsIHRvcEJvdHRvbSwgdG9wQ2VudGVyLCBjZW50ZXJDZW50ZXIsIGJvdHRvbUJvdHRvbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tVG9wXX0+XG4gICAgICB7KGRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRSZWN0LCBzY3JvbGxZLCB0b3BUb3AsIFxuICAgICAgICB0b3BCb3R0b20sIHRvcENlbnRlciwgY2VudGVyQ2VudGVyLCBib3R0b21Cb3R0b20sIGJvdHRvbVRvcCkgPT4gXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5IZWlnaHQ6JzUwMDBweCd9fT5cbiAgICAgICAgXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWxib3gvcmVhY3QtdHJhY2tcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCByaWdodDogMCwgYm9yZGVyOiAwfX1cbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jYW1vLmdpdGh1YnVzZXJjb250ZW50LmNvbS9lN2JiYjA1MjFiMzk3ZWRiZDVmZTQzZTdmNzYwNzU5MzM2YjVlMDVmLzY4NzQ3NDcwNzMzYTJmMmY3MzMzMmU2MTZkNjE3YTZmNmU2MTc3NzMyZTYzNmY2ZDJmNjc2OTc0Njg3NTYyMmY3MjY5NjI2MjZmNmU3MzJmNjY2ZjcyNmI2ZDY1NWY3MjY5Njc2ODc0NWY2NzcyNjU2NTZlNWYzMDMwMzczMjMwMzAyZTcwNmU2N1wiXG4gICAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgZGF0YUNhbm9uaWNhbFNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9naXRodWIvcmliYm9ucy9mb3JrbWVfcmlnaHRfZ3JlZW5fMDA3MjAwLnBuZ1wiIC8+PC9hPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICA8VHJhY2tlZERpdiBjbGFzc05hbWU9XCJoZXJvXCIgZm9ybXVsYXM9e1t0b3BUb3BdfT5cbiAgICAgICAgICB7IChwb3NUb3BUb3ApID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC10cmFja1wiPlxuICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHNjcm9sbFksIHtcbiAgICAgICAgICAgICAgICAgICAgW3Bvc1RvcFRvcF06IHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDE1MCwwKSB9LFxuICAgICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzIwMF06IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCwwKSB9IH0pfT5cblxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI5NnB4XCIgaGVpZ2h0PVwiMjI4cHhcIiB2aWV3Qm94PVwiMCAwIDI5NiAyMjhcIiB2ZXJzaW9uPVwiMS4xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLnNwYXJrUGF0aCA9IHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlRGFzaG9mZnNldDogdHdlZW4oc2Nyb2xsWSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3NUb3BUb3BdOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3NUb3BUb3ArMTUwXTogdGhpcy5vZmZzZXRUYXJnZXQgfSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQzLjc3NzQ0NDIsNzEuNDg5ODQ5NSBDNjguMTIyMzg2MSwxMy45ODE1MDMyIDIuMTk0NTQzOTcsNDguMDQwNzIyMyAyMS42NzgyMjg2LDYyLjY0ODkyMDcgQzM1LjY2NDM5NDUsNzMuMTM1MjY4MiA1OC45MDk2ODgyLDcwLjc3NDc3ODkgNjUuODc2NjU5OCw5MC4yNzc1OTk5IEM4MS4zMjY2MDk0LDEzMy41MjcwMzcgNTguNzMwNTQ2NiwxOTEuMzg2MDE2IDguOTY2Njc1MjQsMTkxLjM4NjAxNiBDLTIxLjc4NjcyNzgsMTI0LjQxOTIyNiA1OC41MTY1NTA1LDk1LjA2MDQ0MDkgMTA1LjY1NzczMyw3MS40ODk4NDk1IEMxMTEuNTg3MDE5LDY4LjUyNTIwNjUgMTA2Ljg0Mzc4Niw4NC44NTUxMDA2IDEwNS42NTc3MzMsOTEuMzc3Mjc5NyBDOTkuNjEyMzk2NSwxMjQuNjIwOTY3IDkxLjUyMTQ0MTEsMTU3LjQ3NzMzIDg1Ljc3MDMwMjksMTkwLjgzMzA2OSBDODQuODY4NTc2NCwxOTYuMDYyOTQ4IDgxLjYyNzQ2NDIsMjE0LjgyOTI5OSA4MC43OTM3ODU3LDIyMi4zMjYxNiBDODAuNjcxNTU5OCwyMjMuNDI1Mjc4IDgwLjc5Mzc4NTcsMjI2Ljc0OTczMSA4MC43OTM3ODU3LDIyNS42NDM4MzggQzgwLjc5Mzc4NTcsMTc4LjE5MDIzIDgwLjA1MzU5MTIsMTMyLjk3OTc2NCA5Mi4zOTk0NDYzLDg2LjY3NDEyOTMgQzkzLjgxMTM0MDUsODEuMzc4NTMzNCAxMDguMzA1OTQsMzkuNzY4NTczOCAxMjQuOTk4NDMsNTQuMDc1MTQ1NyBDMTU2Ljc1MjU5NSw4MS4yOTA1NzM1IDkyLjU3MjQ0NDEsOTMuNDcwMjkzNiAxMjEuMTI3ODA1LDk2LjA2ODAwNDQgQzEyOC4yODI0MjIsOTYuNzE4ODY3NCAxMzUuNjU1NDYsOTcuNTcyNjUyOSAxNDIuNjgwMjg3LDk2LjA2ODAwNDQgQzE0OC43MzY0NjIsOTQuNzcwODMxOCAxODcuMTA4NjY1LDcxLjQ0MDIxNjUgMTc1LjI3MzA1OCw1OS42MDQ2MDkzIEMxNTkuNzY4NDE0LDQ0LjA5OTk2NTIgMTQ3LjA4NDc5OCw4OS4yOTg5NjU4IDE1Mi4wNjc5NSw5MC41NDQ3NTM4IEMxNjcuMzA0Njc5LDk0LjM1MzkzNjIgMTYzLjQ5ODg1MSw3Mi4zMDk5NDk4IDE3MS40MDg2NDYsNzIuMzA5OTQ5OCBDMTc1LjQzMjE2NSw3Mi4zMDk5NDk4IDE3MC45MDk3NTcsODIuNjQxODMwOCAxNzQuNzI2MzI1LDgzLjkxNTYxMDQgQzE4OC4xMDg5MzgsODguMzgyMDU3NyAyMDAuNjcyMTcyLDcyLjM1Njg3NTMgMjA2Ljc3MjM2Miw2Ni4yMzM3NTI3IEMyMDcuOTAwMjQ4LDY1LjEwMTYyNTggMjA2LjQyMzU4OSw5MS4yNzI3MzU3IDIxNi4xNjAwMjQsODYuMTIxMTgyOSBDMjI1LjE0ODA5Niw4MS4zNjU1ODkzIDIzMi4xMDc2NjEsNjYuODI1MjA4OSAyMzYuMDUzNjY3LDU3Ljk0NTc3MDIgQzIzOC43NTI4ODIsNTEuODcxOTA0MSAyNTMuNDg2MjQsMS41ODg3MzIwMyAyNDYuNTUzNDM1LDEuNTg4NzMyMDMgQzI0MS4xMzc2OTcsMS41ODg3MzIwMyAyMjguOTQ0ODA4LDk0LjkwOTg2NDYgMjIzLjM0MjExNCwxMDAuNDkxNTc1IEMyMTguMDkyMjczLDEwNS43MjE3NTQgMjQ3LjY5MDk2NywzOC41OTI5ODMxIDI2MC4zNjQ2NjgsNDEuMzY5ODA1MyBDMjc4LjExMTYyNSw0NS4yNTgxODM1IDIzMS43NDE3NjEsNjUuODQ5MDU2MyAyMzAuNTMwNDE2LDY5LjQ4MzA4OTIgQzIyOS42OTY2Nyw3MS45ODQzMjggMjM1Ljc0NTQyNyw3MC4zNjA2MDIzIDIzOC4yNjU0NTMsNzEuMTM1NzE1NCBDMjYwLjA1NDE3MSw3Ny44Mzc1MjA3IDI4NC4zNDUzNzcsOTYuNDQ0OTcxNiAyOTQuNjIyNDkxLDExNi45OTkxOTlcIiBpZD1cIlBhdGgtMTNcIiBzdHJva2U9XCIjMzgyNTEzXCIgc3Ryb2tlV2lkdGg9XCIzXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvd24tYXJyb3dcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wXToge29wYWNpdHk6IDEsIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApfSxcbiAgICAgICAgICAgICAgICAgIFtwb3NUb3BUb3ArMjAwXToge29wYWNpdHk6IDAsIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTUwLDApfVxuICAgICAgICAgICAgICAgIH0pfT52PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9PC9UcmFja2VkRGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBmYWRlICovfVxuICAgICAgICAgIDxUcmFjayBjb21wb25lbnQ9XCJoMlwiIGZvcm11bGFzPXtbdG9wQm90dG9tLCBjZW50ZXJDZW50ZXJdfT5cbiAgICAgICAgICB7KEgyLHBvc1RvcEJvdHRvbSxwb3NDZW50ZXJDZW50ZXIpID0+IFxuICAgICAgICAgICAgPEgyXG4gICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgW3Bvc1RvcEJvdHRvbV06IHtvcGFjaXR5OiAwfSxcbiAgICAgICAgICAgICAgICBbcG9zQ2VudGVyQ2VudGVyXToge29wYWNpdHk6IDF9IH0pfT5mYWRlPC9IMj5cbiAgICAgICAgICB9PC9UcmFjaz5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogbW92ZSAqL31cbiAgICAgICAgICA8VHJhY2sgY29tcG9uZW50PVwiaDJcIiBmb3JtdWxhcz17W3RvcEJvdHRvbSwgY2VudGVyQ2VudGVyXX0+XG4gICAgICAgICAgeyhIMixwb3NUb3BCb3R0b20scG9zQ2VudGVyQ2VudGVyKSA9PiBcbiAgICAgICAgICAgIDxIMlxuICAgICAgICAgICAgICBzdHlsZT17dHdlZW4oc2Nyb2xsWSwge1xuICAgICAgICAgICAgICAgIFtwb3NUb3BCb3R0b21dOiB7IG1hcmdpbkxlZnQ6IHB4KC01MDApLCBvcGFjaXR5OiAwIH0sXG4gICAgICAgICAgICAgICAgW3Bvc0NlbnRlckNlbnRlcl06IHsgbWFyZ2luTGVmdDogcHgoMCksIG9wYWNpdHk6IDEgfSBcbiAgICAgICAgICAgICAgfSwgZWFzZU91dEJvdW5jZSl9Pm1vdmU8L0gyPlxuICAgICAgICAgIH08L1RyYWNrPlxuXG4gICAgICAgICAgey8qIHNwaW4gKi99XG4gICAgICAgICAgPFRyYWNrZWREaXYgZm9ybXVsYXM9e1t0b3BCb3R0b20sIGNlbnRlckNlbnRlcl19PlxuICAgICAgICAgIHsocG9zVG9wQm90dG9tLHBvc0NlbnRlckNlbnRlcikgPT4gXG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHNjcm9sbFksIHtcbiAgICAgICAgICAgICAgICBbcG9zVG9wQm90dG9tXTogeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9LFxuICAgICAgICAgICAgICAgIFtwb3NDZW50ZXJDZW50ZXJdOiB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCkgfSB9KX0+c3BpbjwvaDI+XG4gICAgICAgICAgfTwvVHJhY2tlZERpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7Lyogc2NhbGUgKi99XG4gICAgICAgICAgPFRyYWNrZWREaXYgZm9ybXVsYXM9e1t0b3BDZW50ZXJdfT5cbiAgICAgICAgICB7KHBvc1RvcENlbnRlcikgPT4gXG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgcHJveHk9XCJzY2FsZS1wcm94eVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgW3Bvc1RvcENlbnRlci0yMDFdOiB7IHRyYW5zZm9ybTogc2NhbGUoMC4wMSksIG9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgICAgIFtwb3NUb3BDZW50ZXItMjAwXTogeyB0cmFuc2Zvcm06IHNjYWxlKDAuMDEpLCBvcGFjaXR5OiAxIH0sXG4gICAgICAgICAgICAgICAgW3Bvc1RvcENlbnRlcis3MF06IHsgdHJhbnNmb3JtOiBzY2FsZSgxKSwgb3BhY2l0eTogMSB9XG4gICAgICAgICAgICAgIH0sIGVhc2VPdXRCb3VuY2UpfT5zY2FsZTwvaDI+XG4gICAgICAgICAgfTwvVHJhY2tlZERpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogcGluLCByZXZlYWwsIHNsaWRlLCBjb2xvciwgdW5waW4gKi99XG4gICAgICAgICAgPFRyYWNrZWREaXYgY2xhc3NOYW1lPVwicGluLWNvbnRcIiBmb3JtdWxhcz17W3RvcFRvcCwgYm90dG9tQm90dG9tXX0+XG4gICAgICAgICAgeyhwb3NUb3BUb3AsIHBvc0JvdHRvbUJvdHRvbSkgPT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcInBpblwiLHtcbiAgICAgICAgICAgICAgICAncGluLXBpbic6c2Nyb2xsWSA+IHBvc1RvcFRvcCxcbiAgICAgICAgICAgICAgICAncGluLXVucGluJzpzY3JvbGxZID4gcG9zQm90dG9tQm90dG9tfSl9PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGluLXR4dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHNjcm9sbFkse1xuICAgICAgICAgICAgICAgICAgW3Bvc1RvcFRvcF06IHsgdG9wOiBwZXJjZW50KDApLCBtYXJnaW5Ub3A6IHB4KDApIH0sXG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzUwXTogeyB0b3A6IHBlcmNlbnQoNTApLCBtYXJnaW5Ub3A6IHB4KC02MCkgfVxuICAgICAgICAgICAgICAgIH0pfT5waW48L2gzPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2ZWFsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17dHdlZW4oc2Nyb2xsWSwge1xuICAgICAgICAgICAgICAgICAgW3Bvc1RvcFRvcCsxMDBdOiB7d2lkdGg6IHBlcmNlbnQoMCksIGJhY2tncm91bmRDb2xvcjogcmdiYSg5MiwgMTMxLCA0NywgMSl9LFxuICAgICAgICAgICAgICAgICAgW3Bvc1RvcFRvcCsyNTBdOiB7d2lkdGg6IHBlcmNlbnQoMTAwKSwgYmFja2dyb3VuZENvbG9yOiByZ2JhKDU2LCAzNywgMTksIDEpfVxuICAgICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmV2ZWFsLXR4dFwiPnJldmVhbDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJzbGlkZVwiLHtoaWRlOnNjcm9sbFkgPCBwb3NUb3BUb3ArMjUwfSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHNjcm9sbFksIHtcbiAgICAgICAgICAgICAgICAgIFtwb3NUb3BUb3ArMjUwXTogeyBib3R0b206IHBlcmNlbnQoMTAwKSwgYmFja2dyb3VuZENvbG9yOiByZ2IoOTIsIDEzMSwgNDcpIH0sXG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzQwMF06IHsgYm90dG9tOiBwZXJjZW50KDApLCBiYWNrZ3JvdW5kQ29sb3I6IHJnYig0MCwgNzMsIDcpIH0sXG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzQ1MF06IHsgYm90dG9tOiBwZXJjZW50KDApLCBiYWNrZ3JvdW5kQ29sb3I6IHJnYigwLCAwLCAxNzApIH0sXG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzUwMF06IHsgYm90dG9tOiBwZXJjZW50KDApLCBiYWNrZ3JvdW5kQ29sb3I6IHJnYigxNzAsIDAsIDApIH0sXG4gICAgICAgICAgICAgICAgICBbcG9zVG9wVG9wKzU1MF06IHsgYm90dG9tOiBwZXJjZW50KDApLCBiYWNrZ3JvdW5kQ29sb3I6IHJnYig5MiwgMTMxLCA0NykgfVxuICAgICAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgIHsvKiB3aGVuIHdlIGhpdCB0aGUgYXBwcm9wcmlhdGUgc2Nyb2xsIHBvc2l0aW9uLCBjaGFuZ2UgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCB0byAnc2xpZGUnIG9yICdjb2xvcicgZGVwZW5kaW5nIG9uIHRoZSBwb3NpdGlvbiAqL31cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2xpZGUtdHh0XCI+XG4gICAgICAgICAgICAgICAgICB7c2Nyb2xsWSA+IHBvc1RvcFRvcCs0MDAgPyAnY29sb3InIDogJ3NsaWRlJ31cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwidW5waW4tdHh0XCIse2hpZGU6c2Nyb2xsWSA8IHBvc1RvcFRvcCs2MDB9KX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgICAgW3Bvc1RvcFRvcCs2MDBdOiB7IHRvcDogcGVyY2VudCgxMDApIH0sXG4gICAgICAgICAgICAgICAgICAgW3Bvc0JvdHRvbUJvdHRvbV06IHsgdG9wOiBwZXJjZW50KDUwKSB9XG4gICAgICAgICAgICAgICAgIH0pfT51bnBpbjwvaDM+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICB9PC9UcmFja2VkRGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyNTBcIj48L2Rpdj5cblxuICAgICAgICAgIHsvKiBwYXJhbGxheCAqL31cbiAgICAgICAgICBcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9waG90b3MvcmFmYWdhcmNpYV8vMTUyNjIyODc3MzgvaW4vcG9vbC04MzgyMzg1OUBOMDAvXCI+XG4gICAgICAgICAgICA8VHJhY2sgY29tcG9uZW50PVwiZGl2XCIgZm9ybXVsYXM9e1t0b3BCb3R0b20sIGJvdHRvbVRvcF19PlxuICAgICAgICAgICAgeyhEaXYsIHBvc1RvcEJvdHRvbSwgcG9zQm90dG9tVG9wKSA9PlxuICAgICAgICAgICAgICA8RGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4LXNoYWRvd1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJhbGxheC1pbWdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3R3ZWVuKHNjcm9sbFksIHtcbiAgICAgICAgICAgICAgICAgICAgW3Bvc1RvcEJvdHRvbV06IHt0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKX0sXG4gICAgICAgICAgICAgICAgICAgIFtwb3NCb3R0b21Ub3BdOiB7dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC04MCwwKX1cbiAgICAgICAgICAgICAgICAgIH0pfT48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtdHh0IGZhZGUyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgICAgIFtwb3NUb3BCb3R0b21dOiB7IHRyYW5zZm9ybTogY29tYmluZShzY2FsZSgwLjgpLCB0cmFuc2xhdGUzZCgwLDEyMCwwKSkgfSxcbiAgICAgICAgICAgICAgICAgICAgW3Bvc0JvdHRvbVRvcF06IHsgdHJhbnNmb3JtOiBjb21iaW5lKHNjYWxlKDAuOCksIHRyYW5zbGF0ZTNkKDAsLTEyMCwwKSkgfVxuICAgICAgICAgICAgICAgICAgfSl9PnBhcmFsbGF4PC9oMz5cblxuICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFyYWxsYXgtdHh0IGZhZGUxXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt0d2VlbihzY3JvbGxZLCB7XG4gICAgICAgICAgICAgICAgICAgIFtwb3NUb3BCb3R0b21dOiB7dHJhbnNmb3JtOiBjb21iaW5lKHNjYWxlKDAuOSksIHRyYW5zbGF0ZTNkKDAsMTYwLDApKSB9LFxuICAgICAgICAgICAgICAgICAgICBbcG9zQm90dG9tVG9wXToge3RyYW5zZm9ybTogY29tYmluZShzY2FsZSgwLjkpLCB0cmFuc2xhdGUzZCgwLC0xNjAsMCkpIH1cbiAgICAgICAgICAgICAgICAgIH0pfT5wYXJhbGxheDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhcmFsbGF4LXR4dFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17dHdlZW4oc2Nyb2xsWSwge1xuICAgICAgICAgICAgICAgICAgICBbcG9zVG9wQm90dG9tXToge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwyMDAsMCl9LFxuICAgICAgICAgICAgICAgICAgICBbcG9zQm90dG9tVG9wXToge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMjAwLDApfVxuICAgICAgICAgICAgICAgICAgfSl9PnBhcmFsbGF4PC9oMz5cbiAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICB9PC9UcmFjaz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXI1MFwiPjwvZGl2PlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWxib3gvcmVhY3QtdHJhY2tcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3JjPVwiR2l0SHViLU1hcmstNjRweC5wbmdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+VGhpcyBkZW1vIHdhcyBpbnNwaXJlZCBieSA8YSBocmVmPVwiaHR0cDovL2phbnBhZXBrZS5naXRodWIuaW8vU2Nyb2xsTWFnaWMvXCI+U2Nyb2xsTWFnaWM8L2E+PC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXIxMFwiPjwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIH08L1RyYWNrRG9jdW1lbnQ+XG4gICAgKVxuICB9XG59XG5cblJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vL2FwcC5qc1xuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmICgnc3RyaW5nJyA9PT0gYXJnVHlwZSB8fCAnbnVtYmVyJyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblxuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cblx0XHRcdH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChhcmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpe1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWN0ID0geyB0b3A6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuXG5leHBvcnQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0geyByZWY6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGFzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkgfVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgZm9ybXVsYXM6IFtpZGVudGl0eV0sIGNvbXBvbmVudDogJ2RpdicgfVxuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5EZWNvcmF0ZWRDb21wb25lbnQgPSBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBzdGF0aWMgcHJvcFR5cGVzID0geyByZWY6IFJlYWN0LlByb3BUeXBlcy5mdW5jIH1cbiAgICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cmVmID0gcHJvcHMucmVmIHx8IGlkZW50aXR5fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gPHByb3BzLmNvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc30gXG4gICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gXG4gICAgICAgICAgICAgICAgICByZWY9e3IgPT4gcmVmKHNlbGYubm9kZVJlZiA9IHIpfSAvPlxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMubm9kZVJlZik7XG4gICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVjdCwgbm9kZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtyZWN0PWRlZmF1bHRSZWN0LCBub2RlPXt9fSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5EZWNvcmF0ZWRDb21wb25lbnQsIFxuICAgICAgLi4udGhpcy5wcm9wcy5mb3JtdWxhcy5tYXAoZm9ybXVsYSA9PiBmb3JtdWxhKHJlY3QsIG5vZGUpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNrRG9jdW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0geyBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGFzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkgfVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgZm9ybXVsYXM6IFtpZGVudGl0eV0gfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJlY3Q6IG51bGwgfTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWN0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtyZWN0fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAoIXJlY3QpIHtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjdCA9IGRlZmF1bHRSZWN0O1xuICAgICAgICBlbGVtZW50ID0ge307IC8vIGJhaFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbiguLi50aGlzLnByb3BzLmZvcm11bGFzLm1hcChmb3JtdWxhID0+IGZvcm11bGEocmVjdCwgZWxlbWVudCkpKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VkRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHsgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGFzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmddKSB9XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyBmb3JtdWxhczogW2lkZW50aXR5XSwgY29tcG9uZW50OiAnZGl2JyB9XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMuZGl2KTtcbiAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtyZWN0LCBub2RlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3JlY3Q9ZGVmYXVsdFJlY3QsIG5vZGU9e319ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7Y29tcG9uZW50OkNvbXB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbXAgcmVmPXtyID0+IHRoaXMuZGl2ID0gcn0gey4uLnRoaXMucHJvcHN9PlxuICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4oLi4udGhpcy5wcm9wcy5mb3JtdWxhcy5tYXAoZm9ybXVsYSA9PiBmb3JtdWxhKHJlY3QsIG5vZGUpKSl9XG4gICAgPC9Db21wPjtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IHRvcFRvcCA9IGNvbnRhaW5lclJlY3QgPT4gcmVjdCA9PiBcbiAgfn4ocmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCk7XG4gIFxuZXhwb3J0IGNvbnN0IHRvcEJvdHRvbSA9IChjb250YWluZXJSZWN0LCBjb250YWluZXIpID0+IHJlY3QgPT4gXG4gIH5+KHJlY3QudG9wIC0gY29udGFpbmVyUmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50SGVpZ2h0KTtcbiAgXG5leHBvcnQgY29uc3QgdG9wQ2VudGVyID0gKGNvbnRhaW5lclJlY3QsIGNvbnRhaW5lcikgPT4gcmVjdCA9PiBcbiAgfn4ocmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyKTtcblxuZXhwb3J0IGNvbnN0IGNlbnRlclRvcCA9IGNvbnRhaW5lclJlY3QgPT4gcmVjdCA9PlxuICB+fihyZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiAtIGNvbnRhaW5lclJlY3QudG9wKTtcbiAgICBcbmV4cG9ydCBjb25zdCBjZW50ZXJDZW50ZXIgPSAoY29udGFpbmVyUmVjdCwgY29udGFpbmVyKSA9PiByZWN0ID0+IFxuICB+fihyZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiAtIGNvbnRhaW5lclJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIpO1xuXG5leHBvcnQgY29uc3QgY2VudGVyQm90dG9tID0gKGNvbnRhaW5lclJlY3QsIGNvbnRhaW5lcikgPT4gcmVjdCA9PlxuICB+fihyZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiAtIGNvbnRhaW5lclJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gICAgXG5leHBvcnQgY29uc3QgYm90dG9tQm90dG9tID0gKGNvbnRhaW5lclJlY3QsIGNvbnRhaW5lcikgPT4gcmVjdCA9PlxuICB+fihyZWN0LmJvdHRvbSAtIGNvbnRhaW5lclJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gIFxuZXhwb3J0IGNvbnN0IGJvdHRvbVRvcCA9IGNvbnRhaW5lclJlY3QgPT4gcmVjdCA9PlxuICB+fihyZWN0LmJvdHRvbSAtIGNvbnRhaW5lclJlY3QudG9wKTtcblxuZXhwb3J0IGNvbnN0IGJvdHRvbUNlbnRlciA9IChjb250YWluZXJSZWN0LCBjb250YWluZXIpID0+IHJlY3QgPT5cbiAgfn4ocmVjdC5ib3R0b20gLSBjb250YWluZXJSZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyKTtcblxuZXhwb3J0IGNvbnN0IGdldERvY3VtZW50UmVjdCA9IGRvY3VtZW50UmVjdCA9PiBkb2N1bWVudFJlY3Q7XG5leHBvcnQgY29uc3QgZ2V0RG9jdW1lbnRFbGVtZW50ID0gKF8sZG9jdW1lbnRFbGVtZW50KSA9PiBkb2N1bWVudEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgY2FsY3VsYXRlU2Nyb2xsWSA9ICh7dG9wfSkgPT4gLXRvcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90cmFja2luZy1mb3JtdWxhcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=