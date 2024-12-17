export const HelpHover = () => {
  return (
    <div className='menu'>
      <div className='item'>
        <button className='link'>
          <span>Help</span>
        </button>
        <div className='submenu'>
          <div className='submenu-item'>
            <button className='submenu-link'>Development</button>
          </div>
          <div className='submenu-item'>
            <button className='submenu-link'> Design </button>
          </div>
          <div className='submenu-item'>
            <button className='submenu-link'> Marketing </button>
          </div>
          <div className='submenu-item'>
            <button className='submenu-link'> SEO </button>
          </div>
        </div>
      </div>
    </div>
  );
};
