export const HelpHover = () => {
  return (
    <div className='menu'>
      <div className='item'>
        <a href='#' className='link'>
          <span>Help</span>
        </a>
        <div className='submenu'>
          <div className='submenu-item'>
            <a href='#' className='submenu-link'>
              {' '}
              Development{' '}
            </a>
          </div>
          <div className='submenu-item'>
            <a href='#' className='submenu-link'>
              {' '}
              Design{' '}
            </a>
          </div>
          <div className='submenu-item'>
            <a href='#' className='submenu-link'>
              {' '}
              Marketing{' '}
            </a>
          </div>
          <div className='submenu-item'>
            <a href='#' className='submenu-link'>
              {' '}
              SEO{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
