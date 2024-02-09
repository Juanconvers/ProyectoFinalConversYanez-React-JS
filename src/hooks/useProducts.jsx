import { useState, useEffect } from "react";
// import {getProductsByCategory} from "../services"
import { collection, getDocs, doc, getDoc, query, where, getFirestore } from "firebase/firestore";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = (collectionName = "products") => {
    const [datosProducto, setDatosProducto] = useState([]);
      
    useEffect(() => {
      const db = getFirestore();

      const productsCollection = collection(db, collectionName);
      
      getDocs(productsCollection).then((snapshot) => {
        setDatosProducto(
          snapshot.docs.map((doc) => ({ id: doc, ...doc.data() }))
        );
        });
    }, []);
    
  return {datosProducto}
}

export const useGetProductsById = (id) => {
  const [datoProducto, setDatoProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "products", id)

    getDoc(docRef).then((doc) => {
      setDatoProducto({ id: doc.id, ...doc.data() })
    })
  }, [id]);
  
return {datoProducto};
};

export const useGetProductsByCategory = (category) => {
  const [datosProducto, setdatosProducto] = useState([]);
    useEffect(() => {
      getProductsByCategory(category)
      .then((response) => {
        setdatosProducto(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

return {datosProducto}
}

export const useGetCategories = (collectionName = 'categories') => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCategories(
        categories[0].categories
      );
    });
  }, []);
  return { categories };
};

