export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none">
      {children}
    </h1>
  );
}
