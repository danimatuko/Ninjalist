import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Ninjalist </h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quos
        explicabo beatae, assumenda itaque saepe. Nesciunt praesentium veritatis
        eos officiis.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel
        consectetur, molestiae mollitia ducimus odio deserunt amet laborum est
        dolorem. Recusandae ea tenetur ullam mollitia voluptatem, magnam
        laboriosam in nobis!
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}> See ninja Listing</a>
      </Link>
    </>
  );
}
