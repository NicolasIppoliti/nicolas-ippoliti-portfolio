// Imports
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { useTranslation } from "next-i18next";

// Next link
import Link from "next/link";

// Next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { t } = useTranslation("nav");

  //  links
  const links = [
    { name: t("home"), path: "/", icon: <HiHome /> },
    { name: t("about"), path: "/about", icon: <HiUser /> },
    { name: t("work"), path: "/work", icon: <HiViewColumns /> },
    {
      name: t("testimonials"),
      path: "/testimonials",
      icon: <HiChatBubbleBottomCenterText />,
    },
    { name: t("contact"), path: "/contact", icon: <HiEnvelope /> },
  ];

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {links.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            {/* tooltip */}
            <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
