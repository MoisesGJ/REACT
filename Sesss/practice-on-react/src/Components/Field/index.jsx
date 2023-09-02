const Field = ({ handler }) => {
  return (
    <>
      <input type="text" onChange={handler} className="w-100" />
      <input type="text" />
    </>
  );
};

export default Field;
