const Footer = () => (
  <footer className="flex w-full items-center justify-center bg-[#0e0e0e]">
    <div className="mx-5 my-4 flex w-full max-w-7xl flex-col items-center justify-center md:mx-8 lg:mx-10">
      <p className="text-white">
        Copyright © {new Date().getFullYear()} - Miguel Moreno
      </p>
    </div>
  </footer>
);

export default Footer;
