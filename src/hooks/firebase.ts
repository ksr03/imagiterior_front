// 必要なSDKから必要な機能をインポート
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// WebアプリのFirebase構成
// Firebase JS SDK v7.20.0 以降の場合、measurementId はオプションです
const firebaseConfig = {
  apiKey: 'XXXX',
  authDomain: 'XXXX',
  projectId: 'XXXX',
  storageBucket: 'XXXX',
  messagingSenderId: 'XXXX',
  appId: 'XXXX',
  measurementId: 'XXXX'
}

// Firebaseの初期化
const firebaseApp = initializeApp(firebaseConfig)

// 認証オブジェクトの準備
const auth = getAuth(firebaseApp)

// Google認証プロバイダの準備
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }
