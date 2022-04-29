export default function PostTitle({ children }) {
  return (
    <h1 className="text-2xl font-bold tracking-tighter leading-tight mb-4 md:leading-none">
      {children}
    </h1>
  );
}
