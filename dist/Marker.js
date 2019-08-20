"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KakaoMap = require("./KakaoMap");

var _MarkerClusterer = require("./MarkerClusterer");

var _rxjs = require("rxjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function Marker(props) {
  var _useContext = (0, _react.useContext)(_KakaoMap.MapContext),
      kakao = _useContext.kakao,
      map = _useContext.map;

  var _useContext2 = (0, _react.useContext)(_MarkerClusterer.MarkerClustererContext),
      clusterer = _useContext2.clusterer;

  var _useState = (0, _react.useState)({
    marker: null,
    kakao: kakao,
    map: map,
    clusterer: clusterer
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setMarkerImage = function setMarkerImage(marker, image) {
    var url = image.url,
        width = image.width,
        height = image.height;

    var markerImage = new kakao.maps.MarkerImage(url, new kakao.maps.Size(width, height));
    marker.setImage(markerImage);
  };

  var delayObservable = function delayObservable(delay) {
    return new _rxjs.Observable(function (observer) {
      setTimeout(function () {
        observer.next(delay);
        observer.complete();
      }, delay);
    });
  };

  (0, _react.useEffect)(function () {
    var onMouseOver = props.onMouseOver,
        onMouseOut = props.onMouseOut,
        options = props.options,
        delay = props.delay;
    var lat = options.lat,
        lng = options.lng,
        image = options.image;

    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng)
    });
    if (image) setMarkerImage(marker, image);

    var subscription = delayObservable(delay ? delay : 0).subscribe({
      next: function next(x) {},
      error: function error(err) {},
      complete: function complete() {
        clusterer ? clusterer.addMarker(marker) : marker.setMap(map);
      }
    });

    var mouseOver = function mouseOver() {
      if (onMouseOver) onMouseOver(marker);
    };
    var mouseOut = function mouseOut() {
      if (onMouseOut) onMouseOut(marker);
    };
    kakao.maps.event.addListener(marker, "mouseover", mouseOver);
    kakao.maps.event.addListener(marker, "mouseout", mouseOut);

    setState(_extends({}, state, { marker: marker }));

    return function () {
      subscription.unsubscribe();
      marker.setMap(null);
      kakao.maps.event.removeListener(marker, "mouseover", mouseOver);
      kakao.maps.event.removeListener(marker, "mouseout", mouseOut);
    };
  }, []);

  (0, _react.useEffect)(function () {
    var _props$options = props.options,
        lat = _props$options.lat,
        lng = _props$options.lng;
    var marker = state.marker;

    if (marker === null) return;
    var position = new kakao.maps.LatLng(lat, lng);
    marker.setPosition(position);
  }, [props.options.lat, props.options.lng]);

  (0, _react.useEffect)(function () {
    var image = props.options.image;
    var marker = state.marker;

    if (marker === null || image === null) return;
    if (image) setMarkerImage(marker, image);
  }, [props.options.image]);

  return null;
};

