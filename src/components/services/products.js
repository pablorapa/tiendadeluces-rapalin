import { collection, getDocs, where, query, getDoc, doc, limit } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const getProducts = async (categoryId) => {
    const q = categoryId ? query(collection(db, 'items'), where('category', '==', categoryId), limit(10)) : query(collection(db, 'items'), limit(10));
    const response = await getDocs(q);
    return response.docs.map(doc => (
        {
        ...doc.data(),
        id: doc.id,
        }
    ));
}

export const getProduct = async (id) => {
    const queryDoc = doc(db, `items/${id}`);
    const response = await getDoc(queryDoc);
    return {
        ...response.data(),
        id: response.id,
    }
}

export const getCategories = async () => {
    const query = collection(db, 'categories');
    const response = await getDocs(query);
    return response.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id,
        }
    ));
}