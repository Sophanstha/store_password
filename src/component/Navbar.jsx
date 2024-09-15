import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          MyLogo
        </div>

        {/* GitHub Icon */}
        <div>
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
