import { create } from "zustand";

// const useCounterStore = create((set) => {
//   return {
//     count: 0,
//     increment: () =>
//       set((state) => {
//         return { count: state.count + 1 };
//       }),

//     decrement: () =>
//       set((state) => {
//         return {
//           count: state.count > 0 ? state.count - 1 : 0,
//         };
//       }),
//   };
// });

// export default useCounterStore;

const useCounterStore = create((set) => ({
  count: 0,
  increment: (payload) => set((state) => ({ count: state.count + payload })),
  decrement: (payload) =>
    set((state) => ({ count: state.count > 0 ? state.count - payload : 0 })),
}));

export default useCounterStore;
