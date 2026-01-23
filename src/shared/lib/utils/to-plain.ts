export default function toPlain<T>(data: T): T {
  return structuredClone(data);
}
