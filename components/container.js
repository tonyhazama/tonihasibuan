export default function Container({ children, noPadding }) {
  return <div className={`container mx-auto ${noPadding ? '' : ' px-5'}`}>{children}</div>;
}
