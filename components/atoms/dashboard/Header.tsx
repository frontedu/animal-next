import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-4 bg-white border-b h-14">
      {" "}
      <button className="block btn btn-light md:hidden">
        {" "}
        <span className="sr-only">Menu</span>{" "}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>{" "}
      </button>
      <div className="hidden -ml-3 form-icon md:block w-96">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>{" "}
        <input
          className="border-0 form-input"
          placeholder="Localize de forma rápida..."
        />{" "}
      </div>
      <div className="flex items-center">
        <a href="#" className="flex text-gray-500">
          {" "}
          <svg
            className="shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>{" "}
        </a>

        <a href="#" className="ml-4 avatar avatar-sm">
          <Image
            src="/avatar.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </a>
      </div>
    </header>
  );
}
