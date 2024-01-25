import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useGetCategories } from '../hooks/useProducts';
 

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");

  const { categories } = useGetCategories();

  const handleFieldReset = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setThumbnail("");
    setCategory("");
  };
  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };

    if(title === ""| description === ""|price === ""|thumbnail === ""| category === ""){
      return alert("Todos los campos son obligatorios")
    }

    const db = getFirestore();

    const productsCollection = collection(db, "products");
    addDoc(productsCollection, data).then(({ id }) => {
      alert("Producto creado exitosamente, id: ", id);
      handleFieldReset();
    });
  };

  return (
    <div>
      <h1>Crear Nuevo Producto</h1>
      <input type="text" placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder='Descripción' value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder='Precio' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder='Imagen' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)} >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Button onClick={handleCreateProduct}>Crear producto</Button>
    </div>

  )
}

export default CreateProduct