"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withJs = require("./withJs");

var _withJs2 = _interopRequireDefault(_withJs);

var _KakaoMap = require("./KakaoMap");

var _KakaoMap2 = _interopRequireDefault(_KakaoMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useKakao = function useKakao(url) {
  var kakao = (0, _withJs2.default)(url)((0, _withJs2.default)(_KakaoMap2.default));
  return kakao;
};

exports.default = useKakao;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VLYWthby5qcyJdLCJuYW1lcyI6WyJ1c2VLYWthbyIsImtha2FvIiwidXJsIiwiS2FrYW9NYXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxNQUFPO0FBQ3RCLE1BQU1DLFFBQVEsc0JBQU9DLEdBQVAsRUFBWSxzQkFBYUMsa0JBQWIsQ0FBWixDQUFkO0FBQ0EsU0FBT0YsS0FBUDtBQUNELENBSEQ7O2tCQUtlRCxRIiwiZmlsZSI6InVzZUtha2FvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhLYWthb01hcCBmcm9tIFwiLi93aXRoSnNcIjtcclxuaW1wb3J0IHdpdGhKcyBmcm9tIFwiLi93aXRoSnNcIjtcclxuaW1wb3J0IEtha2FvTWFwIGZyb20gXCIuL0tha2FvTWFwXCI7XHJcblxyXG5jb25zdCB1c2VLYWthbyA9IHVybCA9PiB7XHJcbiAgY29uc3Qga2FrYW8gPSB3aXRoSnModXJsKSh3aXRoS2FrYW9NYXAoS2FrYW9NYXApKTtcclxuICByZXR1cm4ga2FrYW87XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VLYWthbztcclxuIl19