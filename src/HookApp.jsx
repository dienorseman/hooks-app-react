import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";

export const HookApp = () => {
    return (
        <div className="mainApp"> 
            {/* <CounterApp /> */}
            {/* <CounterWithCustomHook /> */}
            {/* <SimpleForm /> */}
            {/* <FormWithCustomHook /> */}
            {/* <MultipleCustomHooks /> */}
            {/* <FocusScreen /> */}
            <Layout />
    </div>
  );
};
