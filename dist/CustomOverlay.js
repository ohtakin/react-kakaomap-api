"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KakaoMap = require("./KakaoMap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomOverlay = function CustomOverlay(props) {
  var _useContext = (0, _react.useContext)(_KakaoMap.MapContext),
      kakao = _useContext.kakao,
      map = _useContext.map;

  var _useState = (0, _react.useState)({
    overlay: null,
    kakao: kakao,
    map: map
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    var _props$options = props.options,
        lat = _props$options.lat,
        lng = _props$options.lng;

    if (state.overlay !== null) return;
    var content = document.createElement("div");
    content.className = props.className;
    content.innerHTML = props.options.content;
    var overlay = new kakao.maps.CustomOverlay({
      position: new kakao.maps.LatLng(lat, lng),
      content: content
    });
    overlay.setMap(map);
    setState(_extends({}, state, { overlay: overlay }));
    return function () {
      overlay.setMap(null);
    };
  }, []);

  (0, _react.useEffect)(function () {
    var _props$options2 = props.options,
        lat = _props$options2.lat,
        lng = _props$options2.lng;
    var overlay = state.overlay;

    if (overlay === null) return;
    overlay.setPosition(new kakao.maps.LatLng(lat, lng));
  }, [props.options]);

  return null;
};

exports.default = CustomOverlay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DdXN0b21PdmVybGF5LmpzIl0sIm5hbWVzIjpbIkN1c3RvbU92ZXJsYXkiLCJNYXBDb250ZXh0Iiwia2FrYW8iLCJtYXAiLCJvdmVybGF5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInByb3BzIiwib3B0aW9ucyIsImxhdCIsImxuZyIsImNvbnRlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJtYXBzIiwicG9zaXRpb24iLCJMYXRMbmciLCJzZXRNYXAiLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLFFBQVM7QUFBQSxvQkFDTix1QkFBV0Msb0JBQVgsQ0FETTtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxHQURjLGVBQ2RBLEdBRGM7O0FBQUEsa0JBRUgscUJBQVM7QUFDakNDLGFBQVMsSUFEd0I7QUFFakNGLGdCQUZpQztBQUdqQ0M7QUFIaUMsR0FBVCxDQUZHO0FBQUE7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQVE3Qix3QkFBVSxZQUFNO0FBQUEseUJBQ09DLE1BQU1DLE9BRGI7QUFBQSxRQUNOQyxHQURNLGtCQUNOQSxHQURNO0FBQUEsUUFDREMsR0FEQyxrQkFDREEsR0FEQzs7QUFFZCxRQUFJTCxNQUFNRCxPQUFOLEtBQWtCLElBQXRCLEVBQTRCO0FBQzVCLFFBQU1PLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQUYsWUFBUUcsU0FBUixHQUFvQlAsTUFBTU8sU0FBMUI7QUFDQUgsWUFBUUksU0FBUixHQUFvQlIsTUFBTUMsT0FBTixDQUFjRyxPQUFsQztBQUNBLFFBQU1QLFVBQVUsSUFBSUYsTUFBTWMsSUFBTixDQUFXaEIsYUFBZixDQUE2QjtBQUMzQ2lCLGdCQUFVLElBQUlmLE1BQU1jLElBQU4sQ0FBV0UsTUFBZixDQUFzQlQsR0FBdEIsRUFBMkJDLEdBQTNCLENBRGlDO0FBRTNDQyxlQUFTQTtBQUZrQyxLQUE3QixDQUFoQjtBQUlBUCxZQUFRZSxNQUFSLENBQWVoQixHQUFmO0FBQ0FHLDBCQUFjRCxLQUFkLElBQXFCRCxnQkFBckI7QUFDQSxXQUFPLFlBQU07QUFDWEEsY0FBUWUsTUFBUixDQUFlLElBQWY7QUFDRCxLQUZEO0FBR0QsR0FmRCxFQWVHLEVBZkg7O0FBaUJBLHdCQUFVLFlBQU07QUFBQSwwQkFDT1osTUFBTUMsT0FEYjtBQUFBLFFBQ05DLEdBRE0sbUJBQ05BLEdBRE07QUFBQSxRQUNEQyxHQURDLG1CQUNEQSxHQURDO0FBQUEsUUFFTk4sT0FGTSxHQUVNQyxLQUZOLENBRU5ELE9BRk07O0FBR2QsUUFBSUEsWUFBWSxJQUFoQixFQUFzQjtBQUN0QkEsWUFBUWdCLFdBQVIsQ0FBb0IsSUFBSWxCLE1BQU1jLElBQU4sQ0FBV0UsTUFBZixDQUFzQlQsR0FBdEIsRUFBMkJDLEdBQTNCLENBQXBCO0FBQ0QsR0FMRCxFQUtHLENBQUNILE1BQU1DLE9BQVAsQ0FMSDs7QUFPQSxTQUFPLElBQVA7QUFDRCxDQWpDRDs7a0JBbUNlUixhIiwiZmlsZSI6IkN1c3RvbU92ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNYXBDb250ZXh0IH0gZnJvbSBcIi4vS2FrYW9NYXBcIjtcclxuXHJcbmNvbnN0IEN1c3RvbU92ZXJsYXkgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBrYWthbywgbWFwIH0gPSB1c2VDb250ZXh0KE1hcENvbnRleHQpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgb3ZlcmxheTogbnVsbCxcclxuICAgIGtha2FvLFxyXG4gICAgbWFwXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBwcm9wcy5vcHRpb25zO1xyXG4gICAgaWYgKHN0YXRlLm92ZXJsYXkgIT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IHByb3BzLm9wdGlvbnMuY29udGVudDtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcga2FrYW8ubWFwcy5DdXN0b21PdmVybGF5KHtcclxuICAgICAgcG9zaXRpb246IG5ldyBrYWthby5tYXBzLkxhdExuZyhsYXQsIGxuZyksXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcclxuICAgIH0pO1xyXG4gICAgb3ZlcmxheS5zZXRNYXAobWFwKTtcclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIG92ZXJsYXkgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvdmVybGF5LnNldE1hcChudWxsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJvcHMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgb3ZlcmxheSB9ID0gc3RhdGU7XHJcbiAgICBpZiAob3ZlcmxheSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgb3ZlcmxheS5zZXRQb3NpdGlvbihuZXcga2FrYW8ubWFwcy5MYXRMbmcobGF0LCBsbmcpKTtcclxuICB9LCBbcHJvcHMub3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbU92ZXJsYXk7XHJcbiJdfQ==