// i created this file by myself shortcuts of rfc is sfc

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
