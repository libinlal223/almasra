import React, { useEffect, useRef } from 'react';

interface ShaderCanvasProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ShaderCanvas: React.FC<ShaderCanvasProps> = ({ className = '', width = 512, height = 512 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float uTime;
      
      void main() {
        vec2 uv = vUv;
        float wave = sin(uv.x * 20.0 + uTime * 2.0) * 0.05 + cos(uv.y * 15.0 + uTime * 1.5) * 0.05;
        float gridX = step(0.98, fract((uv.x + wave) * 10.0));
        float gridY = step(0.98, fract((uv.y + wave) * 10.0));
        float grid = max(gridX, gridY);
        
        vec3 navy = vec3(0.058, 0.09, 0.164); // #0f172a
        vec3 steel = vec3(0.314, 0.372, 0.462); // #505f76
        vec3 color = mix(navy, steel, grid * 0.8 + wave * 2.0);
        
        gl_FragColor = vec4(color, 0.9);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'uTime');

    let animationFrameId: number;
    let startTime = performance.now();

    const render = () => {
      const now = performance.now();
      const elapsed = (now - startTime) / 1000.0;
      gl.uniform1f(uTime, elapsed);

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`border border-[#505f76] shadow-sm ${className}`}
    />
  );
};
