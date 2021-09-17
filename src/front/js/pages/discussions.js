import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../../styles/discussions.scss";
import { DiscussionsCard } from "../component/DiscussionsCard";

export const Discussions = () => {
	const [modalShow, setModalShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { actions, store } = useContext(Context);

	const cardLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Discussions Board</h1>
					<p className="lead text-center text-color">
						Create, Read, Or Comment <br />A place to read discussions and chat with people.
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>

			{/* THIS IS THE CREATE BUTTON */}
			<div className="discussion-creation">
				<h2 className="discussion-article text-center">Discussions</h2>
				<Button className="ml-5" variant="primary" onClick={handleShow}>
					Create <i className="fas fa-plus" />
				</Button>
			</div>

			{/* THIS IS THE MODAL */}
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<div className="">
							<div>
								<h2 className="display-5 text-center">Create a discussion</h2>
							</div>
							<div>
								<i className="fas fa-user-circle fa-lg" />
								<span className="font-weight-lighter pl-2">{store.currentUser?.username}</span>{" "}
								{/*This is for the username while change when login */}
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <label className="lead" htmlFor="exampleFormControlTextarea1">
						Write something you want to discuss
					</label> */}
					<div>
						<textarea
							className="form-control border-0"
							id="exampleFormControlTextarea1"
							placeholder="What's on your mind?"
							rows="3"
						/>

						<div className="d-flex justify-content-between border-top">
							<div className="mt-4">
								<p className="lead">Add to Your Post</p>
							</div>
							<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Photo/Video</Tooltip>}>
								<div className="mt-4">
									<Button className="btn mt-3">
										<i className="fas fa-images"></i>
									</Button>
								</div>
							</OverlayTrigger>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-sm" variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button className="btn btn-sm" variant="primary">
						Post Discussion
					</Button>
				</Modal.Footer>
			</Modal>

			{/* This is how the cards are made */}
			<div className="row px-5 py-3 justify-content-center">
				{cardLoop.map(index => (
					<div className="justify-content-center p-1" key={index}>
						<DiscussionsCard />
					</div>
				))}
			</div>
		</>
	);
};
