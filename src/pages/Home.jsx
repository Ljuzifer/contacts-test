import { useGetAllContactsQuery } from '../redux/contacts/operations';

export default function Home() {
  const { data, error, isLoading } = useGetAllContactsQuery();
  const x = data ? data.resources : [];
  console.log(x);

  return (
    <>
      <div className='container'>
        <ul>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : x.length > 0 ? (
            x.map(i => {
              const emailField = i.fields.email;
              return emailField && emailField.length > 0 ? (
                <li key={i.id}>{emailField[0].value}</li>
              ) : (
                <li key={i.id}>No email available</li>
              );
            })
          ) : (
            <>No contacts found</>
          )}
        </ul>
      </div>
    </>
  );
}
