const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw(Error(
      `Please check class names. Class ${element} does not exsist`
    )
    }
  };

  const 
