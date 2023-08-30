const CardWrapper = ({ name, description }) => {
  return (
    <div
      style={{
        border: '1px solid red',
        padding: '1rem',
        borderRadius: '.5rem',
      }}
    >
      <hr />
      <h1>{name}</h1>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default CardWrapper;
