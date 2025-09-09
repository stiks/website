export const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://kirill.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            kirill.dev
          </a>
        </p>
      </div>
    </footer>
  );
};
