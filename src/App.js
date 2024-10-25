import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import RootLayout from "./Layout/RootLayout";
import Profile from "./Component/Profile";
import Event from "./Page/Event";
import Report from "./Page/Report";
import Speakers from "./Page/Speakers";
const App = () => {
    return (_jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(RootLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/event", element: _jsx(Event, {}) }), _jsx(Route, { path: "/report", element: _jsx(Report, {}) }), _jsx(Route, { path: "/speakers", element: _jsx(Speakers, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, { isCollapsed: false, name: "", email: "", imageUrl: "" }) })] }) }));
};
export default App;
