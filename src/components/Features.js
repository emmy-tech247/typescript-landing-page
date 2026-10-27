"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Features() {
    const features = [
        {
            title: "Fast",
            text: "Optimized for performance."
        },
        {
            title: "Secure",
            text: "Built using modern standards."
        },
        {
            title: "Responsive",
            text: "Looks perfect on every screen."
        }
    ];
    return ((0, jsx_runtime_1.jsx)("section", { className: "features", children: features.map((feature) => ((0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsx)("h3", { children: feature.title }), (0, jsx_runtime_1.jsx)("p", { children: feature.text })] }, feature.title))) }));
}
exports.default = Features;
//# sourceMappingURL=Features.js.map