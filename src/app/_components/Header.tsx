const Header = () => {
  return (
    <header className="flex h-10 w-full flex-row items-center justify-between gap-4 bg-white px-4">
      <h1>Nikita Istomin.</h1>
      <div className="grid h-6 w-6 place-content-center rounded-full bg-gray-300">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </header>
  );
};

export default Header;
