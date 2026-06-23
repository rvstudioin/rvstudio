import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const PAGE_SIZE = 9;

export async function fetchPortfolioByCategory({ category, page = 1, limit: lim = PAGE_SIZE }) {
  const ref = collection(db, 'portfolio');
  let q;

  console.log('Fetching portfolio for category:', category, 'page:', page);
  if (category === 'all') {
    q = query(ref, orderBy('createdAt', 'desc'), limit(lim + 1));
  } else {
    q = query(ref, where('category', '==', category), orderBy('createdAt', 'desc'), limit(lim + 1));
  }

  const snap = await getDocs(q);
  const docs = snap.docs.slice(0, lim).map(d => ({ id: d.id, ...d.data() }));
  const hasMore = snap.docs.length > lim;

  return { items: docs, hasMore };
}
