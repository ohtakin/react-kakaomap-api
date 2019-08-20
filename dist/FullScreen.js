"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FullScreenModule = require("./FullScreen.module.scss");

var _FullScreenModule2 = _interopRequireDefault(_FullScreenModule);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullScreen = function (_Component) {
  _inherits(FullScreen, _Component);

  function FullScreen(props) {
    _classCallCheck(this, FullScreen);

    var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this, props));

    _this.state = { screenState: false };
    return _this;
  }

  _createClass(FullScreen, [{
    key: "handleFullscreenChange",
    value: function handleFullscreenChange() {
      this.setState({
        screenState: document.fullscreen
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      var canvas = document.getElementById(this.props.canvas);
      if (!document.fullscreenElement) {
        if (canvas) {
          canvas.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  }, {
    key: "bindHandler",
    value: function bindHandler(canvas) {
      if (canvas) canvas.onfullscreenchange = this.handleFullscreenChange.bind(canvas);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindHandler(document.getElementById(this.props.canvas));
    }
  }, {
    key: "render",
    value: function render() {
      return document.fullscreenEnabled ? _react2.default.createElement("button", {
        className: _FullScreenModule2.default.full_screen + " " + (document.fullscreen ? _FullScreenModule2.default.full : ""),
        onClick: this.onClick
      }) : "";
    }
  }]);

  return FullScreen;
}(_react.Component);

FullScreen.propTypes = {
  canvas: _propTypes2.default.string
};

exports.default = FullScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdWxsU2NyZWVuLmpzIl0sIm5hbWVzIjpbIkZ1bGxTY3JlZW4iLCJwcm9wcyIsInN0YXRlIiwic2NyZWVuU3RhdGUiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwib25mdWxsc2NyZWVuY2hhbmdlIiwiaGFuZGxlRnVsbHNjcmVlbkNoYW5nZSIsImJpbmQiLCJiaW5kSGFuZGxlciIsImZ1bGxzY3JlZW5FbmFibGVkIiwic3R5bGVzIiwiZnVsbF9zY3JlZW4iLCJmdWxsIiwib25DbGljayIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsYUFBYSxLQUFmLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkNBRXdCO0FBQ3ZCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRCxxQkFBYUUsU0FBU0M7QUFEVixPQUFkO0FBR0Q7Ozs0QkFFT0MsQyxFQUFHO0FBQ1RBLFFBQUVDLGNBQUY7QUFDQSxVQUFNQyxTQUFTSixTQUFTSyxjQUFULENBQXdCLEtBQUtULEtBQUwsQ0FBV1EsTUFBbkMsQ0FBZjtBQUNBLFVBQUksQ0FBQ0osU0FBU00saUJBQWQsRUFBaUM7QUFDL0IsWUFBSUYsTUFBSixFQUFZO0FBQ1ZBLGlCQUFPRyxpQkFBUDtBQUNEO0FBQ0YsT0FKRCxNQUlPO0FBQ0wsWUFBSVAsU0FBU1EsY0FBYixFQUE2QjtBQUMzQlIsbUJBQVNRLGNBQVQ7QUFDRDtBQUNGO0FBQ0Y7OztnQ0FFV0osTSxFQUFRO0FBQ2xCLFVBQUlBLE1BQUosRUFDRUEsT0FBT0ssa0JBQVAsR0FBNEIsS0FBS0Msc0JBQUwsQ0FBNEJDLElBQTVCLENBQWlDUCxNQUFqQyxDQUE1QjtBQUNIOzs7d0NBRW1CO0FBQ2xCLFdBQUtRLFdBQUwsQ0FBaUJaLFNBQVNLLGNBQVQsQ0FBd0IsS0FBS1QsS0FBTCxDQUFXUSxNQUFuQyxDQUFqQjtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPSixTQUFTYSxpQkFBVCxHQUNMO0FBQ0UsbUJBQWNDLDJCQUFPQyxXQUFyQixVQUNFZixTQUFTQyxVQUFULEdBQXNCYSwyQkFBT0UsSUFBN0IsR0FBb0MsRUFEdEMsQ0FERjtBQUlFLGlCQUFTLEtBQUtDO0FBSmhCLFFBREssR0FRTCxFQVJGO0FBVUQ7Ozs7RUE5Q3NCQyxnQjs7QUFpRHpCdkIsV0FBV3dCLFNBQVgsR0FBdUI7QUFDckJmLFVBQVFnQixvQkFBVUM7QUFERyxDQUF2Qjs7a0JBSWUxQixVIiwiZmlsZSI6IkZ1bGxTY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRnVsbFNjcmVlbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBGdWxsU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2NyZWVuU3RhdGU6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGdWxsc2NyZWVuQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNjcmVlblN0YXRlOiBkb2N1bWVudC5mdWxsc2NyZWVuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5jYW52YXMpO1xyXG4gICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRIYW5kbGVyKGNhbnZhcykge1xyXG4gICAgaWYgKGNhbnZhcylcclxuICAgICAgY2FudmFzLm9uZnVsbHNjcmVlbmNoYW5nZSA9IHRoaXMuaGFuZGxlRnVsbHNjcmVlbkNoYW5nZS5iaW5kKGNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYmluZEhhbmRsZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5jYW52YXMpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZCA/IChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZ1bGxfc2NyZWVufSAke1xyXG4gICAgICAgICAgZG9jdW1lbnQuZnVsbHNjcmVlbiA/IHN0eWxlcy5mdWxsIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIFwiXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5GdWxsU2NyZWVuLnByb3BUeXBlcyA9IHtcclxuICBjYW52YXM6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxTY3JlZW47XHJcbiJdfQ==