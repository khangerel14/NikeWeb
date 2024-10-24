import { Cart, Converse, Favourite, Jordan, Nike } from "@/images";

export const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center h-9 bg-gray-100">
        <div className="flex justify-between items-center w-[1344px] mx-auto">
          <div className="flex items-center gap-6">
            <button>
              <Jordan />
            </button>
            <button>
              <Converse />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button>Find a Store</button>
            <button>Help</button>
            <button>Join Us</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center w-[1344px] mx-auto h-14">
          <div>
            <button>
              <Nike />
            </button>
          </div>
          <div className="flex gap-5 text-md font-semibold items-center">
            <button>New</button>
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button>Jordan</button>
            <button>Sale</button>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="p-1 w-40 rounded-full border"
              placeholder="Search..."
            />
            <button>
              <Favourite />
            </button>
            <button>
              <Cart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
