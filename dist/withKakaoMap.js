"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withKakaoMap = function withKakaoMap(BaseComponent) {
  return function (props) {
    var _useState = (0, _react.useState)({
      kakaoLoaded: false,
      kakao: null
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    (0, _react.useEffect)(function () {
      var kakao = window.kakao;
      kakao.maps.load(function () {
        setState({ kakaoLoaded: true, kakao: kakao });
      });
    }, []);

    if (state.kakaoLoaded) {
      return _react2.default.createElement(BaseComponent, _extends({}, props, { kakao: state.kakao }));
    } else {
      return _react2.default.createElement("div", null);
    }
  };
};

exports.default = withKakaoMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoS2FrYW9NYXAuanMiXSwibmFtZXMiOlsid2l0aEtha2FvTWFwIiwia2FrYW9Mb2FkZWQiLCJrYWthbyIsInN0YXRlIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJtYXBzIiwibG9hZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxnQkFBaUI7QUFDcEMsU0FBTyxpQkFBUztBQUFBLG9CQUNZLHFCQUFTO0FBQ2pDQyxtQkFBYSxLQURvQjtBQUVqQ0MsYUFBTztBQUYwQixLQUFULENBRFo7QUFBQTtBQUFBLFFBQ1BDLEtBRE87QUFBQSxRQUNBQyxRQURBOztBQU1kLDBCQUFVLFlBQU07QUFDZCxVQUFNRixRQUFRRyxPQUFPSCxLQUFyQjtBQUNBQSxZQUFNSSxJQUFOLENBQVdDLElBQVgsQ0FBZ0IsWUFBTTtBQUNwQkgsaUJBQVMsRUFBRUgsYUFBYSxJQUFmLEVBQXFCQyxZQUFyQixFQUFUO0FBQ0QsT0FGRDtBQUdELEtBTEQsRUFLRyxFQUxIOztBQU9BLFFBQUlDLE1BQU1GLFdBQVYsRUFBdUI7QUFDckIsYUFBTyw4QkFBQyxhQUFELGVBQW1CTyxLQUFuQixJQUEwQixPQUFPTCxNQUFNRCxLQUF2QyxJQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTywwQ0FBUDtBQUNEO0FBQ0YsR0FsQkQ7QUFtQkQsQ0FwQkQ7O2tCQXNCZUYsWSIsImZpbGUiOiJ3aXRoS2FrYW9NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgd2l0aEtha2FvTWFwID0gQmFzZUNvbXBvbmVudCA9PiB7XHJcbiAgcmV0dXJuIHByb3BzID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICBrYWthb0xvYWRlZDogZmFsc2UsXHJcbiAgICAgIGtha2FvOiBudWxsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBrYWthbyA9IHdpbmRvdy5rYWthbztcclxuICAgICAga2FrYW8ubWFwcy5sb2FkKCgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7IGtha2FvTG9hZGVkOiB0cnVlLCBrYWthbyB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmtha2FvTG9hZGVkKSB7XHJcbiAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IGtha2FvPXtzdGF0ZS5rYWthb30gLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPGRpdiAvPjtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEtha2FvTWFwO1xyXG4iXX0=