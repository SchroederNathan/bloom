"use client";

import { checkUser } from "@/utils/supabase/auth";
import useAuthStore from "@/utils/supabase/auth-store"; // Import Zustand store for user authentication
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "../ThemeToggler";

const navigation = [
  { name: "Inspiration", href: "/" },
  { name: "Create", href: "/create" },
  { name: "Colors", href: "/colors" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animation, setAnimation] = useState("");

  const { user, setUser, logout } = useAuthStore();

  const handleOpen = () => {
    setAnimation("animate-slideIn");
    setMobileMenuOpen(true);
  };

  const handleClose = () => {
    setAnimation("animate-slideOut");
    setTimeout(() => setMobileMenuOpen(false), 500); // Match the animation duration
  };

  const handleLogout = async () => {
    // toggle the modal
    handleClose();
    await logout();
  };

  const handleLogin = () => {
    handleClose();
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await checkUser(); // Fetch user authentication status
        setUser(user); // Update Zustand store with the user
      } catch (error) {
        console.error("Error checking user:", error);
      }
    };

    checkAuthStatus(); // Call the async function inside useEffect
  }, [setUser]); // Run once on mount

  return (
    <header className="absolute inset-x-0 top-0 z-50 lg:border-b-2 lg:px-40 border-text">
      <div className="relative">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <h1 className="text-text font-lora font-bold text-4xl">Bloom</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={handleOpen}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-text" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-text"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/pro"
              className="text-sm font-bold leading-6 text-primary"
            >
              Go Pro
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm font-semibold leading-6 text-text"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-text"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={handleClose}
          className={`fixed inset-0 z-50 lg:hidden ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel
            className={`fixed shadow-2xl inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-500 ${animation}`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <h1 className="text-text font-lora font-bold text-4xl">
                  Bloom
                </h1>
              </Link>
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 rounded-md p-2.5 text-text"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text font-lora hover:bg-accent"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/pro"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-primary font-lora hover:bg-accent"
                  >
                    Go Pro
                  </Link>
                  <ThemeToggler className="mt-3" />
                </div>
                <div className="py-6 w-100">
                  {user ? (
                    <Button
                      onClick={handleLogout}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold font-lora leading-7 text-text hover:bg-accent w-full text-start"
                    >
                      Log out
                    </Button>
                  ) : (
                    <Link
                      href="/login"
                      onClick={handleLogin}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold font-lora leading-7 text-text hover:bg-accent"
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
};

export default NavBar;
