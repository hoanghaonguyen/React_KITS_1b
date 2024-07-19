import React, { useState } from "react";

export default function Hook2() {
    const [a, setA] =  useState("");
    const [b, setB] =  useState("");
    const [result, setResult] =  useState("");
  return (
    <div>
      <label htmlFor="">Nhập a: </label>
      <br />
      <input type="text" value={a} onChange={(e) => setA(e.target.value * 1)} />
      <br />
      <label htmlFor="">Nhập b: </label>
      <br />
      <input type="text" value={b} onChange={(e) => setB(e.target.value * 1)} />
      <br />
      <br />

      <button onClick={() => setResult(a + b)}>+</button>
      <button onClick={() => setResult(a - b)}>-</button>
      <button onClick={() => setResult(a * b)}>*</button>
      <button onClick={() => setResult((a / b).toFixed(2))}>/</button>

      <h1>Result: {result}</h1>
    </div>
  );
}
