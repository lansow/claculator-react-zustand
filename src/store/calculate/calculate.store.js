import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";
import { initCalculateState } from "./calculate.state";
import { calculateAction } from "./calculate.action";

const useCalculateStore = create(
  devtools(combine(initCalculateState, calculateAction)),
);

export default useCalculateStore;
