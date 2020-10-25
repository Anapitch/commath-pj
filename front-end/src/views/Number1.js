import React, { useState } from "react";
import {
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    Card,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";

function B2s() {
    const navigate = useNavigate();
    const [bit2string, setBit2string] = useState();
    const [result, setResult] = useState("");
    const generate = () => {
        getB2s(bit2string).then((res) => {
            setResult(res);
        });
    };

    const back = () => {
        navigate("/");
    };

    return ( <
        div class = "body" >


        <
        Row style = {
            { marginTop: "15%" } } >
        <
        Col sm = "2" > < /Col> <
        Col sm = "8" >
        <
        div className = "text-center" >
        <
        h2 style = {
            { marginTop: "20px", marginRight: "20px" } } >
        Basic Computing <
        /h2> <
        /div> <
        div className = "text-center" >
        <
        p > exam: 01111000000001010000000000000000 < /p> <
        /div> <
        div >
        <
        Row >
        <
        Col sm = "2" > < /Col> <
        Col sm = "8" >
        <
        Card style = {
            { alignItems: "center" } } >
        <
        Input style = {
            {
                marginTop: "20px",
                marginBottom: "20px",
                width: 500,
            }
        }
        value = { bit2string }
        type = "text"
        name = "bit2string"
        id = "bit2string"
        onChange = {
            (e) => setBit2string(e.target.value) }
        /> <
        h4 > ผลลั พธ์: { result } < /h4> <
        Row style = {
            { marginBottom: "30px" } } >
        <
        Col sm = "8" >
        <
        Button onClick = { generate }
        color = "primary" >
        <
        div style = {
            { width: 300 } } >
        <
        h3 style = {
            { marginTop: "10px" } } > คำนวณ < /h3> <
        /div> <
        /Button> <
        /Col> <
        Col sm = "4" >
        <
        Button onClick = { back }
        color = "secondary" >
        <
        div style = {
            { width: 100 } } >
        <
        h3 style = {
            { marginTop: "10px" } } > กลั บ < /h3> <
        /div> <
        /Button> <
        /Col> <
        /Row> <
        /Card> <
        /Col> <
        Col sm = "2" > < /Col> <
        /Row> <
        /div> <
        /Col> <
        Col sm = "2" > < /Col> <
        /Row>

        <
        /div>
    );
}

export default B2s;