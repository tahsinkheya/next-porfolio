import { contact } from "../constants";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {contact.map((name, i) => (
        <>
          <a
            type="button"
            href={name.link}
            key={i}
            className="text-white focus:ring-4 focus:outline-none0 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:text-base"
          >
            {name.icon}
          </a>
          <br />
        </>
      ))}
      <div class="vl"></div>
    </div>
  );
};

export default Sidebar;
