import React from 'react';
import classes from './input.module.css';
import Form from 'react-bootstrap/Form';

const input = (props) => {
  return (
    <>
        <Form.Label className = {classes.label}>{props.label}</Form.Label>
        <Form.Control
            className = {classes.control}
            type = "textarea"
            placeholder = {props.placeholder}
            value = {props.value}
            onChange = {props.changeHandler}
        />
    </>
  )
}

export default input