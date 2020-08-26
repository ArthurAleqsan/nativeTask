export const checkInvalidFields = form => {
    const tempArr = [];
    for (const key in form) {
        if (!form[key]) {
            tempArr.push(key);
        }
    }
    return tempArr;
};

export const checkUserName = username => {
    let isValid = false;
    const str = username.trim();
    if (str.includes(' ')) {
      const splitedText = str.split(' ');
      const firstName = splitedText[0];
      const lastName = splitedText[splitedText.length - 1];
        if(firstName && lastName) {
            isValid = true;
        }
    }
    return isValid;
};
