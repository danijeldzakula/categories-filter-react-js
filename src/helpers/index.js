export function camelCaseToWord(string) {
  return string.replace(/^([A-Z])/g, ' $1').replace(/([A-Z][a-z]+)/g, ' $1')
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function display(direction) {
  switch (direction) {
    case 'top':
    case 'bottom':
      return 'block'
    case 'right':
    case 'left':
      return 'inline-block'
    default:
      return 'inherit'
  }
}

export const isValid = {
  isEmail: (str) => {
    const pattern = new RegExp(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)
    return pattern.test(str)
  },
  isNotEmpty: (str) => {
    const pattern = new RegExp(/\S+/)
    return pattern.test(str)
  },
  isNotEmptyObject: (obj) => {
    if (obj && Object.keys(obj).length > 0) {
      return true
    }

    return false
  },
  isNumber: (str) => {
    const pattern = new RegExp(/^\d+\.?\d*$/)
    return pattern.test(str)
  },
  isSame: (str1, str2) => {
    return str1 === str2
  },
  isNotSame: (str1, str2) => {
    return str1 !== str2
  },
  isTrue: (str) => {
    if (str === 'true') {
      return true
    }
    return str
  },
  isFalse: (str) => {
    if (str === 'false') {
      return false
    }
    return str
  },
  isBool: (str) => {
    if (str === 'true') {
      return true
    }
    if (str === 'false') {
      return false
    }
    return str
  },
  isString: (str) => {
    return str.toString()
  },
}

export function convertOfType(str) {
  let value = str.toString()

  if (isValid.isNumber(value)) {
    return Number(value)
  }

  if (isValid.isTrue(value) === true) {
    return isValid.isBool(value)
  }

  if (isValid.isFalse(value) === false) {
    return isValid.isBool(value)
  }

  return value
}

export function checkFormFields(form) {
  let isValid = false

  if (form.name === '') {
    console.log('This field is required - name field:', form)
  }

  return isValid
}
