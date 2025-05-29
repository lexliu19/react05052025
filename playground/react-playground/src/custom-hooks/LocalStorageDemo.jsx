import useLocalStorage from './useLocalStorage';

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
