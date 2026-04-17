"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05070b] text-white">
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Application error
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Something went wrong.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/64">
            {error.message}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}

