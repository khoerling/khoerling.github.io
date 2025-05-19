(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_387b3967._.js", {

"[project]/src/components/ui/splash-cursor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SplashCursor": (()=>SplashCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SplashCursor({ // Add whatever props you like for customization
SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 0.1, PRESSURE = 0.9, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = 0.1, SPLAT_FORCE = 6000, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
    r: 1,
    g: 0,
    b: 0
}, TRANSPARENT = true }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashCursor.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            function pointerPrototype() {
                this.id = -1;
                this.texcoordX = 0;
                this.texcoordY = 0;
                this.prevTexcoordX = 0;
                this.prevTexcoordY = 0;
                this.deltaX = 0;
                this.deltaY = 0;
                this.down = false;
                this.moved = false;
                this.color = [
                    0,
                    0,
                    0
                ];
            }
            let config = {
                SIM_RESOLUTION,
                DYE_RESOLUTION,
                CAPTURE_RESOLUTION,
                DENSITY_DISSIPATION,
                VELOCITY_DISSIPATION,
                PRESSURE,
                PRESSURE_ITERATIONS,
                CURL,
                SPLAT_RADIUS,
                SPLAT_FORCE,
                SHADING,
                COLOR_UPDATE_SPEED,
                PAUSED: false,
                BACK_COLOR,
                TRANSPARENT
            };
            let pointers = [
                new pointerPrototype()
            ];
            const { gl, ext } = getWebGLContext(canvas);
            if (!ext.supportLinearFiltering) {
                config.DYE_RESOLUTION = 256;
                config.SHADING = false;
            }
            function getWebGLContext(canvas) {
                const params = {
                    alpha: true,
                    depth: false,
                    stencil: false,
                    antialias: false,
                    preserveDrawingBuffer: false
                };
                let gl = canvas.getContext("webgl2", params);
                const isWebGL2 = !!gl;
                if (!isWebGL2) gl = canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params);
                let halfFloat;
                let supportLinearFiltering;
                if (isWebGL2) {
                    gl.getExtension("EXT_color_buffer_float");
                    supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
                } else {
                    halfFloat = gl.getExtension("OES_texture_half_float");
                    supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
                }
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat && halfFloat.HALF_FLOAT_OES;
                let formatRGBA;
                let formatRG;
                let formatR;
                if (isWebGL2) {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
                } else {
                    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
                }
                return {
                    gl,
                    ext: {
                        formatRGBA,
                        formatRG,
                        formatR,
                        halfFloatTexType,
                        supportLinearFiltering
                    }
                };
            }
            function getSupportedFormat(gl, internalFormat, format, type) {
                if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
                    switch(internalFormat){
                        case gl.R16F:
                            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
                        case gl.RG16F:
                            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
                        default:
                            return null;
                    }
                }
                return {
                    internalFormat,
                    format
                };
            }
            function supportRenderTextureFormat(gl, internalFormat, format, type) {
                const texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
                const fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
                return status === gl.FRAMEBUFFER_COMPLETE;
            }
            class Material {
                constructor(vertexShader, fragmentShaderSource){
                    this.vertexShader = vertexShader;
                    this.fragmentShaderSource = fragmentShaderSource;
                    this.programs = [];
                    this.activeProgram = null;
                    this.uniforms = [];
                }
                setKeywords(keywords) {
                    let hash = 0;
                    for(let i = 0; i < keywords.length; i++)hash += hashCode(keywords[i]);
                    let program = this.programs[hash];
                    if (program == null) {
                        let fragmentShader = compileShader(gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
                        program = createProgram(this.vertexShader, fragmentShader);
                        this.programs[hash] = program;
                    }
                    if (program === this.activeProgram) return;
                    this.uniforms = getUniforms(program);
                    this.activeProgram = program;
                }
                bind() {
                    gl.useProgram(this.activeProgram);
                }
            }
            class Program {
                constructor(vertexShader, fragmentShader){
                    this.uniforms = {};
                    this.program = createProgram(vertexShader, fragmentShader);
                    this.uniforms = getUniforms(this.program);
                }
                bind() {
                    gl.useProgram(this.program);
                }
            }
            function createProgram(vertexShader, fragmentShader) {
                let program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.trace(gl.getProgramInfoLog(program));
                return program;
            }
            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for(let i = 0; i < uniformCount; i++){
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }
            function compileShader(type, source, keywords) {
                source = addKeywords(source, keywords);
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.trace(gl.getShaderInfoLog(shader));
                return shader;
            }
            function addKeywords(source, keywords) {
                if (!keywords) return source;
                let keywordsString = "";
                keywords.forEach({
                    "SplashCursor.useEffect.addKeywords": (keyword)=>{
                        keywordsString += "#define " + keyword + "\n";
                    }
                }["SplashCursor.useEffect.addKeywords"]);
                return keywordsString + source;
            }
            const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `);
            const copyShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `);
            const clearShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
     `);
            const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
            const splatShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `);
            const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `, ext.supportLinearFiltering ? null : [
                "MANUAL_FILTERING"
            ]);
            const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `);
            const curlShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `);
            const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
            const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `);
            const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);
            const blit = ({
                "SplashCursor.useEffect.blit": ()=>{
                    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                        -1,
                        -1,
                        -1,
                        1,
                        1,
                        1,
                        1,
                        -1
                    ]), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
                        0,
                        1,
                        2,
                        0,
                        2,
                        3
                    ]), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(0);
                    return ({
                        "SplashCursor.useEffect.blit": (target, clear = false)=>{
                            if (target == null) {
                                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                            } else {
                                gl.viewport(0, 0, target.width, target.height);
                                gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
                            }
                            if (clear) {
                                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                                gl.clear(gl.COLOR_BUFFER_BIT);
                            }
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                        }
                    })["SplashCursor.useEffect.blit"];
                }
            })["SplashCursor.useEffect.blit"]();
            let dye, velocity, divergence, curl, pressure;
            const copyProgram = new Program(baseVertexShader, copyShader);
            const clearProgram = new Program(baseVertexShader, clearShader);
            const splatProgram = new Program(baseVertexShader, splatShader);
            const advectionProgram = new Program(baseVertexShader, advectionShader);
            const divergenceProgram = new Program(baseVertexShader, divergenceShader);
            const curlProgram = new Program(baseVertexShader, curlShader);
            const vorticityProgram = new Program(baseVertexShader, vorticityShader);
            const pressureProgram = new Program(baseVertexShader, pressureShader);
            const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader);
            const displayMaterial = new Material(baseVertexShader, displayShaderSource);
            function initFramebuffers() {
                let simRes = getResolution(config.SIM_RESOLUTION);
                let dyeRes = getResolution(config.DYE_RESOLUTION);
                const texType = ext.halfFloatTexType;
                const rgba = ext.formatRGBA;
                const rg = ext.formatRG;
                const r = ext.formatR;
                const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
                gl.disable(gl.BLEND);
                if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
                if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
                divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
                pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
            }
            function createFBO(w, h, internalFormat, format, type, param) {
                gl.activeTexture(gl.TEXTURE0);
                let texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
                let fbo = gl.createFramebuffer();
                gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                gl.viewport(0, 0, w, h);
                gl.clear(gl.COLOR_BUFFER_BIT);
                let texelSizeX = 1.0 / w;
                let texelSizeY = 1.0 / h;
                return {
                    texture,
                    fbo,
                    width: w,
                    height: h,
                    texelSizeX,
                    texelSizeY,
                    attach (id) {
                        gl.activeTexture(gl.TEXTURE0 + id);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        return id;
                    }
                };
            }
            function createDoubleFBO(w, h, internalFormat, format, type, param) {
                let fbo1 = createFBO(w, h, internalFormat, format, type, param);
                let fbo2 = createFBO(w, h, internalFormat, format, type, param);
                return {
                    width: w,
                    height: h,
                    texelSizeX: fbo1.texelSizeX,
                    texelSizeY: fbo1.texelSizeY,
                    get read () {
                        return fbo1;
                    },
                    set read (value){
                        fbo1 = value;
                    },
                    get write () {
                        return fbo2;
                    },
                    set write (value){
                        fbo2 = value;
                    },
                    swap () {
                        let temp = fbo1;
                        fbo1 = fbo2;
                        fbo2 = temp;
                    }
                };
            }
            function resizeFBO(target, w, h, internalFormat, format, type, param) {
                let newFBO = createFBO(w, h, internalFormat, format, type, param);
                copyProgram.bind();
                gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
                blit(newFBO);
                return newFBO;
            }
            function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
                if (target.width === w && target.height === h) return target;
                target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
                target.write = createFBO(w, h, internalFormat, format, type, param);
                target.width = w;
                target.height = h;
                target.texelSizeX = 1.0 / w;
                target.texelSizeY = 1.0 / h;
                return target;
            }
            function updateKeywords() {
                let displayKeywords = [];
                if (config.SHADING) displayKeywords.push("SHADING");
                displayMaterial.setKeywords(displayKeywords);
            }
            updateKeywords();
            initFramebuffers();
            let lastUpdateTime = Date.now();
            let colorUpdateTimer = 0.0;
            function updateFrame() {
                const dt = calcDeltaTime();
                if (resizeCanvas()) initFramebuffers();
                updateColors(dt);
                applyInputs();
                step(dt);
                render(null);
                requestAnimationFrame(updateFrame);
            }
            function calcDeltaTime() {
                let now = Date.now();
                let dt = (now - lastUpdateTime) / 1000;
                dt = Math.min(dt, 0.016666);
                lastUpdateTime = now;
                return dt;
            }
            function resizeCanvas() {
                let width = scaleByPixelRatio(canvas.clientWidth);
                let height = scaleByPixelRatio(canvas.clientHeight);
                if (canvas.width !== width || canvas.height !== height) {
                    canvas.width = width;
                    canvas.height = height;
                    return true;
                }
                return false;
            }
            function updateColors(dt) {
                colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
                if (colorUpdateTimer >= 1) {
                    colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
                    pointers.forEach({
                        "SplashCursor.useEffect.updateColors": (p)=>{
                            p.color = generateColor();
                        }
                    }["SplashCursor.useEffect.updateColors"]);
                }
            }
            function applyInputs() {
                pointers.forEach({
                    "SplashCursor.useEffect.applyInputs": (p)=>{
                        if (p.moved) {
                            p.moved = false;
                            splatPointer(p);
                        }
                    }
                }["SplashCursor.useEffect.applyInputs"]);
            }
            function step(dt) {
                gl.disable(gl.BLEND);
                // Curl
                curlProgram.bind();
                gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(curl);
                // Vorticity
                vorticityProgram.bind();
                gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
                gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
                gl.uniform1f(vorticityProgram.uniforms.dt, dt);
                blit(velocity.write);
                velocity.swap();
                // Divergence
                divergenceProgram.bind();
                gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
                blit(divergence);
                // Clear pressure
                clearProgram.bind();
                gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
                gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
                blit(pressure.write);
                pressure.swap();
                // Pressure
                pressureProgram.bind();
                gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
                for(let i = 0; i < config.PRESSURE_ITERATIONS; i++){
                    gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
                    blit(pressure.write);
                    pressure.swap();
                }
                // Gradient Subtract
                gradienSubtractProgram.bind();
                gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
                gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
                blit(velocity.write);
                velocity.swap();
                // Advection
                advectionProgram.bind();
                gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
                let velocityId = velocity.read.attach(0);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
                gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
                gl.uniform1f(advectionProgram.uniforms.dt, dt);
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
                blit(velocity.write);
                velocity.swap();
                if (!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
                gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
                gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
                gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
                blit(dye.write);
                dye.swap();
            }
            function render(target) {
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                gl.enable(gl.BLEND);
                drawDisplay(target);
            }
            function drawDisplay(target) {
                let width = target == null ? gl.drawingBufferWidth : target.width;
                let height = target == null ? gl.drawingBufferHeight : target.height;
                displayMaterial.bind();
                if (config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize, 1.0 / width, 1.0 / height);
                gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
                blit(target);
            }
            function splatPointer(pointer) {
                let dx = pointer.deltaX * config.SPLAT_FORCE;
                let dy = pointer.deltaY * config.SPLAT_FORCE;
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
            }
            function clickSplat(pointer) {
                const color = generateColor();
                color.r *= 10.0;
                color.g *= 10.0;
                color.b *= 10.0;
                let dx = 10 * (Math.random() - 0.5);
                let dy = 30 * (Math.random() - 0.5);
                splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
            }
            function splat(x, y, dx, dy, color) {
                splatProgram.bind();
                gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
                gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
                gl.uniform2f(splatProgram.uniforms.point, x, y);
                gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
                gl.uniform1f(splatProgram.uniforms.radius, correctRadius(config.SPLAT_RADIUS / 100.0));
                blit(velocity.write);
                velocity.swap();
                gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
                gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
                blit(dye.write);
                dye.swap();
            }
            function correctRadius(radius) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) radius *= aspectRatio;
                return radius;
            }
            function updatePointerDownData(pointer, id, posX, posY) {
                pointer.id = id;
                pointer.down = true;
                pointer.moved = false;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.deltaX = 0;
                pointer.deltaY = 0;
                pointer.color = generateColor();
            }
            function updatePointerMoveData(pointer, posX, posY, color) {
                pointer.prevTexcoordX = pointer.texcoordX;
                pointer.prevTexcoordY = pointer.texcoordY;
                pointer.texcoordX = posX / canvas.width;
                pointer.texcoordY = 1.0 - posY / canvas.height;
                pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
                pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
                pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
                pointer.color = color;
            }
            function updatePointerUpData(pointer) {
                pointer.down = false;
            }
            function correctDeltaX(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio < 1) delta *= aspectRatio;
                return delta;
            }
            function correctDeltaY(delta) {
                let aspectRatio = canvas.width / canvas.height;
                if (aspectRatio > 1) delta /= aspectRatio;
                return delta;
            }
            function generateColor() {
                let c = HSVtoRGB(Math.random(), 1.0, 1.0);
                c.r *= 0.15;
                c.g *= 0.15;
                c.b *= 0.15;
                return c;
            }
            function HSVtoRGB(h, s, v) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch(i % 6){
                    case 0:
                        r = v;
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = v;
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = v;
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = v;
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = v;
                        break;
                    case 5:
                        r = v;
                        g = p;
                        b = q;
                        break;
                    default:
                        break;
                }
                return {
                    r,
                    g,
                    b
                };
            }
            function wrap(value1, min, max) {
                const range = max - min;
                if (range === 0) return min;
                return (value1 - min) % range + min;
            }
            function getResolution(resolution) {
                let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
                if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
                const min = Math.round(resolution);
                const max = Math.round(resolution * aspectRatio);
                if (gl.drawingBufferWidth > gl.drawingBufferHeight) return {
                    width: max,
                    height: min
                };
                else return {
                    width: min,
                    height: max
                };
            }
            function scaleByPixelRatio(input) {
                const pixelRatio = window.devicePixelRatio || 1;
                return Math.floor(input * pixelRatio);
            }
            function hashCode(s) {
                if (s.length === 0) return 0;
                let hash = 0;
                for(let i = 0; i < s.length; i++){
                    hash = (hash << 5) - hash + s.charCodeAt(i);
                    hash |= 0;
                }
                return hash;
            }
            window.addEventListener("mousedown", {
                "SplashCursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    updatePointerDownData(pointer, -1, posX, posY);
                    clickSplat(pointer);
                }
            }["SplashCursor.useEffect"]);
            document.body.addEventListener("mousemove", function handleFirstMouseMove(e) {
                let pointer = pointers[0];
                let posX = scaleByPixelRatio(e.clientX);
                let posY = scaleByPixelRatio(e.clientY);
                let color = generateColor();
                updateFrame(); // start animation loop
                updatePointerMoveData(pointer, posX, posY, color);
                document.body.removeEventListener("mousemove", handleFirstMouseMove);
            });
            window.addEventListener("mousemove", {
                "SplashCursor.useEffect": (e)=>{
                    let pointer = pointers[0];
                    let posX = scaleByPixelRatio(e.clientX);
                    let posY = scaleByPixelRatio(e.clientY);
                    let color = pointer.color;
                    updatePointerMoveData(pointer, posX, posY, color);
                }
            }["SplashCursor.useEffect"]);
            document.body.addEventListener("touchstart", function handleFirstTouchStart(e) {
                const touches = e.targetTouches;
                let pointer = pointers[0];
                for(let i = 0; i < touches.length; i++){
                    let posX = scaleByPixelRatio(touches[i].clientX);
                    let posY = scaleByPixelRatio(touches[i].clientY);
                    updateFrame(); // start animation loop
                    updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                }
                document.body.removeEventListener("touchstart", handleFirstTouchStart);
            });
            window.addEventListener("touchstart", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
                    }
                }
            }["SplashCursor.useEffect"]);
            window.addEventListener("touchmove", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.targetTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        let posX = scaleByPixelRatio(touches[i].clientX);
                        let posY = scaleByPixelRatio(touches[i].clientY);
                        updatePointerMoveData(pointer, posX, posY, pointer.color);
                    }
                }
            }["SplashCursor.useEffect"], false);
            window.addEventListener("touchend", {
                "SplashCursor.useEffect": (e)=>{
                    const touches = e.changedTouches;
                    let pointer = pointers[0];
                    for(let i = 0; i < touches.length; i++){
                        updatePointerUpData(pointer);
                    }
                }
            }["SplashCursor.useEffect"]);
            updateFrame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SplashCursor.useEffect"], [
        SIM_RESOLUTION,
        DYE_RESOLUTION,
        CAPTURE_RESOLUTION,
        DENSITY_DISSIPATION,
        VELOCITY_DISSIPATION,
        PRESSURE,
        PRESSURE_ITERATIONS,
        CURL,
        SPLAT_RADIUS,
        SPLAT_FORCE,
        SHADING,
        COLOR_UPDATE_SPEED,
        BACK_COLOR,
        TRANSPARENT
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "splash-cursor",
        className: "fixed top-0 left-0 z-50 pointer-events-none opacity-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            id: "fluid",
            className: "w-screen h-screen"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/splash-cursor.jsx",
            lineNumber: 1258,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/splash-cursor.jsx",
        lineNumber: 1254,
        columnNumber: 5
    }, this);
}
_s(SplashCursor, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = SplashCursor;
;
var _c;
__turbopack_context__.k.register(_c, "SplashCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dock": (()=>Dock),
    "DockIcon": (()=>DockIcon),
    "DockItem": (()=>DockItem),
    "DockLabel": (()=>DockLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
const DOCK_HEIGHT = 200;
const DEFAULT_MAGNIFICATION = 200;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 300;
const DockContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DockProvider({ children, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dock.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_c = DockProvider;
function useDock() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DockContext);
    if (!context) {
        throw new Error("useDock must be used within an DockProvider");
    }
    return context;
}
_s(useDock, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Dock({ children, className, spring = {
    mass: 0.1,
    stiffness: 150,
    damping: 12
}, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, panelHeight = DEFAULT_PANEL_HEIGHT }) {
    _s1();
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(Infinity);
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const maxHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dock.useMemo[maxHeight]": ()=>{
            return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
        }
    }["Dock.useMemo[maxHeight]"], [
        magnification
    ]);
    const heightRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(isHovered, [
        0,
        1
    ], [
        panelHeight,
        maxHeight
    ]);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(heightRow, spring);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            height: height,
            scrollbarWidth: "none"
        },
        className: "height-100 left-0 top-0 mx-2 flex z-10 items-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            onMouseMove: ({ pageX })=>{
                isHovered.set(1);
                mouseX.set(pageX);
                document.getElementById("tagline")?.classList.remove("duration-700");
                document.getElementById("tagline")?.classList.add("opacity-0");
            },
            onMouseLeave: ()=>{
                isHovered.set(0);
                mouseX.set(Infinity);
                document.getElementById("tagline")?.classList.remove("opacity-0");
                document.getElementById("tagline")?.classList.add("duration-700");
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex w-fit gap-8 rounded-2xl px-4", className),
            style: {
                height: panelHeight
            },
            role: "toolbar",
            "aria-label": "Application dock",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockProvider, {
                value: {
                    mouseX,
                    spring,
                    distance,
                    magnification
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dock.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dock.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s1(Dock, "yDaCl94tHOrividYCf31TQOlkIA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c1 = Dock;
function DockItem({ children, className }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { distance, magnification, mouseX, spring } = useDock();
    const isHovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseX, {
        "DockItem.useTransform[mouseDistance]": (val)=>{
            const domRect = ref.current?.getBoundingClientRect() ?? {
                x: 0,
                width: 0
            };
            return val - domRect.x - domRect.width / 2;
        }
    }["DockItem.useTransform[mouseDistance]"]);
    const widthTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mouseDistance, [
        -distance,
        0,
        distance
    ], [
        40,
        magnification,
        40
    ]);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(widthTransform, spring);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        style: {
            width
        },
        onHoverStart: ()=>isHovered.set(1),
        onHoverEnd: ()=>isHovered.set(0),
        onFocus: ()=>isHovered.set(1),
        onBlur: ()=>isHovered.set(0),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex items-center justify-center", className),
        tabIndex: 0,
        role: "button",
        "aria-haspopup": "true",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                width,
                isHovered
            }))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dock.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s2(DockItem, "y9D4N/5/pbCL2yHeO/X5Y54DiHQ=", false, function() {
    return [
        useDock,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c2 = DockItem;
function DockLabel({ children, className, ...rest }) {
    _s3();
    const restProps = rest;
    const isHovered = restProps["isHovered"];
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DockLabel.useEffect": ()=>{
            const unsubscribe = isHovered.on("change", {
                "DockLabel.useEffect.unsubscribe": (latest)=>{
                    setIsVisible(latest === 1);
                }
            }["DockLabel.useEffect.unsubscribe"]);
            return ({
                "DockLabel.useEffect": ()=>unsubscribe()
            })["DockLabel.useEffect"];
        }
    }["DockLabel.useEffect"], [
        isHovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 0
            },
            animate: {
                opacity: 1,
                y: 30
            },
            exit: {
                opacity: 0,
                y: 0
            },
            transition: {
                duration: 0.1
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute font-black -top-25 left-1/2 w-fit whitespace-pre backdrop-blur-lg px-2 py-0.5 text-xl", className),
            role: "tooltip",
            style: {
                x: "-50%"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dock.tsx",
            lineNumber: 198,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dock.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s3(DockLabel, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c3 = DockLabel;
function DockIcon({ children, className, ...rest }) {
    _s4();
    const restProps = rest;
    const width = restProps["width"];
    const widthTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(width, {
        "DockIcon.useTransform[widthTransform]": (val)=>val / 2
    }["DockIcon.useTransform[widthTransform]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            width: widthTransform,
            minWidth: 50,
            minHeight: 50
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center justify-center", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dock.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s4(DockIcon, "ttEKQtJsVA896amebFS6d3Fh4+E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c4 = DockIcon;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DockProvider");
__turbopack_context__.k.register(_c1, "Dock");
__turbopack_context__.k.register(_c2, "DockItem");
__turbopack_context__.k.register(_c3, "DockLabel");
__turbopack_context__.k.register(_c4, "DockIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/qrcode.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "QRCode": (()=>QRCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function QRCode() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "qrcode",
        version: "1.1",
        baseProfile: "tiny",
        xmlns: "http://www.w3.org/2000/svg",
        width: "150",
        height: "150",
        viewBox: "0 0 200 200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                className: "qrcode-bg",
                shapeRendering: "optimizeSpeed",
                x: "0",
                y: "0",
                width: "200",
                height: "200",
                fill: "transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "17",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "22",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "27",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "32",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 695,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "37",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "42",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 815,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 903,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 935,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 943,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 959,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 967,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 983,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "47",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1039,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "52",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1047,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "57",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "62",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "67",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "72",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1631,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1663,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1695,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "77",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1815,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "82",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1903,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1935,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1943,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1959,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "87",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1967,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1983,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 1999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2039,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2047,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "92",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "97",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "102",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "107",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "112",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2631,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2663,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2695,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "117",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2815,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "122",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2903,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2935,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2943,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2959,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2967,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2983,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "127",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 2999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3039,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3047,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "132",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "52",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "137",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "142",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3471,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "147",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3599,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3631,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3663,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3695,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "152",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3735,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3807,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3815,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "177",
                y: "157",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3903,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3911,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3935,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3943,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3959,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3967,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3983,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 3999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "162",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4039,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4047,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4055,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4095,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "102",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "107",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "117",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "152",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "167",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "97",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "142",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "157",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "167",
                y: "172",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "17",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "22",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "27",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "32",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "37",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "42",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "47",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "57",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "62",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "67",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "72",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "77",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "82",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "87",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "92",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "112",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "122",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "127",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "132",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "137",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "147",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "162",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                shapeRendering: "optimizeSpeed",
                x: "172",
                y: "177",
                width: "5",
                height: "5",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/qrcode.tsx",
                lineNumber: 4439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/qrcode.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = QRCode;
var _c;
__turbopack_context__.k.register(_c, "QRCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/gooey-text-morphing.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GooeyText": (()=>GooeyText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GooeyText({ texts, morphTime = 1, cooldownTime = 0.25, className, id, textClassName, onInitialRender }) {
    _s();
    const text1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let _renders = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GooeyText.useEffect": ()=>{
            let textIndex = texts.length - 1;
            let time = new Date();
            let morph = 0;
            let cooldown = cooldownTime;
            const setMorph = {
                "GooeyText.useEffect.setMorph": (fraction)=>{
                    if (text1Ref.current && text2Ref.current) {
                        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
                        fraction = 1 - fraction;
                        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
                    }
                }
            }["GooeyText.useEffect.setMorph"];
            const doCooldown = {
                "GooeyText.useEffect.doCooldown": ()=>{
                    morph = 0;
                    if (text1Ref.current && text2Ref.current) {
                        text2Ref.current.style.filter = "";
                        text2Ref.current.style.opacity = "100%";
                        text1Ref.current.style.filter = "";
                        text1Ref.current.style.opacity = "0%";
                    }
                }
            }["GooeyText.useEffect.doCooldown"];
            const doMorph = {
                "GooeyText.useEffect.doMorph": ()=>{
                    morph -= cooldown;
                    _renders++;
                    cooldown = 0;
                    let fraction = morph / morphTime;
                    if (fraction > 1) {
                        cooldown = cooldownTime;
                        fraction = 1;
                    }
                    setMorph(fraction);
                }
            }["GooeyText.useEffect.doMorph"];
            function animate() {
                requestAnimationFrame(animate);
                const newTime = new Date();
                const shouldIncrementIndex = cooldown > 0;
                const dt = (newTime.getTime() - time.getTime()) / 1000;
                time = newTime;
                cooldown -= dt;
                if (cooldown <= 0) {
                    if (_renders === 1 && onInitialRender) {
                        onInitialRender();
                    }
                    if (shouldIncrementIndex) {
                        textIndex = (textIndex + 1) % texts.length;
                        if (text1Ref.current && text2Ref.current) {
                            text1Ref.current.textContent = texts[textIndex % texts.length];
                            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
                        }
                    }
                    doMorph();
                } else {
                    doCooldown();
                }
            }
            animate();
            return ({
                "GooeyText.useEffect": ()=>{
                // Cleanup function if needed
                }
            })["GooeyText.useEffect"];
        }
    }["GooeyText.useEffect"], [
        _renders,
        onInitialRender,
        texts,
        morphTime,
        cooldownTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute h-0 w-0",
                "aria-hidden": "true",
                focusable: "false",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "threshold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                            in: "SourceGraphic",
                            type: "matrix",
                            values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                style: {
                    filter: "url(#threshold)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: text1Ref,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inline-block select-none text-center", "text-foreground", textClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: text2Ref,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inline-block select-none text-center", "text-foreground", textClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/gooey-text-morphing.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(GooeyText, "VfH+sycjMke8+UcAKzBifDvm7I4=");
_c = GooeyText;
var _c;
__turbopack_context__.k.register(_c, "GooeyText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$splash$2d$cursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/splash-cursor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$qrcode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/qrcode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$gooey$2d$text$2d$morphing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/gooey-text-morphing.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const data = [
    {
        title: "Apple iOS Apps!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Dimension Software Business Card in React Native on Apple/iOS",
            target: "_blank",
            href: "https://apps.apple.com/us/developer/keith-hoerling/id1326340805",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 384 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Call to Action Podcast!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Call to Action Podcast on Spotify!",
            target: "_blank",
            href: "https://open.spotify.com/show/1BHgFfi5LhX12ZIpOeK7hd?si=RZCMDxXKScijvm2ylb82Mg",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 496 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Gleam, Elixir, Erlang + Phoenix!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Gleam, Elixir, Erlang + Phoenix Specalists!",
            target: "_blank",
            href: "https://dimensionsoftware.com",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 640 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M212.9 344.3c3.8-.1 22.8-1.4 25.6-2.2-2.4-2.6-43.6-1-68-49.6-4.3-8.6-7.5-17.6-6.4-27.6 2.9-25.5 32.9-30 52-18.5 36 21.6 63.3 91.3 113.7 97.5 37 4.5 84.6-17 108.2-45.4-.6-.1-.8-.2-1-.1-.4.1-.8.2-1.1.3-33.3 12.1-94.3 9.7-134.7-14.8-37.6-22.8-53.1-58.7-51.8-74.6 1.8-21.3 22.9-23.2 35.9-19.6 14.4 3.9 24.4 17.6 38.9 27.4 15.6 10.4 32.9 13.7 51.3 10.3 14.9-2.7 34.4-12.3 36.5-14.5-1.1-.1-1.8-.1-2.5-.2-6.2-.6-12.4-.8-18.5-1.7C279.8 194.5 262.1 47.4 138.5 37.9 94.2 34.5 39.1 46 2.2 72.9c-.8.6-1.5 1.2-2.2 1.8.1.2.1.3.2.5.8 0 1.6-.1 2.4-.2 6.3-1 12.5-.8 18.7.3 23.8 4.3 47.7 23.1 55.9 76.5 5.3 34.3-.7 50.8 8 86.1 19 77.1 91 107.6 127.7 106.4zM75.3 64.9c-.9-1-.9-1.2-1.3-2 12.1-2.6 24.2-4.1 36.6-4.8-1.1 14.7-22.2 21.3-35.3 6.8zm196.9 350.5c-42.8 1.2-92-26.7-123.5-61.4-4.6-5-16.8-20.2-18.6-23.4l.4-.4c6.6 4.1 25.7 18.6 54.8 27 24.2 7 48.1 6.3 71.6-3.3 22.7-9.3 41-.5 43.1 2.9-18.5 3.8-20.1 4.4-24 7.9-5.1 4.4-4.6 11.7 7 17.2 26.2 12.4 63-2.8 97.2 25.4 2.4 2 8.1 7.8 10.1 10.7-.1.2-.3.3-.4.5-4.8-1.5-16.4-7.5-40.2-9.3-24.7-2-46.3 5.3-77.5 6.2zm174.8-252c16.4-5.2 41.3-13.4 66.5-3.3 16.1 6.5 26.2 18.7 32.1 34.6 3.5 9.4 5.1 19.7 5.1 28.7-.2 0-.4 0-.6.1-.2-.4-.4-.9-.5-1.3-5-22-29.9-43.8-67.6-29.9-50.2 18.6-130.4 9.7-176.9-48-.7-.9-2.4-1.7-1.3-3.2.1-.2 2.1.6 3 1.3 18.1 13.4 38.3 21.9 60.3 26.2 30.5 6.1 54.6 2.9 79.9-5.2zm102.7 117.5c-32.4.2-33.8 50.1-103.6 64.4-18.2 3.7-38.7 4.6-44.9 4.2v-.4c2.8-1.5 14.7-2.6 29.7-16.6 7.9-7.3 15.3-15.1 22.8-22.9 19.5-20.2 41.4-42.2 81.9-39 23.1 1.8 29.3 8.2 36.1 12.7.3.2.4.5.7.9-.5 0-.7.1-.9 0-7-2.7-14.3-3.3-21.8-3.3zm-12.3-24.1c-.1.2-.1.4-.2.6-28.9-4.4-48-7.9-68.5 4-17 9.9-31.4 20.5-62 24.4-27.1 3.4-45.1 2.4-66.1-8-.3-.2-.6-.4-1-.6 0-.2.1-.3.1-.5 24.9 3.8 36.4 5.1 55.5-5.8 22.3-12.9 40.1-26.6 71.3-31 29.6-4.1 51.3 2.5 70.9 16.9zM268.6 97.3c-.6-.6-1.1-1.2-2.1-2.3 7.6 0 29.7-1.2 53.4 8.4 19.7 8 32.2 21 50.2 32.9 11.1 7.3 23.4 9.3 36.4 8.1 4.3-.4 8.5-1.2 12.8-1.7.4-.1.9 0 1.5.3-.6.4-1.2.9-1.8 1.2-8.1 4-16.7 6.3-25.6 7.1-26.1 2.6-50.3-3.7-73.4-15.4-19.3-9.9-36.4-22.9-51.4-38.6zM640 335.7c-3.5 3.1-22.7 11.6-42.7 5.3-12.3-3.9-19.5-14.9-31.6-24.1-10-7.6-20.9-7.9-28.1-8.4.6-.8.9-1.2 1.2-1.4 14.8-9.2 30.5-12.2 47.3-6.5 12.5 4.2 19.2 13.5 30.4 24.2 10.8 10.4 21 9.9 23.1 10.5.1-.1.2 0 .4.4zm-212.5 137c2.2 1.2 1.6 1.5 1.5 2-18.5-1.4-33.9-7.6-46.8-22.2-21.8-24.7-41.7-27.9-48.6-29.7.5-.2.8-.4 1.1-.4 13.1.1 26.1.7 38.9 3.9 25.3 6.4 35 25.4 41.6 35.3 3.2 4.8 7.3 8.3 12.3 11.1z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "React + Native & Typescript!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "React + Native & Typescript!",
            target: "_blank",
            href: "https://github.com/DimensionSoftware/shopify-passwordless-login",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "WeedMaps",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "CoFounder & CTO of WeedMaps!",
            target: "_blank",
            href: "http://weedmaps.com",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M256 0c5.3 0 10.3 2.7 13.3 7.1c15.8 23.5 36.7 63.7 49.2 109c7.2 26.4 11.8 55.2 10.4 84c11.5-8.8 23.7-16.7 35.8-23.6c41-23.3 84.4-36.9 112.2-42.5c5.2-1 10.7 .6 14.4 4.4s5.4 9.2 4.4 14.5c-5.6 27.7-19.3 70.9-42.7 111.7c-9.1 15.9-19.9 31.7-32.4 46.3c27.8 6.6 52.4 17.3 67.2 25.5c5.1 2.8 8.2 8.2 8.2 14s-3.2 11.2-8.2 14c-15.2 8.4-40.9 19.5-69.8 26.1c-20.2 4.6-42.9 7.2-65.2 4.6l8.3 33.1c1.5 6.1-.6 12.4-5.5 16.4s-11.6 4.6-17.2 1.9L280 417.2l0 70.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-70.8-58.5 29.1c-5.6 2.8-12.3 2.1-17.2-1.9s-7-10.3-5.5-16.4l8.3-33.1c-22.2 2.6-45 0-65.2-4.6c-28.9-6.6-54.6-17.6-69.8-26.1c-5.1-2.8-8.2-8.2-8.2-14s3.2-11.2 8.2-14c14.8-8.2 39.4-18.8 67.2-25.5C78.9 296.3 68.1 280.5 59 264.6c-23.4-40.8-37.1-84-42.7-111.7c-1.1-5.2 .6-10.7 4.4-14.5s9.2-5.4 14.4-4.4c27.9 5.5 71.2 19.2 112.2 42.5c12.1 6.9 24.3 14.7 35.8 23.6c-1.4-28.7 3.1-57.6 10.4-84c12.5-45.3 33.4-85.5 49.2-109c3-4.4 8-7.1 13.3-7.1z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Blockchain + Web3 @ Nike Virtual Studios!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Blockchain + Web3 @ Nike Virtual Studios",
            target: "_blank",
            href: "https://swoosh.nike",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "111.4",
                height: "39.6",
                viewBox: "135.5 361.38 1000 356.39",
                className: "h-full w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Shopify Passwordless Login!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Shopify Passwordless Login!",
            target: "_blank",
            href: "https://login.dimensionsoftware.com",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Call to Action PODCAST Videos!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Call to Action Podcast Videos!",
            target: "_blank",
            href: "https://www.youtube.com/channel/UCjMd7aCtMkwOFeo9mNYZZPw",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 576 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "Open Source by Dimension Software!",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "Dimension Software Open Source",
            target: "_blank",
            href: "https://github.com/dimensionsoftware",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 496 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this),
        href: "#"
    },
    {
        title: "@Keith Hörling",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            title: "LinkedIn",
            target: "_blank",
            href: "https://www.linkedin.com/in/keith-hoerling/",
            className: "relative h-full w-full transition-all duration-200 hover:opacity-80",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this),
        href: "#"
    }
];
function Home() {
    _s();
    const [splatRadius, setSplatRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "radial_stripes"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "left-0 bottom-0 top-0 right-0 flex flex-col gap-5 row-start-2 items-center sm:items-start",
                onMouseDown: ()=>{
                    if (document.documentElement.classList.contains("secret")) {
                        if (splatRadius <= 2) setSplatRadius(2);
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "intro center z-10 leading-17",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/images/Keith Hoerling Resume.pdf",
                            title: "Keith Hoerling's Resume",
                            target: "_blank",
                            children: "Keith Hörling"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "tagline",
                        className: "reem-font transition-opacity duration-700 tagline center mb-20 md:mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                id: "tagline-text",
                                title: "Dimension Software App Development",
                                href: "https://dimensionsoftware.com",
                                target: "_blank",
                                children: [
                                    "Creator ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "//"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 21
                                    }, this),
                                    " Engineer ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "//"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 52
                                    }, this),
                                    " Leader"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$gooey$2d$text$2d$morphing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GooeyText"], {
                                id: "tagline-morphs",
                                onInitialRender: ()=>{
                                    // fade initial tagline out
                                    document.getElementById("tagline-text")?.classList.add("fadeOut");
                                    document.getElementById("tagline-morphs")?.classList.add("fadeIn");
                                },
                                texts: [
                                    "Creative Fun!",
                                    "Co-Creating is My Specialty",
                                    "Futuristic Software Solutions",
                                    "Empowering YOU with AI",
                                    "Leadership in Software"
                                ],
                                morphTime: 2,
                                cooldownTime: 2,
                                className: "absolute bottom-4 w-full font-sm font-bold opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dock icons-social -mt-10 center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex left-1/2 max-w-full items-center justify-center w-full ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dock"], {
                                className: "flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 pb-3 w-full max-w-[900px] px-4",
                                children: data.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DockItem"], {
                                        className: "aspect-square sm:w-[60px] sm:w-[70px] md:w-[80px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DockLabel"], {
                                                className: "font-[1000] text-2xl",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DockIcon"], {
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "center phrase",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "Your Secret Phrase is:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "center phrase",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: [
                                "HACK THE PLANET",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("big", {
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "background"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "qrcode-link",
                title: "Dimension Software YouTube Learning Channel!",
                href: "https://www.youtube.com/channel/UCBKBYXGyni2GA7FEbcFM4sg?sub_confirmation=1",
                target: "_blank",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$qrcode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCode"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "footer align-middle inline-block",
                    rel: "noopener noreferrer",
                    title: "Dimension Software Consulting in Los Angeles",
                    href: "https://dimensionsoftware.com",
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "align-middle inline-block glyph",
                            height: 30,
                            width: 30,
                            title: "Made",
                            alt: "Made",
                            src: "/images/made.svg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        "with",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "align-middle inline-block glyph",
                            height: 30,
                            width: 30,
                            title: "Love",
                            alt: "Love",
                            src: "/images/love.svg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        "on Silicon Beach, Los Angeles",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            onMouseDown: ()=>{
                                if (document.documentElement.classList.contains("secret")) {
                                    if (splatRadius < 5) setSplatRadius(5);
                                }
                            },
                            id: "avatar",
                            className: "align-middle inline-block avatar",
                            alt: " by Keith Hoerling",
                            src: "./images/keith.png"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "space",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    id: "starfield",
                    className: "starfield"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$splash$2d$cursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashCursor"], {
                SPLAT_RADIUS: splatRadius
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            ","
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(Home, "18MmKFENv8/+9oqx8nh2CLp9olQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_387b3967._.js.map