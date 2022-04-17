import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore";
import { db } from '../utils/firebase';

/**
 * Checks stocks of items in cart and creates an order in Firebase
 * @param {object} buyer 
 * @param {array} cart 
 * @param {number} itemsAmount 
 * @param {function} setOrderId 
 * @param {function} clear
 */
export const generateOrder = async (buyer, cart, itemsAmount, setOrderId, clear) => {
    const order = {
        buyer,
        items: cart,
        total: itemsAmount(),
        date: Timestamp.fromDate(new Date())
    };

    const outOfStock = [];

    const itemsId = cart.map(item => item.id);

    const q = query(collection(db, "items"), where(documentId(), 'in', itemsId));
    const items = await getDocs(q);
    const batch = writeBatch(db);

    items.docs.forEach(doc => {
        const item = cart.find(elem => elem.id === doc.id)

        if (doc.data().stock >= item.qty) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.qty
            })
        } else {
            outOfStock.push(item);
        }
    })

    if (outOfStock.length) {
        clear();
        throw new Error('Hay productos sin stock.');
    }

    addDoc(collection(db, "orders"), order)
        .then(doc => {
            batch.commit();
            setOrderId(doc.id);
            clear();
        })
}