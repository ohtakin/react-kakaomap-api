"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerClustererContext = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KakaoMap = require("./KakaoMap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerClustererContext = exports.MarkerClustererContext = _react2.default.createContext({});

var MarkerClusterer = function MarkerClusterer(props) {
  var _useContext = (0, _react.useContext)(_KakaoMap.MapContext),
      kakao = _useContext.kakao,
      map = _useContext.map;

  var _useState = (0, _react.useState)({
    clusterer: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    var options = props.options;

    var clusterer = new kakao.maps.MarkerClusterer(options);
    clusterer.setMap(map);
    kakao.maps.event.addListener(clusterer, "clustered", function () {});
    setState({ clusterer: clusterer });
    return function () {
      clusterer.setMap(null);
    };
  }, []);

  (0, _react.useEffect)(function () {
    var _props$options = props.options,
        gridSize = _props$options.gridSize,
        averageCenter = _props$options.averageCenter,
        minLevel = _props$options.minLevel,
        disableClickZoom = _props$options.disableClickZoom;
    var clusterer = state.clusterer;

    if (clusterer === null) return;
    if (gridSize) clusterer.setGridSize(gridSize);
    if (averageCenter) clusterer.setAverageCenter(averageCenter);
    if (minLevel) clusterer.setMinLevel(minLevel);
    if (disableClickZoom) clusterer.setDisableClickZoom(disableClickZoom);
  }, [props.options]);

  if (state.clusterer === null) {
    return null;
  } else {
    return _react2.default.createElement(
      MarkerClustererContext.Provider,
      { value: state },
      state.clusterer === null ? null : props.children
    );
  }
};

