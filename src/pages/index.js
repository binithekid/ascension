import Head from "next/head";
import logo from "../../public/AscensionLogo.png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
    };
    fetch("api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(true);
      });
  };

  return (
    <>
      <Head>
        <title>The Masonry Group</title>
        <meta name='description' content='Ascension London' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <h1 className='logo'>TMG</h1>
        <p className='subheading'>The Masonry Group</p>
        <p className='description'>
          We are currently undergoing maintenance, please check back soon
        </p>
      </main>
    </>
  );
}
