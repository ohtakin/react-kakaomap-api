"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KakaoMap = require("./KakaoMap");

var _rxjs = require("rxjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Polyline = function Polyline(props) {
  var _useContext = (0, _react.useContext)(_KakaoMap.MapContext),
      kakao = _useContext.kakao,
      map = _useContext.map;

  var _useState = (0, _react.useState)({
    polyline: null,
    kakao: kakao,
    map: map
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var delayObservable = function delayObservable(path, delay) {
    return new _rxjs.Observable(function (observer) {
      if (delay) {
        map.setDraggable(false);
        path.forEach(function (p, index) {
          setTimeout(function () {
            observer.next(path.slice(0, index));
            if (index + 1 === path.length) observer.complete();
          }, delay * index);
        });
      } else {
        observer.next(path);
        observer.complete();
      }
    });
  };

  (0, _react.useEffect)(function () {
    var options = props.options;

    var polyline = new kakao.maps.Polyline(_extends({}, options));
    setState(_extends({}, state, { polyline: polyline }));
    return function () {
      polyline.setMap(null);
    };
  }, []);

  (0, _react.useEffect)(function () {
    var options = props.options,
        delay = props.delay,
        bounds = props.bounds;

    var polyline = state.polyline;
    if (polyline === null) return;

    var path = options.path.map(function (p) {
      var lat = p.lat,
          lng = p.lng;

      return new kakao.maps.LatLng(lat, lng);
    });

    if (bounds === true) {
      var latLngBounds = new kakao.maps.LatLngBounds();
      Object.values(path).forEach(function (b) {
        latLngBounds.extend(b);
      });
      map.setBounds(latLngBounds);
    } else if (bounds === false) {
      map.setCenter(Object.values(path)[0]);
    }
    var subscription = delayObservable(path, delay).subscribe({
      next: function next(p) {
        polyline.setPath(p);
        polyline.setMap(map);
      },
      error: function error(err) {},
      complete: function complete() {
        map.setDraggable(true);
      }
    });

    setState(_extends({}, state, { polyline: polyline }));
    return function () {
      subscription.unsubscribe();
    };
  }, [state.polyline, props.options.path]);

  return null;
};

exports.default = Polyline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb2x5bGluZS5qcyJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIk1hcENvbnRleHQiLCJrYWthbyIsIm1hcCIsInBvbHlsaW5lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRlbGF5T2JzZXJ2YWJsZSIsInBhdGgiLCJkZWxheSIsIk9ic2VydmFibGUiLCJzZXREcmFnZ2FibGUiLCJmb3JFYWNoIiwicCIsImluZGV4Iiwic2V0VGltZW91dCIsIm9ic2VydmVyIiwibmV4dCIsInNsaWNlIiwibGVuZ3RoIiwiY29tcGxldGUiLCJvcHRpb25zIiwicHJvcHMiLCJtYXBzIiwic2V0TWFwIiwiYm91bmRzIiwibGF0IiwibG5nIiwiTGF0TG5nIiwibGF0TG5nQm91bmRzIiwiTGF0TG5nQm91bmRzIiwiT2JqZWN0IiwidmFsdWVzIiwiZXh0ZW5kIiwiYiIsInNldEJvdW5kcyIsInNldENlbnRlciIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInNldFBhdGgiLCJlcnJvciIsImVyciIsInVuc3Vic2NyaWJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxRQUFTO0FBQUEsb0JBQ0QsdUJBQVdDLG9CQUFYLENBREM7QUFBQSxNQUNoQkMsS0FEZ0IsZUFDaEJBLEtBRGdCO0FBQUEsTUFDVEMsR0FEUyxlQUNUQSxHQURTOztBQUFBLGtCQUVFLHFCQUFTO0FBQ2pDQyxjQUFVLElBRHVCO0FBRWpDRixnQkFGaUM7QUFHakNDO0FBSGlDLEdBQVQsQ0FGRjtBQUFBO0FBQUEsTUFFakJFLEtBRmlCO0FBQUEsTUFFVkMsUUFGVTs7QUFReEIsTUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkMsV0FBTyxJQUFJQyxnQkFBSixDQUFlLG9CQUFZO0FBQ2hDLFVBQUlELEtBQUosRUFBVztBQUNUTixZQUFJUSxZQUFKLENBQWlCLEtBQWpC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b250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1hcENvbnRleHQgfSBmcm9tIFwiLi9LYWthb01hcFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmNvbnN0IFBvbHlsaW5lID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsga2FrYW8sIG1hcCB9ID0gdXNlQ29udGV4dChNYXBDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIHBvbHlsaW5lOiBudWxsLFxyXG4gICAga2FrYW8sXHJcbiAgICBtYXBcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGVsYXlPYnNlcnZhYmxlID0gKHBhdGgsIGRlbGF5KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICBpZiAoZGVsYXkpIHtcclxuICAgICAgICBtYXAuc2V0RHJhZ2dhYmxlKGZhbHNlKTtcclxuICAgICAgICBwYXRoLmZvckVhY2goKHAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChwYXRoLnNsaWNlKDAsIGluZGV4KSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IHBhdGgubGVuZ3RoKSBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfSwgZGVsYXkgKiBpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChwYXRoKTtcclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IGtha2FvLm1hcHMuUG9seWxpbmUoeyAuLi5vcHRpb25zIH0pO1xyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgcG9seWxpbmUgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwb2x5bGluZS5zZXRNYXAobnVsbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucywgZGVsYXksIGJvdW5kcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBwb2x5bGluZSA9IHN0YXRlLnBvbHlsaW5lO1xyXG4gICAgaWYgKHBvbHlsaW5lID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IG9wdGlvbnMucGF0aC5tYXAocCA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHA7XHJcbiAgICAgIHJldHVybiBuZXcga2FrYW8ubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGJvdW5kcyA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBsYXRMbmdCb3VuZHMgPSBuZXcga2FrYW8ubWFwcy5MYXRMbmdCb3VuZHMoKTtcclxuICAgICAgT2JqZWN0LnZhbHVlcyhwYXRoKS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIGxhdExuZ0JvdW5kcy5leHRlbmQoYik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBtYXAuc2V0Qm91bmRzKGxhdExuZ0JvdW5kcyk7XHJcbiAgICB9IGVsc2UgaWYgKGJvdW5kcyA9PT0gZmFsc2UpIHtcclxuICAgICAgbWFwLnNldENlbnRlcihPYmplY3QudmFsdWVzKHBhdGgpWzBdKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGRlbGF5T2JzZXJ2YWJsZShwYXRoLCBkZWxheSkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dChwKSB7XHJcbiAgICAgICAgcG9seWxpbmUuc2V0UGF0aChwKTtcclxuICAgICAgICBwb2x5bGluZS5zZXRNYXAobWFwKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IoZXJyKSB7fSxcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgbWFwLnNldERyYWdnYWJsZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgcG9seWxpbmUgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgfSwgW3N0YXRlLnBvbHlsaW5lLCBwcm9wcy5vcHRpb25zLnBhdGhdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2x5bGluZTtcclxuIl19