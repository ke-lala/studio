import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";

const BilibiliIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1024 1024" fill="currentColor" {...props}>
      <path d="M784.9 128h-545.8c-52.8 0-96.2 43.4-96.2 96.2v545.8c0 52.8 43.4 96.2 96.2 96.2h545.8c52.8 0 96.2-43.4 96.2-96.2v-545.8c0-52.8-43.4-96.2-96.2-96.2zM433.4 532.5c-44.4 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5-36.1 80.5-80.5 80.5zM590.6 532.5c-44.4 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5-36.1 80.5-80.5 80.5zM711.7 768c-80 0-144.2-64.2-144.2-144.2h-111.4c0 80-64.2 144.2-144.2 144.2h-128v-64h128c44.2 0 80.2-35.9 80.2-80.2h223.6c0 44.2 35.9 80.2 80.2 80.2h128v64h-128z" />
    </svg>
);

const InfoLink = ({
    href,
    icon,
    title,
    subtitle,
    isExternal = true
}: {
    href: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    isExternal?: boolean;
}) => (
    <Button asChild variant="ghost" className="w-full justify-start h-auto p-3 text-left">
        <Link href={href} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : ""}>
            <div className="flex items-center gap-4 w-full">
                <span className="text-primary">{icon}</span>
                <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
                </div>
            </div>
        </Link>
    </Button>
);

const InfoText = ({
    icon,
    title,
    subtitle
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) => (
     <div className="flex items-center gap-4 w-full p-3">
        <span className="text-primary">{icon}</span>
        <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground break-all">{subtitle}</p>
        </div>
    </div>
);


export default function Home() {
  const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

  return (
    <main className="relative flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="fixed inset-0 z-[-1] bg-background" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://amashiro.com/wp-content/themes/amashiro_v0/assets/mp4/nacho_web.mp4"
      />
      
      <div className="z-10 w-full max-w-lg animate-in fade-in-0 slide-in-from-bottom-10 duration-700 ease-out">
        <Card className="bg-card/80 backdrop-blur-md border-border/60 shadow-2xl shadow-primary/10">
          <CardHeader className="items-center text-center p-6 sm:p-8">
            <Avatar className="w-28 h-28 border-4 border-accent/50">
              {avatarImage && (
                <AvatarImage src={avatarImage.imageUrl} alt="Zirui's avatar" data-ai-hint={avatarImage.imageHint} />
              )}
              <AvatarFallback className="text-4xl bg-primary/20 text-primary-foreground">ZL</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl sm:text-4xl font-headline mt-4">Zirui's Corner</CardTitle>
            <CardDescription className="mt-2 text-base text-accent">
              Welcome to my personal space.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
            <Separator />
            <div className="space-y-2">
                <InfoLink
                    href="https://twitter.com/ZiruiLi13176"
                    icon={<Twitter className="h-6 w-6" />}
                    title="X (Twitter)"
                    subtitle="@ZiruiLi13176"
                />
                <InfoLink
                    href="https://m.bilibili.com/space/3546690728495257?from=search"
                    icon={<BilibiliIcon className="h-6 w-6" />}
                    title="Bilibili"
                    subtitle="Personal Space"
                />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
                <h3 className="font-headline text-xl text-center text-foreground/90 px-3">Contact</h3>
                <InfoLink
                    href="mailto:zirui826@proton.me"
                    icon={<Mail className="h-6 w-6" />}
                    title="Proton Mail"
                    subtitle="zirui826@proton.me"
                    isExternal={false}
                />
                 <InfoLink
                    href="mailto:liziruikelala@gmail.com"
                    icon={<Mail className="h-6 w-6" />}
                    title="Gmail"
                    subtitle="liziruikelala@gmail.com"
                    isExternal={false}
                />
            </div>

            <Separator />
            
            <div className="space-y-2">
                <h3 className="font-headline text-xl text-center text-foreground/90 px-3">Secure & Private</h3>
                <InfoText
                    icon={<Mail className="h-6 w-6" />}
                    title="I2P Mail"
                    subtitle="lizirui@i2pmail.org"
                />
                 <InfoText
                    icon={<Mail className="h-6 w-6" />}
                    title="Darknet Mail (I2P)"
                    subtitle="lizirui@mail.i2p"
                />
                <InfoText
                    icon={<Globe className="h-6 w-6" />}
                    title="Darknet Website (I2P)"
                    subtitle="kelala123.i2p"
                />
                 <InfoLink
                    href="http://z22h2jqcoiqzolgrrry36gehr63wnx7wgev5n2iaop4yvqsdty4q.b32.i2p/"
                    icon={<Globe className="h-6 w-6" />}
                    title="B32 Address (I2P)"
                    subtitle="http://z22h2jqcoiqzolgrrry36gehr63wnx7wgev5n2iaop4yvqsdty4q.b32.i2p/"
                />
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}
