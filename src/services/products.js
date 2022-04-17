import { collection, getDocs, where, query, getDoc, doc, limit } from 'firebase/firestore';
import { db } from '../utils/firebase';

/**
 * Returns list of products in Firebase
 * @param {string} categoryId 
 * @returns {array}
 */
export const getProducts = async (categoryId) => {
    const q = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId), limit(10)) : query(collection(db, 'items'), limit(10));
    const response = await getDocs(q);
    const data = response.docs.length ? response.docs[0].data() : '';
    if (!data) {
        throw new Error('No se encontraron productos.')
    }
    return response.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id,
        }
    ));
}
/**
 * Return product detail of given id in Firebase
 * @param {number} id 
 * @returns {object}
 */
export const getProduct = async (id) => {
    const queryDoc = doc(db, `items/${id}`);
    const response = await getDoc(queryDoc);
    const data = response.data();
    if (!data) {
        throw new Error('No se encontró el producto solicitado.')
    }
    return {
        ...data,
        id: response.id,
    }
}

/**
 * Returns list of categories in Firebase
 * @returns {array}
 */
export const getCategories = async () => {
    const query = collection(db, 'categories');
    const response = await getDocs(query);
    const data = response.docs[0].data();
    if (!data) {
        throw new Error('No se encontraron categorias.')
    }
    return response.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id,
        }
    ));
}