interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center py-6 bg-blue-300">
      <h1 className="text-4xl font-semibold">{title}</h1>
      {subtitle && <p className="text-lg text-gray-700">{subtitle}</p>}
    </header>
  );
};

export default Header;
