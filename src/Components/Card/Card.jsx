

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
