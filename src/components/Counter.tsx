import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button
      class="rounded border bg-base-100 p-5 hover:bg-base-200 focus:bg-base-200 active:translate-y-[1px]"
      type="button"
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      {count()}
    </button>
  );
}
