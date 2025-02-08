import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

let notifications = [
  {
    name: "Event 1",
    description: "small description about the event and its topic,rsvp and theme",
    time: "January 20, 2025",
    icon: "🧑‍💻",
    color: "#00C9A7",
  },
  {
    name: "Event 2",
    description: "The event focuses on exploring cutting-edge technological innovations and their applications in solving real-world problems. Industry experts, innovators, and thought leaders will gather to discuss advancements.",
    time: "January 20, 2025",
    icon: "🖥️",
    color: "#FFB800",
  },
  {
    name: "Event 3",
    description: "small description about the event and its topic,rsvp and theme. memoization might not always yield significant performance improvements.",
    time: "January 20, 2025",
    icon: "📚",
    color: "#FF3D71",
  },

];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export default AnimatedListDemo;