import { db } from 'boot/firebase';
import {
  addDoc,
  getDocs,
  collection,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

export async function createPost(data) {
  // debugger;
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

export async function getPosts(params) {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  // const posts = [];
  // querySnapshot.forEach(docs => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(docs.id, ' => ', docs.data());
  //   posts.push(docs.data());
  // });
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  console.log(posts);
  return posts;
}
