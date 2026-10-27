"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function Navbar() {
    const [menuOpen, setMenuOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "EmmyTech" }), (0, jsx_runtime_1.jsxs)("ul", { className: menuOpen ? "show" : "", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#Hero", children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#Features", children: "Features" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#Pricing", children: "Pricing" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#Contact", children: "Contact" }) })] }), (0, jsx_runtime_1.jsx)("button", { className: "menu-btn", onClick: () => setMenuOpen(!menuOpen), children: "\u2630" })] }) }));
}
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map