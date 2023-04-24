import createElement from "../helper/createElement.js";

const createHeader = (parent) => {
  const container = createElement('div', {
    className: 'container header__container',
  })
  parent.append(container);

  const headerLogoLink = createElement('a', {
    href: '#',
    className: 'header__logo-link',
  })

  const logo = createElement('img', {
    src: 'img/logo-pharm.png',
    alt: 'old glass bottle with paper inside',
    className: 'header__logo',
  });
  headerLogoLink.append(logo);

  const headerSubTitle = createElement('h2', {
    className: 'header__subtitle',
    textContent: 'Категории',
  })

  const headerBtn = createElement('button', {
    className: 'header__btn',
    textContent: 'Добавить категорию',
  })

  container.append(headerLogoLink, headerSubTitle, headerBtn);

  const updateHeaderSubTitle = (title) => {
    headerSubTitle.textContent = title;
  }

  return { headerLogoLink, headerBtn, updateHeaderSubTitle }
}

export default createHeader;
