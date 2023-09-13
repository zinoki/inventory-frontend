import React, { useState } from 'react'
import ProductForm from '../../components/productForm/ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, selectIsLoading } from '../../redux/features/product/productSlice'
import { useNavigate } from 'react-router-dom'


const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: ""
}

const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [product, setProduct] = useState(initialState)
  const [productImage, setProductImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const [description, setDescription] = useState('')

  const isLoading = useSelector(selectIsLoading)

  const {name, category, price, quantity} = product

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct({...product, [name]: value})
  }

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))

  }

  const generateSKU = (category) => {
    const letters = category.slice(0, 3).toUpperCase()
    const number = Date.now()
    const sku = letters + '-' + number
    return sku
  }

  const saveProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("sku",generateSKU(category))
    formData.append("category", category)
    formData.append("quantity", quantity)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("image", productImage)

    console.log(...formData)

    await dispatch(createProduct(formData))
    navigate('/dashboard')
  }

  return (
    <div>
      <h3 className='--mt'>Add New Product</h3>
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription} 
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
        />
    </div>
  )
}

export default AddProduct