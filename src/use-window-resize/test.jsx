import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Window Resize Hook</h1>

      <p>The width of the user is: {width}</p>
      <p>The height of the user is: {height}</p>
    </div>
  );
}
