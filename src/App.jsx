import React, { useEffect } from "react";
import useCalculateStore from "./store/calculate/calculate.store";
import { keys } from "./utils/keysArray";

export default function Calculator() {
  const current = useCalculateStore((s) => s.current);
  const displayString = useCalculateStore((s) => s.displayString);
  const lastResult = useCalculateStore((s) => s.result);
  const actions = useCalculateStore((s) => s);

  useEffect(() => {
    const handleKey = (e) => {
      if (/^\d$/.test(e.key)) actions.inputDigit(e.key);
      else if (/[+\-*/]/.test(e.key)) actions.inputOperator(e.key);
      else if (e.key === "Enter") actions.equals();
      else if (e.key === ".") actions.inputDecimal();
      else if (e.key.toLowerCase() === "c") actions.clearAll();
      else if (e.key.toLowerCase() === "z") actions.undo();
      else if (e.key.toLowerCase() === "y") actions.redo();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [actions]);

  return (
    <div className='calculator'>
      <div className='display'>
        <p className='current'>{current || lastResult}</p>
        <p className='history'>
          <span className='history-content'>{displayString}</span>
        </p>
      </div>
      <div className='keys'>
        {keys.map((row, i) => (
          <div className='row' key={i}>
            {row.map((key) => (
              <button
                key={key.label}
                className={`key ${key.variant ?? ""}`}
                onClick={() => {
                  const action = key.action;
                  if (action === "inputDigit" || action === "inputOperator")
                    actions[action](key.label);
                  else actions[action]?.();
                }}>
                {key.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
