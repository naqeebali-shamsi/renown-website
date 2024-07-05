import Image from "next/image";
import Head from "next/head";

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Not Found" />
            </Head>
            <div className="hero">
                <div className="container">
                    <h1>Page not found!</h1>
                    <Image
                        src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </>
    )

}

export default Custom404;