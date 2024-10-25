type Ulti = {
  title: string;
  btn: string[];
};

const data: Ulti[] = [
  {
    title: 'Resources',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Help',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Company',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
  {
    title: 'Promotions & Discounts',
    btn: [
      'Gift Cards',
      'Find a Store',
      'Membership',
      'Nike x NBA',
      'Nike Journal',
      'Site Feedback',
    ],
  },
];

export const Footer = () => {
  return (
    <div className='w-[1344px] flex flex-col mx-auto'>
      <hr />
      <div className='flex items-center'>
        {data.map((e: Ulti, index: number) => {
          return (
            <div key={index} className='flex flex-col gap-5 h-96'>
              <button>{e.title}</button>
              <div className='flex flex-col gap-2'>
                {e.btn.map((buttonText, btnIndex) => (
                  <button key={btnIndex}>{buttonText}</button>
                ))}
              </div>
            </div>
          );
        })}
        <div>
          <button>United States</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
