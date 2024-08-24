import "./App.css";
import MyForm from "./myComponent/MyForm.jsx";
import { MyGetQr } from "./myComponent/MyGetQr.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MyRout } from "./myComponent/MyRout.jsx";
import { MyPage } from "./myComponent/Mypage.jsx";
import { MyDelete } from "./myComponent/MyDelete.jsx";

function App() {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <BrowserRouter>
        <Routes>
        <Route  path="*" element={<MyRout />}></Route>
          <Route  path="/start" element={<MyRout />}></Route>
          <Route path="/create_qr" element={<MyForm />}></Route>
          <Route exact path="/get_qr" element={<MyGetQr />}></Route>
          <Route exact path="/page" element={<MyPage />}></Route>
          <Route path="/page/:key" element={<MyPage />}></Route>
          <Route path="/delete_qr" element={<MyDelete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
