module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/ui/starfield.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const canvas = document.getElementById("starfield");
const c = canvas.getContext("2d");
const color = "rgb(255, 255, 153)";
canvas.width = window.innerWidth; //screen width
canvas.height = window.innerHeight; //screem height
//on mouse scroll changes speed and color
window.addEventListener("wheel", (event)=>{
    c.strokeStyle = color;
    if (event.deltaY < 0) speed *= 1.1;
    else speed *= 0.9;
    if (speed < 0.01) speed = 0.01;
    else if (speed > 0.1) speed = 0.1;
});
class Star {
    constructor(){
        //initializing
        this.x = Math.random() * canvas.width - canvas.width / 2; //random x
        this.y = Math.random() * canvas.height - canvas.height / 2; //random y
        this.z = Math.random() * 4; //random z
    }
    update() {
        //stores previous x, y and z and generates new coordinates
        this.px = this.x;
        this.py = this.y;
        this.z += speed;
        this.x += this.x * (speed * 0.2) * this.z;
        this.y += this.y * (speed * 0.2) * this.z;
        if (this.x > canvas.width / 2 + 50 || this.x < -canvas.width / 2 - 50 || this.y > canvas.height / 2 + 50 || this.y < -canvas.height / 2 - 50) {
            this.x = Math.random() * canvas.width - canvas.width / 2;
            this.y = Math.random() * canvas.height - canvas.height / 2;
            this.px = this.x;
            this.py = this.y;
            this.z = 0;
        }
    }
    //draws line from x,y to px,py
    show() {
        c.lineWidth = this.z;
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.px, this.py);
        c.stroke();
    }
}
let speed = 0.04;
let stars = [];
//create stars (objects)
for(let i = 0; i < 500; i++)stars.push(new Star());
c.fillStyle = "rgba(0, 0, 0, 0.1)";
c.strokeStyle = color;
c.translate(canvas.width / 2, canvas.height / 2);
function draw() {
    //create rectangle
    c.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    for (let s of stars){
        s.update();
        s.show();
    }
    //infinte call to draw
    requestAnimationFrame(draw);
}
draw();
}}),
"[project]/src/lib/logic.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Main": (()=>Main)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const secretAt = 6, crashAt = 9;
const secretText = "Your Secret Phrase is:", secretPhrase = "HACK THE PLANET!", crashText = "Oh, n0ez!", brokenText = "You broke it!";
function Main() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // front
        console.log(`
·▄▄▄▄  ▪  • ▌ ▄ ·. ▄▄▄ . ▐ ▄ .▄▄ · ▪         ▐ ▄
██▪ ██ ██ ·██ ▐███▪▀▄.▀·•█▌▐█▐█ ▀. ██ ▪     •█▌▐█
▐█· ▐█▌▐█·▐█ ▌▐▌▐█·▐▀▀▪▄▐█▐▐▌▄▀▀▀█▄▐█· ▄█▀▄ ▐█▐▐▌
██. ██ ▐█▌██ ██▌▐█▌▐█▄▄▌██▐█▌▐█▄▪▐█▐█▌▐█▌.▐▌██▐█▌
▀▀▀▀▀• ▀▀▀▀▀  █▪▀▀▀ ▀▀▀ ▀▀ █▪ ▀▀▀▀ ▀▀▀ ▀█▄▀▪▀▀ █▪
Hey, you-- join us!  https://dimensionsoftware.com
`);
        let mult = 1, isSecret = false, lastWasSecret = false;
        const $ = (sel)=>document.querySelector(sel), getElementById = (id)=>document.getElementById(id), setContent = (sel, text)=>{
            const e = $(sel);
            if (e) {
                if (e.classList.contains("boom")) {
                    e.classList.remove("boom");
                    e.textContent = text;
                } else {
                    const bang = mult === 1 ? "" : "!".repeat(parseInt(String(mult)));
                    e.textContent = text + bang;
                    e.classList.add("boom");
                }
            }
        };
        // main events
        // ---------
        let timer = null;
        const playSound = (src, volume)=>{
            const audio = new Audio(src);
            audio.volume = volume / 125;
            audio.play();
        }, scaleAvatar = ()=>{
            getElementById("avatar")?.setAttribute("style", `transform: scale(${1 + mult / 2 * 1.0025}) translate(-50px, -25px)`);
        };
        document.addEventListener("mousedown", ()=>{
            playSound("/sfx/click.mp3", 40 / mult);
            if (timer) clearTimeout(timer);
            // set content
            setContent("h4", crashText);
            setContent("h3", secretPhrase);
            // secret?
            if (mult >= secretAt) {
                isSecret = true;
                // render starfield
                __turbopack_context__.r("[project]/src/components/ui/starfield.js [app-ssr] (ecmascript)");
                playSound("/sfx/secret.mp3", 50 / mult);
                document.documentElement.classList.add("secret");
                getElementById("splash-cursor")?.classList.add("opacity-100");
                getElementById("tagline-morphs")?.remove();
            }
            // crash?
            if (mult >= crashAt) {
                document.documentElement.classList.add("crash");
                playSound("/sfx/crash.mp3", 100);
            }
            // shake!
            getElementById("app")?.classList.add("shake");
            getElementById("avatar")?.classList.add("rotate-15");
            if (isSecret) {
                $("a.footer")?.removeAttribute("href");
            } else {
                getElementById("avatar")?.removeAttribute("style");
            }
        });
        document.addEventListener("mouseup", ()=>{
            setContent("h4", secretText);
            getElementById("avatar")?.classList.remove("rotate-15");
            getElementById("app")?.classList.remove("shake");
            mult = mult * 2 > 18 ? 18 : mult * 2;
            if (isSecret && !lastWasSecret) {
                lastWasSecret = true;
            } else if (lastWasSecret) {
                timer = setTimeout(scaleAvatar, 500); // reset
                scaleAvatar();
            }
        });
        document.addEventListener("click", function(e) {
            // @ts-expect-error it's there
            if (e.target && e.target.closest(".crash")) {
                const footer = $(".footer");
                if (footer) footer.setAttribute("title", brokenText);
                e.preventDefault();
            }
        });
        setInterval(()=>{
            // reset ui
            mult = 1;
        }, 500);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/src/lib/logic.tsx",
        lineNumber: 122,
        columnNumber: 10
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__22217dd2._.js.map