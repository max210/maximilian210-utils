export const mobileCheck = (value) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
export const EmailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)