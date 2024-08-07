export default function ContactsProfile({ profile }) {
  const { avatar_url = '', fields } = profile;
  const {
    email,
    ['first name']: firstName = '',
    ['last name']: lastName = '',
  } = fields;

  const mail = email[0]?.value ?? '';
  const name = firstName[0]?.value ?? '';
  const surname = lastName[0]?.value ?? '';

  return (
    <div className='mb-4 flex rounded-lg bg-[#3b3c3d] p-4'>
      {/* <div className='flex'> */}
      <div className='mr-5 block h-[88px] min-w-[88px] overflow-hidden rounded-full'>
        <img
          src={avatar_url}
          alt='Contact`s avatar'
          width={88}
          height={88}
          className='h-[88px] w-[88px] object-cover'
        />
      </div>
      <div className='flex flex-col gap-5'>
        {name === '' && surname === '' ? (
          <p>No any name</p>
        ) : (
          <div className='flex flex-wrap gap-2'>
            <p>{name}</p>
            <p>{surname}</p>
          </div>
        )}

        {mail ? (
          <a
            href={`mailto:${mail}`}
            target='_blank'
            rel='noopener noreferrer nofollow'
            aria-label='Link to contact`s email'
          >
            <b>{mail}</b>
          </a>
        ) : (
          <b>No email</b>
        )}
      </div>
    </div>
  );
}

ContactsProfile.propTypes;
