import React, { useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:3000/";

function App() {
  const socket = io(ENDPOINT);
  // const peerConnections = {};
  // const config = {
  //   iceServers: [
  //     {
  //       urls: ["stun:stun.l.google.com:19302"],
  //     },
  //   ],
  // };

  // socket.on("answer", (id, description) => {
  //   peerConnections[id].setRemoteDescription(description);
  // });

  // socket.on("watcher", (id) => {
  //   const peerConnection = new RTCPeerConnection(config);
  //   peerConnections[id] = peerConnection;

  //   let stream = videoElement.srcObject;
  //   stream
  //     .getTracks()
  //     .forEach((track) => peerConnection.addTrack(track, stream));

  //   peerConnection.onicecandidate = (event) => {
  //     if (event.candidate) {
  //       socket.emit("candidate", id, event.candidate);
  //     }
  //   };

  //   peerConnection
  //     .createOffer()
  //     .then((sdp) => peerConnection.setLocalDescription(sdp))
  //     .then(() => {
  //       socket.emit("offer", id, peerConnection.localDescription);
  //     });
  // });

  // socket.on("candidate", (id, candidate) => {
  //   peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
  // });

  // socket.on("disconnectPeer", (id) => {
  //   peerConnections[id].close();
  //   delete peerConnections[id];
  // });

  // window.onunload = window.onbeforeunload = () => {
  //   socket.close();
  // };

  // // Get camera and microphone
  // const videoElement = document.querySelector("video");

  // getStream();

  // function getStream() {
  //   if (window.stream) {
  //     window.stream.getTracks().forEach((track) => {
  //       track.stop();
  //     });
  //   }
  //   // const audioSource = audioSelect.value;
  //   const constraints = {
  //     audio: false,
  //     video: true,
  //   };
  //   return navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then(gotStream)
  //     .catch(handleError);
  // }

  // function gotStream(stream) {
  //   window.stream = stream;
  //   videoElement.srcObject = stream;
  //   socket.emit("broadcaster");
  // }

  // function handleError(error) {
  //   console.error("Error: ", error);
  // }

  // const getVideo = () => {};

  // // useEffect(() => {
  // //   // const socket = socketIOClient(ENDPOINT);
  // //   // console.log(document.body.div)
  // //   // document.body.requestFullscreen();
  // //   socket.on("coords", (data) => {});
  // // }, [socket]);
  return (
    <iframe
      src="https://agile-harbor-82821.herokuapp.com/"
      title="carStream"
    ></iframe>
  );
}

export default App;
