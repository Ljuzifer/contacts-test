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
    <div className='mb-4 flex rounded-lg bg-[#3b3c3d] p-4 xl:mx-auto xl:w-[880px]'>
      <div className='mr-5 block h-[122px] min-w-[122px] overflow-hidden rounded-full'>
        <img
          src={avatar_url}
          alt='Contact`s avatar'
          width={122}
          height={122}
          className='h-[122px] w-[122px] object-cover'
        />
      </div>
      <div className='flex flex-col gap-5 tracking-wider xl:text-lg xl:font-semibold'>
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
