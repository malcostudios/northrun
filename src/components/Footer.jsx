function Footer() {
  return (
    <footer className="border-t border-neutral-900 px-6 py-10">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <p className="text-sm text-gray-500">
          © 2026 NORTHRUN. Find Your Distance.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">

          <a
            href="#"
            className="transition hover:text-white"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Strava
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer