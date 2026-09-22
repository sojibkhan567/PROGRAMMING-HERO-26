import Counter from "./components/Counter";


export default function Home() {
  return (
    <div className="flex h-screen  w-full">
      <div className="my-auto mx-auto">
        <h1 className="text-7xl font-bold text-violet-800">Welcome to Next.js!</h1>
        <Counter></Counter>
      </div>
      
    </div>
    
  );
}
