import { useState, useEffect } from "react";
// import {getProductsByCategory} from "../services"
import { collection, getDocs, doc, getDoc, query, where, getFirestore } from "firebase/firestore";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = (collectionName = 'products') => {
  const [datosProducto, setDatosProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setDatosProducto(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return { datosProducto }
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

  return { datoProducto };
};

export const useGetProductsByCategory = (nombreCategoria) => {
  const [datosProducto, setdatosProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('category', '==', nombreCategoria));
    getDocs(q).then((snapshot) => {
      setdatosProducto(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [nombreCategoria]);

  return { datosProducto }
}

export const useGetProductsCart = (elementosCarrito) => {
  const [datosProducto, setDatosProducto] = useState([]);
  useEffect(() => {
    if (elementosCarrito.length !== 0) {
      const elementosId = elementosCarrito.map((item) => item.id);
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      const q = query(productsCollection, where('title', 'in', elementosId));
      getDocs(q).then((snapshot) => {
        if (snapshot.empty) {
          // console.log("NO ha encontrado resultados");
          setDatosProducto(['nodata']);
        } else {
          // console.log("Si encontro resultados");
          setDatosProducto(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              quantity: elementosCarrito.find((item) => item.id == doc.data().title).quantity,
              ...doc.data()
            })));
        }
      });
    } else {
      // console.log("elementosCarrito esta vacio");
      setDatosProducto(['nodata']);
    }
  }, [elementosCarrito]);

  return { datosProducto }
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

