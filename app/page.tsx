import Image from "next/image";
import ConvertPrice from '@/app/components/convert';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="m-auto text-center">
        <div className="text-3xl font-medium sm:text-6xl text-gray-400 m-auto">Convert mBTC to USD.</div>
        <ConvertPrice/>
      </div>
    </main>
  );
}
