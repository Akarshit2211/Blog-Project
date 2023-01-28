import React from 'react';
import classes from './createBlog.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap';
import ImageUploadDiv from '../../Components/imageUploadDiv/imageUploadDiv';
import Input from '../../Components/input/input';
import Textarea from '../../Components/input/textarea';

const createBlog = () => {
    
    const changeHandler = (event) => {
        console.log(event);
    }
    

    return (
        <>
            <div className = {classes.createHeadingContainer}>
                <h1 className = {classes.createBlogHeading}>Create Blog</h1>
            </div>
            <Container className = {classes.container}>
                <Row className = {classes.row}>
                    <Row style = {{borderBottom: '1px solid rgb(0, 0, 0, 0.2)'}}>
                        <h2 className = {classes.blogTopicHeading}>Blog Topic</h2>
                    </Row>
                    <Row className = {classes.row}>
                        <Row>
                            <p className = {classes.selectImageHeading}>Select Image for Blog Heading</p>
                            <ImageUploadDiv />
                        </Row>
                        <Row>
                            <Input
                                label = "Topic of The Blog"
                                placeholder = "Blog Topic"
                                value = ""
                                changeHandler = {(event) => changeHandler(event)}
                            />
                        </Row>
                    </Row>
                    <Row className = {classes.row}>
                        <Textarea
                            label = "Description"
                            placeholder = "Description"
                            value = ""
                            changeHandler = {(event) => changeHandler(event)}
                        />
                    </Row>
                    <Row className = {classes.row}></Row>
                    <Row className = {classes.row}>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Row>
                <Row className = {classes.row}>

                </Row>
                <Row className = {classes.row}>

                </Row>
            </Container>
        </>
        
    )
}

export default createBlog;