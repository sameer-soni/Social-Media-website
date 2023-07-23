import { classNames } from "../../utils/Helpers";
import { navigation } from "../../constants/Constants";
import UserProfileCard from "./UserProfileCard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // Sidebar container with styles for width, background color, and other properties.
    <div className="bg-main-shade hidden w-64 overflow-y-auto md:block overflow-x-hidden  drop-shadow-2xl">
      <div className="flex w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Component to display user profile card */}
          <UserProfileCard />
          <div className="flex flex-1 flex-col overflow-y-auto pb-4">
            <nav className="mt-5 flex-1" aria-label="Sidebar">
              <div className="space-y-1 py-2 w-full">
                {/* Navigation links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    // Dynamic class names based on link properties and hover effects.
                    className={classNames(
                      "text-text-color border-l-4 border-main-shade hover:border-primary-shade hover:text-primary-shade group flex items-center py-2 text-sm font-medium transition duration-500 ease-in-out px-5"
                    )}
                  >
                    {/* Icon for the link */}
                    <item.icon
                      className="text-text-color group-hover:text-primary-shade transition duration-500 ease-in-out mr-3 h-6 w-6"
                      aria-hidden="true"
                    />
                    {/* Link name */}
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
