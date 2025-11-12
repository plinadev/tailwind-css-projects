interface Story {
  id: number;
  name: string;
  image: string;
}

const stories: Story[] = [
  { id: 1, name: "Your Story", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Berman", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Wevell", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Wough", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Ovion", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Unessight", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Nowassained", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Foldishow", image: "https://i.pravatar.cc/150?img=8" },
];

function Stories() {
  return (
    <div className="flex space-x-3 p-6 border border-stone-200 rounded-sm overflow-x-scroll scrollbar-none bg-white">
      {stories.map((story) => (
        <div
          key={story.id}
          className="cursor-pointer flex flex-col items-center group"
        >
          <div className="relative">
            <img
              src={story.image}
              alt={story.name}
              className="h-16 w-16 rounded-full border-2 border-pink-500 p-[1.5px] group-hover:scale-110 transition-transform duration-200 ease-out"
            />
            {story.id === 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bottom-0 right-0 bg-white rounded-full text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </div>
          <p className="text-xs mt-2 w-16 truncate text-center">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
