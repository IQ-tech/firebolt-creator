export default function stopPropagation(callback) {
  return (e) => {
    e.stopPropagation();
    callback();
  };
}
