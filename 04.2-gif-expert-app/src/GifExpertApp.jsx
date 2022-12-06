/* eslint-disable no-undef */
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = newCategory => {
    const categoryIsIncluded = categories.find(
      category => category.toLowerCase() === newCategory.toLowerCase()
    )
    if (categoryIsIncluded) return alert('La categoría ya existe en la lista')
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map(category => (
        <GifGrid key={category} category={['one punch', {}]} />
      ))}
    </>
  )
}