exports.default = Marker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYXJrZXIuanMiXSwibmFtZXMiOlsiTWFya2VyIiwiTWFwQ29udGV4dCIsImtha2FvIiwibWFwIiwiTWFya2VyQ2x1c3RlcmVyQ29udGV4dCIsImNsdXN0ZXJlciIsIm1hcmtlciIsInN0YXRlIiwic2V0U3RhdGUiLCJzZXRNYXJrZXJJbWFnZSIsImltYWdlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJrZXJJbWFnZSIsIm1hcHMiLCJNYXJrZXJJbWFnZSIsIlNpemUiLCJzZXRJbWFnZSIsImRlbGF5T2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJzZXRUaW1lb3V0Iiwib2JzZXJ2ZXIiLCJuZXh0IiwiZGVsYXkiLCJjb21wbGV0ZSIsIm9uTW91c2VPdmVyIiwicHJvcHMiLCJvbk1vdXNlT3V0Iiwib3B0aW9ucyIsImxhdCIsImxuZyIsInBvc2l0aW9uIiwiTGF0TG5nIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwieCIsImVycm9yIiwiZXJyIiwiYWRkTWFya2VyIiwic2V0TWFwIiwibW91c2VPdmVyIiwibW91c2VPdXQiLCJldmVudCIsImFkZExpc3RlbmVyIiwidW5zdWJzY3JpYmUiLCJyZW1vdmVMaXN0ZW5lciIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxRQUFTO0FBQUEsb0JBQ0MsdUJBQVdDLG9CQUFYLENBREQ7QUFBQSxNQUNkQyxLQURjLGVBQ2RBLEtBRGM7QUFBQSxNQUNQQyxHQURPLGVBQ1BBLEdBRE87O0FBQUEscUJBRUEsdUJBQVdDLHVDQUFYLENBRkE7QUFBQSxNQUVkQyxTQUZjLGdCQUVkQSxTQUZjOztBQUFBLGtCQUdJLHFCQUFTO0FBQ2pDQyxZQUFRLElBRHlCO0FBRWpDSixnQkFGaUM7QUFHakNDLFlBSGlDO0FBSWpDRTtBQUppQyxHQUFULENBSEo7QUFBQTtBQUFBLE1BR2ZFLEtBSGU7QUFBQSxNQUdSQyxRQUhROztBQVV0QixNQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNILE1BQUQsRUFBU0ksS0FBVCxFQUFtQjtBQUFBLFFBQ2hDQyxHQURnQyxHQUNURCxLQURTLENBQ2hDQyxHQURnQztBQUFBLFFBQzNCQyxLQUQyQixHQUNURixLQURTLENBQzNCRSxLQUQyQjtBQUFBLFFBQ3BCQyxNQURvQixHQUNUSCxLQURTLENBQ3BCRyxNQURvQjs7QUFFeEMsUUFBTUMsY0FBYyxJQUFJWixNQUFNYSxJQUFOLENBQVdDLFdBQWYsQ0FDbEJMLEdBRGtCLEVBRWxCLElBQUlULE1BQU1hLElBQU4sQ0FBV0UsSUFBZixDQUFvQkwsS0FBcEIsRUFBMkJDLE1BQTNCLENBRmtCLENBQXBCO0FBSUFQLFdBQU9ZLFFBQVAsQ0FBZ0JKLFdBQWhCO0FBQ0QsR0FQRDs7QUFTQSxNQUFNSyxrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDL0IsV0FBTyxJQUFJQyxnQkFBSixDQUFlLG9CQUFZO0FBQ2hDQyxpQkFBVyxZQUFNO0FBQ2ZDLGlCQUFTQyxJQUFULENBQWNDLEtBQWQ7QUFDQUYsaUJBQVNHLFFBQVQ7QUFDRCxPQUhELEVBR0dELEtBSEg7QUFJRCxLQUxNLENBQVA7QUFNRCxHQVBEOztBQVNBLHdCQUFVLFlBQU07QUFBQSxRQUNORSxXQURNLEdBQ3NDQyxLQUR0QyxDQUNORCxXQURNO0FBQUEsUUFDT0UsVUFEUCxHQUNzQ0QsS0FEdEMsQ0FDT0MsVUFEUDtBQUFBLFFBQ21CQyxPQURuQixHQUNzQ0YsS0FEdEMsQ0FDbUJFLE9BRG5CO0FBQUEsUUFDNEJMLEtBRDVCLEdBQ3NDRyxLQUR0QyxDQUM0QkgsS0FENUI7QUFBQSxRQUVOTSxHQUZNLEdBRWNELE9BRmQsQ0FFTkMsR0FGTTtBQUFBLFFBRURDLEdBRkMsR0FFY0YsT0FGZCxDQUVERSxHQUZDO0FBQUEsUUFFSXJCLEtBRkosR0FFY21CLE9BRmQsQ0FFSW5CLEtBRko7O0FBR2QsUUFBTUosU0FBUyxJQUFJSixNQUFNYSxJQUFOLENBQVdmLE1BQWYsQ0FBc0I7QUFDbkNnQyxnQkFBVSxJQUFJOUIsTUFBTWEsSUFBTixDQUFXa0IsTUFBZixDQUFzQkgsR0FBdEIsRUFBMkJDLEdBQTNCO0FBRHlCLEtBQXRCLENBQWY7QUFHQSxRQUFJckIsS0FBSixFQUFXRCxlQUFlSCxNQUFmLEVBQXVCSSxLQUF2Qjs7QUFFWCxRQUFNd0IsZUFBZWYsZ0JBQWdCSyxRQUFRQSxLQUFSLEdBQWdCLENBQWhDLEVBQW1DVyxTQUFuQyxDQUE2QztBQUNoRVosVUFEZ0UsZ0JBQzNEYSxDQUQyRCxFQUN4RCxDQUFFLENBRHNEO0FBRWhFQyxXQUZnRSxpQkFFMURDLEdBRjBELEVBRXJELENBQUUsQ0FGbUQ7QUFHaEViLGNBSGdFLHNCQUdyRDtBQUNUcEIsb0JBQVlBLFVBQVVrQyxTQUFWLENBQW9CakMsTUFBcEIsQ0FBWixHQUEwQ0EsT0FBT2tDLE1BQVAsQ0FBY3JDLEdBQWQsQ0FBMUM7QUFDRDtBQUwrRCxLQUE3QyxDQUFyQjs7QUFRQSxRQUFNc0MsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDdEIsVUFBSWYsV0FBSixFQUFpQkEsWUFBWXBCLE1BQVo7QUFDbEIsS0FGRDtBQUdBLFFBQU1vQyxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUFJZCxVQUFKLEVBQWdCQSxXQUFXdEIsTUFBWDtBQUNqQixLQUZEO0FBR0FKLFVBQU1hLElBQU4sQ0FBVzRCLEtBQVgsQ0FBaUJDLFdBQWpCLENBQTZCdEMsTUFBN0IsRUFBcUMsV0FBckMsRUFBa0RtQyxTQUFsRDtBQUNBdkMsVUFBTWEsSUFBTixDQUFXNEIsS0FBWCxDQUFpQkMsV0FBakIsQ0FBNkJ0QyxNQUE3QixFQUFxQyxVQUFyQyxFQUFpRG9DLFFBQWpEOztBQUVBbEMsMEJBQWNELEtBQWQsSUFBcUJELGNBQXJCOztBQUVBLFdBQU8sWUFBTTtBQUNYNEIsbUJBQWFXLFdBQWI7QUFDQXZDLGFBQU9rQyxNQUFQLENBQWMsSUFBZDtBQUNBdEMsWUFBTWEsSUFBTixDQUFXNEIsS0FBWCxDQUFpQkcsY0FBakIsQ0FBZ0N4QyxNQUFoQyxFQUF3QyxXQUF4QyxFQUFxRG1DLFNBQXJEO0FBQ0F2QyxZQUFNYSxJQUFOLENBQVc0QixLQUFYLENBQWlCRyxjQUFqQixDQUFnQ3hDLE1BQWhDLEVBQXdDLFVBQXhDLEVBQW9Eb0MsUUFBcEQ7QUFDRCxLQUxEO0FBTUQsR0FqQ0QsRUFpQ0csRUFqQ0g7O0FBbUNBLHdCQUFVLFlBQU07QUFBQSx5QkFDT2YsTUFBTUUsT0FEYjtBQUFBLFFBQ05DLEdBRE0sa0JBQ05BLEdBRE07QUFBQSxRQUNEQyxHQURDLGtCQUNEQSxHQURDO0FBQUEsUUFFTnpCLE1BRk0sR0FFS0MsS0FGTCxDQUVORCxNQUZNOztBQUdkLFFBQUlBLFdBQVcsSUFBZixFQUFxQjtBQUNyQixRQUFNMEIsV0FBVyxJQUFJOUIsTUFBTWEsSUFBTixDQUFXa0IsTUFBZixDQUFzQkgsR0FBdEIsRUFBMkJDLEdBQTNCLENBQWpCO0FBQ0F6QixXQUFPeUMsV0FBUCxDQUFtQmYsUUFBbkI7QUFDRCxHQU5ELEVBTUcsQ0FBQ0wsTUFBTUUsT0FBTixDQUFjQyxHQUFmLEVBQW9CSCxNQUFNRSxPQUFOLENBQWNFLEdBQWxDLENBTkg7O0FBUUEsd0JBQVUsWUFBTTtBQUFBLFFBQ05yQixLQURNLEdBQ0lpQixNQUFNRSxPQURWLENBQ05uQixLQURNO0FBQUEsUUFFTkosTUFGTSxHQUVLQyxLQUZMLENBRU5ELE1BRk07O0FBR2QsUUFBSUEsV0FBVyxJQUFYLElBQW1CSSxVQUFVLElBQWpDLEVBQXVDO0FBQ3ZDLFFBQUlBLEtBQUosRUFBV0QsZUFBZUgsTUFBZixFQUF1QkksS0FBdkI7QUFDWixHQUxELEVBS0csQ0FBQ2lCLE1BQU1FLE9BQU4sQ0FBY25CLEtBQWYsQ0FMSDs7QUFPQSxTQUFPLElBQVA7QUFDRCxDQS9FRDs7a0JBaUZlVixNIiwiZmlsZSI6Ik1hcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1hcENvbnRleHQgfSBmcm9tIFwiLi9LYWthb01hcFwiO1xyXG5pbXBvcnQgeyBNYXJrZXJDbHVzdGVyZXJDb250ZXh0IH0gZnJvbSBcIi4vTWFya2VyQ2x1c3RlcmVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuY29uc3QgTWFya2VyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsga2FrYW8sIG1hcCB9ID0gdXNlQ29udGV4dChNYXBDb250ZXh0KTtcclxuICBjb25zdCB7IGNsdXN0ZXJlciB9ID0gdXNlQ29udGV4dChNYXJrZXJDbHVzdGVyZXJDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIG1hcmtlcjogbnVsbCxcclxuICAgIGtha2FvLFxyXG4gICAgbWFwLFxyXG4gICAgY2x1c3RlcmVyXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldE1hcmtlckltYWdlID0gKG1hcmtlciwgaW1hZ2UpID0+IHtcclxuICAgIGNvbnN0IHsgdXJsLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZTtcclxuICAgIGNvbnN0IG1hcmtlckltYWdlID0gbmV3IGtha2FvLm1hcHMuTWFya2VySW1hZ2UoXHJcbiAgICAgIHVybCxcclxuICAgICAgbmV3IGtha2FvLm1hcHMuU2l6ZSh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgKTtcclxuICAgIG1hcmtlci5zZXRJbWFnZShtYXJrZXJJbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsYXlPYnNlcnZhYmxlID0gZGVsYXkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChkZWxheSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9wdGlvbnMsIGRlbGF5IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgbGF0LCBsbmcsIGltYWdlIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgbWFya2VyID0gbmV3IGtha2FvLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IG5ldyBrYWthby5tYXBzLkxhdExuZyhsYXQsIGxuZylcclxuICAgIH0pO1xyXG4gICAgaWYgKGltYWdlKSBzZXRNYXJrZXJJbWFnZShtYXJrZXIsIGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBkZWxheU9ic2VydmFibGUoZGVsYXkgPyBkZWxheSA6IDApLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQoeCkge30sXHJcbiAgICAgIGVycm9yKGVycikge30sXHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIGNsdXN0ZXJlciA/IGNsdXN0ZXJlci5hZGRNYXJrZXIobWFya2VyKSA6IG1hcmtlci5zZXRNYXAobWFwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgICBpZiAob25Nb3VzZU92ZXIpIG9uTW91c2VPdmVyKG1hcmtlcik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChvbk1vdXNlT3V0KSBvbk1vdXNlT3V0KG1hcmtlcik7XHJcbiAgICB9O1xyXG4gICAga2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsIFwibW91c2VvdmVyXCIsIG1vdXNlT3Zlcik7XHJcbiAgICBrYWthby5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgXCJtb3VzZW91dFwiLCBtb3VzZU91dCk7XHJcblxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbWFya2VyIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICBrYWthby5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKG1hcmtlciwgXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVyKTtcclxuICAgICAga2FrYW8ubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcihtYXJrZXIsIFwibW91c2VvdXRcIiwgbW91c2VPdXQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBwcm9wcy5vcHRpb25zO1xyXG4gICAgY29uc3QgeyBtYXJrZXIgfSA9IHN0YXRlO1xyXG4gICAgaWYgKG1hcmtlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcga2FrYW8ubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xyXG4gICAgbWFya2VyLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICB9LCBbcHJvcHMub3B0aW9ucy5sYXQsIHByb3BzLm9wdGlvbnMubG5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlIH0gPSBwcm9wcy5vcHRpb25zO1xyXG4gICAgY29uc3QgeyBtYXJrZXIgfSA9IHN0YXRlO1xyXG4gICAgaWYgKG1hcmtlciA9PT0gbnVsbCB8fCBpbWFnZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgaWYgKGltYWdlKSBzZXRNYXJrZXJJbWFnZShtYXJrZXIsIGltYWdlKTtcclxuICB9LCBbcHJvcHMub3B0aW9ucy5pbWFnZV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcclxuIl19