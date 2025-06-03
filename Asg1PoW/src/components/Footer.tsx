interface FooterProps {
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="text-center p-4 mt-10 text-sm text-gray-500">
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
