import { Navigate } from 'react-router-dom';
export default function withAuthRedirect(WrappedComponent) {
  return function ProtectedComponent(props) {
    const user = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <WrappedComponent {...props} />;
  };
}
