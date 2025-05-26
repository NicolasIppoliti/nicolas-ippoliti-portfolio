// Next translations
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// toast
import toast from "react-hot-toast";

const Contact = () => {
  const { t } = useTranslation("contact");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        subject: e.target[2].value,
        message: e.target[3].value,
      }),
    });

    if (res.ok) {
      toast.success(t("toastSuccess"));
      e.target.reset();
    } else {
      toast.error(t("toastError"));
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center h2"
          >
            {t("textPart1")}{" "}
            <span className="text-accent">{t("textPart2")}</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder={t("name")} className="input" />
              <input type="text" placeholder={t("email")} className="input" />
            </div>
            <input type="text" placeholder={t("subject")} className="input" />
            <textarea
              placeholder={t("message")}
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t("button")}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
}
