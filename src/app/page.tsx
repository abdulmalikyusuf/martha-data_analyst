import Image from "next/image";
import Image1 from "@/images/wordpressplugins_0 1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-5 md:gap-9 max-w-5xl w-full mx-auto py-10 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
      <div className="text-[#121127]">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] font-bold text-[#121127]">
          Transform Your Workflow with Advanced Channel Management Software
          Boost
        </h4>
        <p className="text-lg sm:text-xl md:text-[26px] mt-1 md:mt-2">
          Your Productivity with Smart Channel Management Solutions
        </p>
      </div>
      <div className="">
        <p className="text-[#121127B8]">
          In today’s fast-paced technological environment, professionals are
          often overwhelmed by a relentless stream of notifications. This
          constant barrage can lead to distraction, decreased productivity, and
          a heightened risk of missing critical issues. Telex is a cutting-edge
          channel monitoring software designed to address these challenges
          directly. By intelligently organizing and routing notifications, Telex
          helps you manage your alerts more effectively. Here’s how it can
          enhance your workflow:
        </p>
      </div>
      <div className="">
        <Image src={Image1} alt="" className="" />
      </div>
      <div className="text-[#121127B8]">
        <p className="text-lg md:text-[22px] leading-[180%] font-bold">
          Key Benefits:{" "}
        </p>
        <ul className="md:text-xl list-disc ml-4 md:ml-6 lg:ml-10">
          <li className="">
            Efficient Prioritization: Telex categorizes alerts based on urgency,
            allowing you to focus on high-priority issues first while less
            critical notifications are handled separately.
          </li>
          <li className="">
            Reduced Information Clutter: Notifications are neatly organized into
            designated channels, minimizing distractions and helping you
            maintain focus on what truly matters.
          </li>
          <li className="">
            Improved Issue Response: Critical issues are highlighted and brought
            to your attention promptly, ensuring swift resolution and bolstering
            overall operational efficiency and security.
          </li>
        </ul>
        <p className="mt-6 md:mt-10">
          Don’t let alert overload impede your productivity. Experience the
          benefits of streamlined notification management with Telex. Sign up
          for a free trial today and discover how effective channel monitoring
          can transform your daily operations. Embrace a more organized and
          productive workday with Telex!
        </p>
      </div>
    </main>
  );
}
