import PropTypes from "prop-types";

const ContactCard = ({ picture, name }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-2   px-2 py-2  border-r border-r-white hover:border-r-primary-shade duration-500 hover:shadow-sm cursor-pointer  group">
      <img
        className="h-12 w-12 rounded-md object-cover"
        src={picture}
        alt="Contact's Profile"
      />
      <div className="font-medium group-hover:text-primary-shade duration-500 text-dark-shade ">
        {name}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactCard;
