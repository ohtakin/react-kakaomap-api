# Kakao map api 사용 샘플입니다.

'.env.development', '.env.production' 파일에 REACT_APP_KAKAO_API_KEY=apikey 추가 필요합니다.

## - import

    import KakaoMap, {
      withJs,
      withKakaoMap,
      Marker,
      MarkerClusterer,
      InfoWindoWithMarker,
      CustomOverlay,
      Polyline
    } from "react-kakaomap-api";

## - KakaoMap

KakaoMap 사용 시 props에 options 적용

    options={{ lng, lat, level, zoom, bounds }

    bounds=[{ lat, lng }, { lat, lng } ...]

### App.css

    .App {
      width: 800px;
      height: 400px;
    }

### App.js

    const Kakao = withJs(
      `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        process.env.REACT_APP_KAKAO_API_KEY
      }&libraries=services,clusterer,drawing&autoload=false`
    )(withKakaoMap(KakaoMap));

    function App() {
      return (
        <div className="App">
          <Kakao options={{ lng, lat, level: integer, zoom: string, bounds: array }} />
        </div>
      );
    }

    export default App;

## - Marker

기본 Marker 사용 시 props에 options 적용.

    options={{ lat, lng, image }}

delay간격으로 map 또는 cluster에 추가됨.

    delay=millisecond

MarkerImage 사용시 options에 image 추가.

    image={{
      url: require("...path"),
      width: integer,
      height: integer
    }}

Marker

    ...
    <Marker options={{...}} />
    ...

## - MarkerClusterer

MarkerClusterer 사용 시 props에 options 적용.

    const options = {
      gridSize: integer
      averageCenter: boolean,
      minLevel: integer,
      disableClickZoom: boolean
    };

MarkerClusterer

    ...
    <MarkerClusterer options={options}>
      <Marker /> or {Markers}
    </MarkerClusterer>
    ...

## - CustomOverlay

CustomOverlay 사용 시 props에 options 적용.

    ...
    <CustomOverlay
      options={{ lng, lat, content: string }}
    />
    ...

## - Polyline

Polyline 사용 시 props에 options 적용.

delay 간격으로 path가 추가되 그려짐.

    delay=millisecond

bounds 가 true의 경우 path가 자도안에 나타나도록 설정. false의 경우 path의 첫번째 값이 map의 중앙에 오도록 설정.

    bounds=boolean

Polyline

    ...
    <Polyline
      bounds={true}
      delay={10}
      options={{ path, strokeColor: #rgb, strokeWeight: integer }}
    />
    ...

## - InfoWindoWithMarker

InfoWindoWithMarker 사용 시 props에 options 적용.

    options={{ lat, lng, content, image: { url, width, height }}}

Marker 'onMouseOver', 'onMouseOut' event 발생 시 InfoWindo 'open', 'close' 동작.

기본 delay후 map 또는 cluster에 추가됨.

    delay=millisecond

InfoWindoWithMarker

    ...
    <InfoWindoWithMarker
      options={{
        lat,
        lng,
        content: plateNumber,
        image: {
          url: require("./images/map-pin.png"),
          width: 30,
          height: 30
        }
      }}
    />
    ...
