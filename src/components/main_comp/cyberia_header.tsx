import { RetroGrid } from "@/components/magicui/retro-grid";

export const Header: React.FC = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Cyberia Project
      </span>
           <span className="mt-4 text-center text-xl text-white">

        Yeni internet çağının yeni Web 4 projesi
      </span>
 
      <RetroGrid />
    </div>
  );
};
