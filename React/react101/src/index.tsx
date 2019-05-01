import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterWrap } from "./Rtutor/router/RoutesForFirst";
import { RouterForNetwork } from "./Rtutor/network_zip/RouterForNetwork";
import RouterChap6 from "./reacts_book/chap6/Routes";
import RouterChap7 from "./reacts_book/chap7/Routes";
import { FavoritePetScreen } from "./Rtutor/persist/useLocalStorage/FavoritePetScreen";
import { CryptoScreen } from "./Rtutor/crypto/CryptoScreen";
import { UseCallbackDemo } from "./Rtutor/hooks/UseCallbackDemo";
import { AtCookieScreen } from "./storage_book/AtCookie";
import { AtLocalStorageScreen } from "./storage_book/AtLocalStorage";
import { AtIndexedDB } from "./storage_book/AtIndexedDb";
import { SingletonScreen } from "./Rtutor/singleton/SingletonScreen";
import { DownloadScreen } from "./biz/download/DownloadScreen";
import { LetConst_Problem } from "./Rtutor/simple/LetConst_Problem";
import { LetConst_Resolve } from "./Rtutor/simple/LetConst_Resolve";

ReactDOM.render(<AtIndexedDB/>, document.getElementById("root"));

