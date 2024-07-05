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
                    <Image
                        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXUweGM3NjZqNDZyeWE0emppZTQyOHJhMDVmY2cycnN2eWt4bmd2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EIiJp9cQ3GeEU/giphy.gif"
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