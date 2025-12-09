import React from "react";
/**
 *  服务端渲染时，需要使用 hydrateRoot 方法，而不是 createRoot 方法
 *  因为 createRoot 方法会在客户端重新渲染，而 hydrateRoot 方法会在客户端挂载已有的 DOM 元素
 *
 */
// import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";

import App from "./App";

hydrateRoot(document.getElementById("root"), <App />);
