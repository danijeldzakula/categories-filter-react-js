import React from 'react'

const initialData = [
  {
    id: 'fksdlkfjsdjfkdsjfsdklfjdsf',
    type: 'Color',
    options: [
      { _id: 'dasddjksahasdjkhaskdjsjkp', value: 'gold' },
      { _id: 'fsdfusdfdfdidppqwppwpwwpp', value: 'red' },
      { _id: 'dfkdsfdkfjdkfeokosdfsdppa', value: 'blue' },
      { _id: 'dfjksdfjsdhfjdhfjdhfdjjjj', value: 'green' },
    ],
  },
  {
    id: 'dfsdfjksdjfsdhfsdfjksdhfd',
    type: 'Size',
    options: [
      { _id: 'kdfaskdjskdjsdkjskdsdksdk', value: 'XXL' },
      { _id: 'fdsfdsfjhdjfhdjfhdpqpqppq', value: 'XL' },
      { _id: 'dfhhdjfhjdhfjdoewopsjkdsa', value: 'L' },
      { _id: 'fjsdfjhdfhdsfjdfjdfjdfjdj', value: 'M' },
      { _id: 'fsdfsdfsdfwejyuiouiouioiw', value: 'S' },
    ],
  },
  {
    id: 'sdfjksdfsdkfjdkfjdkfjeops',
    type: 'Unit',
    options: [
      { _id: 'sdkfjkdfkdjfkdjfdkwpwpwpp', value: 'cm' },
      { _id: 'sdjkfsdjfufdjkfsdfjkdkjfk', value: 'mm' },
      { _id: 'sdfsdjfhqopwioqwiqooqoooa', value: 'm' },
    ],
  },
  {
    id: 'sdfjksdfsdkfjdkfjdkfjeops',
    type: 'Material',
    options: [
      { _id: 'dfjksdhfdsjkfhdfhwpwpaops', value: 'Textil' },
      { _id: 'sdfjsdfdhfjhweiweaapspapa', value: 'Svila' },
    ],
  },
]

export default function Home() {
  const generateCombineOutput = (originalData, dataIndex, optionIndex) => {
    let option = {}
    let result = []
    let subResult = []

    option = {
      id: originalData[dataIndex].id,
      type: originalData[dataIndex].type,
      choice: originalData[dataIndex].options[optionIndex],
    }

    if (dataIndex === originalData.length - 1) {
      result = {
        isLast: true,
        options: [option],
      }

      return result
    }

    for (let i = 0; i < originalData[dataIndex + 1].options.length; i++) {
      subResult = generateCombineOutput(originalData, dataIndex + 1, i)

      if (subResult.isLast) {
        subResult.options.unshift(option)
        result.push(subResult.options)
      } else {
        result = result.concat(subResult)
      }
    }

    if (!subResult.isLast) {
      for (let j = 0; j < result.length; j++) {
        result[j].unshift(option)
      }
    }

    return result
  }

  const getCombine = (originalData) => {
    if (!originalData) return

    let result = []

    for (let i = 0; i < originalData[0].options.length; i++) {
      const subResult = generateCombineOutput(originalData, 0, i)

      if (subResult.isLast) {
        result.push(subResult.options)
      } else {
        result = result.concat(subResult)
      }
    }

    let output = []

    for (let i = 0; i < result.length; i++) {
      output.push({
        variant_id: i + 1,
        options: result[i],
      })
    }

    return output
  }

  const variants = getCombine(initialData)

  console.log(variants)

  return (
    <section className="section">
      <div className="container">
        <h1>Home</h1>
      </div>
    </section>
  )
}


// BLOCK 
import React from 'react'

const initialData = [
  {
    id: 'fksdlkfjsdjfkdsjfsdklfjdsf',
    type: 'Color',
    options: [
      { _id: 'dasddjksahasdjkhaskdjsjkp', value: 'gold' },
      { _id: 'fsdfusdfdfdidppqwppwpwwpp', value: 'red' },
      { _id: 'dfkdsfdkfjdkfeokosdfsdppa', value: 'blue' },
      { _id: 'dfjksdfjsdhfjdhfjdhfdjjjj', value: 'green' },
    ],
  },
  {
    id: 'dfsdfjksdjfsdhfsdfjksdhfd',
    type: 'Size',
    options: [
      { _id: 'kdfaskdjskdjsdkjskdsdksdk', value: 'XXL' },
      { _id: 'fdsfdsfjhdjfhdjfhdpqpqppq', value: 'XL' },
      { _id: 'dfhhdjfhjdhfjdoewopsjkdsa', value: 'L' },
      { _id: 'fjsdfjhdfhdsfjdfjdfjdfjdj', value: 'M' },
      { _id: 'fsdfsdfsdfwejyuiouiouioiw', value: 'S' },
    ],
  },
  {
    id: 'sdfjksdfsdkfjdkfjdkfjeops',
    type: 'Unit',
    options: [
      { _id: 'sdkfjkdfkdjfkdjfdkwpwpwpp', value: 'cm' },
      { _id: 'sdjkfsdjfufdjkfsdfjkdkjfk', value: 'mm' },
      { _id: 'sdfsdjfhqopwioqwiqooqoooa', value: 'm' },
    ],
  },
  {
    id: 'sdfjksdfsdkfjdkfjdkfjeops',
    type: 'Material',
    options: [
      { _id: 'dfjksdhfdsjkfhdfhwpwpaops', value: 'Textil' },
      { _id: 'sdfjsdfdhfjhweiweaapspapa', value: 'Svila' },
    ],
  },
]

export default function Home() {
  const generateOutput = (originalData, dataIndex, optionIndex) => {
    let option = {}
    let result = []
    let subResult = []

    option = {
      id: originalData[dataIndex].id,
      type: originalData[dataIndex].type,
      choice: originalData[dataIndex].options[optionIndex],
    }

    if (dataIndex === originalData.length - 1) {
      result = {
        isLast: true,
        options: [option],
      }

      return result
    }

    for (let i = 0; i < originalData[dataIndex + 1].options.length; i++) {
      subResult = generateOutput(originalData, dataIndex + 1, i)

      if (subResult.isLast) {
        subResult.options.unshift(option)
        result.push(subResult.options)
      } else {
        result = result.concat(subResult)
      }
    }

    if (!subResult.isLast) {
      for (let j = 0; j < result.length; j++) {
        result[j].unshift(option)
      }
    }

    return result
  }

  const getOutput = (originalData) => {
    if (!originalData) return

    let result = []

    for (let i = 0; i < originalData[0].options.length; i++) {
      const subResult = generateOutput(originalData, 0, i)

      if (subResult.isLast) {
        result.push(subResult.options)
      } else {
        result = result.concat(subResult)
      }
    }

    let output = []

    for (let i = 0; i < result.length; i++) {
      output.push({
        variant_id: i + 1,
        options: result[i],
      })
    }

    return output
  }

  const variants = getOutput(initialData)

  console.log(variants)

  return (
    <section className="section">
      <div className="container">
        <h1>Home</h1>
      </div>
    </section>
  )
}
