import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Alert, TextInput, View, SafeAreaView,Text} from 'react-native';

import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const Login = () => {
  var username = "mail"
  var password = "pass"

  const [isLoading, setLading] = useState(true);
  const [data, setData] = useState([]);

  function handleEmail(text){
     username = text;
  }
  function handlePassword(text){
     password = text;
  }

  var _json

  useEffect(() => {
    funcGetJson()
  });

  function funcGetJson() {
    var authorizationURL = `http://192.168.0.102:8080/api/authorization?login=${username}&password=${password}`;
    fetch(authorizationURL)
      .then((response) => response.json())
      .then((json) =>  (_json = json))
      .catch((error) => alert(error))
      .finally(setLading(false))
      showJson()
  }

  function showJson() {
    if (_json != null) {
      Alert.alert("authorization true")
    } else {
      Alert.alert("json: " + _json)
    }
  }



  return (
    <View style={styles.container}>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={198}
      height={169}
      fill="none"
      viewBox="0 0 198 169"
      style={styles.logo}
    >
      <G fill="#406D99">
        <Path d="M172.167 105.077c-.5-.03-.796-.061-1.092-.061-4.457 0-8.915.019-13.372-.019-.89-.006-1.175.27-1.324 1.183-.759 4.633-1.616 9.248-2.434 13.871-1.181 6.664-2.36 13.33-3.537 19.995l-3.558 20.098c-.379 2.143-.765 4.286-1.096 6.437-.127.827-.458 1.146-1.315 1.12-3.516-.106-7.034-.155-10.552-.203-.744-.01-.879-.277-.746-1.019a5594.364 5594.364 0 004.684-26.429c1.067-6.062 2.13-12.125 3.188-18.189.485-2.781.967-5.563 1.445-8.346.05-.298.041-.605.068-1.031-.357-.033-.675-.087-.992-.087-3.988.01-7.976.058-11.965.022-.986-.009-1.334.386-1.498 1.311a9502.04 9502.04 0 01-5.594 30.411 5811.961 5811.961 0 00-4.046 22.287c-.177.991-.544 1.35-1.573 1.305-3.347-.145-6.698-.196-10.048-.245-.763-.011-1.013-.251-.869-1.043 1.079-5.888 2.129-11.783 3.191-17.675l4.583-25.411c1.181-6.526 2.367-13.05 3.558-19.573.432-2.378.872-4.756 1.248-7.134.128-.813.393-1.198 1.276-1.15 3.278.174 6.56.3 9.837.416.653.023.906.294.86.94-.095 1.359-.132 2.726-.273 4.077-.075.715.209.905.827.922 4.422.098 8.843.203 13.265.316.629.017.807-.282.791-.872-.026-1.057.04-2.12-.02-3.17-.051-.898.272-1.184 1.152-1.178 4.323.037 8.646.016 12.969.013l37.403-.026c1.363 0 1.361 0 1.363 1.407 0 1.472-.03 2.937.027 4.403.033.844-.253 1.148-1.089 1.142-3.585-.024-7.171 0-10.757.009-1.668 0-1.677.01-1.972 1.656-1.409 7.833-2.82 15.667-4.233 23.5-1.516 8.368-3.038 16.734-4.566 25.099-.77 4.251-1.499 8.51-2.298 12.756-.058.302-.534.751-.813.75-3.685-.023-7.37-.114-11.055-.19-.724-.014-.652-.498-.556-1.019.582-3.039 1.158-6.079 1.728-9.121l4.225-22.561c1.519-8.058 3.043-16.114 4.571-24.169.345-1.792.644-3.597.984-5.525z" />
        <Path d="M190.135 71.638c-7.742 0-15.484-.059-23.225.015-10.825.101-21.648.302-32.473.464-2.077.03-4.154.113-6.226.104-.667 0-1.064.2-1.303.837-.377 1.002-.799 1.986-1.278 3.17l64.203.932v.186c-3.81 0-7.621-.025-11.432.006-7.742.06-15.484.14-23.225.236-9.718.127-19.436.298-29.155.411-.906.01-1.418.295-1.721 1.167-.339.98-.778 1.925-1.273 3.104l66.011 1.133v.113c-2.412 0-4.825-.018-7.238 0-9.216.075-18.432.161-27.65.257-10.288.113-20.576.247-30.865.34-.824.007-1.296.243-1.581 1.035-.316.882-.726 1.729-1.2 2.83l66.91 1.079v.167c-1.921 0-3.843-.015-5.763 0-8.881.075-17.763.16-26.644.253-11.361.13-22.721.295-34.082.412-.956.01-1.5.278-1.904 1.226-1.076 2.532-2.289 5.003-3.423 7.51-.143.316-.154.7-.187 1.056-.082.895.267 2.016-1.166 2.163-.104.01-.223.157-.283.27-.491.996-.968 1.998-1.5 3.101.365.07.577.128.793.149.499.051 1.208-.172 1.112.727-.072.68-.065 1.576-1.136 1.393-1.535-.264-2.372.453-2.838 1.863-.198.595-.525 1.147-.908 1.964 1.101 0 1.987-.014 2.872.007.396.009 1.016-.165.91.566-.089.605.137 1.497-.872 1.585-.902.074-1.819.2-2.709.105-1.126-.12-1.739.333-2.133 1.347-.251.644-.619 1.246-1.076 2.136 1.694 0 3.088-.034 4.479.018.491.018 1.317-.39 1.253.748-.071 1.246-.278 1.522-1.345 1.528-1.609.01-3.225-.035-4.826.048-.412.021-.937.34-1.182.687-.512.733-.874 1.577-1.385 2.541.562.061.941.134 1.321.138 1.779.019 3.558.017 5.33.027.5 0 1.13-.071 1.027.72-.088.673.103 1.596-1.065 1.594-2.313 0-4.625.071-6.938.054-.833 0-1.391.239-1.752 1.039-.334.726-.772 1.397-1.258 2.256 1.509.078 2.8.17 4.092.205 1.641.046 3.285.017 4.925.09.328.015.939.442.917.513-.201.633.222 1.665-.91 1.763-.633.056-1.272.016-1.909.03-2.647.054-5.293.139-7.94.151-.668 0-1.062.219-1.362.793-.325.619-.708 1.208-1.175 1.995 1 .069 1.82.162 2.635.175 2.882.043 5.765.047 8.647.095.397.006 1.141-.247 1.001.549-.119.658.242 1.733-.993 1.793-1.105.055-2.209.12-3.315.148-2.982.074-5.962.154-8.944.177-.718 0-1.198.205-1.55.855-.35.65-.778 1.237-1.343 2.108l15.026.339c0 .414.027.779 0 1.138-.072.804-.397 1.323-1.317 1.287-.869-.035-1.742.032-2.612.048-4.155.075-8.31.128-12.464.245-.431.012-.94.3-1.259.618-.488.488-.844 1.116-1.37 1.84.444.059.717.12.99.127 5.26.138 10.518.263 15.777.411.504.015 1.259-.264 1.253.705-.007 1.416-.286 1.8-1.297 1.824-5.893.139-11.792.354-17.689.356-1.77 0-2.668.857-3.544 2.265.273.066.478.153.685.158 4.655.143 9.31.28 13.965.411 2.01.06 4.018.149 6.027.19.667.012.855.199.728.92-.279 1.585-.222 1.653-1.83 1.724-3.013.132-6.027.211-9.043.277-4.388.095-8.783.198-13.166.208-1.188 0-1.805.623-2.508 1.623.516.066.89.146 1.273.156l17.084.453c2.143.057 4.285.151 6.429.188.667.013.864.189.747.906-.311 1.925-.27 1.983-2.112 2.115-2.071.151-4.148.21-6.227.3-1.64.073-3.29.04-4.918.219-3.113.339-5.964-.34-8.672-1.863-1.083-.608-2.236-1.089-3.311-1.711-.643-.372-1.054-.256-1.579.227-3.993 3.69-8.344 6.834-13.342 8.997a31.11 31.11 0 01-9.095 2.396c-1.135.12-2.47-.333-3.51-.906-2.919-1.62-4.761-4.351-6.426-7.174-3.392-5.755-5.526-12.035-7.045-18.518-1.04-4.432-1.943-8.915-2.567-13.424-.6-4.345-.9-8.745-1.077-13.135-.173-4.292-.04-8.596-.006-12.894.025-1.099.136-2.195.334-3.276.237 1.629.469 3.259.714 4.886 1.514 10.078 3.34 20.079 6.67 29.727 1.669 4.843 3.687 9.525 7.014 13.475 2.224 2.646 4.911 4.55 8.434 4.853 3.24.28 6.13-.868 8.851-2.51 4.942-2.984 8.875-7.134 12.564-11.527 7.582-9.028 13.865-18.986 19.867-29.134 8.761-14.815 16.812-30.035 24.428-45.487 8.109-16.488 16.055-33.062 24.07-49.593.682-1.406 1.302-2.843 2.002-4.235.222-.434.555-.88.952-1.12.276-.166.804-.09 1.112.08.144.078.111.665.017.976-.244.793-.567 1.57-.903 2.47l3.43.257v.067c-.936 0-1.876-.037-2.809.02-.316.02-.797.195-.899.433-.678 1.585-1.274 3.203-1.991 5.052l13.721.378v.27c-4.263 0-8.524.022-12.786-.017-.864-.008-1.35.245-1.63 1.107-.425 1.31-.959 2.583-1.524 4.076l19.579.377v.387c-4.261 0-8.524-.018-12.786.008a169.31 169.31 0 00-6.431.18c-.309.013-.778.213-.889.454-.611 1.39-1.135 2.82-1.779 4.486l29.293.591v.212c-3.516 0-7.032-.025-10.548.005-6.032.053-12.064.154-18.096.195-.801.006-1.204.26-1.457 1.04-.375 1.16-.875 2.276-1.445 3.723l31.503.594v.128c-.188.013-.374.035-.562.039l-15.984.226c-4.859.068-9.718.149-14.578.195-.631.007-.972.213-1.186.827-.423 1.21-.913 2.396-1.468 3.833l38.639.762v.113c-1.378 0-2.757-.015-4.135 0-11.361.137-22.721.272-34.081.405-.724.008-1.112.273-1.346.933-.378 1.051-.798 2.088-1.308 3.41l45.729.75v.282c-7.09 0-14.18-.047-21.27.013-8.005.068-16.018.242-24.027.34-.747.01-1.166.24-1.414.972-.367 1.084-.822 2.136-1.334 3.46l49.048.823v.34c-8.21 0-16.421-.047-24.631.013-8.043.059-16.085.233-24.127.332-.661.008-1.044.185-1.276.851-.373 1.083-.837 2.131-1.356 3.43l54.026.87v.18c-3.849 0-7.699-.035-11.549.007-13.204.141-26.408.3-39.612.477-1.167.015-2.579-.236-3.428.332-.802.537-1.019 1.988-1.482 3.044-.119.272-.192.566-.372 1.1l55.616.991v.25c-6.266 0-12.532-.044-18.798.008-12.032.1-24.063.269-36.094.357-1.106.01-1.753.312-2.075 1.403-.229.775-.585 1.51-1.001 2.544l62.109.948-.03.229z" />
        <Path d="M102.557 93.713c-.454.66-.864 1.358-1.384 1.96-.198.227-.65.31-.988.316-4.69.085-9.38.154-14.072.207-13.638.156-27.275.31-40.91.46-2.413.028-4.824.113-7.236.157-1.431.024-1.43 0-1.668-1.472-.032-.193-.091-.382-.215-.883-.232.489-.383.718-.454.97a41578.992 41578.992 0 00-9.184 32.484 9522.35 9522.35 0 01-7.35 25.797c-1.18 4.153-2.354 8.309-3.488 12.476-.27.992-.66 1.433-1.793 1.372-4.314-.226-8.634-.339-12.953-.452-.757-.021-1.001-.179-.779-1.02 2.385-8.724 4.75-17.454 7.095-26.189 3.827-14.18 7.651-28.361 11.475-42.542.248-.918.538-1.827.747-2.755.167-.74.562-.956 1.286-.94 4.655.1 9.313.162 13.97.235.424.006.85 0 1.254 0 .199-1.431.199-1.446 1.588-1.427 9.916.14 19.833.283 29.75.43 8.275.124 16.55.274 24.824.382 3.447.044 6.894.007 10.34.007l.145.427zm20.878-34.848c-.351 1.31-.986 1.852-2.266 1.812-2.476-.066-4.956.062-7.436.095-12.16.16-24.321.318-36.482.472-8.777.114-17.554.232-26.33.355-3.786.054-7.57.129-11.357.192-.356.007-.715 0-1.305 0 .433-1.445.772-2.717 1.215-3.94.082-.226.594-.408.907-.405 5.728.058 11.456.136 17.184.235 1.407.021 2.812.113 4.219.136 6.901.088 13.803.148 20.704.244 9.043.127 18.086.267 27.129.42 4.254.072 8.508.174 12.761.268.331.013.657.073 1.057.116zm3.195-5.846c-.395 1.585-.655 1.796-2.08 1.812-7.975.075-15.95.157-23.924.247-9.952.121-19.902.256-29.853.404-9.683.135-19.366.278-29.05.429-.46.007-.921 0-1.692 0 .582-1.472 1.05-2.758 1.61-3.996.088-.196.587-.285.894-.282 8.477.115 16.954.243 25.43.383 4.254.069 8.508.179 12.763.24 7.004.103 14.01.166 21.014.272 8.108.121 16.215.258 24.322.41.19.016.379.043.566.081zm-84.35-2.901c.704-1.508 1.28-2.798 1.924-4.052.098-.189.522-.29.792-.287 6.13.075 12.26.161 18.389.257.77.011 1.539.076 2.31.087 10.885.16 21.772.317 32.659.47 8.942.134 17.885.274 26.829.422 1.533.024 3.068 0 4.66 0-.415 1.723-.586 1.855-1.967 1.873-11.891.157-23.782.316-35.674.478a16344.443 16344.443 0 00-48.431.75c-.395.008-.791.002-1.491.002zm77.744 14.7c-.53 1.727-.743 1.89-2.224 1.907-14.306.15-28.611.305-42.917.463-4.993.054-9.985.095-14.976.15-7.137.075-14.274.156-21.41.242h-1.535c.304-1.384.524-2.636.895-3.842.073-.24.72-.418 1.104-.418 3.35 0 6.7.028 10.052.085 7.504.122 15.008.255 22.51.398l35.173.625c4.086.077 8.172.203 12.257.31.324.005.653.048 1.071.08zm-3.202 5.565c-.633 1.866-.838 2.03-2.487 2.046-8.645.09-17.288.16-25.933.271-9.549.122-19.097.28-28.644.426l-22.412.34c-1.316.019-1.334-.023-1.118-1.31.1-.605.222-1.213.24-1.823.023-.892.359-1.245 1.285-1.234 11.054.2 22.11.38 33.166.54 1.172.018 2.345.053 3.518.067 7.37.083 14.742.14 22.112.247 6.533.094 13.064.242 19.596.37.197.003.392.034.677.06zm15.985-28.739c-.186 1.06-.595 1.515-1.569 1.522-5.393.037-10.785.129-16.178.197l-38.582.479c-10.05.127-20.1.257-30.15.389-.32 0-.64-.034-1.222-.067.834-1.432 1.533-2.694 2.31-3.904.132-.205.599-.267.908-.262 6.898.105 13.797.223 20.696.354 3.751.067 7.502.148 11.253.211 10.35.175 20.698.346 31.046.516 6.56.113 13.127.266 19.69.41.561.012 1.12.094 1.798.155zM113.405 76.12c-.556 1.827-.849 2.06-2.432 2.083l-45.618.643c-9.51.134-19.023.246-28.534.408-.966.016-1.36-.207-1.171-1.24.127-.699.15-1.421.18-2.134.03-.714.391-.916 1.041-.906 3.752.05 7.504.064 11.256.113 2.645.034 5.29.12 7.936.154 12.425.156 24.852.286 37.278.453 6.396.088 12.786.241 19.188.368.263.004.526.036.876.058zM48.416 38.447c1.028-1.496 1.901-2.813 2.84-4.076.154-.209.6-.276.91-.27 5.021.087 10.045.2 15.068.303 3.75.075 7.501.148 11.253.22 10.216.172 20.432.316 30.646.511 8.707.165 17.413.385 26.12.582.197 0 .393.03.647.049-.008.78-.274 1.263-1.055 1.318-.702.047-1.404.105-2.112.113-11.155.151-22.311.3-33.467.447-10.418.145-20.835.3-31.251.463-6.096.098-12.19.227-18.286.34-.348.006-.705 0-1.313 0zm61.383 43.621c-.684 2.02-1 2.246-2.865 2.264-14.942.156-29.885.315-44.828.477-8.441.096-16.883.215-25.325.356-1.006.018-1.34-.273-1.327-1.32.037-3.057 0-3.094 3.022-3.047 12.594.198 25.188.408 37.784.631 6.531.113 13.062.255 19.593.374 4.456.081 8.911.146 13.366.22.162.003.328.024.58.045zM52.731 32.273c1.012-1.22 2.001-2.464 3.058-3.64.222-.249.72-.352 1.087-.345 9.912.188 19.826.39 29.741.606 3.718.078 7.435.184 11.153.254 8.509.159 17.018.291 25.527.453 4.893.096 9.779.235 14.669.357.323.008.645.045 1.009.073-.084 1.089-.705 1.236-1.53 1.245a3971 3971 0 00-19.801.262c-8.409.127-16.818.26-25.228.4l-24.222.387a4687.6 4687.6 0 00-14.171.248c-.39.006-.778 0-1.166 0a5.818 5.818 0 01-.126-.3zm53.494 55.557c-.588 1.63-1.445 2.308-3.166 2.317-11.785.06-23.58.26-35.37.41-10.15.129-20.298.254-30.447.375-1.49.018-1.499 0-1.557-1.521a26.881 26.881 0 00-.171-1.935c-.073-.644.179-.938.843-.924 8.1.173 16.202.34 24.307.498.837.017 1.675.04 2.512.05 7.235.09 14.47.158 21.705.267 6.832.103 13.663.248 20.496.377.254.005.509.05.848.086zm35.9-63.72c-.099.87-.546 1.024-1.203 1.036-8.006.139-16.011.29-24.017.453-10.951.204-21.901.406-32.852.607-8.439.167-16.876.372-25.313.56-.355.008-.71 0-1.258 0 1.452-1.508 2.737-2.87 4.066-4.19.174-.173.568-.165.858-.158 8.104.165 16.207.337 24.31.516 3.78.084 7.568.196 11.351.268 8.439.16 16.878.294 25.317.453 6.028.114 12.055.26 18.081.393.205.013.399.045.66.062z" />
        <Path d="M98.6 99.478c-.556.793-.966 1.465-1.482 2.039-.23.253-.68.41-1.034.419-3.719.091-7.437.159-11.156.203-9.08.1-18.16.19-27.24.269-6.265.061-12.53.101-18.79.201-.947.016-1.435-.226-1.53-1.227-.062-.68-.25-1.336-.408-1.999-.18-.768.106-1.06.871-1.05 3.786.046 7.573.04 11.359.106 4.253.074 8.506.226 12.758.308 5.963.113 11.927.17 17.89.278 5.995.114 11.99.248 17.986.378.19 0 .382.035.776.075zM63.57 20.555c1.617-1.284 3.225-2.582 4.865-3.834.202-.155.585-.088.89-.083 8.137.151 16.275.31 24.413.474 5.994.123 11.988.256 17.981.398l27.223.617c2.002.044 4.003.006 6.004.006l.157.478c-.222.187-.416.427-.667.543-.197.091-.461.029-.696.033l-33.958.68c-6.329.129-12.658.265-18.986.41-8.673.191-17.345.385-26.018.58-.354.008-.707 0-1.062 0l-.145-.302zm30.977 84.514c-.763.989-1.349 1.803-2.001 2.554-.163.186-.55.227-.836.233-.87.033-1.742.013-2.613.023-13.666.159-27.332.321-40.998.484-2.612.031-5.226.059-7.835.145-.745.024-1.118-.26-1.298-.954-.222-.856-.444-1.713-.725-2.551-.222-.668.025-.877.644-.871 1.541.017 3.082 0 4.623.032 6.162.113 12.323.259 18.485.357 10.416.165 20.83.316 31.243.453.354.005.705.049 1.311.095zm53.385-92.102L70.864 15.08l-.086-.19c1.101-.735 2.252-1.407 3.297-2.22 2.04-1.586 4.269-2.162 6.84-1.941 3.066.263 6.154.284 9.228.363 4.386.114 8.774.158 13.16.272 8.873.233 17.743.506 26.616.737 4.787.126 9.577.19 14.366.302 1.216.029 2.432.134 3.648.203l-.001.361zM89.99 110.918c-.816.972-1.431 1.781-2.134 2.503-.243.247-.702.378-1.064.384-5.259.086-10.517.155-15.775.206-9.212.095-18.423.163-27.633.287-.973.013-1.557-.242-1.933-1.18-.408-1.027-.935-2.005-1.486-3.162l50.025.962zm-5.126 5.953c-.899.891-1.768 1.817-2.717 2.649-.256.226-.753.226-1.14.226-8.844.089-17.688.172-26.531.248a378.04 378.04 0 00-8.037.182c-.645.021-1.065-.184-1.394-.757-.65-1.133-1.353-2.239-2.2-3.624l41.89.809.129.267zM80.474 8.962a17276.7 17276.7 0 005.422-2.517c.333-.155.7-.249 1.017-.433 2.65-1.543 5.536-.997 8.35-.958 2.51.035 5.017.24 7.526.319 7.665.238 15.331.44 22.996.68 6.057.186 12.119.402 18.171.607a.445.445 0 01.39.187l-63.797 2.38c-.022-.088-.05-.176-.075-.265zM47.007 121.666l31.888.589.07.29c-1.779 1.346-3.15 3.2-5.83 3.18-7.204-.056-14.41.095-21.615.204-.848.012-1.484-.227-2.027-.861-.87-1.019-1.763-2.025-2.646-3.036l.16-.366zM94.68 3.394c15.269-4.53 30.522-4.53 45.76 0H94.68zm92.564 91.414c-.166.01-.334.031-.496.032-9.511.084-19.022.188-28.534.237-4.488.024-9.006-.417-13.453.01-3.831.365-7.652.138-11.463.468-.334.03-.899-.207-1.021-.478-.334-.724.043-1.156.854-1.145l26.122.39c9.209.14 18.419.276 27.629.41h.362v.076zM52.885 127.601l18.393.312c-5.6 3.574-12.973 4.149-18.394-.312zm68.462 39.013c.223-1.245.401-2.443.674-3.623.05-.213.484-.471.743-.475 2.513-.037 5.027-.019 7.539-.027.643 0 .779.25.649.894-.599 2.956-.091 2.394-2.652 2.778-2.113.316-4.263.407-6.397.586-.15.011-.308-.071-.556-.133zm-29.651-4.125c3.78 0 7.552.009 11.328-.008.778 0 .984.281.817 1.062-.432 2.031-.427 2.137-2.446 1.682-3.272-.74-6.513-1.627-9.768-2.452.026-.095.047-.189.07-.284zm35.177-26.16c-.165-1.508-.025-1.683 1.29-1.679 2.21.006 4.421.009 6.631.031.472 0 1.101-.147 1.095.665 0 .769-.539.793-1.122.807-2.276.043-4.552.114-6.828.175-.359.009-.713.001-1.066.001zm-1.101 5.85c.01-1.572.02-1.599 1.424-1.577 2.277.037 4.558.082 6.83.171.286.012.556.315.838.484-.271.277-.531.782-.815.793-2.643.123-5.289.163-7.934.226a1.46 1.46 0 01-.343-.097zm8.588-24.544c1.271 0 2.542-.027 3.81.023.25.009.489.311.734.478-.234.272-.456.771-.701.782-2.574.117-5.15.178-7.726.183-.223 0-.584-.464-.633-.755-.09-.53.181-.905.802-.898 1.238.013 2.476 0 3.714 0v.187zm-9.575 30.313c-.045-1.538.007-1.557 1.383-1.516 2.208.066 4.42.057 6.627.138.333.012.913.29.951.518.111.659-.404.811-.973.819-2.446.036-4.892.093-7.33.131a4.302 4.302 0 01-.658-.09zm2.971-17.269c.062-1.554.063-1.573 1.46-1.546 2.267.043 4.535.099 6.8.194.294.012.576.288.863.442-.263.286-.516.805-.792.818-2.668.12-5.337.156-8.005.209-.087.003-.179-.062-.326-.117zm1.059-5.96c0-1.497.036-1.552 1.37-1.528 2.306.043 4.612.093 6.917.191.272.012.531.34.796.518-.245.26-.481.734-.737.744-2.668.114-5.346.148-8.02.199-.09.001-.182-.067-.326-.124zm3.783 27.954c.275.906-.088 1.246-.846 1.256-2.479.028-4.958.055-7.436.037-.216 0-.607-.34-.609-.52-.008-.557.127-1.064.905-1.035 2.008.075 4.018.086 6.027.14.661.017 1.321.08 1.959.122zm-.985 5.334c.2 1.019-.056 1.354-.699 1.38-2.539.104-5.077.226-7.618.287-.2.006-.61-.407-.578-.529.111-.399.3-.866.611-1.093.244-.179.711-.045 1.079-.045h7.205zm35.544-39.46c-.366.057-.73.157-1.096.161-2.639.021-5.277.033-7.915.018-.284 0-.569-.192-.852-.295.285-.147.571-.422.858-.422 2.737 0 5.476.04 8.213.083.265 0 .529.099.792.153v.302zm-8.93-5.951c.244-.133.489-.383.732-.381 2.946.023 5.893.08 8.835.143.166 0 .334.12.494.183l-.026.268h-9.895l-.14-.213zm7.844 11.572a2.13 2.13 0 01-.438.103c-2.841.069-5.682.144-8.524.178-.303 0-.61-.237-.916-.364.296-.129.59-.372.889-.371 2.676.006 5.351.053 8.025.098.327 0 .652.072.978.113l-.014.243zm-1.111 6.091h-10.007c.334-.251.525-.51.713-.511 3.099-.025 6.197-.018 9.296-.018l-.002.529zm-10.87 5.135c.189-.107.381-.309.569-.306 3.095.058 6.192.14 9.287.217v.265h-9.724l-.132-.176zm-.936 5.931h9.468v.26h-9.48c.003-.087.008-.174.012-.26zm-1.013 5.792h9.522v.226h-9.532l.01-.226zm5.46 6.174h-6.529v-.096h6.54c-.001.033-.007.065-.011.096z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h198v169H0z" />
        </ClipPath>
      </Defs>
    </Svg>
    <SafeAreaView style={styles.inputarea}>
      <View style={styles.inputboxfirst}>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      style={styles.icons}
    >
      <Path
        stroke="#000"
        d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z"
      />
      <Path stroke="#000" d="M18.333 5L10 10.833 1.667 5" />
    </Svg>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => handleEmail(text)}
      />
      </View>
      <View style={styles.inputbox}>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      style={styles.icons}
    >
      <Path
        stroke="#000"
        d="M15.833 9.167H4.167c-.92 0-1.667.746-1.667 1.666v5.834c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666v-5.834c0-.92-.746-1.666-1.667-1.666zm-10 0V5.833a4.167 4.167 0 018.334 0v3.334"
      />
    </Svg>
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry={true}
        onChangeText={text => handlePassword(text)}
      />
      </View>
    </SafeAreaView>
    <View><Text style={styles.lostpass}>Забыли пароль?</Text></View>

      <TouchableOpacity
        style={styles.login}
        onPress={funcGetJson}>
        <Text style={styles.logintext}>Войти</Text>
      </TouchableOpacity>


    </View>
  );
}
const styles = StyleSheet.create({
  container:{
   marginLeft:20,
   marginRight:20,
   justifyContent:'center',
  },
  logo:{
    marginTop:92,
    marginLeft:'auto',
    marginRight:'auto'
  },
  inputbox:{
    borderRadius:50,
    width:350,
    height:50,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor:'#406D99',
    elevation: 10,
    flexDirection:'row'
  },
  inputboxfirst:{
    borderRadius:50,
    width:350,
    height:50,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor:'#406D99',
    marginBottom:26,
    elevation: 10,
    flexDirection:'row'
  },
  input:{
    width:'100%',
    height:50,
    marginLeft:16,
    maxWidth:239
  },
  icons:{
    marginTop:'auto',
    marginBottom:'auto',
    marginLeft:33
  },
  inputarea:{
    justifyContent:'center',
    marginTop:114,
  },
  lostpass:{
    textAlign:'right',
    fontSize:11,
    marginTop:7,
    color:'#626568'
  },
  login:{
    height:47,
    width:154,
    borderRadius:50,
    backgroundColor:'#406D99',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:18
  },
  logintext:{
    marginTop:'auto',
    marginBottom:'auto',
    textAlign:'center',
    color:'#FFFFFF'
  },
});
