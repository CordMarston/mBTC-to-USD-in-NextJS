import Image from "next/image";
import ConvertPrice from '@/app/components/Convert';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="m-auto text-center">
        <h1 className="text-3xl font-medium sm:text-6xl text-gray-400 m-auto">Convert mBTC to USD.</h1>
        <ConvertPrice/>
      </div>
    </main>
  );
}
