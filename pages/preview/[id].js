import { useRouter } from "next/router";
        import Image from "next/image";
        import Link from "next/link";
        export default function photo({ photo, location, name, date }) {
            const router = useRouter();
            if (!router.isFallback && !photo) {
                return <ErrorPage statusCode={404} />;
            }
            return (
                <div>
                    <div className="Imagecontainer">
                        <Link className="homeButton" href="/">
                            <a className="homeButton">
                                <button className="button"> Home </button>
                            </a>
                        </Link>
                    </div>
                    <div className="Imagecontainer">
                        {router.isFallback ? (
                            <div>Loading…</div>
                        ) : (
                            <>
                                <Image width={960} priority height={540} src={photo} />
                            </>
                        )}
                    </div>
                    <div className="Imagecontainer">Name : {name}</div>
                    <div className="Imagecontainer">Location {location}</div>
                    <div className="Imagecontainer">Date: {date}</div>
                    <div className="Imagecontainer">
                        <Link className="homeButton" href="/">
                            <a className="homeButton">
                                <button className="button"> Back </button>
                            </a>
                        </Link>
                    </div>
                </div>
            );
        }
        export async function getStaticProps({ params }) {
            const photoid = params.id;
            const results = await fetch(`http://localhost:1337/api/images/${photoid}?populate=*`);
            const previews = await results.json();
            const photo = await previews.data.attributes.img.data.attributes.url;
            const name = await previews.data.attributes.name;
            const location = previews.data.attributes.location;
            const date = await previews.data.attributes.createdAt.toString();
            return {
                props: { photo, name, location, date },
            };
        }
        export async function getStaticPaths() {
            const results = await fetch("http://localhost:1337/api/images?populate=*");
            const previews = await results.json();
            return {
                paths:
                    previews?.data.map((pic) => ({
                        params: { id: pic.id.toString() },
                    })) || [],
                fallback: true,
            };
        }