exports.default = MarkerClusterer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYXJrZXJDbHVzdGVyZXIuanMiXSwibmFtZXMiOlsiTWFya2VyQ2x1c3RlcmVyQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIk1hcmtlckNsdXN0ZXJlciIsIk1hcENvbnRleHQiLCJrYWthbyIsIm1hcCIsImNsdXN0ZXJlciIsInN0YXRlIiwic2V0U3RhdGUiLCJvcHRpb25zIiwicHJvcHMiLCJtYXBzIiwic2V0TWFwIiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsImdyaWRTaXplIiwiYXZlcmFnZUNlbnRlciIsIm1pbkxldmVsIiwiZGlzYWJsZUNsaWNrWm9vbSIsInNldEdyaWRTaXplIiwic2V0QXZlcmFnZUNlbnRlciIsInNldE1pbkxldmVsIiwic2V0RGlzYWJsZUNsaWNrWm9vbSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsMERBQXlCQyxnQkFBTUMsYUFBTixDQUFvQixFQUFwQixDQUEvQjs7QUFFUCxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFBQSxvQkFDUix1QkFBV0Msb0JBQVgsQ0FEUTtBQUFBLE1BQ3ZCQyxLQUR1QixlQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsR0FEZ0IsZUFDaEJBLEdBRGdCOztBQUFBLGtCQUVMLHFCQUFTO0FBQ2pDQyxlQUFXO0FBRHNCLEdBQVQsQ0FGSztBQUFBO0FBQUEsTUFFeEJDLEtBRndCO0FBQUEsTUFFakJDLFFBRmlCOztBQU0vQix3QkFBVSxZQUFNO0FBQUEsUUFDTkMsT0FETSxHQUNNQyxLQUROLENBQ05ELE9BRE07O0FBRWQsUUFBTUgsWUFBWSxJQUFJRixNQUFNTyxJQUFOLENBQVdULGVBQWYsQ0FBK0JPLE9BQS9CLENBQWxCO0FBQ0FILGNBQVVNLE1BQVYsQ0FBaUJQLEdBQWpCO0FBQ0FELFVBQU1PLElBQU4sQ0FBV0UsS0FBWCxDQUFpQkMsV0FBakIsQ0FBNkJSLFNBQTdCLEVBQXdDLFdBQXhDLEVBQXFELFlBQU0sQ0FBRSxDQUE3RDtBQUNBRSxhQUFTLEVBQUVGLG9CQUFGLEVBQVQ7QUFDQSxXQUFPLFlBQU07QUFDWEEsZ0JBQVVNLE1BQVYsQ0FBaUIsSUFBakI7QUFDRCxLQUZEO0FBR0QsR0FURCxFQVNHLEVBVEg7O0FBV0Esd0JBQVUsWUFBTTtBQUFBLHlCQU1WRixNQUFNRCxPQU5JO0FBQUEsUUFFWk0sUUFGWSxrQkFFWkEsUUFGWTtBQUFBLFFBR1pDLGFBSFksa0JBR1pBLGFBSFk7QUFBQSxRQUlaQyxRQUpZLGtCQUlaQSxRQUpZO0FBQUEsUUFLWkMsZ0JBTFksa0JBS1pBLGdCQUxZO0FBQUEsUUFPTlosU0FQTSxHQU9RQyxLQVBSLENBT05ELFNBUE07O0FBUWQsUUFBSUEsY0FBYyxJQUFsQixFQUF3QjtBQUN4QixRQUFJUyxRQUFKLEVBQWNULFVBQVVhLFdBQVYsQ0FBc0JKLFFBQXRCO0FBQ2QsUUFBSUMsYUFBSixFQUFtQlYsVUFBVWMsZ0JBQVYsQ0FBMkJKLGFBQTNCO0FBQ25CLFFBQUlDLFFBQUosRUFBY1gsVUFBVWUsV0FBVixDQUFzQkosUUFBdEI7QUFDZCxRQUFJQyxnQkFBSixFQUFzQlosVUFBVWdCLG1CQUFWLENBQThCSixnQkFBOUI7QUFDdkIsR0FiRCxFQWFHLENBQUNSLE1BQU1ELE9BQVAsQ0FiSDs7QUFlQSxNQUFJRixNQUFNRCxTQUFOLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQ0U7QUFBQyw0QkFBRCxDQUF3QixRQUF4QjtBQUFBLFFBQWlDLE9BQU9DLEtBQXhDO0FBQ0dBLFlBQU1ELFNBQU4sS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsR0FBa0NJLE1BQU1hO0FBRDNDLEtBREY7QUFLRDtBQUNGLENBekNEOztrQkEyQ2VyQixlIiwiZmlsZSI6Ik1hcmtlckNsdXN0ZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1hcENvbnRleHQgfSBmcm9tIFwiLi9LYWthb01hcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtlckNsdXN0ZXJlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IE1hcmtlckNsdXN0ZXJlciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGtha2FvLCBtYXAgfSA9IHVzZUNvbnRleHQoTWFwQ29udGV4dCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBjbHVzdGVyZXI6IG51bGxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbHVzdGVyZXIgPSBuZXcga2FrYW8ubWFwcy5NYXJrZXJDbHVzdGVyZXIob3B0aW9ucyk7XHJcbiAgICBjbHVzdGVyZXIuc2V0TWFwKG1hcCk7XHJcbiAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGNsdXN0ZXJlciwgXCJjbHVzdGVyZWRcIiwgKCkgPT4ge30pO1xyXG4gICAgc2V0U3RhdGUoeyBjbHVzdGVyZXIgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbHVzdGVyZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGdyaWRTaXplLFxyXG4gICAgICBhdmVyYWdlQ2VudGVyLFxyXG4gICAgICBtaW5MZXZlbCxcclxuICAgICAgZGlzYWJsZUNsaWNrWm9vbVxyXG4gICAgfSA9IHByb3BzLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IGNsdXN0ZXJlciB9ID0gc3RhdGU7XHJcbiAgICBpZiAoY2x1c3RlcmVyID09PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAoZ3JpZFNpemUpIGNsdXN0ZXJlci5zZXRHcmlkU2l6ZShncmlkU2l6ZSk7XHJcbiAgICBpZiAoYXZlcmFnZUNlbnRlcikgY2x1c3RlcmVyLnNldEF2ZXJhZ2VDZW50ZXIoYXZlcmFnZUNlbnRlcik7XHJcbiAgICBpZiAobWluTGV2ZWwpIGNsdXN0ZXJlci5zZXRNaW5MZXZlbChtaW5MZXZlbCk7XHJcbiAgICBpZiAoZGlzYWJsZUNsaWNrWm9vbSkgY2x1c3RlcmVyLnNldERpc2FibGVDbGlja1pvb20oZGlzYWJsZUNsaWNrWm9vbSk7XHJcbiAgfSwgW3Byb3BzLm9wdGlvbnNdKTtcclxuXHJcbiAgaWYgKHN0YXRlLmNsdXN0ZXJlciA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNYXJrZXJDbHVzdGVyZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAge3N0YXRlLmNsdXN0ZXJlciA9PT0gbnVsbCA/IG51bGwgOiBwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9NYXJrZXJDbHVzdGVyZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXJDbHVzdGVyZXI7XHJcbiJdfQ==