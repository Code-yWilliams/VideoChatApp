# Super simple P2P (via peerjs), web-socket based (via socket.io) video chat application
# chat room URL is randomly assigned and loaded when client accesses the root of the app
# client can share the URL of the chatroom and anyone with access to it can join the room with audio and video
# video element automatically clears when its associated client leaves the room 

To run servers in terminal: 

peerjs --port 3001

npm run devStart  