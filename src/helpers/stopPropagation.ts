export default function stopPropagation(callback?: (...args: any[]) => void) {
  return (e) => {
    e.stopPropagation();
    if (!!callback) callback();
  };
}
