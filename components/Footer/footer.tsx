export default function Footer() {
    return (
      <footer className="bg-[#fffcfa80] text-gray-700 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © 2025 SupportNinja, a registered trademark of Ninja Partners, LLC
          </p>
  
          {/* Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Security Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    );
  }
  