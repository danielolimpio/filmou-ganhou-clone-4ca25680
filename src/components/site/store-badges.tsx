import qrAppStore from "@/assets/qr-appstore.png.asset.json";
import qrGooglePlay from "@/assets/qr-googleplay.png.asset.json";

const APP_STORE_URL = "https://apps.apple.com/us/app/minute-data/id6760918280";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.bakerdata.minute";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.25 3.02-.99.99-2.17 1.56-3.31 1.47a3.4 3.4 0 0 1-.02-.4c0-1.1.5-2.27 1.31-3.06.85-.85 2.13-1.47 3.2-1.51.03.16.07.32.07.48zM20.9 17.06c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.53-4.12 3.55-1.54.01-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.06-1.79-4.05-3.36C.35 15.83-.05 10.7 1.65 8c1.2-1.92 3.1-3.04 4.88-3.04 1.82 0 2.96 1 4.46 1 1.46 0 2.35-1 4.45-1 1.59 0 3.27.87 4.47 2.36-3.93 2.15-3.29 7.77.99 9.74z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-8 w-8 shrink-0" aria-hidden="true">
      <path fill="#00D2FF" d="M47 21.5C42.6 26.1 40 33.3 40 42.6v426.8c0 9.3 2.6 16.5 7 21.1l1.4 1.4 239.1-239.1v-5.6L48.4 20.1 47 21.5z" />
      <path fill="#FFCE00" d="M367 331.9l-79.5-79.6v-5.6l79.6-79.6 1.8 1 94.3 53.6c26.9 15.3 26.9 40.3 0 55.6l-94.3 53.6-2 1z" />
      <path fill="#FF3A44" d="M368.8 330.9L287.5 249.6 47 490.1c8.9 9.4 23.5 10.5 40 1.2l281.8-160.4z" />
      <path fill="#00F076" d="M368.8 168.3L87 8C70.5-1.4 55.9-.2 47 9.2l240.5 240.4 81.3-81.3z" />
    </svg>
  );
}

function StoreBadge({
  href,
  icon,
  small,
  big,
  qr,
  qrAlt,
}: {
  href: string;
  icon: React.ReactNode;
  small: string;
  big: string;
  qr: string;
  qrAlt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 rounded-2xl bg-[#111111] px-5 py-4 text-white transition-transform hover:scale-[1.01]"
    >
      <span className="flex items-center gap-4">
        {icon}
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-normal opacity-90">{small}</span>
          <span className="text-lg font-bold tracking-tight">{big}</span>
        </span>
      </span>
      <img
        src={qr}
        alt={qrAlt}
        loading="lazy"
        className="h-[76px] w-[76px] rounded-md bg-white p-1"
      />
    </a>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex max-w-xl flex-col gap-4">
        <StoreBadge
          href={APP_STORE_URL}
          icon={<AppleIcon />}
          small="Baixar na"
          big="App Store"
          qr={qrAppStore.url}
          qrAlt="QR code para baixar o app Minute na App Store"
        />
        <StoreBadge
          href={GOOGLE_PLAY_URL}
          icon={<GooglePlayIcon />}
          small="Disponível no"
          big="Google Play"
          qr={qrGooglePlay.url}
          qrAlt="QR code para baixar o app Minute no Google Play"
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Escaneie para baixar</p>
    </div>
  );
}
