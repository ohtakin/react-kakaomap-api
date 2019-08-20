"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContext = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Wrapper = require("./Wrapper");

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapContext = exports.MapContext = _react2.default.createContext({});

var KakaoMap = function KakaoMap(props) {
  var _useState = (0, _react.useState)({
    map: null,
    kakao: props.kakao
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var addZoomControl = function addZoomControl(map, kakao, zoom) {
    if (zoom) {
      map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition[zoom]);
    }
  };

  var addMapTypeControl = function addMapTypeControl(map, kakao, mapType) {
    if (mapType) {
      map.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition[mapType]);
    }
  };

  var setLatLngBounds = function setLatLngBounds(map, kakao, bounds) {
    if (bounds) {
      var latLngBounds = new kakao.maps.LatLngBounds();
      bounds.forEach(function (b) {
        latLngBounds.extend(new kakao.maps.LatLng(b.lat, b.lng));
      });
      map.setBounds(latLngBounds);
    }
  };

  var handleLoaded = (0, _react.useCallback)(function (node) {
    var kakao = props.kakao,
        onZoomChang = props.onZoomChang;
    var _props$options = props.options,
        lat = _props$options.lat,
        lng = _props$options.lng,
        level = _props$options.level,
        zoom = _props$options.zoom,
        mapType = _props$options.mapType,
        bounds = _props$options.bounds;

    if (state.map || node === null) {
      return;
    }

    var map = new kakao.maps.Map(node, {
      level: level || 9,
      center: new kakao.maps.LatLng(lat, lng)
    });

    addZoomControl(map, kakao, zoom);
    addMapTypeControl(map, kakao, mapType);
    setLatLngBounds(map, kakao, bounds);

    var zoomChange = function zoomChange() {
      if (onZoomChang) onZoomChang(map);
    };
    kakao.maps.event.addListener(map, "zoom_changed", zoomChange);

    setState({ map: map, kakao: kakao });
    return function () {
      kakao.maps.event.removeListener(marker, "zoom_changed", zoomChange);
    };
  }, []);

  return _react2.default.createElement(
    _Wrapper2.default,
    { id: "map-canvas" },
    _react2.default.createElement(
      _Wrapper2.default,
      { id: "kakao-map", ref: handleLoaded },
      state.map === null ? null : _react2.default.createElement(
        MapContext.Provider,
        { value: state },
        props.children
      )
    )
  );
};

