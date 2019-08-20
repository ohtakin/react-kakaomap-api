"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KakaoMap = require("./KakaoMap");

var _Marker = require("./Marker");

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoWindoWithMarker = function InfoWindoWithMarker(props) {
  var _useContext = (0, _react.useContext)(_KakaoMap.MapContext),
      kakao = _useContext.kakao,
      map = _useContext.map;

  var _useState = (0, _react.useState)({
    infoWindow: null,
    kakao: kakao,
    map: map
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onMouseOver = function onMouseOver(marker) {
    var infoWindow = state.infoWindow;

    infoWindow.open(map, marker);
  };

  var onMouseOut = function onMouseOut(marker) {
    var infoWindow = state.infoWindow;

    infoWindow.close(map);
  };

  (0, _react.useEffect)(function () {
    var _props$options = props.options,
        lat = _props$options.lat,
        lng = _props$options.lng;

    var content = document.createElement("div");
    content.className = props.className;
    content.innerHTML = props.options.content;
    var infoWindow = new kakao.maps.InfoWindow({
      position: new kakao.maps.LatLng(lat, lng),
      content: content
    });
    setState(_extends({}, state, { infoWindow: infoWindow }));
    return function () {
      infoWindow.setMap(null);
    };
  }, []);

  return state.infoWindow === null ? null : _react2.default.createElement(_Marker2.default, {
    delay: props.delay,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    options: props.options
  });
};

exports.default = InfoWindoWithMarker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmZvV2luZG9XaXRoTWFya2VyLmpzIl0sIm5hbWVzIjpbIkluZm9XaW5kb1dpdGhNYXJrZXIiLCJNYXBDb250ZXh0Iiwia2FrYW8iLCJtYXAiLCJpbmZvV2luZG93Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTW91c2VPdmVyIiwib3BlbiIsIm1hcmtlciIsIm9uTW91c2VPdXQiLCJjbG9zZSIsInByb3BzIiwib3B0aW9ucyIsImxhdCIsImxuZyIsImNvbnRlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJtYXBzIiwiSW5mb1dpbmRvdyIsInBvc2l0aW9uIiwiTGF0TG5nIiwic2V0TWFwIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsU0FBdEJBLG1CQUFzQixRQUFTO0FBQUEsb0JBQ1osdUJBQVdDLG9CQUFYLENBRFk7QUFBQSxNQUMzQkMsS0FEMkIsZUFDM0JBLEtBRDJCO0FBQUEsTUFDcEJDLEdBRG9CLGVBQ3BCQSxHQURvQjs7QUFBQSxrQkFFVCxxQkFBUztBQUNqQ0MsZ0JBQVksSUFEcUI7QUFFakNGLGdCQUZpQztBQUdqQ0M7QUFIaUMsR0FBVCxDQUZTO0FBQUE7QUFBQSxNQUU1QkUsS0FGNEI7QUFBQSxNQUVyQkMsUUFGcUI7O0FBUW5DLE1BQU1DLGNBQWMsU0FBZEEsV0FBYyxTQUFVO0FBQUEsUUFDcEJILFVBRG9CLEdBQ0xDLEtBREssQ0FDcEJELFVBRG9COztBQUU1QkEsZUFBV0ksSUFBWCxDQUFnQkwsR0FBaEIsRUFBcUJNLE1BQXJCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxhQUFhLFNBQWJBLFVBQWEsU0FBVTtBQUFBLFFBQ25CTixVQURtQixHQUNKQyxLQURJLENBQ25CRCxVQURtQjs7QUFFM0JBLGVBQVdPLEtBQVgsQ0FBaUJSLEdBQWpCO0FBQ0QsR0FIRDs7QUFLQSx3QkFBVSxZQUFNO0FBQUEseUJBQ09TLE1BQU1DLE9BRGI7QUFBQSxRQUNOQyxHQURNLGtCQUNOQSxHQURNO0FBQUEsUUFDREMsR0FEQyxrQkFDREEsR0FEQzs7QUFFZCxRQUFNQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FGLFlBQVFHLFNBQVIsR0FBb0JQLE1BQU1PLFNBQTFCO0FBQ0FILFlBQVFJLFNBQVIsR0FBb0JSLE1BQU1DLE9BQU4sQ0FBY0csT0FBbEM7QUFDQSxRQUFNWixhQUFhLElBQUlGLE1BQU1tQixJQUFOLENBQVdDLFVBQWYsQ0FBMEI7QUFDM0NDLGdCQUFVLElBQUlyQixNQUFNbUIsSUFBTixDQUFXRyxNQUFmLENBQXNCVixHQUF0QixFQUEyQkMsR0FBM0IsQ0FEaUM7QUFFM0NDLGVBQVNBO0FBRmtDLEtBQTFCLENBQW5CO0FBSUFWLDBCQUFjRCxLQUFkLElBQXFCRCxzQkFBckI7QUFDQSxXQUFPLFlBQU07QUFDWEEsaUJBQVdxQixNQUFYLENBQWtCLElBQWxCO0FBQ0QsS0FGRDtBQUdELEdBYkQsRUFhRyxFQWJIOztBQWVBLFNBQU9wQixNQUFNRCxVQUFOLEtBQXFCLElBQXJCLEdBQTRCLElBQTVCLEdBQ0wsOEJBQUMsZ0JBQUQ7QUFDRSxXQUFPUSxNQUFNYyxLQURmO0FBRUUsaUJBQWFuQixXQUZmO0FBR0UsZ0JBQVlHLFVBSGQ7QUFJRSxhQUFTRSxNQUFNQztBQUpqQixJQURGO0FBUUQsQ0F6Q0Q7O2tCQTJDZWIsbUIiLCJmaWxlIjoiSW5mb1dpbmRvV2l0aE1hcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1hcENvbnRleHQgfSBmcm9tIFwiLi9LYWthb01hcFwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL01hcmtlclwiO1xyXG5cclxuY29uc3QgSW5mb1dpbmRvV2l0aE1hcmtlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGtha2FvLCBtYXAgfSA9IHVzZUNvbnRleHQoTWFwQ29udGV4dCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbmZvV2luZG93OiBudWxsLFxyXG4gICAga2FrYW8sXHJcbiAgICBtYXBcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU92ZXIgPSBtYXJrZXIgPT4ge1xyXG4gICAgY29uc3QgeyBpbmZvV2luZG93IH0gPSBzdGF0ZTtcclxuICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Nb3VzZU91dCA9IG1hcmtlciA9PiB7XHJcbiAgICBjb25zdCB7IGluZm9XaW5kb3cgfSA9IHN0YXRlO1xyXG4gICAgaW5mb1dpbmRvdy5jbG9zZShtYXApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBwcm9wcy5vcHRpb25zO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gcHJvcHMub3B0aW9ucy5jb250ZW50O1xyXG4gICAgY29uc3QgaW5mb1dpbmRvdyA9IG5ldyBrYWthby5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICBwb3NpdGlvbjogbmV3IGtha2FvLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcclxuICAgICAgY29udGVudDogY29udGVudFxyXG4gICAgfSk7XHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpbmZvV2luZG93IH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaW5mb1dpbmRvdy5zZXRNYXAobnVsbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHN0YXRlLmluZm9XaW5kb3cgPT09IG51bGwgPyBudWxsIDogKFxyXG4gICAgPE1hcmtlclxyXG4gICAgICBkZWxheT17cHJvcHMuZGVsYXl9XHJcbiAgICAgIG9uTW91c2VPdmVyPXtvbk1vdXNlT3Zlcn1cclxuICAgICAgb25Nb3VzZU91dD17b25Nb3VzZU91dH1cclxuICAgICAgb3B0aW9ucz17cHJvcHMub3B0aW9uc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9XaW5kb1dpdGhNYXJrZXI7XHJcbiJdfQ==