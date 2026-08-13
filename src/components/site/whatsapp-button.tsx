const WHATSAPP_NUMBER = "5512981408992";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsappButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-1">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o suporte no WhatsApp: +55 12 98251-9116"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          viewBox="0 0 32 32"
          width="34"
          height="34"
          aria-hidden="true"
          fill="#FFFFFF"
        >
          <path d="M16.03 4c-6.6 0-11.96 5.36-11.96 11.96 0 2.11.55 4.17 1.6 5.99L4 28.5l6.72-1.62a11.9 11.9 0 0 0 5.31 1.25h.01c6.6 0 11.96-5.36 11.96-11.96C28 9.36 22.63 4 16.03 4zm0 21.72h-.01c-1.7 0-3.37-.46-4.83-1.32l-.35-.21-3.99.96 1.06-3.89-.23-.4a9.83 9.83 0 0 1-1.51-5.24c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.47-4.45 9.9-9.95 9.9zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
      <span className="text-[11px] font-medium text-muted-foreground">Suporte</span>
    </div>
  );
}
