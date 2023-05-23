import { contact } from "../constants";
const Footer = () => {
  return (
    <div>
      {" "}
      <div class="flex md:order-2 bg-slate-800 justify-center">
        {contact.map((name, i) => (
          <a
            type="button"
            href={name.link}
            key={i}
            className="text-white focus:ring-4 focus:outline-none0 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:text-base"
          >
            {name.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
