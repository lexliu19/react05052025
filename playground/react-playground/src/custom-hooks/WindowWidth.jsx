import useWindowWidth from './useWindowWidth';

function WindowWidth() {
  const width = useWindowWidth();
  return <p>Window Width:{width}</p>;
}

export default WindowWidth;
