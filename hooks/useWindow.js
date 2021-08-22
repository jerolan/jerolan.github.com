export default function useWindow() {
  return typeof window !== "undefined" ? window : undefined;
}
