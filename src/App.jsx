import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import "./App.css";

// const Counter = memo(function Counter(props) {
//   console.log("Counter render");
//   return <h1 onClick={props.onClick}>{props.count}</h1>;
// });

function useCounter(count) {
  const size=useSize()  
return <h1>{count},{size.width}x{size.height}</h1>;
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);
  return size;
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef();
  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });

  return [count, setCount];
}

function App(props) {
  const size = useSize();

  const [count, setCount] = useCount(0);
  const counter = useCounter(count);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count:({count}),{size.width}x{size.height}
      </button>
      {counter}
    </div>
  );
}
export default App;
