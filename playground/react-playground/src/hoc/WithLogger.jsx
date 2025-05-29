function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log('Rendering...', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
export default withLogger;
