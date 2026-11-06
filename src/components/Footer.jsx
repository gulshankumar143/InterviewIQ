const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between dark:text-slate-300">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-base font-bold text-white shadow-lg shadow-indigo-500/25">
            IQ
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">
              InterviewIQ
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              AI-Powered Interviews
            </div>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400">
          © 2026 InterviewIQ. Smarter hiring starts here.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
