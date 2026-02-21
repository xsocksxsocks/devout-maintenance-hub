import { Construction, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          <Construction className="h-10 w-10 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-4xl tracking-tight text-foreground md:text-5xl">
          Wir bauen um
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-muted-foreground">
          Unsere Website wird gerade überarbeitet. Wir sind bald mit einem neuen Auftritt für Sie da&nbsp;– vielen Dank für Ihre Geduld!
        </p>

        {/* Divider */}
        <div className="mx-auto mb-10 h-px w-16 bg-accent" />

        {/* Company Info */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="text-base font-semibold text-foreground">
            Devout Investment GmbH
          </p>
          <p>Geschäftsführerin: Joana Lim</p>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            <span>Simrockstraße 88, 40235 Düsseldorf</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-accent" />
            <a
              href="mailto:devout-investment@mein.gmx"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              devout-investment@mein.gmx
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
