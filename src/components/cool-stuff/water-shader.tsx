"use client";
import { useEffect, useRef } from "react";

export default function WaterSimulation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.error("WebGL2 not supported");
      return;
    }

    // Try enabling float textures
    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
      console.warn(
        "EXT_color_buffer_float not supported, falling back to RGBA8 textures"
      );
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ------------------- Helper functions -------------------
    const createShader = (type: GLenum, source: string): WebGLShader => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Failed to create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(shader);
        throw new Error(`Shader compile error: ${info}`);
      }
      return shader;
    };

    const createProgram = (
      vsSource: string,
      fsSource: string
    ): WebGLProgram => {
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      const program = gl.createProgram();
      if (!program) throw new Error("Failed to create program");
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const info = gl.getProgramInfoLog(program);
        throw new Error(`Program link error: ${info}`);
      }
      return program;
    };

    const createFramebuffer = (width: number, height: number) => {
      const texture = gl.createTexture();
      if (!texture) throw new Error("Failed to create texture");

      gl.bindTexture(gl.TEXTURE_2D, texture);

      if (ext) {
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA32F,
          width,
          height,
          0,
          gl.RGBA,
          gl.FLOAT,
          null
        );
      } else {
        // fallback
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          width,
          height,
          0,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          null
        );
      }

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      const fbo = gl.createFramebuffer();
      if (!fbo) throw new Error("Failed to create framebuffer");
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );

      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (status !== gl.FRAMEBUFFER_COMPLETE)
        throw new Error(`Framebuffer incomplete: ${status}`);

      return { fbo, texture };
    };

    // ------------------- Fullscreen quad -------------------
    const quadVerts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const quadBuffer = gl.createBuffer();
    if (!quadBuffer) throw new Error("Failed to create buffer");
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVerts, gl.STATIC_DRAW);

    const vertexShaderSrc = `#version 300 es
      in vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const bufferShaderSrc = `#version 300 es
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform int iFrame;
      uniform vec4 iMouse;
      uniform sampler2D iChannel0;
      out vec4 fragColor;

      const float delta = 1.0;

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;

        if(iFrame == 0){ fragColor = vec4(0); return; }

        float pressure = texelFetch(iChannel0, ivec2(fragCoord), 0).x;
        float pVel = texelFetch(iChannel0, ivec2(fragCoord), 0).y;

        float p_right = texelFetch(iChannel0, ivec2(fragCoord)+ivec2(1,0),0).x;
        float p_left = texelFetch(iChannel0, ivec2(fragCoord)+ivec2(-1,0),0).x;
        float p_up = texelFetch(iChannel0, ivec2(fragCoord)+ivec2(0,1),0).x;
        float p_down = texelFetch(iChannel0, ivec2(fragCoord)+ivec2(0,-1),0).x;

        if(fragCoord.x==0.5)p_left=p_right;
        if(fragCoord.x==iResolution.x-0.5)p_right=p_left;
        if(fragCoord.y==0.5)p_down=p_up;
        if(fragCoord.y==iResolution.y-0.5)p_up=p_down;

        pVel += delta*(-2.0*pressure + p_right + p_left)/4.0;
        pVel += delta*(-2.0*pressure + p_up + p_down)/4.0;
        pressure += delta*pVel;
        pVel -= 0.005*delta*pressure;
        pVel *= 1.0-0.002*delta;
        pressure *= 0.999;

        fragColor = vec4(pressure,pVel,(p_right-p_left)/2.0,(p_up-p_down)/2.0);

        if(iMouse.z>1.0){
          float dist = distance(fragCoord, iMouse.xy);
          if(dist<=20.0) fragColor.x += 1.0 - dist/20.0;
        }
      }
    `;

    const imageShaderSrc = `#version 300 es
      precision highp float;
      uniform vec2 iResolution;
      uniform sampler2D iChannel0;
      out vec4 fragColor;
      void main(){
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        vec4 data = texture(iChannel0, uv);
        vec3 normal = normalize(vec3(-data.z,0.2,-data.w));
        float glint = pow(max(0.0,dot(normal,normalize(vec3(-3.0,10.0,3.0)))),60.0);
        fragColor = vec4(0.0, 0.3, 0.6, 1.0) + vec4(glint);
      }
    `;

    const bufferProgram = createProgram(vertexShaderSrc, bufferShaderSrc);
    const imageProgram = createProgram(vertexShaderSrc, imageShaderSrc);

    const buffer1 = createFramebuffer(canvas.width, canvas.height);
    const buffer2 = createFramebuffer(canvas.width, canvas.height);

    let currentBuffer = buffer1;
    let previousBuffer = buffer2;

    const setupVertexAttrib = (program: WebGLProgram) => {
      const posLoc = gl.getAttribLocation(program, "aPosition");
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    };

    let frame = 0;
    const mouse = { x: 0, y: 0, z: 0, w: 0 };
    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = canvas.height - e.clientY;
      mouse.z = 1;
    });
    canvas.addEventListener("mousedown", () => (mouse.z = 1));
    canvas.addEventListener("mouseup", () => (mouse.z = 0));

    const render = (time: number) => {
      frame++;

      // Simulation pass
      gl.bindFramebuffer(gl.FRAMEBUFFER, currentBuffer.fbo);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(bufferProgram);
      setupVertexAttrib(bufferProgram);

      gl.uniform2f(
        gl.getUniformLocation(bufferProgram, "iResolution"),
        canvas.width,
        canvas.height
      );
      gl.uniform1f(gl.getUniformLocation(bufferProgram, "iTime"), time * 0.001);
      gl.uniform1i(gl.getUniformLocation(bufferProgram, "iFrame"), frame);
      gl.uniform4f(
        gl.getUniformLocation(bufferProgram, "iMouse"),
        mouse.x,
        mouse.y,
        mouse.z,
        mouse.w
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, previousBuffer.texture);
      gl.uniform1i(gl.getUniformLocation(bufferProgram, "iChannel0"), 0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // Render to screen
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(imageProgram);
      setupVertexAttrib(imageProgram);
      gl.uniform2f(
        gl.getUniformLocation(imageProgram, "iResolution"),
        canvas.width,
        canvas.height
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, currentBuffer.texture);
      gl.uniform1i(gl.getUniformLocation(imageProgram, "iChannel0"), 0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      [currentBuffer, previousBuffer] = [previousBuffer, currentBuffer];

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      gl.deleteTexture(buffer1.texture);
      gl.deleteFramebuffer(buffer1.fbo);
      gl.deleteTexture(buffer2.texture);
      gl.deleteFramebuffer(buffer2.fbo);

      const newBuffer1 = createFramebuffer(canvas.width, canvas.height);
      const newBuffer2 = createFramebuffer(canvas.width, canvas.height);
      currentBuffer = newBuffer1;
      previousBuffer = newBuffer2;
      frame = 0;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 h-20 w-20 z-50 pointer-events-none"
    />
  );
}
