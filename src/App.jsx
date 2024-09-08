import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Listtengah from "./pages/listtengah/Listtengah";
import Listutara from "./pages/listutara/Listutara";
import Listselatan from "./pages/listselatan/Listselatan";
import Listtimur from "./pages/listtimur/Listtimur";
import Listbarat from "./pages/listbarat/Listbarat";
import Listgenuk from "./pages/listgenuk/Listgenuk";
import Listtembalang from "./pages/listtembalang/Listtembalang";
import Listpedurungan from "./pages/listpedurungan/Listpedurungan";
import Listcandisari from "./pages/listcandisari/Listcandisari";
import Listgajahmungkur from "./pages/listgajahmungkur/Listgajahmungkur";
import Listbanyumanik from "./pages/listbanyumanik/Listbanyumanik";
import Listgunungpati from "./pages/listgunungpati/Listgunungpati";
import Listdinas from "./pages/listdinas/Listdinas";
import Listtugu from "./pages/listtugu/Listtugu";
import Listmijen from "./pages/listmijen/Listmijen";
import Listngaliyan from "./pages/listngaliyan/Listngaliyan";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {productInputs, userInputs, utaraInputs, selatanInputs, baratInputs, timurInputs, dinasInputs,banyumanikInputs, mijenInputs, candisariInputs, genukInputs, gunungpatiInputs, ngaliyanInputs, pedurunganInputs, tembalangInputs, tuguInputs, gajahmungkurInputs} from "./formsource";
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import { dinasColumns, tengahColumns, timurColumns, baratColumns, selatanColumns, utaraColumns, gajahmungkurColumns, genukColumns, gunungpatiColumns, mijenColumns, ngaliyanColumns, pedurunganColumns, tembalangColumns, tuguColumns, candisariColumns, banyumanikColumns } from "./datatablesource";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const NotRequireAuth = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<NotRequireAuth><Login /></NotRequireAuth>}></Route>
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>

            <Route path="tengah">
              <Route index element={<RequireAuth><Listtengah columns={tengahColumns} /></RequireAuth>}></Route>
              <Route path="/tengah/:id" element={<RequireAuth><Single columns={tengahColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={userInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="utara">
              <Route index element={<RequireAuth><Listutara columns={utaraColumns} /></RequireAuth>}></Route>
              <Route path="/utara/:id" element={<RequireAuth><Single columns={utaraColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={utaraInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="selatan">
              <Route index element={<RequireAuth><Listselatan columns={selatanColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={selatanColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={selatanInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="timur">
              <Route index element={<RequireAuth><Listtimur columns={timurColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={timurColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={timurInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="barat">
              <Route index element={<RequireAuth><Listbarat columns={baratColumns} /></RequireAuth>}></Route>
              <Route path="/barat/:id" element={<RequireAuth><Single columns={baratColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={baratInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="genuk">
              <Route index element={<RequireAuth><Listgenuk columns={genukColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={genukColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={genukInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="tembalang">
              <Route index element={<RequireAuth><Listtembalang columns={tembalangColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={tembalangColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={tembalangInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="pedurungan">
              <Route index element={<RequireAuth><Listpedurungan columns={pedurunganColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={pedurunganColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={pedurunganInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="candisari">
              <Route index element={<RequireAuth><Listcandisari columns={candisariColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={candisariColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={candisariInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="gajahmungkur">
              <Route index element={<RequireAuth><Listgajahmungkur columns={gajahmungkurColumns} /></RequireAuth>}></Route>
              <Route path="/gajahmungkur/:id" element={<RequireAuth><Single columns={gajahmungkurColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={gajahmungkurInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="banyumanik">
              <Route index element={<RequireAuth><Listbanyumanik columns={banyumanikColumns} /></RequireAuth>}></Route>
              <Route path="/banyumanik/:id" element={<RequireAuth><Single columns={banyumanikColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={banyumanikInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="gunungpati">
              <Route index element={<RequireAuth><Listgunungpati columns={gunungpatiColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={gunungpatiColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={gunungpatiInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="dinas">
              <Route index element={<RequireAuth><Listdinas columns={dinasColumns} /></RequireAuth>}></Route>
              <Route path="/dinas/:id" element={<RequireAuth><Single columns={dinasColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={dinasInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="tugu">
              <Route index element={<RequireAuth><Listtugu columns={tuguColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={tuguColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={tuguInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="mijen">
              <Route index element={<RequireAuth><Listmijen columns={mijenColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={mijenColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={mijenInputs} title="ADD NEW" />}
              />
            </Route>
            <Route path="ngaliyan">
              <Route index element={<RequireAuth><Listngaliyan columns={ngaliyanColumns} /></RequireAuth>}></Route>
              <Route path=":id" element={<RequireAuth><Single columns={ngaliyanColumns} /></RequireAuth>}></Route>
              <Route 
                path="new" element={<New inputs={ngaliyanInputs} title="ADD NEW" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
