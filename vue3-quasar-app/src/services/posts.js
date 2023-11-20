import { db } from 'boot/firebase';
import { addDoc, collection } from 'firebase/firestore';

export async function createPost(data) {
  debugger;
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createAt: serverTimestamp(),
  });
  return docRef.id;
}
