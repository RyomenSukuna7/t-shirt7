"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Details({ params }) {
    const select = useSelector((data) => data.user);
    const router = useRouter();

    return (
        <>
            <Button
                onClick={() => router.push("/")}
                variant="contained"
                style={{ backgroundColor: "black" }}
            >
                Back to home
            </Button>
            {select.map((datas) =>
                datas.id === params.productInfo ? (
                    <div key={datas.id}>
                        <div
                            id="imagesData"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginTop: "6vh",
                            }}
                        >
                            <Image
                                src={`/${datas.name}`}
                                width={500}
                                height={500}
                                alt="Image not loaded"
                            />
                        </div>
                        <div
                            id="rupess"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <h1>699</h1>
                        </div>
                    </div>
                ) : null
            )}
        </>
    );
}
