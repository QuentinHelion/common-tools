import DivArray from "../../cummon/DivArray/DivArray";
import ButtonLink from "../../cummon/ButtonLink/ButtonLink";
import React from "react";
import Container from "react-bootstrap/Container";

/* === Images === */
import lping from "../../images/l-ping.png";

function Home() {
    return (
        <Container className="text-center">
            <h1 className="mb-4">Welcome to CommonTools !</h1>
            <p>
                Horum adventum praedocti speculationibus fidis rectores militum
                tessera data sollemni armatos omnes celeri eduxere procursu et agiliter
                praeterito Calycadni fluminis ponte, cuius undarum magnitudo murorum
                adluit turres, in speciem locavere pugnandi. neque tamen exiluit
                quisquam nec permissus est congredi. formidabatur enim flagrans vesania
                manus et superior numero et ruitura sine respectu salutis in ferrum.
            </p>
            <hr className="m-5"/>
            <h2>Our tools</h2>
            <Container className="d-flex justify-content-around my-5">
                <DivArray link="/ping" imgRef={lping} />
            </Container>

            <hr className="m-5"/>

            <Container className="text-center mb-5">
                <h2 className="mb-4">About Us</h2>
                <p>
                    Horum adventum praedocti speculationibus fidis rectores militum
                    tessera data sollemni armatos omnes celeri eduxere procursu et agiliter
                    praeterito Calycadni fluminis ponte, cuius undarum magnitudo murorum
                    adluit turres, in speciem locavere pugnandi. neque tamen exiluit
                    quisquam nec permissus est congredi. formidabatur enim flagrans vesania
                    manus et superior numero et ruitura sine respectu salutis in ferrum.
                    <br/>
                    Ardeo, mihi credite, Patres conscripti (id quod vosmet de me existimatis
                    et facitis ipsi) incredibili quodam amore patriae, qui me amor et
                    subvenire olim impendentibus periculis maximis cum dimicatione capitis,
                    et rursum, cum omnia tela undique esse intenta in patriam viderem,
                    subire coegit atque excipere unum pro universis. Hic me meus in rem
                    publicam animus pristinus ac perennis cum C. Caesare reducit, reconciliat,
                    restituit in gratiam.
                </p>
                <ButtonLink inner="Learn more..." link="/about"/>
            </Container>
        </Container>
    );
}

export default Home;