import { FaBasketball } from "react-icons/fa6";

export default function Loading() {
  return (
    <div
      className="flex justify-center py-12"
      role="status"
      aria-label="Loading games"
    >
      <FaBasketball
        className="size-10 animate-bounce text-terracotta"
        aria-hidden="true"
      />
    </div>
  );
}
