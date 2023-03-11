import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

export const HookApp = () => {
  return (
    <div>
      <h1>Hook App</h1>
      {/* <CounterApp /> */}
      <CounterWithCustomHook />
    </div>
  );
};