import React from 'react'
import { useParams } from 'react-router-dom'
import categoryItems from '../products_folder/categoryItems'

const CategoryScreen = () => {
  let { id } = useParams()
  const productCategory = categoryItems.find(
    (categoryItem) => categoryItem._id == id
  )
  console.log(productCategory)

  return <div></div>
}

export default CategoryScreen
