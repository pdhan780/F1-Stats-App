const Header = () => {
    return (
      <header className="w-full bg-candy-apple py-8 flex items-center login-header flex">
          <img src='src/assets/f1-default-share.png' alt='F1 Logo' className='h-12 ml-4 flex' />
          <h1 className="text-white font-bold text-xl font-f1 ml-4 flex-1">F1 ANALYSIS</h1>
          <a href="https://www.youtube.com/watch?v=mrgvNuUdqfY" target="_blank" className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline justify-end mr-12 flex"> Video Reference</a>
      </header>
    );
  };
  
  export default Header;
  