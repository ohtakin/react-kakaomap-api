import withKakaoMap from "./withJs";
import withJs from "./withJs";
import KakaoMap from "./KakaoMap";

const useKakao = url => {
  const kakao = withJs(url)(withKakaoMap(KakaoMap));
  return kakao;
};

export default useKakao;
