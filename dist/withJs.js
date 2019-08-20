"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _scriptjs = require("scriptjs");

var _scriptjs2 = _interopRequireDefault(_scriptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withJs = function withJs(url) {
  return function (BaseComponent) {
    return function (props) {
      var _useState = (0, _react.useState)({
        jsLoaded: false
      }),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

      var handleLoaded = function handleLoaded() {
        setState({ jsLoaded: true });
      };

      (0, _react.useEffect)(function () {
        (0, _scriptjs2.default)(url, handleLoaded);
      }, []);

      if (state.jsLoaded) {
        return _react2.default.createElement(BaseComponent, props);
      } else {
        return _react2.default.createElement("div", null);
      }
    };
  };
};

exports.default = withJs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoSnMuanMiXSwibmFtZXMiOlsid2l0aEpzIiwianNMb2FkZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlTG9hZGVkIiwidXJsIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FBTyx5QkFBaUI7QUFDckMsV0FBTyxpQkFBUztBQUFBLHNCQUNZLHFCQUFTO0FBQ2pDQyxrQkFBVTtBQUR1QixPQUFULENBRFo7QUFBQTtBQUFBLFVBQ1BDLEtBRE87QUFBQSxVQUNBQyxRQURBOztBQUtkLFVBQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCRCxpQkFBUyxFQUFFRixVQUFVLElBQVosRUFBVDtBQUNELE9BRkQ7O0FBSUEsNEJBQVUsWUFBTTtBQUNkLGdDQUFTSSxHQUFULEVBQWNELFlBQWQ7QUFDRCxPQUZELEVBRUcsRUFGSDs7QUFJQSxVQUFJRixNQUFNRCxRQUFWLEVBQW9CO0FBQ2xCLGVBQU8sOEJBQUMsYUFBRCxFQUFtQkssS0FBbkIsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sMENBQVA7QUFDRDtBQUNGLEtBbEJEO0FBbUJELEdBcEJjO0FBQUEsQ0FBZjs7a0JBc0JlTixNIiwiZmlsZSI6IndpdGhKcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzY3JpcHRqcyBmcm9tIFwic2NyaXB0anNcIjtcclxuXHJcbmNvbnN0IHdpdGhKcyA9IHVybCA9PiBCYXNlQ29tcG9uZW50ID0+IHtcclxuICByZXR1cm4gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGpzTG9hZGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9hZGVkID0gKCkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZSh7IGpzTG9hZGVkOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzY3JpcHRqcyh1cmwsIGhhbmRsZUxvYWRlZCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmpzTG9hZGVkKSB7XHJcbiAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxkaXYgLz47XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhKcztcclxuIl19