import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
	apiKey: "AIzaSyArzO_YTd3KxzhM49qZafHCdJXMB7vqHus",
	authDomain: "vinhbidien-a7303.firebaseapp.com",
	databaseURL: "https://vinhbidien-a7303-default-rtdb.firebaseio.com",
	projectId: "vinhbidien-a7303",
	storageBucket: "vinhbidien-a7303.appspot.com",
	messagingSenderId: "255683719744",
	appId: "1:255683719744:web:f9e0feed7971548c79a5a5",
	measurementId: "G-6WGDZ0T6F0"
  }).auth();