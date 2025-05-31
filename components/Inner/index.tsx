type Props = {
  children: React.ReactNode;
};
const Inner = ({ children }: Props) => {
  return(
    <div className="w-[90%] mx-auto max-w-[1400px]">{children}</div>
  );
};
export default Inner;
