import { GetServerSideProps } from "next";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface OpenGraphProps {
  title: string;
}

export default function OpenGraphImage({ title }: OpenGraphProps) {
  return (
    <div
      w-full
      style={{
        display: "flex",
        height: "250px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a202c",
        color: "#38a169",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <h1 className="justify-center items-center heading bg-gradient-to-r from-green-400 via-white to-white-100 text-transparent bg-clip-text"
        style={{
            WebkitTextStroke: '1px green',
          }}
      >
        <Image alt="ADTify Logo" src="/favicon.ico" width={100} height={100} onContextMenu={(e) => e.preventDefault()} />
        Tify
        <Icon className="ml-2 h-12 w-12 text-green-400" icon="mdi:spotify" />
      </h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.params!;

  if (!title || typeof title !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title,
    },
  };
};