export default function AllListUsers({ AllUsers }) {
  return (
    <>
      <h2 className="text-center">Lista de usuarios</h2>

      <ul className="list-group">
        {AllUsers.map((user) => {
          const { name, login, picture } = user;

          return (
            <li
              key={login.uuid}
              className="list-group-item d-flex justify-content-start align-items-center gap-5"
            >
              <img src={picture.thumbnail} className="rounded-circle" />
              <p className="fw-bold">{`${name.first} ${name.last}`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