exports.default = KakaoMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9LYWthb01hcC5qcyJdLCJuYW1lcyI6WyJNYXBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiS2FrYW9NYXAiLCJtYXAiLCJrYWthbyIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFkZFpvb21Db250cm9sIiwiem9vbSIsImFkZENvbnRyb2wiLCJtYXBzIiwiWm9vbUNvbnRyb2wiLCJDb250cm9sUG9zaXRpb24iLCJhZGRNYXBUeXBlQ29udHJvbCIsIm1hcFR5cGUiLCJNYXBUeXBlQ29udHJvbCIsInNldExhdExuZ0JvdW5kcyIsImJvdW5kcyIsImxhdExuZ0JvdW5kcyIsIkxhdExuZ0JvdW5kcyIsImZvckVhY2giLCJleHRlbmQiLCJMYXRMbmciLCJiIiwibGF0IiwibG5nIiwic2V0Qm91bmRzIiwiaGFuZGxlTG9hZGVkIiwib25ab29tQ2hhbmciLCJvcHRpb25zIiwibGV2ZWwiLCJub2RlIiwiTWFwIiwiY2VudGVyIiwiem9vbUNoYW5nZSIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm1hcmtlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxrQ0FBYUMsZ0JBQU1DLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBbkI7O0FBRVAsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLFFBQVM7QUFBQSxrQkFDRSxxQkFBUztBQUNqQ0MsU0FBSyxJQUQ0QjtBQUVqQ0MsV0FBT0MsTUFBTUQ7QUFGb0IsR0FBVCxDQURGO0FBQUE7QUFBQSxNQUNqQkUsS0FEaUI7QUFBQSxNQUNWQyxRQURVOztBQU14QixNQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNMLEdBQUQsRUFBTUMsS0FBTixFQUFhSyxJQUFiLEVBQXNCO0FBQzNDLFFBQUlBLElBQUosRUFBVTtBQUNSTixVQUFJTyxVQUFKLENBQ0UsSUFBSU4sTUFBTU8sSUFBTixDQUFXQyxXQUFmLEVBREYs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cUIsT0FBT0csS0FBNUI7QUFDR0QsY0FBTW1DO0FBRFQ7QUFGSjtBQURGLEdBREY7QUFXRCxDQXhFRDs7a0JBMEVldEMsUSIsImZpbGUiOiJLYWthb01hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IEtha2FvTWFwID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbWFwOiBudWxsLFxyXG4gICAga2FrYW86IHByb3BzLmtha2FvXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFkZFpvb21Db250cm9sID0gKG1hcCwga2FrYW8sIHpvb20pID0+IHtcclxuICAgIGlmICh6b29tKSB7XHJcbiAgICAgIG1hcC5hZGRDb250cm9sKFxyXG4gICAgICAgIG5ldyBrYWthby5tYXBzLlpvb21Db250cm9sKCksXHJcbiAgICAgICAga2FrYW8ubWFwcy5Db250cm9sUG9zaXRpb25bem9vbV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRNYXBUeXBlQ29udHJvbCA9IChtYXAsIGtha2FvLCBtYXBUeXBlKSA9PiB7XHJcbiAgICBpZiAobWFwVHlwZSkge1xyXG4gICAgICBtYXAuYWRkQ29udHJvbChcclxuICAgICAgICBuZXcga2FrYW8ubWFwcy5NYXBUeXBlQ29udHJvbCgpLFxyXG4gICAgICAgIGtha2FvLm1hcHMuQ29udHJvbFBvc2l0aW9uW21hcFR5cGVdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0TGF0TG5nQm91bmRzID0gKG1hcCwga2FrYW8sIGJvdW5kcykgPT4ge1xyXG4gICAgaWYgKGJvdW5kcykge1xyXG4gICAgICBjb25zdCBsYXRMbmdCb3VuZHMgPSBuZXcga2FrYW8ubWFwcy5MYXRMbmdCb3VuZHMoKTtcclxuICAgICAgYm91bmRzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgbGF0TG5nQm91bmRzLmV4dGVuZChuZXcga2FrYW8ubWFwcy5MYXRMbmcoYi5sYXQsIGIubG5nKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBtYXAuc2V0Qm91bmRzKGxhdExuZ0JvdW5kcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9hZGVkID0gdXNlQ2FsbGJhY2sobm9kZSA9PiB7XHJcbiAgICBjb25zdCB7IGtha2FvLCBvblpvb21DaGFuZyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IGxhdCwgbG5nLCBsZXZlbCwgem9vbSwgbWFwVHlwZSwgYm91bmRzIH0gPSBwcm9wcy5vcHRpb25zO1xyXG4gICAgaWYgKHN0YXRlLm1hcCB8fCBub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBuZXcga2FrYW8ubWFwcy5NYXAobm9kZSwge1xyXG4gICAgICBsZXZlbDogbGV2ZWwgfHwgOSxcclxuICAgICAgY2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcobGF0LCBsbmcpXHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRab29tQ29udHJvbChtYXAsIGtha2FvLCB6b29tKTtcclxuICAgIGFkZE1hcFR5cGVDb250cm9sKG1hcCwga2FrYW8sIG1hcFR5cGUpO1xyXG4gICAgc2V0TGF0TG5nQm91bmRzKG1hcCwga2FrYW8sIGJvdW5kcyk7XHJcblxyXG4gICAgY29uc3Qgem9vbUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKG9uWm9vbUNoYW5nKSBvblpvb21DaGFuZyhtYXApO1xyXG4gICAgfTtcclxuICAgIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCBcInpvb21fY2hhbmdlZFwiLCB6b29tQ2hhbmdlKTtcclxuXHJcbiAgICBzZXRTdGF0ZSh7IG1hcCwga2FrYW8gfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBrYWthby5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKG1hcmtlciwgXCJ6b29tX2NoYW5nZWRcIiwgem9vbUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyIGlkPVwibWFwLWNhbnZhc1wiPlxyXG4gICAgICA8V3JhcHBlciBpZD1cImtha2FvLW1hcFwiIHJlZj17aGFuZGxlTG9hZGVkfT5cclxuICAgICAgICB7c3RhdGUubWFwID09PSBudWxsID8gbnVsbCA6IChcclxuICAgICAgICAgIDxNYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvTWFwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvTWFwO1xyXG4iXX0=