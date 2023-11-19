import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updatePassword,
  updateEmail,
} from 'firebase/auth';
import { auth } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felix';

// 로그인 구글
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);
  console.log('user::', result.user);
}

export async function logout() {
  await signOut(auth);
}

export async function signUpWithEmail({ email, password, nickname }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: nickname,
    // photoURL: `${DEFAULT_PHOTO_URL}${user.uid}`,
    photoURL: generateDefaultPhotoURL(user.uid),
  });

  console.log('user@ : ', user);
  sendVerificationEmail();
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

export async function signInWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function sendRasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}

export async function updateUserProfile(displayName) {
  await updateProfile(auth.currentUser, displayName);
}

export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}
export async function updateUserEmail(email) {
  await updateEmail(auth.currentUser, email);
}
