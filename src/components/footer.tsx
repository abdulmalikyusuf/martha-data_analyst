import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const supportLinks = [
  {
    label: "Help Center",
    href: "#",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "How Telex works",
    href: "/how-telex-works",
  },
  {
    label: "Waiting list",
    href: "#",
  },
  {
    label: "Pricing Experience",
    href: "/pricing",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/policy" },
  { label: "Terms and Condition", href: "#" },
];

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

function Footer() {
  return (
    <footer className="externalPageFooterBg px-6 py-10 flex flex-col gap-14 text-[#fafafa] sm:px-24 sm:py-12">
      <section className="flex flex-wrap-reverse justify-between gap-y-10 sm:gap-y-20 lg:gap-y-0 lg:flex-nowrap">
        <div className="hidden sm:block">
          <Link href={"/"} className="flex items-center gap-1">
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4436 3.87232C16.8283 2.83589 15.676 1.96737 14.3526 1.37758C13.0229 0.78499 11.473 0.451998 10.0131 0.526385L10.0543 1.33428C11.3716 1.26715 12.7951 1.56909 14.0233 2.11647C15.2578 2.66664 16.248 3.44313 16.7481 4.28531L17.4436 3.87232ZM15.6625 5.08392C15.1914 4.2904 14.3161 3.63459 13.3235 3.19221C12.3245 2.74702 11.1591 2.49613 10.0583 2.55222L10.0995 3.36011C11.0577 3.31128 12.0967 3.53112 12.9942 3.93109C13.8979 4.33387 14.6111 4.89764 14.9669 5.49691L15.6625 5.08392ZM21.8131 12.1894L19.1001 11.1011C18.5046 10.8667 17.6353 10.2043 17.2492 9.69434L15.7447 7.70756C12.8244 3.85087 7.31686 3.08994 3.47079 6.00225C-0.377854 8.93324 -1.14683 14.4301 1.77353 18.2868L3.26991 20.263C3.65608 20.773 4.0579 21.7893 4.13276 22.418L4.44467 25.3245C4.5751 26.446 5.1366 27.4083 6.00271 27.956C6.87686 28.5144 7.99156 28.6399 9.0507 28.2725C10.4878 27.7861 11.855 27.1854 13.1872 26.4943C13.2536 26.4607 13.3181 26.4244 13.3825 26.3882L13.3826 26.3881L13.3827 26.388C13.4471 26.3518 13.5116 26.3155 13.578 26.2819C13.7425 26.1907 13.9177 26.0915 14.0928 25.9922L14.0931 25.9921L14.0938 25.9917C14.4022 25.825 14.7025 25.6477 15.0055 25.4518C15.7231 25.0087 16.4272 24.5256 17.1072 24.0108C17.7765 23.5039 18.4217 22.9652 19.0322 22.4027C19.2605 22.1964 19.4887 21.9901 19.6983 21.7812L19.6985 21.7811L19.6985 21.781L19.6986 21.781L19.6986 21.7809C19.8737 21.615 20.0487 21.449 20.2157 21.2724C20.3245 21.1733 20.4253 21.0636 20.526 20.9539L20.5261 20.9538C21.5713 19.8615 22.5253 18.671 23.3831 17.4197C23.992 16.524 24.1523 15.4331 23.8544 14.4216C23.5485 13.3995 22.8038 12.5927 21.8131 12.1894ZM6.94774 15.6645L11.1444 9.3925C11.2965 9.16525 11.6506 9.31378 11.595 9.58151L10.7845 13.4857C10.7524 13.6402 10.8704 13.7852 11.0282 13.7852H13.4066C13.6121 13.7852 13.7291 14.0203 13.6051 14.1842L8.70361 20.6672C8.53994 20.8837 8.19721 20.7192 8.26376 20.456L9.29934 16.3618C9.33911 16.2045 9.22025 16.0518 9.05803 16.0518H7.15461C6.95562 16.0518 6.83708 15.8299 6.94774 15.6645ZM12.633 30.2273C13.966 29.6218 14.6467 28.0977 14.4381 26.4945C14.2748 26.598 14.1217 26.6968 13.9687 26.7956C13.8414 26.883 13.7043 26.9616 13.5659 27.041C13.4993 27.0791 13.4324 27.1175 13.366 27.1571C12.8193 27.4787 12.2514 27.7805 11.6669 28.046C11.0722 28.3162 10.4609 28.5499 9.84889 28.7548C9.59177 28.8423 9.32914 28.9177 9.07677 28.9884C9.00412 29.0077 8.93495 29.0285 8.86706 29.0491L8.86703 29.0491C8.79047 29.0722 8.71553 29.0948 8.63905 29.1141C9.00858 29.5463 9.47514 29.9199 9.96862 30.1348C10.8468 30.5703 11.8229 30.5952 12.633 30.2273Z"
                fill="white"
              />
            </svg>
            <span className="text-2xl text-white font-poetsenOne">Telex</span>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">Support</h1>
          <article className="flex flex-col gap-4">
            {supportLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="text-lg hover:underline transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </article>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold">Legal</h1>
          <article className="flex flex-col gap-4">
            {legalLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="text-lg hover:underline transition-all"
                >
                  {item.label}
                </Link>
              );
            })}
          </article>
        </div>
        <form className="flex flex-col gap-4 w-full sm:w-fit">
          <h1 className="text-lg font-semibold leading-[49px] -tracking-[1px]">
            Sign Up For Newsletter
          </h1>
          <div className="flex justify-between items-center w-full h-14 p-2 self-stretch bg-white sm:rounded-2xl sm:w-[325px]">
            <input
              type="email"
              name="newsletter"
              placeholder="Johndoe@example.com"
              className={`${plusJakartaSans.className} w-52 h-full p-2 bg-transparent border-none placeholder:text-[#a0a0a0] text-black focus:outline-none`}
            />
            <button
              type="submit"
              className="px-4 py-2 h-full flex items-center justify-center rounded-[8px] externalPageFooterBg text-sm font-medium leading-5 hover:bg-[#4e2bad] transition-all"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-3 lg:flex-row lg:justify-between items-center">
        <div className="flex gap-6">
          <Link href="/" className="hover:underline transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0291 2C14.1545 2.00186 14.7248 2.00782 15.2176 2.02249L15.4117 2.02883C15.6359 2.0368 15.8571 2.0468 16.1238 2.0593C17.1879 2.10847 17.9138 2.2768 18.5513 2.5243C19.2104 2.77847 19.7671 3.1218 20.3229 3.67764C20.8779 4.23347 21.2213 4.7918 21.4763 5.4493C21.7229 6.08597 21.8913 6.81264 21.9413 7.8768C21.9532 8.14347 21.9628 8.36467 21.9707 8.58891L21.977 8.783C21.9916 9.27574 21.9983 9.84613 22.0004 10.9716L22.0012 11.7172C22.0013 11.8083 22.0013 11.9023 22.0013 11.9993L22.0012 12.2814L22.0006 13.0271C21.9987 14.1525 21.9928 14.7229 21.9781 15.2156L21.9717 15.4097C21.9638 15.634 21.9538 15.8552 21.9413 16.1218C21.8921 17.186 21.7229 17.9118 21.4763 18.5493C21.2221 19.2085 20.8779 19.7652 20.3229 20.321C19.7671 20.876 19.2079 21.2193 18.5513 21.4743C17.9138 21.721 17.1879 21.8893 16.1238 21.9393C15.8571 21.9512 15.6359 21.9609 15.4117 21.9687L15.2176 21.975C14.7248 21.9897 14.1545 21.9963 13.0291 21.9985L12.2834 21.9993C12.1923 21.9993 12.0983 21.9993 12.0013 21.9993H11.7192L10.9735 21.9986C9.84807 21.9968 9.27769 21.9908 8.78494 21.9761L8.59086 21.9698C8.36661 21.9618 8.14541 21.9518 7.87875 21.9393C6.81458 21.8902 6.08958 21.721 5.45125 21.4743C4.79291 21.2202 4.23541 20.876 3.67958 20.321C3.12375 19.7652 2.78125 19.206 2.52625 18.5493C2.27875 17.9118 2.11125 17.186 2.06125 16.1218C2.04937 15.8552 2.03968 15.634 2.03183 15.4097L2.02554 15.2156C2.01091 14.7229 2.00424 14.1525 2.00208 13.0271L2.00195 10.9716C2.00381 9.84613 2.00976 9.27574 2.02443 8.783L2.03078 8.58891C2.03875 8.36467 2.04875 8.14347 2.06125 7.8768C2.11041 6.8118 2.27875 6.0868 2.52625 5.4493C2.78041 4.79097 3.12375 4.23347 3.67958 3.67764C4.23541 3.1218 4.79375 2.7793 5.45125 2.5243C6.08875 2.2768 6.81375 2.1093 7.87875 2.0593C8.14541 2.04743 8.36661 2.03774 8.59086 2.02989L8.78494 2.0236C9.27769 2.00896 9.84807 2.00229 10.9735 2.00013L13.0291 2ZM12.0013 6.9993C9.23835 6.9993 7.00125 9.23883 7.00125 11.9993C7.00125 14.7622 9.24078 16.9993 12.0013 16.9993C14.7642 16.9993 17.0013 14.7598 17.0013 11.9993C17.0013 9.2364 14.7617 6.9993 12.0013 6.9993ZM12.0013 8.9993C13.6582 8.9993 15.0013 10.342 15.0013 11.9993C15.0013 13.6562 13.6586 14.9993 12.0013 14.9993C10.3444 14.9993 9.00125 13.6567 9.00125 11.9993C9.00125 10.3424 10.3439 8.9993 12.0013 8.9993ZM17.2513 5.4993C16.562 5.4993 16.0013 6.05921 16.0013 6.74845C16.0013 7.4377 16.5612 7.99847 17.2513 7.99847C17.9405 7.99847 18.5013 7.43857 18.5013 6.74845C18.5013 6.05921 17.9396 5.49844 17.2513 5.4993Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:underline transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:underline transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <aside className="flex items-center gap-[6px]">
          <Link
            href="/"
            className="text-sm font-medium hover:underline transition-all"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:underline transition-all"
          >
            Terms of Use
          </Link>
        </aside>
      </section>
    </footer>
  );
}
export default Footer;
