import Head from "next/head";
import { useState } from "react";
import Gallery from "../../components/ImageDetail";
import styles from "../../styles/Home.module.css";
export default function Home({ stuff }) {
    const [photos, setPhotos] = useState(stuff);
    const [search, setSearch] = useState("");
    return (
        <div className={styles.container}>
            <Head>
                <title>Photo Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.fade}>
                <div className={styles.gridContainer}>
                    {photos &&
                    photos.data.map((detail) => (
                        <Gallery
                        key={detail.id}
                        thumbnailUrl={detail.attributes.img.data.attributes.formats.thumbnail.url}
                        title={detail.attributes.name}
                        id={detail.id}
                        />
                    ))}
                </div>
                </div>
            </main>
        </div>
      );
    }
export async function getStaticProps() {
    const results = await fetch("http://localhost:1337/api/images?populate=*");
    const stuff = await results.json();
    return {
        props: { stuff },
    };
}