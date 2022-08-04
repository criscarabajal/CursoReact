import { initializeApp } from 'firebase/app';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhzB-HxXpxOnqWs2jeEo7tCQfNpzlXXp0",
  authDomain: "curso-react---cart-shop.firebaseapp.com",
  projectId: "curso-react---cart-shop",
  storageBucket: "curso-react---cart-shop.appspot.com",
  messagingSenderId: "614548965292",
  appId: "1:614548965292:web:6c2b43388a5688aa385c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db,'Products');
getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
});

export const getProducts = async (categoryId) => {
    if (categoryId) {
        getProductsByCategory(categoryId);
    } else {
        return await getAllProducts();
    }
};

export const getProductById = async (productId) => {
    if (!productId) throw new Error("Missing productId");
  
    return (await getDoc(doc(db, "items", productId))).data();
};

export const getProductsByCategory = async (categoryId) => {
    const products = collection(db, 'Products');
    const q = query(products, where('category', '==', categoryId));
    return await getDocs(q);
}

export const getAllProducts = async () => {
    const products = await getDocs(db, 'Products');
    const q = query(products);
    return await getDocs(q);
};


