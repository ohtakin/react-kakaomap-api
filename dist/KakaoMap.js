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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9LYWthb01hcC5qcyJdLCJuYW1lcyI6WyJNYXBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiS2FrYW9NYXAiLCJtYXAiLCJrYWthbyIsInByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImFkZFpvb21Db250cm9sIiwiem9vbSIsImFkZENvbnRyb2wiLCJtYXBzIiwiWm9vbUNvbnRyb2wiLCJDb250cm9sUG9zaXRpb24iLCJhZGRNYXBUeXBlQ29udHJvbCIsIm1hcFR5cGUiLCJNYXBUeXBlQ29udHJvbCIsInNldExhdExuZ0JvdW5kcyIsImJvdW5kcyIsImxhdExuZ0JvdW5kcyIsIkxhdExuZ0JvdW5kcyIsImZvckVhY2giLCJleHRlbmQiLCJMYXRMbmciLCJiIiwibGF0IiwibG5nIiwic2V0Qm91bmRzIiwiaGFuZGxlTG9hZGVkIiwib25ab29tQ2hhbmciLCJvcHRpb25zIiwibGV2ZWwiLCJub2RlIiwiTWFwIiwiY2VudGVyIiwiem9vbUNoYW5nZSIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsa0NBQWFDLGdCQUFNQyxhQUFOLENBQW9CLEVBQXBCLENBQW5COztBQUVQLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxRQUFTO0FBQUEsa0JBQ0UscUJBQVM7QUFDakNDLFNBQUssSUFENEI7QUFFakNDLFdBQU9DLE1BQU1EO0FBRm9CLEdBQVQsQ0FERjtBQUFBO0FBQUEsTUFDakJFLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFNeEIsTUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDTCxHQUFELEVBQU1DLEtBQU4sRUFBYUssSUFBYixFQUFzQjtBQUMzQyxRQUFJQSxJQUFKLEVBQVU7QUFDUk4sVUFBSU8sVUFBSixDQUNFLElBQUlOLE1BQU1PLElBQU4sQ0FBV0MsV0FBZixFQURGLEVBRUVSLE1BQU1PLElBQU4sQ0FBV0UsZUFB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ZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgS2FrYW9NYXAgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBtYXA6IG51bGwsXHJcbiAgICBrYWthbzogcHJvcHMua2FrYW9cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWRkWm9vbUNvbnRyb2wgPSAobWFwLCBrYWthbywgem9vbSkgPT4ge1xyXG4gICAgaWYgKHpvb20pIHtcclxuICAgICAgbWFwLmFkZENvbnRyb2woXHJcbiAgICAgICAgbmV3IGtha2FvLm1hcHMuWm9vbUNvbnRyb2woKSxcclxuICAgICAgICBrYWthby5tYXBzLkNvbnRyb2xQb3NpdGlvblt6b29tXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE1hcFR5cGVDb250cm9sID0gKG1hcCwga2FrYW8sIG1hcFR5cGUpID0+IHtcclxuICAgIGlmIChtYXBUeXBlKSB7XHJcbiAgICAgIG1hcC5hZGRDb250cm9sKFxyXG4gICAgICAgIG5ldyBrYWthby5tYXBzLk1hcFR5cGVDb250cm9sKCksXHJcbiAgICAgICAga2FrYW8ubWFwcy5Db250cm9sUG9zaXRpb25bbWFwVHlwZV1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRMYXRMbmdCb3VuZHMgPSAobWFwLCBrYWthbywgYm91bmRzKSA9PiB7XHJcbiAgICBpZiAoYm91bmRzKSB7XHJcbiAgICAgIGNvbnN0IGxhdExuZ0JvdW5kcyA9IG5ldyBrYWthby5tYXBzLkxhdExuZ0JvdW5kcygpO1xyXG4gICAgICBib3VuZHMuZm9yRWFjaChiID0+IHtcclxuICAgICAgICBsYXRMbmdCb3VuZHMuZXh0ZW5kKG5ldyBrYWthby5tYXBzLkxhdExuZyhiLmxhdCwgYi5sbmcpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG1hcC5zZXRCb3VuZHMobGF0TG5nQm91bmRzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2FkZWQgPSB1c2VDYWxsYmFjayhub2RlID0+IHtcclxuICAgIGNvbnN0IHsga2FrYW8sIG9uWm9vbUNoYW5nIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgbGF0LCBsbmcsIGxldmVsLCB6b29tLCBtYXBUeXBlLCBib3VuZHMgfSA9IHByb3BzLm9wdGlvbnM7XHJcbiAgICBpZiAoc3RhdGUubWFwIHx8IG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcCA9IG5ldyBrYWthby5tYXBzLk1hcChub2RlLCB7XHJcbiAgICAgIGxldmVsOiBsZXZlbCB8fCA5LFxyXG4gICAgICBjZW50ZXI6IG5ldyBrYWthby5tYXBzLkxhdExuZyhsYXQsIGxuZylcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFpvb21Db250cm9sKG1hcCwga2FrYW8sIHpvb20pO1xyXG4gICAgYWRkTWFwVHlwZUNvbnRyb2wobWFwLCBrYWthbywgbWFwVHlwZSk7XHJcbiAgICBzZXRMYXRMbmdCb3VuZHMobWFwLCBrYWthbywgYm91bmRzKTtcclxuXHJcbiAgICBjb25zdCB6b29tQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAob25ab29tQ2hhbmcpIG9uWm9vbUNoYW5nKG1hcCk7XHJcbiAgICB9O1xyXG4gICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsIFwiem9vbV9jaGFuZ2VkXCIsIHpvb21DaGFuZ2UpO1xyXG5cclxuICAgIHNldFN0YXRlKHsgbWFwLCBrYWthbyB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciBpZD1cIm1hcC1jYW52YXNcIj5cclxuICAgICAgPFdyYXBwZXIgaWQ9XCJrYWthby1tYXBcIiByZWY9e2hhbmRsZUxvYWRlZH0+XHJcbiAgICAgICAge3N0YXRlLm1hcCA9PT0gbnVsbCA/IG51bGwgOiAoXHJcbiAgICAgICAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L01hcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb01hcDtcclxuIl19