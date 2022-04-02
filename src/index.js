import React from 'react';
import './index.css'; // アプリ全体に適用されるスタイルを保持
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

// このファイルがアプリのエントリーポイントとなる
// Appコンポーネントを最初のコンポーネントとしてReaceアプリケーションをレンダリングすることをReactに伝える
 // public/index.htmlを見ると、<div>であり<body>の内側であることがわかる
const container = document.getElementById('root');

// create root
const root = ReactDOMClient.createRoot(container);

const DATA = [
  {id: "todo-0", name: "Eat",     completed: true },
  {id: "todo-1", name: "Sleep",   completed: false},
  {id: "todo-2", name: "Repeat",  completed: true }
]


root.render(<App tasks={DATA} />);
