"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Hero_1 = __importDefault(require("./components/Hero"));
const Features_1 = __importDefault(require("./components/Features"));
const Footer_1 = __importDefault(require("./components/Footer"));
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(Features_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map