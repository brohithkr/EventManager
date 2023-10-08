import clubs from "@/app/DB/clubs.json";
import CircularImage from "@/components/CircularImage";
import Carousel from "@/components/carousel";
import events from "@/app/DB/events.json";
import Navbar from "@/components/header/Navbar";
import RoundedImage from "@/components/RoundedImage";
import Link from 'next/link'; 

const spoc = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className="text-3xl mt-5 mb-7">Current CLubs</h1>
            <Carousel cards={clubs}/>
            </div>
        <div className="mt-10 ml-4">
            <Link href="/edit"> {/* Link to the club management page */}
            <a class="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500" href="{{ route('process.create') }}">
  <span class="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300 group-hover:hidden">Add Item</span>
  <span class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
    <svg class="svg w-8 text-white" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
      </svg>
  </span>
</a>

      </Link>
      </div>
        </div>
    )
}

export default spoc;